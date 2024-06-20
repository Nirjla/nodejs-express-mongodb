import mongoose from "mongoose";

const schema = mongoose.Schema({
      title: {
            type: String,
            required: [true, 'Title is required']
      },
      description: {
            type: String,
            required: [true, 'Description is required']
      },
      published: {
            type: String,
            default: false
      }
},
      { timestamps: true }
)

schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject()
      object.id = _id;
      return object
})

const Tutorial = mongoose.model("tutorial", schema);

export default Tutorial