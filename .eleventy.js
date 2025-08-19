const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
  // copy site data
  // eleventyConfig.addPassthroughCopy('htaccess.txt');
  // eleventyConfig.addPassthroughCopy('.htaccess');
  // eleventyConfig.addPassthroughCopy('robots.txt');
  // eleventyConfig.addPassthroughCopy('sitemap.xml');
  // copy directories to the output
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('img');
  // copy favicons
  // eleventyConfig.addPassthroughCopy('site.webmanifest');
  eleventyConfig.addPassthroughCopy('*.ico');
  eleventyConfig.addPassthroughCopy('*.png');

  // watch directories for changes
  eleventyConfig.addWatchTarget('css');
  eleventyConfig.addWatchTarget('js');
  eleventyConfig.addWatchTarget('img');
  // eleventyConfig.addWatchTarget('site.webmanifest');


  // page transforms and filters

  // FILTER: split a string by a separator
  eleventyConfig.addFilter("split", function(str, separator) {
    if (!str) return [];
    return str.split(separator);
  });

  // TRANSFORM: create accessibility table of contents
  eleventyConfig.addTransform("injectSrToc", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const $ = cheerio.load(content);

      // Build TOC from sections
      const sections = [];
      $("section[id]").each((i, elem) => {
        const id = $(elem).attr("id");
        const title = id + " section";
        sections.push({ id, title });
      });

      // Only inject if there are sections
      if (sections.length) {
        const tocHtml = `
<nav class="sr-only sr-toc" aria-label="Table of Contents" role="navigation">
  <h2>Page Table of Contents</h2>
  <ul>
    <li><a class="text-link" href="#top">Jump to top</a></li>
    ${sections.map(s => `<li><a href="#${s.id}" class="text-link" tabindex="0">${s.title}</a></li>`).join("\n")}
  </ul>
</nav>
        `;
        // Insert TOC at the start of <body> on the page
        $("body").prepend(tocHtml);
        return $.html();
      }
    }
    return content;
  });

};