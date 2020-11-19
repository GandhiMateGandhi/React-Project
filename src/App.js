
import './css/wrapper.css'

import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      
      <Navbar />

      <Main />
    </div>
  );
}

export default App;
