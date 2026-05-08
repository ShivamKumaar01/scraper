import { useEffect } from "react";

import {
  Container,
  Typography,
  Pagination,
  CircularProgress,
  Box,
} from "@mui/material";

import { useStory } from "../../context/story-context";
import StoryList from "../../components/Story/StoryList";
import Navbar from "../../components/common/Navbar";

const Stories = () => {
  const { stories, loading, fetchStories, page, totalPages } = useStory();

  useEffect(() => {
    fetchStories(page);
  }, []);

  const handlePageChange = (event, value) => {
    fetchStories(value);
  };

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: 12 }}>
        <Typography variant="h4" textAlign="center" marginBottom={4}>
          Hacker News Stories
        </Typography>

        {loading ? (
          <Box textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          <>
            <StoryList stories={stories} />

            <Box display="flex" justifyContent="center" marginTop={4}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Stories;
