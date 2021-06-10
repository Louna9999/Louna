import {Link} from 'react-router-dom';
import React from 'react';

const Navig = () => {
    return (
        <nav className="navig">
            <h1>Site</h1>
            <div className="lien">
                <Link to="/">Accueil</Link>
                <Link to="/Maths">Maths</Link>
                <Link to="/jeux">Jeux</Link>
                <Link to="/stat">Statistiques</Link>
            </div>
        </nav>
    
    );
}
 
export default Navig;
