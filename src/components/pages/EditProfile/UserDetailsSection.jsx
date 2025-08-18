import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Col,
  Input,
  Row,
  Avatar,
  message,
  Typography,
  Card,
} from "antd"; // Revert to antd
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { getCurrentUser, updateUser } from "../../../api/user";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCoordinatesFromAddress } from "../../../service/geocoding";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

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
    username: "",
    password: "",
    role: "USER",
    createdAt: null,
    updatedAt: null,
    lastLoginAt: null,
    active: true,
    deleted: false,
    verified: false,
  });

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null); // Ref for file input
  const user = useSelector((state) => state.user);

  console.log("user", user);

  useEffect(() => {
    let decodedUserId = null;
    try {
      if (user?.token) {
        const decoded = jwtDecode(user.token);
        decodedUserId = decoded.userId;
        console.log("Decoded userId from token:", decodedUserId);
      }
    } catch (error) {
      console.error("Failed to decode token:", error);
      message.error("Invalid token.");
    }

    getCurrentUser()
      .then((res) => {
        const userData = res.data.data;
        setFormData((prev) => ({
          ...prev,
          userId: decodedUserId || userData.userId || null,
          name: userData.name || "",
          email: userData.email || "",
          address: userData.address || "",
          imageUrl: userData.imageUrl || "",
          username: userData.username || user.username || "",
          password: userData.password || user.password || "",
          role: userData.role || "USER",
          createdAt: userData.createdAt || "2025-08-17T19:10:41.859Z",
          updatedAt: userData.updatedAt || "2025-08-17T19:10:41.859Z",
          lastLoginAt: userData.lastLoginAt || "2025-08-17T19:10:41.859Z",
          active: userData.active !== undefined ? userData.active : true,
          deleted:
            userData.isDeleted !== undefined ? userData.isDeleted : false,
          verified: userData.verified !== undefined ? userData.verified : false,
        }));
      })
      .catch(() => {
        setFormData((prev) => ({
          ...prev,
          userId: decodedUserId || null,
          username: user.username || "",
          password: user.password || "",
          role: "USER",
          createdAt: "2025-08-17T19:10:41.859Z",
          updatedAt: "2025-08-17T19:10:41.859Z",
          lastLoginAt: "2025-08-17T19:10:41.859Z",
          active: true,
          deleted: false,
          verified: false,
        }));
        message.error("Failed to fetch user data.");
      });
  }, [user?.token]);

  const handleUpload = (e) => {
    console.log("handleUpload triggered", e.target.files);
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      console.log("No file selected");
      message.error("No file selected.");
      return;
    }
    if (!selectedFile.type.startsWith("image/")) {
      console.log("Invalid file type:", selectedFile.type);
      message.error("Please select an image file.");
      return;
    }
    if (selectedFile.size > 2 * 1024 * 1024) {
      console.log("File too large:", selectedFile.size);
      message.error("File size must not exceed 2MB.");
      return;
    }
    setFile(selectedFile);
    const preview = URL.createObjectURL(selectedFile);
    setPreviewUrl(preview);
    console.log("File selected:", selectedFile.name, "Preview URL:", preview);
  };

  const handleDeleteImage = () => {
    console.log("handleDeleteImage triggered");
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
    } catch (error) {
      console.error("Search address error:", error);
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
    } catch (error) {
      console.error("Map click error:", error);
      message.error("Failed to get address from map.");
    }
  };

  const handleSave = async () => {
    console.log("handleSave called", formData);

    try {
      if (!formData.userId || formData.userId === 0) {
        console.log("Invalid userId:", formData.userId);
        message.error("Invalid user ID. Cannot save.");
        return;
      }

      let imageUrl = formData.imageUrl;
      if (file) {
        try {
          const storageRef = ref(
            storage,
            `avatars/${formData.userId}/${Date.now()}_${file.name}`
          );
          console.log("Uploading to Firebase:", storageRef.fullPath);
          const snapshot = await uploadBytes(storageRef, file);
          imageUrl = await getDownloadURL(snapshot.ref);
          console.log("Image uploaded, URL:", imageUrl);
        } catch (error) {
          console.error("Firebase upload error:", error);
          message.error(`Failed to upload image: ${error.message}`);
          return;
        }
      }

      const payload = {
        userId: formData.userId,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        imageUrl: imageUrl || "",
        location:
          formData.lat && formData.lng
            ? `${formData.lat},${formData.lng}`
            : formData.location || "",
        username: formData.username,
        password: formData.password,
        role: formData.role,
        createdAt: formData.createdAt,
        updatedAt: formData.updatedAt,
        lastLoginAt: formData.lastLoginAt,
        active: formData.active,
        deleted: formData.deleted,
        verified: formData.verified,
      };

      console.log("Sending payload to API:", payload);
      await updateUser(formData.userId, payload);
      console.log("Update success");
      message.success("Profile updated successfully.");
      alert("Cập nhập thông tin thành công.");
      setFile(null);
      setPreviewUrl(null);
      setFormData({ ...formData, imageUrl });
    } catch (error) {
      console.error("Save error:", error);
      message.error(`Failed to update profile: ${error.message}`);
    }
  };

  const triggerFileInput = () => {
    console.log("triggerFileInput called");
    if (fileInputRef.current) {
      fileInputRef.current.click();
    } else {
      console.error("File input ref is not available");
      message.error("File input is not available.");
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
              key={previewUrl || formData.imageUrl}
              size={96}
              src={previewUrl || formData.imageUrl || "/img/ShareDoo.png"}
            />
          </Col>
          <Col>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="upload-image"
              ref={fileInputRef}
              onChange={(e) => {
                console.log("File input changed:", e.target.files);
                handleUpload(e);
              }}
            />
            <Button
              icon={<UploadOutlined />}
              onClick={triggerFileInput}
              style={{ marginRight: 8 }}
            >
              Upload Image
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={handleDeleteImage}
              danger
            >
              Xóa Ảnh
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
