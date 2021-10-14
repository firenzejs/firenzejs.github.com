module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `FirenzeJS`,
    // Default title of the page
    siteTitleAlt: `FirenzeJS`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Un meetup di appassionati e professionisti di Javascript su Firenze e dintorni`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://firenze.it`,
    // Used for SEO
    siteDescription: `Un meetup di appassionati e professionisti di Javascript. Organizziamo aperitivi, talk e giornate dedicate all'ecosistema Javascript su Firenze e dintorni`,
    // Will be set on the <html /> tag
    siteLanguage: `it`,
    author: 'LobeTia'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        mdx: true
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PQ6XDJS",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
