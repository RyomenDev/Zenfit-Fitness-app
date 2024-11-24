import {
  TextField,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Paper,
  Typography,
} from "@mui/material";

const categories = [
  { title: "Technology" },
  { title: "Design" },
  { title: "Culture" },
  { title: "Business" },
  { title: "Politics" },
  { title: "Opinion" },
  { title: "Science" },
  { title: "Health" },
  { title: "Style" },
  { title: "Travel" },
];

const PostForm = ({
  title,
  setTitle,
  description,
  setDescription,
  image,
  setImage,
  imageText,
  setImageText,
  category,
  setCategory,
  handleSubmit,
}) => {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        {title ? "Edit Post" : "Create New Post"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              variant="outlined"
              fullWidth
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image Text"
              variant="outlined"
              fullWidth
              value={imageText}
              onChange={(e) => setImageText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
                required
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.title} value={cat.title}>
                    {cat.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default PostForm;
