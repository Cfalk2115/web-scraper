// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the Note schema
var noteSchema = new Schema({
    _headlineId: {
      type: Schema.Types.ObjectId,
      ref: "Headline"
    },
    date: {
      type: Date,
      default: Date.now
    },
    noteText: String
  });
  var Note = mongoose.model("Note", noteSchema);
  module.exports = Note;