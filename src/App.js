import './components/Wrapper/Wrapper.scss'

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
