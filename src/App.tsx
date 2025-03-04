import React, { FC } from "react";
import Header from "./layouts/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ActivityFeed from "./pages/activity/ActivityFeed";
import ActivityDetail from "./pages/activity/ActivityDetail";
import Archived from "./pages/archived/Archived";
import Sidebar from "./layouts/Sidebar";
import useResponsive from "./hooks/useResponsive";
import BottomTabBar from "./layouts/BottomTabBar";

const App: FC = () => {
  const screenSize = useResponsive();

  return (
    <div className="app">
      <Router>
        {screenSize === "desktop" ? <Sidebar /> : <Header />}
        <div className="section">
          <Routes>
            <Route path="" element={<ActivityFeed />} />
            <Route path="activity/:id" element={<ActivityDetail />} />
            <Route path="archived" element={<Archived />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        {screenSize !== "desktop" && <BottomTabBar />}
      </Router>
    </div>
  );
};

export default App;
