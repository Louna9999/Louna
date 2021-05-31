const Clic = () => {

const [nom, setNom] = useState('lou')
const poignee = (nom)=> {setNom ('louna')}
const poigneee = (nom)=> {setNom ('loulou')}

return (
    <div>
    <h2>Cliquez</h2>
        <p>Je m'appelle {nom}</p>
        <button onClick={poignee}>Cliquez</button>
        <button onClick={poigneee}>Cliquez!</button> 
    </div>    
        );
}

export default Clic