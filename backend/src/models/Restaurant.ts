import { Schema,  model } from 'mongoose';

const restaurantSchema = new Schema({
  name: String,
  address: {
    building: String,
    coord: [Number, Number], 
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      score: Number,
      comment: String,
    },
  ]
});

restaurantSchema.index({name: 'text', borough: 'text', cuisine: 'text'})

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;