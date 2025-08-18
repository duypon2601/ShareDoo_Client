import axios from "axios";

const baseUrl = "http://localhost:8080/";
// const baseUrl = "https://sharedoo-server.onrender.com/";
56
// const lay api google 



const api = axios.create({
  baseURL: baseUrl,
  timeout: 3000000,
});

const handleBefore = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token.replaceAll('"', "")}`;
  }
  console.log('[Axios Request]', config);
  return config;
};

const handleError = (error) => {
  console.error("Lỗi API:", error.response ? error.response.data : error);
  return Promise.reject(error); // Trả về lỗi để Axios biết request thất bại
};

api.interceptors.request.use(handleBefore, handleError);
api.interceptors.response.use((response) => {
  console.log('[Axios Response]', response);
  return response;
}, handleError);

export default api;
