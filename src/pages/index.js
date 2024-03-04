import * as React from "react"

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

import './output.css';

const IndexPage = () => {
  return (
    <main>
      <body class="h-screen bg-gradient-to-b from-blue-200 to-purple-500">
        <h1>Title</h1>
        <Navbar />
        <About />
        <Gallery />
        <Contact />
      </body>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
