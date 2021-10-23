import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Login from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
