import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import post1 from "./Posts/post1.jsx";
import post2 from "./Posts/post2.jsx";
import post3 from "./Posts/post3.jsx";

const theme = createTheme({
  palette: {
    grey: {
      800: "#424242", // Make sure this is defined in your theme
    },
  },
});

const MainGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description: "Multiple lines of text that form the lede...",
  image: "https://picsum.photos/1600/900",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/1600/900",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://picsum.photos/1600/900",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", url: "https://github.com", icon: GitHubIcon },
    { name: "Twitter", url: "https://twitter.com", icon: TwitterIcon },
    { name: "Facebook", url: "https://facebook.com", icon: FacebookIcon },
  ],
};

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <MainGrid container spacing={5}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </MainGrid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
