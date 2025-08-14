import api from "../components/config/axios";

export const addPaymentMethod = async (paymentMethod) => {
  const token = localStorage.getItem("token");
  return api.post("/api/payment-methods/add", paymentMethod, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Lấy danh sách payment method của user hiện tại
export const getPaymentMethods = async () => {
  const token = localStorage.getItem("token");
  return api.get("/api/payment-methods/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
