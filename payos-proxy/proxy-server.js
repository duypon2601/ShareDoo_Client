const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/payos', async (req, res) => {
  try {
    // Nhận payload từ Render
    const payload = req.body;

    // Gọi PayOS
    const response = await axios.post('https://api.payos.vn/v1/payment-requests', payload, {
      headers: {
        'x-client-id': process.env.PAYOS_CLIENT_ID,
        'x-api-key': process.env.PAYOS_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    // Trả response về cho Render
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message, detail: err.response?.data });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}`)); 