// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../../redux/userSlice";

// const AdminPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { user, role } = useSelector((state) => state.user);

//   const handleLogout = () => {
//     dispatch(logout());
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Trang Quản Trị</h2>
//       <p>Chào mừng {user?.name || "Admin"}! Bạn có vai trò: {role}</p>
//       <ul>
//         <li>Quản lý người dùng</li>
//         <li>Xem báo cáo</li>
//         <li>Cấu hình hệ thống</li>
//       </ul>
//       <button onClick={handleLogout} style={{ padding: "5px 10px" }}>
//         Đăng Xuất
//       </button>
//     </div>
//   );
// };

// export default AdminPage;