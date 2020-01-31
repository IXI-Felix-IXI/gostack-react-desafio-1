import React from 'react';
import './chatHeader.css';

import facebookImg from './facebook.png';

function Header () {
  return(
    <div className="header">
      <img src={facebookImg} alt="Facebook"/>
      <a href="#">Meu Perfil</a>
    </div>
  )
};

export default Header;