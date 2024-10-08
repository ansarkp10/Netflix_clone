import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost title='Action' isSmall/>
      <RowPost title='Drama' isSmall/>
      <RowPost title='Romance' isSmall/>
      <RowPost title='Horror' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
