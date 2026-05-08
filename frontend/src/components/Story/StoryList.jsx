import Grid from "@mui/material/Grid";

import StoryCard from "./StoryCard";

const StoryList = ({ stories }) => {
  return (
    <Grid container spacing={3}>
      {stories.map((story) => (
        <Grid item xs={12} sm={6} md={4} key={story._id}>
          <StoryCard story={story} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StoryList;
