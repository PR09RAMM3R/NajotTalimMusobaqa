import React from 'react';
import Nav from './Components/nav.js';
import Footer from './Components/footer.js';
import Categories from './Components/categories.js';
import Bestselling from './Components/bestselling.js';
import Topnavbar from './Components/topNavbar.js';
import Most from './Components/most.js';
import Explore from './Components/explore.js';
import New from './Components/new.js';

function App() {  
  return (
    <div className="App">
        <Topnavbar />
        <Nav />
        <Most />
        <Categories />
        <Bestselling />
        <Explore />
        <New />
        <Footer />
      </div>
  );
}

export default App;