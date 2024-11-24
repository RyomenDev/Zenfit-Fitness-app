import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

// Styled components using MUI's styled utility
const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const ToolbarTitle = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const ToolbarSecondary = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  overflowX: "auto",
}));

const ToolbarLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  flexShrink: 0,
}));

export default function Header(props) {
  const { sections, title } = props;
  const navigate = useNavigate();

  const PostHandler = () => {
    navigate("/blog/create");
  };

  return (
    <>
      <React.Fragment>
        <ToolbarStyled>
          <Button size="small">Subscribe</Button>
          <ToolbarTitle
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            {title}
          </ToolbarTitle>
          <Button variant="outlined" size="small" onClick={PostHandler}>
            Post
          </Button>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </ToolbarStyled>
        <ToolbarSecondary component="nav" variant="dense">
          {sections.map((section) => (
            <ToolbarLink
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
            >
              {section.title}
            </ToolbarLink>
          ))}
        </ToolbarSecondary>
      </React.Fragment>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
