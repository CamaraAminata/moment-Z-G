import logo from './logo.svg';
import './App.css';
import NavBar from './Component/navBar';
import Home from './Component/home';
import About from './Component/about';
import Services from './Component/Services';
import CommentScreen from './Component/commentScreen';
import PortfolioScreen from './Component/portfolioScreen';
import ContactUs from './Component/contactUs';
import Fauteuil from './components/Fauteuil';
import Locaux from './components/Locaux';
import Tarifs from './components/Tarifs';
function App() {
   
  return (
    <div className="App">

        <NavBar />
      <Home/> 
      <Fauteuil/>
      <PortfolioScreen/>
      <Locaux/>
      <Tarifs/>
      <About/>
      <ContactUs/>


                </div>

  );
}

export default App;
