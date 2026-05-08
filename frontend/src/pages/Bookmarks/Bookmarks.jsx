import { useEffect } from "react";

import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

import { useStory } from "../../context/story-context";

import { useAuth } from "../../context/auth-context";

import StoryCard from "../../components/Story/StoryCard";

import Navbar from "../../components/common/Navbar";

const Bookmarks = () => {

  const {
    stories,
    fetchStories,
    page,
  } = useStory();

  const { user } = useAuth();

  useEffect(() => {
    fetchStories(page);
  }, []);

  const bookmarkedStories =
    stories.filter((story) =>
      story.bookmarks?.some(
        (id) => id.toString() === user?._id
      )
    );

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: 12 }}>

        <Typography
          variant="h4"
          textAlign="center"
          marginBottom={4}
        >
          Bookmarked Stories
        </Typography>

        <Grid container spacing={3}>

          {bookmarkedStories.map((story) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={story._id}
            >

              <StoryCard
                story={story}
                fetchStories={fetchStories}
                page={page}
              />

            </Grid>

          ))}

        </Grid>

      </Container>
    </>
  );
};

export default Bookmarks;