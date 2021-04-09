import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Slug from './Pages/Slug';
import About from './Pages/About';
import Error from './Pages/Error';
import Counter from './Pages/Counter'
import HookCounter from './Pages/HookCounter';
import Navbars from './Component/Navbars';
import UseEffectcounter from './Pages/UseEffectcounter';
import RoboFriend from './containers/RoboFriend'
import Terniary from './Pages/Terniary';
// import Contexts from './ContextAPI/Contextapis';
import SignIn from './Pages/SignIn';
import AuthProvider from './ContextAPI/Auth';

function App() {
  return (
    <>
    {/* <h1>This is a Home Page</h1> */}
    {/* <Contexts> */}
    <AuthProvider>
      <Router>
        <Navbars />
        
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
      <Route exact path="/robofriend">
      <RoboFriend />
      </Route>
      <Route exact path="/terniary">
      <Terniary />
      </Route>
      <Route exact path="/signin">
      <SignIn />
      </Route>
      <Route path="*">
        <Error />
      </Route>
        </Switch>
      </Router>
      </AuthProvider>

      {/* </Contexts> */}
    </>
  );
}

export default App;
