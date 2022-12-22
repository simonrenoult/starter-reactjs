import React from 'react';
import {SayHello} from "../../components/SayHello/say-hello";


const Home = () => {
  const someone = "Simon";
  return <SayHello to={someone}></SayHello>;
};

export default Home;
