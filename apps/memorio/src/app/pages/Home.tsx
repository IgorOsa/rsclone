import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from '../components/Intro/Intro';
import LanguageSection from '../components/LanguageSection/LanguageSection';


export const Home = () => {
  return (
    <main style={{ minHeight: "100%"}}>
      <Intro />
      <LanguageSection />
    </main>
  );
};

export default Home;