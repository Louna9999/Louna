import Navig from './Components/Navig';
import Accueil from './Components/Accueil';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Maths from './Components/Maths';
import Observation from './Components/Observation';
import Limites from './Components/Limites';
import data0 from './json/OMS/data.json';
// import data1 from './json/OMS/data (1).json';
import data3 from './json/OMS/data (3).json';
import Statistiques from './Components/Statistiques';
import OMS from './Components/OMS';
import Jeux from './Components/Jeux';
import Sudoku from './Components/Sudoku';
import routeGraphes from './Fonctions/routesGraphes';
import importation from './importation';
import {fact} from './json/OMS/data.json';
const v=[]

async function a (){
const file = await import ('./json/OMS/data (1).json');
// const bb = file.replace('1','2')
// import (file)
// .then ((data)=>{console.log(data)}) 
// console.log(v)
console.log(file[6])}

const aa = a()
console.log(fact)
function App() {
  
  
  return (
    
    <Router>
      
    <div className="App">
      <Navig/>
      <div className="content">
      {/* <Switch> */}
        <Route exact path="/" >
          <Accueil/>
        </Route>
        <Route className="Maths" exact path="/Maths">
          <Maths/>
        </Route>
        <div className="fonctions">
        <Route exact path="/Maths/observation" >
          <Observation/>
        </Route>
        <Route exact path="/Maths/extremums" >
          <p>extremums</p>
        </Route>
        <Route exact path="/Maths/limites" >
        <div>
          <Limites/>
          </div>
        </Route>

        {/* Analyse de données */}

        <div className='stat'>
        <Route exact path="/stat">
          <Statistiques/>
          </Route>
          <Route exact path="/stat/OMS">
          <OMS/>
          </Route>
        {routeGraphes(data0,0)}
        {/* {routeGraphes(data1,1)} */}
        {routeGraphes(data3,3)}
        </div>
      </div>

      {/* Mini-jeux */}

      <div className="jeux">
        <Route exact path="/jeux">
          <Jeux/>
        </Route>
        <Route exact path="/jeux/sudoku">
          <Sudoku/>
        </Route>
      </div>
      {/* </Switch> */}
        
    </div>


    </div>
    </Router>
  );
}

export default App;
