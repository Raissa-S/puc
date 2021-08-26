import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Homepage from './components/hompage'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      
      <Router>
          <Navbar></Navbar>
        <Switch>
          <Route  exact path="/"> <Homepage></Homepage> </Route>
          <Route  path="/about">about</Route>
          <Route  path="/contact">contact</Route>
          <Route  path="/admission">admission</Route>
          <Route  path="/courseRegistration"></Route>
          <Route  path="/faculties"></Route>
          <Route  path="/professionalSite"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
