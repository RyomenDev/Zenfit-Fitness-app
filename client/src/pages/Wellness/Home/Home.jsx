import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import ExerciseCard from "./ExerciseCard"; // Import the ExerciseCard component

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; // Ensure you have your access key

// Exercise Data with query parameters for Unsplash API
const exercisesData = [
  {
    title: "Yoga",
    query: "yoga",
    description:
      "A relaxing yoga session to improve flexibility and mindfulness.",
  },
  {
    title: "Cardio Workout",
    query: "cardio",
    description: "High-intensity cardio to boost your heart rate and stamina.",
  },
  {
    title: "Strength Training",
    query: "gym",
    description: "Build muscle and strength with these effective exercises.",
  },
  {
    title: "Pilates",
    query: "pilates",
    description: "Focus on core strength and flexibility.",
  },
  {
    title: "HIIT",
    query: "hiit",
    description: "Quick and efficient workouts to burn fat.",
  },
];

const fallbackImage =
  "https://via.placeholder.com/400x200?text=Image+Not+Available"; // Fallback image

const ExerciseHome = () => {
  const [exerciseImages, setExerciseImages] = useState({});

  // Fetch Unsplash image for each exercise using its query term
  useEffect(() => {
    const fetchImages = async () => {
      const images = {};

      for (const exercise of exercisesData) {
        try {
          const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${exercise.query}&client_id=${UNSPLASH_ACCESS_KEY}`
          );
          const data = await response.json();
          // Only set image if API response has data
          images[exercise.query] = data?.urls?.regular || fallbackImage;
        } catch (error) {
          console.error(`Error fetching image for ${exercise.title}:`, error);
          images[exercise.query] = fallbackImage; // Use fallback image in case of an error
        }
      }

      setExerciseImages(images);
    };

    fetchImages();
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header */}
      <Typography variant="h3" align="center" gutterBottom>
        Exercise & Fitness
      </Typography>

      {/* Slider Section */}
      <Swiper spaceBetween={30} slidesPerView={1}>
        {exercisesData.map((exercise, index) => (
          <SwiperSlide key={index}>
            <ExerciseCard
              title={exercise.title}
              description={exercise.description}
              image={exerciseImages[exercise.query]}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid Section for Exercises */}
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {exercisesData.map((exercise, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ExerciseCard
              title={exercise.title}
              description={exercise.description}
              image={exerciseImages[exercise.query]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseHome;
