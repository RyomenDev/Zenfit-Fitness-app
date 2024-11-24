import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HelpPage = lazy(() => import("./HelpPage"));
const HelpRequests = lazy(() => import("./CustomerCareDashboard"));
const Chat = lazy(() => import("../../../../components/UserHelp/Chat/Chat.jsx"));
const Join = lazy(() => import("../../../../components/UserHelp/Join/Join.jsx"));

function HelpSection() {
  return (
    <Suspense fallback={<div>Loading Help Section...</div>}>
      <Routes>
        <Route path="/help" element={<HelpPage />} />
        <Route path="/helpPage" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/help-requests" element={<HelpRequests />} />
      </Routes>
    </Suspense>
  );
}

export default HelpSection;
