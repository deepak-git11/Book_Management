import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routepath from './Component/Routepath';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routepath />
      </BrowserRouter>
    </div>

  );
}

export default App;
