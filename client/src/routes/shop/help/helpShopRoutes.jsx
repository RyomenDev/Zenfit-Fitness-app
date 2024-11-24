import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const UserHelpPage = lazy(() =>
  import("../../../pages/Shop/Help/User/UserHelpPage.jsx")
);
const HandleHelpRequestPage = lazy(() =>
  import("../../../pages/Shop/Help/Admin/HandleHelpRequestPage.jsx")
);
const Chat = lazy(() =>
  import("../../../components/Shop/Help/UserHelp/Chat/Chat.jsx")
);
const Join = lazy(() =>
  import("../../../components/Shop/Help/UserHelp/Join/Join.jsx")
);

function HelpShopRoutes() {
  return (
    <Suspense fallback={<div>Loading Help Section...</div>}>
      <Routes>
        <Route path="/" element={<UserHelpPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/help-requests" element={<HandleHelpRequestPage />} />
      </Routes>
    </Suspense>
  );
}

export default HelpShopRoutes;
