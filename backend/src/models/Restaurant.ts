import { Schema,  model } from 'mongoose';

const restaurantSchema = new Schema({
  name: String,
  address: {
    building: String,
    coord: {
      latitude: Number,
      longitude: Number
    }, 
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  radius: Number,
  grades: [
    {
      date: Date,
      score: Number,
      comment: String,
    },
  ]
});

restaurantSchema.index({name: 'text', borough: 'text', cuisine: 'text', 'address.coord': '2dsphere'})

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;