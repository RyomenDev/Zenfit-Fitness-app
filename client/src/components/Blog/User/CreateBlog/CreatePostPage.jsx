import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode
import { Container, Grid } from "@mui/material";
import { createPost, updatePost } from "../../../../api/BlogApi";
import PostForm from "./PostForm";
import PostPreview from "./PostPreview";

const PostPage = ({ postToEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(postToEdit ? postToEdit.title : "");
  const [description, setDescription] = useState(
    postToEdit ? postToEdit.description : ""
  );
  const [image, setImage] = useState(postToEdit ? postToEdit.image : "");
  const [imageText, setImageText] = useState(
    postToEdit ? postToEdit.imageText : ""
  );
  const [category, setCategory] = useState(
    postToEdit ? postToEdit.category : ""
  );

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setDescription(postToEdit.description);
      setImage(postToEdit.image);
      setImageText(postToEdit.imageText);
      setCategory(postToEdit.category);
    }
  }, [postToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const post = { title, description, image, imageText, category, userId };

      try {
        if (id) {
          await updatePost(id, post);
        } else {
          await createPost(post);
        }
        navigate("/blog/user");
      } catch (error) {
        console.error("Failed to save the post:", error);
      }
    } else {
      alert(`Please login to save`);
    }
  };

  return (
    <Container component="main" maxWidth="lg" style={{ marginTop: "20px" }}>
      <Grid container spacing={4}>
        {/* Real-Time Preview Section */}
        <Grid item xs={12} md={6}>
          <PostPreview
            title={title}
            description={description}
            image={image}
            imageText={imageText}
            category={category}
          />
        </Grid>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <PostForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
            imageText={imageText}
            setImageText={setImageText}
            category={category}
            setCategory={setCategory}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostPage;
