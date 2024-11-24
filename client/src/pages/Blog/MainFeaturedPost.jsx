import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// Styled components using MUI's styled utility
const MainFeaturedPostStyled = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}));

const Overlay = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,.3)",
});

const MainFeaturedPostContent = styled("div")(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(6),
    paddingRight: 0,
  },
}));

export default function MainFeaturedPost(props) {
  const { post } = props;

  return (
    <MainFeaturedPostStyled style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      <img style={{ display: "none" }} src={post.image} alt={post.imageText} />
      <Overlay />
      <Grid container>
        <Grid item md={6}>
          <MainFeaturedPostContent>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </MainFeaturedPostContent>
        </Grid>
      </Grid>
    </MainFeaturedPostStyled>
  );
}
MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
  }).isRequired,
};
