import {useState} from 'react';
import { Link } from 'react-router-dom';
import Graphe from './Graphes';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Limites from './Limites';
import Observation from './Observation';

const Maths = () => {
  const [fonction, setFonction] = useState();
  const graphe = (e) => {
    e.preventDefault();
    const blog = {fonction}

  }
  const o = Observation(fonction)
  
    return (
      <Router>
          <div className='Maths'>
          <div className="sous-pages">
            <Link to="/Maths/limites">Limites</Link>
            <Link to="/Maths/observation">Observation</Link>
            <Link to="/Maths/extremums">Extremums</Link>
          </div>
          <h1>Observons diverses fonctions</h1>
          <form onSubmit={graphe}>
          <input type="number" required value={fonction} onChange={(e)=>setFonction(e.target.value)} />
          <select>
            <option value="exp(x)">exp(x)</option>
            <option value="sin(x)">sin(x)</option>
          </select>
          
          </form>
          </div>
      <div className="fonctions">
        <Route exact path="/Maths/limites" >
        <div>
            <p>J'ai {fonction} ans</p>
        
          <p>ooo</p>
          <Limites/>
          </div>
        </Route>
        <Route exact path="/Maths/observation" >
          <p>observation</p>
          <p>{o}</p>
        </Route>
        <Route exact path="/Maths/extremums" >
          <p>extremums</p>
        </Route>
        </div>
      </Router>
        
      );
}
 
export default Maths;