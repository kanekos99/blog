const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/posts/images");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addCollection("allTags", function (collectionApi) {
    let tagSet = new Set();

    collectionApi.getAll().forEach((item) => {
      if (Array.isArray(item.data.tags)) {
        item.data.tags.forEach((tag) => {
          if (tag !== "post") {
            tagSet.add(tag);
          }
        });
      }
    });

    return [...tagSet].sort();
  });

  return {
    dir: {
      input: "src",
      output: "public/blog",
    },
    pathPrefix: "/blog/",
  };
};
