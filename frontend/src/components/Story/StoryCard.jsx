import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import BookmarkIcon from "@mui/icons-material/Bookmark";

import api from "../../api/axios";

import { useAuth } from "../../context/auth-context";

const StoryCard = ({ story, fetchStories, page }) => {

  const { user } = useAuth();

  const isBookmarked =
    story.bookmarks?.includes(user?._id);

  const handleToggleBookmark = async () => {
    try {

      await api.post(
        `/stories/${story._id}/bookmark`
      );

      fetchStories(page);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>

        <Typography variant="h6">
          {story.title}
        </Typography>

        <Typography color="text.secondary">
          Author: {story.author}
        </Typography>

        <Typography color="text.secondary">
          Points: {story.points}
        </Typography>

        <Typography color="text.secondary">
          Posted: {story.postedAt}
        </Typography>

        <Button
          href={story.url}
          target="_blank"
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Read Story
        </Button>

        <IconButton
          onClick={handleToggleBookmark}
          sx={{ marginTop: 2 }}
        >
          {isBookmarked ? (
            <BookmarkIcon color="primary" />
          ) : (
            <BookmarkBorderIcon />
          )}
        </IconButton>

      </CardContent>
    </Card>
  );
};

export default StoryCard;