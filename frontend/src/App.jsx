import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./page/HomePage";
import SignupPage from "./page/SignupPage";
import SigninPage from "./page/SigninPage";
import Insurance from "./page/Insurance";
import DashLayout from "./components/DashLayout";
import AdminDashboard from "./components/DashboardComponents/AdminDashboard";
import UsersInformation from "./page/UsersInformation";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="max-w-8xl mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/insurance" element={<Insurance />} />

            <Route path="/profile" element={<DashLayout />}>
              <Route index element={<AdminDashboard />} />

              <Route path="farmer-profile/:id" element={<UsersInformation />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

// function ConditionalNavbar() {
//   const location = useLocation();

//   // Render Navbar only if the current route is not "/signin" or "/profile"
//   if (location.pathname !== "/signin" && location.pathname !== "/profile") {
//     return <Navbar />;
//   }
//   return null;
// }

export default App;
