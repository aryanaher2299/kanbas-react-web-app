import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import Courses from "./Courses";
export default function Kanbas() {
  return (
    <div id="wd-kanbas h-100">
      <div className="d-flex h-100">
        <div className="d-none d-md-block bg-black">
          <KanbasNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

