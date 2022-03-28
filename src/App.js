import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Pricing from './Component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold ">
        <Header></Header>
        <Pricing></Pricing>
     </h1>
    </div>
  );
}

export default App;
