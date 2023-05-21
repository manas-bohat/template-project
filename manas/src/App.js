import logo from './logo.svg';
import './App.css';
import NivoBar from './components/NivoBar';
import Venn from './components/Venn';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <List/>
      <Venn/>
      <NivoBar/>
    </div>
  );
}

export default App;
