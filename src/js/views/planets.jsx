import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import "../../styles/planets.css";
import { Link, useParams } from "react-router-dom";


export const planets = (props) => {
    const {store, actions} = useContext(Context)
    const params = useParams(props.uid);

      const [planetData, setPlanetData] = useState({})
      
      useEffect(()=>{
          fetch("https://www.swapi.tech/api/planets/" + props.uid)
          .then(response => response.json())
          .then((data) => setPlanetData(data.result.properties))
        })

    return(
        <>  
            <div className="card mx-1" key={props.url}>
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body" id={props.uid}>
                    <h5 className="card-title">{props.name}</h5>
                    <h5 className="card-title">{props.uid}</h5>
                        <p className="card-text"><strong>Terrain: </strong>{planetData.terrain}</p>
                        <p className="card-text"><strong>Population: </strong> {planetData.population}</p>
                    <Link to={"/specificPlanet/" + props.uid}>
                        <button href="#" className="btn btn-primary">See more</button>
                    </Link>
                </div>
            </div>
        </>
    )
};
export default planets;