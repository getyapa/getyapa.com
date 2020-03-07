const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.tsx", "./src/**/*.ts"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  },
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
}
