
import { Paper, Typography } from "@mui/material";

const PostPreview = ({ title, description, image, imageText, category }) => {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h6" gutterBottom>
        Post Preview
      </Typography>
      <Typography variant="h4" gutterBottom>
        {title || "Post Title"}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description || "Post description goes here..."}
      </Typography>
      {image && (
        <img
          src={image}
          alt={imageText || "Image"}
          style={{ width: "100%", height: "auto", marginBottom: "10px" }}
        />
      )}
      <Typography variant="body2" color="textSecondary">
        {imageText || "Image description..."}
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Category: {category || "Select a category"}
      </Typography>
    </Paper>
  );
};

export default PostPreview;
