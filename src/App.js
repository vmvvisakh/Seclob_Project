import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import DashBoardPage from './Pages/DashBoardPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
        <Route exact path='/' element={<HomePage />} >
        </Route>
        <Route exact path='dashboard' element={<DashBoardPage />} >
        </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
