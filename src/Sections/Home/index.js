import React from 'react';
import Navbar from './../../Components/Layout/Navbar';
import HeaderHome from './../../Components/Layout/HeaderHome';

export default function Home(props) {
  return (
    <>
      <Navbar />
      <HeaderHome />
      <div className="content-generic">
        <h1>Home</h1>
      </div>
    </>
  );
}