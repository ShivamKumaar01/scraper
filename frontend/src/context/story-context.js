import { createContext, useContext, useState } from "react";

import api from "../api/axios";

const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStories = async (currentPage = 1) => {
    try {
      setLoading(true);

      const { data } = await api.get(`/stories?page=${currentPage}&limit=5`);

      setStories(data.stories);

      setTotalPages(data.totalPages);

      setPage(currentPage);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StoryContext.Provider
      value={{
        stories,
        loading,
        fetchStories,
        page,
        totalPages,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export const useStory = () => useContext(StoryContext);
