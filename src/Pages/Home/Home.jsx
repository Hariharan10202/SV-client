import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Collections from '../../Components/Collections/Collections';
import Work from '../../Components/Work/Work';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Collections />
      <Work/>
    </div>
  );
};

export default Home;
