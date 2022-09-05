const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "PetPals | Red de mascotas",
      shortname: "PetPals",
      description:
        "Con PetPals podes compartir y admirar fotos de animales domesticos",
      orientation: "portrait",
      display: "standalone",
      start_url: "/",
      scope: "/",
      background_color: "#fff",
      theme_color: "#b1a",
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          size: [96, 128, 144, 192, 256, 384, 512],
          purpose: "maskable any",
          destination: path.join("Icons"),
          ios: true,
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://(res.cloudinary.com|images.unsplash.com)"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          urlPattern: new RegExp("https://papitaGram-api.vercel.app"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
  ],
  // devServer: {
  //   open: true,
  //   historyApiFallback: { disableDotRule: true },
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
