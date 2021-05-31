.content.lien{
  margin-left: auto;
}
.content a:hover {
  color: #d31eda;
}
.content a {
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
}

const [suite,setSuite] = useState ([{nom:'Antoine',texte:'Salut',id:1},{nom:'Maria',texte:'Hola',id:2}]);


const suppp =(id)=> {
  const suitesbis = suite.filter(liste => liste.id!==id);
  setSuite(suitesbis);
};

<Liste listes={suite.filter((liste)=>liste.nom === 'Maria')} supp={suppp} />



    



const [nom, setNom] = useState('lou')
const poignee = (nom)=> {setNom ('louna')}
const poigneee = (nom)=> {setNom ('loulou')}    
<h2>Cliquez</h2>
                <p className="nom">Je m'appelle {nom}</p>
                <button onClick={poignee}>Cliquez</button>
                <button onClick={poigneee}>Cliquez!</button> 


                for (let i=0; i<100; i++) {
                  if


                  path={"${http://localhost:3000}/Maths"}