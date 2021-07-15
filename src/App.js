import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './views/home/HomePage';
import { NavBar } from './components';

const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path="/" component={HomePage}/>
      </Router>
    </div>
  );
}

export default App;
