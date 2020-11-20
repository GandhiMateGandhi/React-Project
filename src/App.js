import './Wrapper.scss'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='Wrapper'>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
