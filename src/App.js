import React from 'react';
import './App.css';
import Header from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

<div className='bkgrd'>

<Header title="Galeria de Imagenes con React" />
  
  <div className='container'>

<div className='gallery'>
<Cards
image='https://cdnb.artstation.com/p/assets/images/images/040/391/521/smaller_square/sam-brannan-rogerfederer-wimbledon2017happy-s.jpg?1628707660'
title='Roger Federer'
description='El mejor de la Historia indudablemente, Único en su clase.'
/>
</div>

<div className='gallery'>
<Cards
image='https://cdna.artstation.com/p/assets/images/images/035/257/856/smaller_square/sam-brannan-rafa-rg2020-win-draw-s.jpg?1614526726'
title='Rafael Nadal'
description='Considerado como el "goat", un jugador excepcional.'
/>
</div>

<div className='gallery'>
<Cards
image='https://cdna.artstation.com/p/assets/images/images/034/621/744/smaller_square/sam-brannan-stanwavrinka-ao2014-s.jpg?1612792759'
title='Stan Wawrinka'
description='dueño de un revés envidiable, Competidor puro.'
/>
</div>

<div className='gallery'>
<Cards
image='https://cdna.artstation.com/p/assets/images/images/034/968/376/smaller_square/sam-brannan-medvedev-ao2021-s.jpg?1613733286'
title='Daniil Medvedev'
description='Jugador llamado a comandar el circuito ATP.'
/>
</div>

</div>
<Footer footer=" © 2022 Copyright Todos los derechos reservados - Galeria de Imagenes: Tenistas destacados del circuito "  button="More Info." />
</div>

  );
  }
  export default App;
