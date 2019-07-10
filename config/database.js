if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://salezy:5413zybo@ds249137.mlab.com:49137/gamejot-prod"
  };
  console.log("mLab db connected");
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}
