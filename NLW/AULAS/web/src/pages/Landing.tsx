import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom'

import '../styles/pages/landing.css';

import logoImg from '../imagens/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />

<main>
  <h1>Leve felicidade para o mundo</h1>
  <p>Visite orfanatos e mude o dia de muitas crinaças.</p>
</main>
     
    <div className="location">
      <strong>Mato Grosso</strong>
      <span>Tangará da Serra.</span>
    </div>

    <Link to="/App" className="enter-app">
      <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6 )" />
    </Link>
    </div>
    </div> 

    );
}

export default Landing;