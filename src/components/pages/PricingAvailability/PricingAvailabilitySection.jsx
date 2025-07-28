import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Input, Progress, Row, Switch, Typography } from "antd";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinatesFromAddress } from "../../../service/geocoding";
import { setLocation } from "../../redux/productCreateSlice";
import { useNavigate } from "react-router-dom";

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
  const { location } = useSelector((state) => state.productCreate);
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
      if (data?.display_name) {
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
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          width: "99vw",
          background: "#f9fafb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: 32,
            borderRadius: 12,
            boxShadow:
              "0px 4px 10px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.05)",
            width: "100%",
            maxWidth: 800,
            boxSizing: "border-box",
          }}
        >
          <Row justify="space-between" style={{ marginBottom: 12 }}>
            <Col>
              <Title level={4}>List Your Item</Title>
            </Col>
            <Col>
              <Text type="secondary">Step 3 of 4</Text>
            </Col>
          </Row>
          <Progress percent={75} showInfo={false} strokeColor="#10b981" />
          <Title level={4} style={{ marginTop: 24 }}>
            Pricing & Availability
          </Title>
          <div style={{ marginTop: 24 }}>
            <Text>Pickup Location</Text>
            <Input.Search
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              onSearch={handleSearchAddress}
              enterButton="Find"
            />
          </div>
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
            <Button icon={<LeftOutlined />} onClick={() => navigate(-1)}>
              Back
            </Button>
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
      </div>
      <Footer />
    </>
  );
};

export default PricingAvailabilitySection;
