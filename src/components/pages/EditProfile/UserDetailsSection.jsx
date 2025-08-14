// Full working version of UserDetailsSection with improved UI and validation

import React, { useState, useEffect } from "react";
import {
  Button,
  Col,
  Input,
  Row,
  Avatar,
  message,
  Typography,
  Card,
} from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";

import { getCurrentUser, updateUser } from "../../../api/user";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinatesFromAddress } from "../../../service/geocoding";

const { Title, Text } = Typography;

const LocationPicker = ({ onMapClick }) => {
  useMapEvents({
    click(e) {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const UserDetailsSection = () => {
  const [formData, setFormData] = useState({
    userId: null,
    name: "",
    email: "",
    address: "",
    imageUrl: "",
    lat: null,
    lng: null,
  });

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        const user = res.data.data;
        setFormData((prev) => ({
          ...prev,
          userId: user.userId,
          name: user.name || "",
          email: user.email || "",
          address: user.address || "",
          imageUrl: user.imageUrl || "",
        }));
      })
      .catch(() => {
        setFormData((prev) => ({ ...prev, userId: null }));
      });
  }, []);

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        message.error("File size must not exceed 2MB.");
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleDeleteImage = () => {
    setFile(null);
    setPreviewUrl(null);
    setFormData({ ...formData, imageUrl: "" });
    message.info("Image removed.");
  };

  const handleSearchAddress = async () => {
    try {
      const coords = await getCoordinatesFromAddress(formData.address);
      if (coords) {
        setFormData({ ...formData, lat: coords.lat, lng: coords.lng });
        message.success("Address found!");
      } else {
        message.error("Address not found!");
      }
    } catch {
      message.error("Failed to find address!");
    }
  };

  const handleMapClick = async (latlng) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`
      );
      const data = await res.json();
      if (data?.display_name) {
        setFormData({
          ...formData,
          address: data.display_name,
          lat: latlng.lat,
          lng: latlng.lng,
        });
      }
    } catch {
      message.error("Failed to get address from map.");
    }
  };

  const handleSave = async () => {
    console.log('handleSave called', formData);

    try {
      if (!formData.userId || formData.userId === 0) {
        message.error("Invalid user ID. Cannot save.");
        return;
      }

      let imageUrl = formData.imageUrl;
      if (file) {
        const storageRef = ref(
          storage,
          `avatars/${formData.userId}/${file.name}`
        );
        await uploadBytes(storageRef, file);
        imageUrl = await getDownloadURL(storageRef);
      }

      const payload = {
        userId: formData.userId,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        imageUrl,
      };

      console.log('Sending payload:', payload);
      await updateUser(formData.userId, payload);
      console.log('Update success');
      message.success("Profile updated successfully.");
      setFile(null);
      setPreviewUrl(null);
      setFormData({ ...formData, imageUrl });
    } catch {
      message.error("Failed to update profile.");
    }
  };

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div style={{ padding: 24, maxWidth: 1000, margin: "auto" }}>
      <Title level={2}>User Profile</Title>

      <Card style={{ marginBottom: 24 }}>
        <Title level={4}>Profile Picture</Title>
        <Row gutter={16} align="middle">
          <Col>
            <Avatar
              size={96}
              src={previewUrl || formData.imageUrl || "/img/default-avatar.png"}
            />
          </Col>
          <Col>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="upload-image"
              onChange={handleUpload}
            />
            <label htmlFor="upload-image">
              <Button icon={<UploadOutlined />} style={{ marginRight: 8 }}>
                Upload Image
              </Button>
            </label>
            <Button
              icon={<DeleteOutlined />}
              onClick={handleDeleteImage}
              danger
            >
              Delete
            </Button>
            <Text type="secondary" style={{ display: "block", marginTop: 8 }}>
              Max size: 2MB
            </Text>
          </Col>
        </Row>
      </Card>

      <Card style={{ marginBottom: 24 }}>
        <Title level={4}>Personal Information</Title>
        <Row gutter={16}>
          <Col span={12}>
            <Input
              value={formData.name}
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              size="large"
            />
          </Col>
          <Col span={12}>
            <Input
              value={formData.email}
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              size="large"
              type="email"
            />
          </Col>
        </Row>

        <Input.Search
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          onSearch={handleSearchAddress}
          enterButton="Find"
          size="large"
          style={{ marginTop: 16 }}
        />

        <div
          style={{
            height: 300,
            marginTop: 16,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <MapContainer
            center={
              formData.lat && formData.lng
                ? [formData.lat, formData.lng]
                : [10.7626, 106.6602]
            }
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {formData.lat && formData.lng && (
              <Marker
                position={[formData.lat, formData.lng]}
                icon={markerIcon}
              />
            )}
            <LocationPicker onMapClick={handleMapClick} />
          </MapContainer>
        </div>
      </Card>

      <Row gutter={16} justify="end">
        <Col>
          <Button onClick={() => window.location.reload()}>Cancel</Button>
        </Col>
        <Col>
          <Button type="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserDetailsSection;
