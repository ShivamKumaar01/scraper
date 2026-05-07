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

export const toggleBookmarkService = async (storyId, userId) => {
  const story = await Story.findById(storyId);

  if (!story) {
    throw new Error("Story not found");
  }

  const alreadyBookmarked = story.bookmarks.includes(userId);

  if (alreadyBookmarked) {
    story.bookmarks = story.bookmarks.filter((id) => id.toString() !== userId);

    await story.save();

    return {
      message: "Bookmark Removed",
    };
  } else {
    story.bookmarks.push(userId);

    await story.save();

    return {
      message: "Bookmark Added",
    };
  }
};
