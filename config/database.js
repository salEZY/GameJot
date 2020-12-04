if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb+srv://salezy:5413zybo@gamejot-prod.a7jbk.mongodb.net/gamejot-prod?retryWrites=true&w=majority"
  };
  console.log("mLab db connected");
} else {
  module.exports = {
    mongoURI: "mongodb://localhost/vidjot-dev"
  };
}
