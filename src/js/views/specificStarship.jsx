import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const specificStarship = (props) => {
     const {store, actions} = useContext(Context)
       const [myStarship, setMyStarship] = useState({})

    const params = useParams();

       useEffect(()=>{
           fetch("https://www.swapi.tech/api/starships/" + params.uid)
           .then(response => response.json())
           .then((data) => setMyStarship(data.result.properties))
        },[])

    return(
        <>  
            <div className="card mx-1" key={props.url}>
                <h1 className="text-dark">{myStarship.name}</h1>
                <ul>
                    <li><strong>Model: </strong> {myStarship.model}</li>
                    <li><strong>Starship class: </strong>{myStarship.starship_class}</li>
                    <li><strong>Manufacturer: </strong>{myStarship.manufacturer}</li>
                    <li><strong>Price: </strong> {myStarship.cost_in_credits}</li>
                    <li><strong>Length: </strong>{myStarship.length}</li>
                    <li><strong>Passengers:  </strong>{myStarship.passengers}</li>
                    <li><strong>Cargo capacity: </strong>{myStarship.cargo_capacity}</li>
                    <li><strong>cConsumables: </strong>{myStarship.consumables}</li>
                    <li><strong> Created: </strong>{myStarship.created}</li>
                </ul>
            </div>
        </>
    )
};

 export default specificStarship;