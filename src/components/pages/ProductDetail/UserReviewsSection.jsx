import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

import { getReviewsByProduct } from '../../../api/review';
import { useEffect, useState } from 'react';
import { List, Avatar, Rate, Spin, Empty } from 'antd';

export const UserReviewsSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!productId) return;
    setLoading(true);
    getReviewsByProduct(productId)
      .then(res => setReviews(res.data))
      .catch(() => setReviews([]))
      .finally(() => setLoading(false));
  }, [productId]);
  return (
    <div style={{ marginTop: 40, marginBottom: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 24 }}>Đánh giá sản phẩm</h2>
      {loading ? (
        <Spin />
      ) : reviews.length === 0 ? (
        <Empty description="Chưa có đánh giá nào cho sản phẩm này." />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={reviews}
          renderItem={item => (
            <List.Item style={{ background: '#fff', borderRadius: 8, marginBottom: 16, boxShadow: '0 2px 8px #f0f1f2' }}>
              <List.Item.Meta
                avatar={<Avatar src={item.reviewerImageUrl || undefined}>{item.reviewerName?.[0] || 'U'}</Avatar>}
                title={<span>{item.reviewerName || 'Người dùng ẩn danh'} <Rate disabled defaultValue={item.rating} style={{ fontSize: 16, marginLeft: 8 }}/></span>}
                description={<>
                  <div style={{ margin: '6px 0' }}>{item.comment}</div>
                  {item.imgUrl && <img src={item.imgUrl} alt="review" style={{ maxWidth: 120, borderRadius: 6, marginTop: 6 }} />}
                  <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{item.createdAt}</div>
                </>}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};
