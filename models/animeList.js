const mongoose = require("mongoose");

const videoSchema = mongoose.Schema(
  {
    videoUrl: String,
    thumbnailLink: String,
  },
  { timestamps: true }
);

const animeList = mongoose.Schema(
  {
    title: String,
    description: String,
    imageUrl: String,
    video: {
      videoUrl: [videoSchema],
      updatedAt: Date.now(),
    },
  },
  { timestamps: true }
);

const animeListModel = mongoose.model("AnimeList", animeList);

module.exports = animeListModel;
