// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const blogCommentsSchema = new Schema({
//   // fullName: { type: String, maxlength: 46 },
//   // email: { type: String, required: true, maxlength: 96 },
//   // phoneno: { type: String, required: true, maxlength: 15 },
//   // message: { type: String, required: true },
//   comment: { type: String, maxlength: 46, required: true },
//   name: { type: String, maxlength: 46, required: true },
//   picture: { type: String, required: true },
//   slug: { type: String, required: true },
// });

// module.exports = mongoose.model("BlogComments", blogCommentsSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogCommentsSchema = new Schema({
  slug: { type: String, required: true },
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        default:
          "https://res.cloudinary.com/cobraaz/image/upload/v1595758514/default_ndrqg2.jpg",
      },
      date: {
        type: Date,
        default: Date.now,
      },
      authId: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("BlogComments", blogCommentsSchema);
