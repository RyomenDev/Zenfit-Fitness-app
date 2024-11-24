import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PostCard from "./PostCard";

const useStyles = makeStyles((theme) => ({
  postContainer: {
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  //   console.log(posts, title);

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <PostCard post={post} className={classes.postContainer} key={index} />
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      imageText: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
