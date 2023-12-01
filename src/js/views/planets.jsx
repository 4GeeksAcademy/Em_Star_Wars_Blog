import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import "../../styles/planets.css";

export const planets = () => {
    const {store, actions} = useContext(Context)
     
    return(
        <>  
            <h1>Planets</h1>
            <div className="cardLot">
                {store.planetsInfo.map((item)=>
                <div className="text-center mt-5">		
                    <div className="card mx-1" key={item.uid}>
                        <img src="..." className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">TERRAIN: XXX</p>
                            <p className="card-text">POPULATION: XXX</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                    )}
                    
            </div>
                <br />
                <a href="#" className="btn btn-success">
                    If you see this green button, bootstrap is working
                </a>
        </>
    )
};

export default planets;