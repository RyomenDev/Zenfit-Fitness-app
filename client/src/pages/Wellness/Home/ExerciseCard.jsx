// ExerciseCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const fallbackImage =
  "https://via.placeholder.com/400x200?text=Image+Not+Available"; // Fallback image

const ExerciseCard = ({ title, description, image }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={image || fallbackImage} // Use fallback if image is not available
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 1 }}
          onClick={() => alert(`Learn more about ${title}`)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
