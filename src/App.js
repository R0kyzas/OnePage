import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Header/Navigation';
import Logo from './Components/Header/Logo';
import Hero from './Components/Hero/Hero';
import HeroButton from './Components/Hero/HeroButton';
import HeroServices from './Components/Hero/HeroServices';


function App() {
  return (
    <div className='App'>
      <header className='fixed-top'>
        <div className='container d-flex aling-items-center justify-content-between'>
            <Logo />
            <Navigation />
        </div>
      </header>
      <section className='d-flex hero'>
        <div className='container position-relative hero-wrap'>
            <Hero />
            <HeroButton />
            <HeroServices />
        </div>
      </section>
    </div>
  );
}

export default App;
