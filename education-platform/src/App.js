import logo from './logo.svg';
import './App.css';
import MyStudent from './pages/my_students';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <HomeContent />
      <Footer /> */}
      <MyStudent/>
    </div>
  );
}

export default App;
