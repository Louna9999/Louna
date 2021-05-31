import Navig from './Navig';
import Fonc from './Accueil';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Maths from './Maths'
function App() {
  
  return (
    <Router>
    <div className="App">
      <Navig/>
      <div className="content">
      <Switch>
        <Route exact path="/" >
          <Fonc/>
        </Route>
        <Route className="Maths" exact path="/Maths">
          <Maths/>
        </Route>
      </Switch>
        
      </div>
      
    </div>
    </Router>
  );
}

export default App;
