export interface Restaurant {
  _id: string;
  name: string;
  address: {
    building: string;
    coord: [number, number]; 
    street: string;
    zipcode: string;
  };
  borough: string;
  cuisine: string;
  grades: {
    date: Date;
    score: number;
    comment: string;
  }[];
}