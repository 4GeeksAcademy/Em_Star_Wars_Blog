import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";


export const specificPlanet = (props) => {
    // const {store, actions} = useContext(Context)

    //   const [specificPlanet, setSpecificPlanet] = useState({})

    //      fetch("https://www.swapi.tech/api/planets/" + props.uid)
    //         .then(response => response.json())
    //         .then((data) => console.log(data.result.properties))

    return(
        <>  
            <div className="card mx-1" key={props.url}>
                <h1>hola</h1>
            </div>
        </>
    )
};

export default specificPlanet;