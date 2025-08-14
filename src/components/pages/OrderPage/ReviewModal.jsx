import React, { useState, useEffect } from "react";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import Rate from "antd/es/rate";
import Upload from "antd/es/upload/Upload";
import Button from "antd/es/button";
import { message } from "antd";
import { createReview } from "../../../api/review.js";
import { getCurrentUser } from "../../../api/user";

const ReviewModal = ({ visible, onClose, productId, onReviewSuccess }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Lấy thông tin người dùng hiện tại khi mở modal
  useEffect(() => {
    if (visible) {
      const loadCurrentUser = async () => {
        try {
          console.log('Bắt đầu lấy thông tin người dùng...');
          const token = localStorage.getItem('token');
          console.log('Token từ localStorage:', token ? 'Có' : 'Không có');
          
          const response = await getCurrentUser();
          console.log('Phản hồi từ API getCurrentUser:', response);
          
          if (response && response.data && response.data.data) {
            console.log('Dữ liệu người dùng nhận được:', response.data.data);
            setCurrentUser(response.data.data);
          } else {
            console.error('Dữ liệu người dùng không hợp lệ:', response);
            throw new Error('Dữ liệu người dùng không hợp lệ');
          }
        } catch (error) {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
          message.error('Không thể lấy thông tin người dùng. Vui lòng đăng nhập lại!');
          onClose();
        }
      };
      loadCurrentUser();
    } else {
      // Reset state khi đóng modal
      setCurrentUser(null);
    }
  }, [visible, onClose]);

  const handleOk = async () => {
    console.log('Bắt đầu xử lý gửi đánh giá...');
    console.log('Trạng thái currentUser:', currentUser);
    console.log('productId:', productId);
    
    if (!currentUser || !currentUser.userId) {
      console.error('Lỗi: Không tìm thấy thông tin người dùng hoặc thiếu userId', {
        currentUser,
        hasUserId: !!currentUser?.userId,
        hasToken: !!localStorage.getItem('token')
      });
      message.error('Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại!');
      return;
    }
    
    if (!productId) {
      console.error('Lỗi: Không tìm thấy ID sản phẩm để đánh giá');
      message.error('Không tìm thấy thông tin sản phẩm. Vui lòng thử lại sau!');
      return;
    }

    setLoading(true);
    let imgUrl = "";
    // Nếu có ảnh, upload lên cloud hoặc lấy url từ fileList
    if (fileList.length > 0) {
      // Giả lập lấy url, thực tế nên upload lên cloud (Firebase, S3, ...)
      imgUrl = fileList[0].url || "";
    }
    
    console.log('Gửi đánh giá với dữ liệu:', { 
      productId, 
      reviewerId: currentUser.userId, 
      rating, 
      hasImage: !!imgUrl 
    });

    try {
      await createReview({
        comment,
        productId,
        reviewerId: currentUser.userId, // Sử dụng userId từ currentUser
        rating,
        imgUrl,
      });
      message.success("Đánh giá thành công!");
      setComment("");
      setRating(5);
      setFileList([]);
      onReviewSuccess && onReviewSuccess();
      onClose();
    } catch (err) {
      console.error('Lỗi khi gửi đánh giá:', err);
      message.error(err?.response?.data?.message || "Đánh giá thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Đánh giá sản phẩm"
      visible={visible}
      onOk={handleOk}
      onCancel={onClose}
      okText="Gửi đánh giá"
      cancelText="Hủy"
      confirmLoading={loading}
    >
      <div style={{ marginBottom: 16 }}>
        <Rate value={rating} onChange={setRating} />
      </div>
      <Input.TextArea
        rows={4}
        placeholder="Nhập bình luận của bạn..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Upload
        fileList={fileList}
        onChange={({ fileList }) => setFileList(fileList)}
        beforeUpload={() => false}
        listType="picture"
        maxCount={1}
      >
        <Button>Chọn ảnh</Button>
      </Upload>
    </Modal>
  );
};

export default ReviewModal;
