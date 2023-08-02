import { CContainer } from '@coreui/react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import { ListRestaurants } from './components/ListRestaurants';

function App() {
 
  

  return (
    <div className="App">
      <CContainer>
        <ListRestaurants/>
      </CContainer>
    </div>
  );
}

export default App;