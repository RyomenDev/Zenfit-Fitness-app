import HelpRequests from "../../../../components/Shop/Help/CustomerCareHelp/HelpRequest/HelpRequests";

const HandleHelpRequests = () => {
  const yourName = "CustomerCareAgent";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customer Care Dashboard</h1>
      <HelpRequests yourName={yourName} />
    </div>
  );
};

export default HandleHelpRequests;
