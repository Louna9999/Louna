
// import Der from './Composants/derivee';
// import longueur from '../Fonctions/Longueur';
import React from 'react';
import jQuery from 'jquery';
// import b from '../json/b.json';
// import d from '../json/d.json';
// import useFetch from '../Fonctions/useFetch';
// import extractionDims from '../Fonctions/extractionDims';
// import extractionValue from '../Fonctions/extractionValue';
// import TraitementDonnées from './TraitementDonnées.jsx';


// const lien = "https://deezer.com"

const Accueil = () => {

    // const url = 'http://apps.who.int/gho/athena/api/GHO/WHOSIS_000001.json?'
const url = 'http://apps.who.int/gho/athena/api/?format=json'

    // fetch(
    //     url,
    //     {   method: 'POST',
    //         mode: 'no-cors',
    //         headers: new Headers(
    //            {"Content-Type": "text/plain",
    //             "Accept":"application/json"}
    //         ),
    //         body: JSON.stringify(
    //            {'name': 'Tom', 'password': 'Soyer'}
    //         )
    //      }
    //    ).then( response => { console.log(response);})
    //     .catch(err => console.log(err))
    
    jQuery.ajax(({
        type: 'GET',
        url: url,
        success: function(data) {
          console.log(data);
        },
        error: function(error) {
          console.log("FAIL....=================");
        }
      }))
    
    // var settings = {
    //     'cache': false,
    //     'dataType': "jsonp",
    //     "async": true,
    //     "crossDomain": true,
    //     "url": url,
    //     "method": "GET",
    //     "headers": {
    //         "accept": "application/json",
    //         "Access-Control-Allow-Origin":"*"
    //     }
    // }

    // .ajax(settings).done(function (response) {
    //     console.log(response);

    // });
    return ( 
         
        <div>
        Bonjour
        
        </div>
        
     );
    
}

 
export default Accueil;