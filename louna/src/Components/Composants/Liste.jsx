

const Liste  = ({listes, supp}) => {
    
    return (
        <div>
        <div className="Liste">
            {listes.map((liste) => (
                <div className="A" key={liste.id}>
                    <p> {liste.nom} dit {liste.texte}                    
                    <button onClick={()=>supp(liste.id)}>Supprimer</button>
                    </p>
                </div>
            ))}
        </div>
        </div>
      );
}
 
export default Liste ;