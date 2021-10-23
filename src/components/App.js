import '../styles/app.css';
import NavBar from './NavBar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Form from './Form';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Form />
    </div>
  );
}

export default App;
