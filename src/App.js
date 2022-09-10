import logo from './logo.svg';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import InnerPage from './components/InnerPage';
import Favorites from './components/Favorites';
import Course from './components/Course';
import Community from './components/Community';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/inner_page" exact element={<InnerPage />} />
        <Route path="/favorites" exact element={<Favorites />} />
        <Route path="/course" exact element={<Course />} />
        <Route path="/community" exact element={<Community />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
