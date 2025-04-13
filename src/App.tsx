import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy load components
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/about'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={<LoadingScreen />}>
          <div className="app">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <ContactForm />
            </main>
            <Footer />
            <ScrollToTop />
            <ToastContainer position="bottom-right" theme="colored" />
          </div>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
