import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Home from './Pages/Home';
import Slug from './Pages/Slug';
import About from './Pages/About';
import Error from './Pages/Error';
import Counter from './Pages/Counter'
import HookCounter from './Pages/HookCounter';
import Navbar from './Components/Navbar';
import UseEffectcounter from './Pages/UseEffectcounter';

function App() {
  return (
    <div>
    {/* <h1>This is a Home Page</h1> */}
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route exact path="/slug/:slug">
        <Slug />
      </Route>
      <Route exact path="/counter">
        <Counter />
      </Route>
      <Route exact path="/hookcounter">
        <HookCounter />
      </Route>
      <Route exact path="/useeffectcounter">
        <UseEffectcounter />
      </Route>
      <Route path="*">
        <Error />
      </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
