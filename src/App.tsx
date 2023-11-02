
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
