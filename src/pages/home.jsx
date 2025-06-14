import React from 'react';
import '../assets/css/home.css'; 
import Footer from '../components/footer.jsx';
import Card from '../components/card.jsx';

function Home() {
  return (
    <div className='home-page'>
      <div className='home-content'>
        <Card />
        <Footer />
      </div>

    </div>
  );
}

export default Home;
