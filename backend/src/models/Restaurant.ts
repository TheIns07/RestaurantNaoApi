import { Schema, Types, model } from 'mongoose';

const restaurantSchema = new Schema({
  name: String,
  address: {
    building: String,
    coord: [Number], 
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      score: Number,
    },
  ],
  comments: [
    {
      date: Date,
      comment: String,
      _id: Types.ObjectId,
    },
  ],
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;