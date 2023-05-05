import './App.css';
import NavBar from './Composants/NavBar';
import Home from './Composants/Home';
import image from './image/back.png';

function App() {
  return (
    <div className="App">
      
      <section className='home'>  
        <img src={image} className="image" alt=""/>
      < NavBar />
      < Home />

      </section>
    </div>
  );
}

export default App;
