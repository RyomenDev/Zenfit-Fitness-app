import ContentLoader from "react-content-loader";

const OrderSummaryShimmer = () => (
  <ContentLoader
    speed={2}
    width={800} // Adjust based on your component width
    height={500} // Adjust height to accommodate all elements
    viewBox="0 0 800 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mb-8"
  >
    {/* Title */}
    <rect x="20" y="20" rx="4" ry="4" width="250" height="35" />

    {/* Cart item placeholders */}
    <rect x="20" y="70" rx="4" ry="4" width="100%" height="80" />
    <rect x="20" y="160" rx="4" ry="4" width="100%" height="80" />
    <rect x="20" y="250" rx="4" ry="4" width="100%" height="80" />

    {/* Total Price Section */}
    <rect x="20" y="350" rx="4" ry="4" width="150" height="30" />
    <rect x="20" y="390" rx="4" ry="4" width="100%" height="40" />

    {/* Checkout Button */}
    <rect x="20" y="440" rx="4" ry="4" width="100%" height="50" />
  </ContentLoader>
);

export default OrderSummaryShimmer;
