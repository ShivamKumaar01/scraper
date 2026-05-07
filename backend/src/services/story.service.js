import Story from "../models/story.model.js";

export const getStoriesService = async (page, limit) => {
  const skip = (page - 1) * limit;

  const stories = await Story.find()
    .sort({ points: -1 })
    .skip(skip)
    .limit(limit);

  const totalStories = await Story.countDocuments();

  return {
    stories,
    totalStories,
    totalPages: Math.ceil(totalStories / limit),
    currentPage: page,
  };
};
