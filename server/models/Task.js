import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

// https://github.com/graphql/graphql-js/issues/1518#issuecomment-438359822
ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const TaskSchema = new Schema({
  content: {
    type: String,
    requred: true
  },
  description: {
    type: String,
    requred: false
  },
  completed: {
    type: Boolean,
    requred: false
  }
});

export default mongoose.model("Task", TaskSchema);
