import React, { useState, useEffect } from "react";
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Input,
  Layout,
  Progress,
  Row,
  Switch,
  Typography,
} from "antd";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinatesFromAddress } from "../../../service/geocoding";
import {
  setRentalPrice,
  setDeposit,
  setLocation,
} from "../../redux/productCreateSlice";
import { useNavigate } from "react-router-dom";


const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;


const LocationPicker = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const PricingAvailabilitySection = () => {
  const dispatch = useDispatch();
  const { rentalPrice, deposit, location } = useSelector(
    (state) => state.productCreate
  );
  const navigate = useNavigate();

  const [addressInput, setAddressInput] = useState(location.address || "");

  const handleSearchAddress = async () => {
    const coords = await getCoordinatesFromAddress(addressInput);
    if (coords) {
      dispatch(setLocation({ ...coords, address: addressInput }));
    }
  };

  const handleMapClick = async (latlng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
      );
      const data = await response.json();
      if (data && data.display_name) {
        dispatch(
          setLocation({
            lat: latlng.lat,
            lng: latlng.lng,
            address: data.display_name,
          })
        );
        setAddressInput(data.display_name);
      }
    } catch (error) {
      console.error("Reverse geocoding error:", error);
    }
  };

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      <Header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <Row align="middle" gutter={12}>
          <Col>
            <Avatar
              src="/img/ShareDoo.png"
              size={48}
              shape="circle"
              style={{ backgroundColor: "#fff" }}
            />
          </Col>
          <Col>
            <Text strong style={{ fontSize: "20px", color: "#1f1f1f" }}>
              ShareDoo
            </Text>
          </Col>
        </Row>
        <CloseOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
      </Header>

      <Content style={{ padding: "40px 20px", flex: 1 }}>
        <Row justify="center">
          <Col xs={24} sm={20} md={16} lg={12}>
            <Row justify="space-between" style={{ marginBottom: 12 }}>
              <Col>
                <Title level={4}>List Your Item</Title>
              </Col>
              <Col>
                <Text type="secondary">Step 3 of 4</Text>
              </Col>
            </Row>
            <Progress percent={75} showInfo={false} strokeColor="#10b981" />

            <div
              style={{
                background: "#ffffff",
                padding: 24,
                borderRadius: 12,
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                marginTop: 24,
              }}
            >
              <Title level={4}>Pricing & Availability</Title>

              <Text style={{ display: "block", marginBottom: 8 }}>
                Rental Price
              </Text>
              <Input
                prefix="$"
                placeholder="Enter price per day"
                value={rentalPrice}
                onChange={(e) => dispatch(setRentalPrice(e.target.value))}
              />

              <Row
                justify="space-between"
                align="middle"
                style={{ marginTop: 24 }}
              >
                <Col>
                  <Text>Security Deposit</Text>
                </Col>
                <Col>
                  <Text type="secondary">Required</Text> <Switch />
                </Col>
              </Row>
              <Input
                prefix="$"
                placeholder="Enter deposit amount"
                style={{ marginTop: 8 }}
                value={deposit}
                onChange={(e) => dispatch(setDeposit(e.target.value))}
              />

              {/* Location input */}
              <div style={{ marginTop: 24 }}>
                <Text>Pickup Location</Text>
                <Input.Search
                  value={addressInput}
                  onChange={(e) => setAddressInput(e.target.value)}
                  onSearch={handleSearchAddress}
                  enterButton="Find"
                />
              </div>

              {/* Map */}
              <div
                style={{
                  marginTop: 16,
                  height: 300,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <MapContainer
                  center={
                    location.lat && location.lng
                      ? [location.lat, location.lng]
                      : [10.762622, 106.660172]
                  }
                  zoom={15}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {location.lat && location.lng && (
                    <Marker
                      position={[location.lat, location.lng]}
                      icon={markerIcon}
                    />
                  )}
                  <LocationPicker onMapClick={handleMapClick} />
                </MapContainer>
              </div>

              <Row justify="space-between" style={{ marginTop: 24 }}>
                <Button icon={<LeftOutlined />}>Back</Button>
                <Button
                  icon={<RightOutlined />}
                  type="primary"
                  style={{
                    backgroundColor: "#10b981",
                    borderColor: "#10b981",
                  }}
                  onClick={() => navigate("/ReviewPublish")}
                >
                  Next
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Content>

      <Footer
        style={{
          backgroundColor: "#1f2937",
          color: "#9ca3af",
          padding: "40px 0",
        }}
      >
        <Row justify="center" gutter={[32, 16]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              About
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>About Us</Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              How It Works
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>Careers</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Support
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Help Center
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Safety Center
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Contact Us
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Legal
            </Title>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Terms of Service
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Privacy Policy
            </Text>
            <Text style={{ display: "block", color: "#9ca3af" }}>
              Cookie Policy
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Follow Us
            </Title>
            <div style={{ display: "flex", gap: "16px", marginTop: 8 }}>
              <FacebookOutlined
                style={{ fontSize: "20px", color: "#9ca3af" }}
              />
              <TwitterOutlined style={{ fontSize: "20px", color: "#9ca3af" }} />
              <InstagramOutlined
                style={{ fontSize: "20px", color: "#9ca3af" }}
              />
            </div>
          </Col>
        </Row>
        <Row
          justify="center"
          style={{
            marginTop: "32px",
            borderTop: "1px solid #374151",
            paddingTop: "16px",
          }}
        >
          <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
            © 2025 ShareDoo. All rights reserved.
          </Text>
        </Row>
      </Footer>
    </Layout>
  );
};

export default PricingAvailabilitySection;
