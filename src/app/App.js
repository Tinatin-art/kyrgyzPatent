import '../style/App.css';
import '../style/main.scss'
import {
  Route,
  Routes
} from 'react-router-dom';
import MainPage from './pages/main-page/MainPage';
import TimsPage from './pages/tims/TimsPage';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/tims' element={<TimsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
