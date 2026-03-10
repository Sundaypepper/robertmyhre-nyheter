const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Copy static HTML files and assets (index.html is now index.njk, processed by Eleventy)
  eleventyConfig.addPassthroughCopy("admin.html");
  eleventyConfig.addPassthroughCopy("basiskurs-april.html");
  eleventyConfig.addPassthroughCopy("basiskurs-august.html");
  eleventyConfig.addPassthroughCopy("basiskurs-juni.html");
  eleventyConfig.addPassthroughCopy("boker.html");
  eleventyConfig.addPassthroughCopy("evalueringsmodeller.html");
  eleventyConfig.addPassthroughCopy("index-2.html");
  eleventyConfig.addPassthroughCopy("index-3.html");
  eleventyConfig.addPassthroughCopy("index-4.html");
  eleventyConfig.addPassthroughCopy("index-5.html");
  eleventyConfig.addPassthroughCopy("index-6.html");
  eleventyConfig.addPassthroughCopy("index-7.html");
  eleventyConfig.addPassthroughCopy("innsyn-klager.html");
  eleventyConfig.addPassthroughCopy("konkurranse-med-forhandlinger.html");
  eleventyConfig.addPassthroughCopy("kursside.html");
  eleventyConfig.addPassthroughCopy("live-innsikt.html");
  eleventyConfig.addPassthroughCopy("medlemskap.html");
  eleventyConfig.addPassthroughCopy("om-oss.html");
  eleventyConfig.addPassthroughCopy("quiz_nytt_regelverk_2026.html");
  eleventyConfig.addPassthroughCopy("radgivning.html");
  eleventyConfig.addPassthroughCopy("soa-sertifisering.html");
  eleventyConfig.addPassthroughCopy("vinne-videregaende-april.html");
  eleventyConfig.addPassthroughCopy("vinne-videregaende-juni.html");
  eleventyConfig.addPassthroughCopy("vinne-videregaende.html");
  eleventyConfig.addPassthroughCopy("vinne.html");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("portal");
  eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("robots.txt");
      eleventyConfig.addPassthroughCopy("_redirects");

  // Date filter for Norwegian dates
  eleventyConfig.addFilter("dato", function(date) {
    const months = ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"];
    const d = new Date(date);
    return d.getDate() + ". " + months[d.getMonth()] + " " + d.getFullYear();
  });

  // ISO date filter for sitemap
  eleventyConfig.addFilter("iso", function(date) {
    return new Date(date).toISOString().split("T")[0];
  });

  // Filter: upcoming courses (returns courses with date >= today, sorted by date, limited to n)
  eleventyConfig.addFilter("kommendeKurs", function(kursliste, antall) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return kursliste
      .filter(function(k) { return new Date(k.date) >= now; })
      .sort(function(a, b) { return new Date(a.date) - new Date(b.date); })
      .slice(0, antall || 2);
  });

  // Strip HTML tags filter for search index
  eleventyConfig.addFilter("striptags", function(str) {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  });

  // Custom sorted collection — sort by date descending (newest first)
  eleventyConfig.addCollection("innsikt", function(collectionApi) {
    return collectionApi.getFilteredByTag("innsikt").sort(function(a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
