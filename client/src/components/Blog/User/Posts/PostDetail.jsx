import { useEffect, useState } from "react";
import { getPostById, deletePost } from "../../../../api/posts";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    navigate("/blog/user");
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <img src={post.image} alt={post.imageText} />
      <p>{post.description}</p>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default PostDetail;
