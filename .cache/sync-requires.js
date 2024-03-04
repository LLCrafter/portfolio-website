
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/leecolli/portfolio-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/404.js")),
  "component---src-pages-components-about-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/components/About.js")),
  "component---src-pages-components-contact-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/components/Contact.js")),
  "component---src-pages-components-gallery-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/components/Gallery.js")),
  "component---src-pages-components-navbar-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/components/Navbar.js")),
  "component---src-pages-index-js": preferDefault(require("/home/leecolli/portfolio-website/src/pages/index.js"))
}

