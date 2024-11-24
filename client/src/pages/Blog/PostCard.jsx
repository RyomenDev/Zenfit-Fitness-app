import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PostCard = ({ post, className }) => {
//   console.log(post, className);

  return (
    <Card className={className}>
      {post.image && (
        <CardMedia
          component="img"
          image={post.image}
          alt={post.imageText}
          height="140"
        />
      )}
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {post.date}
        </Typography>
        <Typography variant="body1" paragraph>
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageText: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default PostCard;
