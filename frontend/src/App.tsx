import { useEffect, useState } from 'react';
import './App.css';
import { listarRestaurantes } from './services/Restaurant.service';
import { Restaurant } from './interfaces/Restaurant';

function App() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    listarRestaurantes()
      .then((restaurants) => {
        console.log(restaurants)
        setRestaurants(restaurants);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
       {restaurants ? restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.cuisine}</p>
          <button>Agregar Comentario</button>
          <button>Agregar Calificación</button>
        </div>
      )) : null}

    </div>
  );
}

export default App;
