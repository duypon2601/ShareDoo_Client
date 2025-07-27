# PayOS Proxy Server (Node.js/Express)

Proxy server này giúp bạn nhận request từ backend (ví dụ: Render) và gọi tiếp ra PayOS để lấy link thanh toán và QR code.

## Hướng dẫn sử dụng

### 1. Cài đặt
```bash
npm install
```

### 2. Chạy local
```bash
PAYOS_CLIENT_ID=your_client_id PAYOS_API_KEY=your_api_key node proxy-server.js
```

### 3. Deploy lên Railway
- Push code này lên GitHub.
- Tạo project mới trên Railway, chọn "Deploy from GitHub repo".
- Thêm biến môi trường:
  - `PAYOS_CLIENT_ID`
  - `PAYOS_API_KEY`
- Railway sẽ tự động build và deploy.

### 4. Gọi API từ backend Render
```http
POST https://your-railway-app.up.railway.app/payos
Content-Type: application/json

{
  "amount": 100000,
  "description": "Thanh toán ShareDoo",
  "returnUrl": "https://yourdomain.com/payment/success",
  "cancelUrl": "https://yourdomain.com/payment/cancel"
}
```

### 5. Nhận về response có trường `checkoutUrl` và `qrCode` để hiển thị trên frontend.

---

**Lưu ý:**
- Không commit file `.env` chứa api key lên GitHub công khai.
- Proxy này chỉ nên dùng cho mục đích demo hoặc khi backend chính không thể gọi outbound HTTP/HTTPS. 