import { useEffect, useState } from "react";
import { getPosts } from "../../../../api/posts";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link to={`blog/user/post/${post._id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
