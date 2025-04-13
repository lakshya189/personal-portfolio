import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import About from "./components/about";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Testimonials />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
