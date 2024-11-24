import ContentLoader from "react-content-loader";

const UserInfoShimmer = () => (
  <ContentLoader
    speed={2}
    width={800} // Adjusted to match the width of Order Summary
    height={300} // Increased height for better UI
    viewBox="0 0 800 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mb-8"
  >
    {/* Profile picture */}
    <circle cx="80" cy="80" r="60" />

    {/* User information */}
    <rect x="160" y="40" rx="4" ry="4" width="400" height="24" />
    <rect x="160" y="80" rx="4" ry="4" width="300" height="20" />
    <rect x="160" y="120" rx="4" ry="4" width="350" height="20" />

    {/* Address section */}
    <rect x="160" y="160" rx="4" ry="4" width="250" height="20" />
    <rect x="160" y="190" rx="4" ry="4" width="400" height="20" />
  </ContentLoader>
);

export default UserInfoShimmer;
