// // // import Login from "./pages/auth/Login";
// // // import Register from "./pages/auth/Register";
// // // import "@fontsource/lato";
// // // import "./styles/variables.css";
// // // import "./styles/global.css";
// // // import { Navigate, Route, Routes } from "react-router-dom";

// // // function App() {
// // //   return (
// // //     <>
// // //         <Routes>
// // //           {/* تحويل الصفحة الرئيسية لصفحة الـ Login */}
// // //           <Route path="/" element={<Navigate to="/login" replace />} />

// // //           {/* صفحات الـ Authentication */}
// // //           <Route path="/login" element={<Login />} />
// // //           <Route path="/register" element={<Register />} />
// // //         </Routes>
// // //     </>
// // //   );
// // // }

// // // export default App;

import "@fontsource/lato";
import "./styles/variables.css";
import "./styles/global.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MainLayout from "./layouts/MainLayout/MainLayout";
// import UserProfile from "./components/UI/UserProfile/UserProfile";
import DmPage from "./pages/dashboard/DmPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app__body">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dm/:id" element={<DmPage />} />
          {/* <Route path="browse-channels" element={<BrowseChannels />} /> */}
          {/* <Route path="channels/:id" element={<ChannelMessages />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
