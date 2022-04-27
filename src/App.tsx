import React, {useState, useEffect} from 'react';
import './reset.css'
import styles from './App.module.scss';
import Nav from './Components/Nav/Nav';
import Carousel from './Components/Carousel/Carousel';
import Categories from './Components/Categories/Categories';
import CategoriesBar from './Components/CategoriesBar/CategoriesBar';
import Deal from './Components/Deal/Deal';
import Footer from './Components/Footer/Footer';
import Products from './Components/Products/Products';


const App: React.FC = () => {

  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 2) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

//check if the user is scrolling and set the state accordingly
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



return (
 <div className={styles.container}>
 
 <Nav />
 <CategoriesBar />

 <Carousel />
 <Categories />
 <Deal />
 <Categories />
 <Deal />
 <Deal />
 <Deal />
 <Products />
 <Footer />
 </div>
  );
}

export default App;
