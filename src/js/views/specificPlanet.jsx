import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const specificPlanet = (props) => {
     const {store, actions} = useContext(Context)
       const [myPlanet, setMyPlanet] = useState({})

    const params = useParams();

       useEffect(()=>{
           fetch("https://www.swapi.tech/api/planets/" + params.uid)
           .then(response => response.json())
           .then((data) => setMyPlanet(data.result.properties))
        },[])

    return(
        <>  
            <div className="card mx-1" key={props.url}>
                <h1 className="text-dark">{myPlanet.name}</h1>
                <ul>
                    <li><strong>Diameter: </strong> {myPlanet.diameter}</li>
                    <li><strong>Rotation period: </strong>{myPlanet.rotation_period}</li>
                    <li><strong>Orbital period: </strong>{myPlanet.orbital_period}</li>
                    <li><strong>Gravity: </strong> {myPlanet.gravity}</li>
                    <li><strong>Population: </strong>{myPlanet.population}</li>
                    <li><strong>Climate:  </strong>{myPlanet.climate}</li>
                    <li><strong>Terrain: </strong>{myPlanet.terrain}</li>
                    <li><strong>Surface water: </strong>{myPlanet.surface_water}</li>
                    <li><strong>Created: </strong>{myPlanet.created}</li>
                </ul>
            </div>
        </>
    )
};

 export default specificPlanet;