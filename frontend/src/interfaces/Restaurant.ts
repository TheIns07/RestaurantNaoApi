export interface Restaurant {
    _id?: string; // Opcional si se usa en el frontend como un identificador único
    name: string;
    address: {
      building: string;
      coord: [number, number]; // Array de dos números
      street: string;
      zipcode: string;
    };
    borough: string;
    cuisine: string;
    grades: {
      date: Date;
      score: number;
    }[];
    comments: {
      date: Date;
      comment: string;
      _id: string; // Considerando que el esquema tiene un campo _id de tipo String
    }[];
  }