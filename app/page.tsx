import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contacts from "./components/contact";

const Main = () => {
  return (
    <main>
      <About />
      <Contacts />
      <Navbar />
    </main>
  )
}

export default Main;