import { Card, CardContent, Typography, Button } from "@mui/material";

const StoryCard = ({ story }) => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6">{story.title}</Typography>

        <Typography color="text.secondary">Author: {story.author}</Typography>

        <Typography color="text.secondary">Points: {story.points}</Typography>

        <Typography color="text.secondary">Posted: {story.postedAt}</Typography>

        <Button
          href={story.url}
          target="_blank"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Read Story
        </Button>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
