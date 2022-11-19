import './App.css';
import { useRef } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Contact } from './pages/contact/Contact';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Skills } from './pages/skills/Skills.js';
import { Projects } from './pages/projects/Projects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const contactDivRef = useRef(null);
  const scrollToContact = () => contactDivRef.current.scrollIntoView();

  const homeDivRef = useRef(null);
  const scrollToHome = () => homeDivRef.current.scrollIntoView();

  const aboutDivRef = useRef(null);
  const scrollToAbout = () => aboutDivRef.current.scrollIntoView();

  const skillsDivRef = useRef(null);
  const scrollToSkills = () => skillsDivRef.current.scrollIntoView();

  const projectsDivRef = useRef(null);
  const scrollToProjects = () => projectsDivRef.current.scrollIntoView();

  return (
    <div className="App">
      <Navbar scrollToContact={scrollToContact} scrollToHome={scrollToHome} scrollToAbout={scrollToAbout} scrollToSkills={scrollToSkills} scrollToProjects={scrollToProjects} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Home homeDivRef={homeDivRef} scrollToContact={scrollToContact} />
      <About aboutDivRef={aboutDivRef} scrollToContact={scrollToContact} />
      <Skills skillsDivRef={skillsDivRef} />
      <Projects projectDivRef={projectsDivRef} />
      <Contact contactDivRef={contactDivRef} />
    </div>
  );
}

export default App;
