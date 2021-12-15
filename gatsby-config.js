module.exports = {
  siteMetadata: {
    siteUrl: "https://www.vesselwiththepestle.com",
    title: "Vessel with the pestle",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-mdx",
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
