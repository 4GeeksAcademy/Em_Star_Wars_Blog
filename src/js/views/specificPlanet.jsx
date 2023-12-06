import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


export const specificPlanet = (props) => {
     const {store, actions} = useContext(Context)

    //  {store.planetsInfo.map((item)=> setBasicInfo(item.uid,item.url, item.name))}

       const [myPlanet, setMyPlanet] = useState({})
    //    const [basicInfo, setBasicInfo] = useState({})

          fetch("https://www.swapi.tech/api/planets/1")
             .then(response => response.json())
             .then((data) => setMyPlanet(data.result.properties))

    return(
        <>  
            <div className="card mx-1 w-4" key={props.url}>
                <h1>{myPlanet.name}</h1>
                <ul>
                    <li>Diameter: {myPlanet.diameter}</li>
                    <li>Rotation period: {myPlanet.rotation_period}</li>
                    <li>Orbital period: {myPlanet.orbital_period}</li>
                    <li>Gravity: {myPlanet.gravity}</li>
                    <li>Population: {myPlanet.population}</li>
                    <li>Climate: {myPlanet.climate}</li>
                    <li>Terrain: {myPlanet.terrain}</li>
                    <li>Surface water: {myPlanet.surface_water}</li>
                    <li>Created: {myPlanet.created}</li>
                </ul>
            </div>
        </>
    )
};

 export default specificPlanet;