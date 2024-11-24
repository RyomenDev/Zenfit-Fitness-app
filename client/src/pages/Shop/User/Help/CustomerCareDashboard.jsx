
import HelpRequests from "../../../../components/CustomerCare/HelpRequest/HelpRequests";

const CustomerCareDashboard = () => {
  const yourName = "CustomerCareAgent"; // Replace this with the actual name of the customer care agent

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Customer Care Dashboard</h1>
      <HelpRequests yourName={yourName} />
    </div>
  );
};

export default CustomerCareDashboard;


