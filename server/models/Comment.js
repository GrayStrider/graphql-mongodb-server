import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

// https://github.com/graphql/graphql-js/issues/1518#issuecomment-438359822
ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  }
});

export default mongoose.model("Comment", CommentSchema);
