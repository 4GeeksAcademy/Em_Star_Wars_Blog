import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import "../../styles/planets.css";

export const planets = (props) => {
    const {store, actions} = useContext(Context)

     const [planetData, setPlanetData] = useState({})

        fetch("https://www.swapi.tech/api/planets/" + props.uid)
            .then(response => response.json())
            .then((data) => setPlanetData(data.result.properties))
     

    return(
        <>  
            {/* <div className="cards">
                <div className="text-center mt-5">		 */}
                    <div className="card mx-1" key={props.url}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body" id={props.uid}>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text"><strong>TERRAIN: </strong>{planetData.terrain}</p>
                            <p className="card-text"><strong>POPULATION: </strong> {planetData.population}</p>
                            <a href="#" className="btn btn-primary">See more</a>
                        </div>
                    </div>
                {/* </div>     
            </div> */}
        </>
    )
};

export default planets;