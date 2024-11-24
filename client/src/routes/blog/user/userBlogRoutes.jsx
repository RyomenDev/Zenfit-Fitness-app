import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load blog components
const BlogHomePage = lazy(() => import("../../../pages/Blog/BlogMainPage.jsx"));
const PostList = lazy(() =>
  import("../../../components/Blog/User/Posts/PostList.jsx")
);
const PostDetail = lazy(() =>
  import("../../../components/Blog/User/Posts/PostDetail.jsx")
);
const CreatePostPage = lazy(() =>
  import("../../../components/Blog/User/CreateBlog/CreatePostPage.jsx")
);

function UserBlogRoutes() {
  return (
    <Suspense fallback={<div>Loading Blog...</div>}>
      <Routes>
        <Route path="/" element={<BlogHomePage />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/edit/:id" element={<CreatePostPage />} />
      </Routes>
    </Suspense>
  );
}

export default UserBlogRoutes;
