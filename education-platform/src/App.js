import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;
