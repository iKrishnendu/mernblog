import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema({
  img: {
    type: String,
  },
  title: {
    type: String,
    // required: true,
  },
  shortDesc: {
    string: String,
  },
  body: {
    type: String,
    // required: true,
  },
  author: { type: Schema.Types.ObjectId, ref: "Users" },
});

// Export the model using the schema function above

export default mongoose.model("Post", PostSchema);
