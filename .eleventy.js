module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addPassthroughCopy('src/*.{svg,jpg,png}');

  return {
    dir: {
      input: "site",
      output: "_site",
    }
  }
}
