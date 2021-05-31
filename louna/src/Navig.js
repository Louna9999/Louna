import {Link} from 'react-router-dom';
const Navig = () => {
    return (
        <nav className="navig">
            <h1>Site</h1>
            <div className="lien">
                <Link to="/">Accueil</Link>
                <Link to="/Maths">Maths</Link>
                <Link to="/jeux">Jeux</Link>
            </div>
        </nav>
    
    );
}
 
export default Navig;
