import axios from "axios";
import * as cheerio from "cheerio";
import Story from "../models/story.model.js";

export const scrapeStories = async () => {
  try {
    const { data } = await axios.get("https://news.ycombinator.com/");

    const $ = cheerio.load(data);

    const stories = [];

    $(".athing").each((index, element) => {
      if (index >= 10) return false;

      const title = $(element).find(".titleline a").text();
      const url = $(element).find(".titleline a").attr("href");
      const subtext = $(element).next();
      const pointsText = subtext.find(".score").text();
      const points = parseInt(pointsText) || 0;
      const author = subtext.find(".hnuser").text();
      const postedAt = subtext.find(".age").text();

      stories.push({
        title,
        url,
        points,
        author,
        postedAt,
      });
    });

    if (stories.length > 0) {
      await Story.deleteMany();
      await Story.insertMany(stories);
    } else {
      console.warn("No stories were scraped from Hacker News.");
    }

    return stories;
  } catch (error) {
    console.error("Failed to scrape stories:", error.message || error);
    return [];
  }
};
