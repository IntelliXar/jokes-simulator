//use client
import React from 'react';
import Header from "../components/Header";
import JokeContainer from "../components/JokeContainer";
import RootLayout from "./layout";

function Home() {
  return (
    <div>
      <RootLayout>
        <Header />
        <JokeContainer />
      </RootLayout>
    </div>
  );
}

export default Home;