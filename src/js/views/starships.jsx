import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";


export const starships = (props) => {
    const {store, actions} = useContext(Context)
    const params = useParams(props.uid);


    const [starshipsData, setStarshipsData] = useState({})

    useEffect(()=>{
        fetch("https://www.swapi.tech/api/starships/" + props.uid)
        .then(response => response.json())
        .then((data) => setStarshipsData(data.result.properties))
    })

return(
   <>  
       <div className="card mx-1" key={props.url}>
           <img src="..." className="card-img-top" alt="..."/>
           <div className="card-body" id={props.uid}>
               <h5 className="card-title">{props.name}</h5>
               <h5 className="card-title">{props.uid}</h5>
                   <p className="card-text"><strong>Model: </strong>{starshipsData.model}</p>
                   <p className="card-text"><strong>Passengers: </strong> {starshipsData.passengers}</p>
                   <Link to={"/specificStarship/" + props.uid}>
                   <button href="#" className="btn btn-primary">See more</button>
               </Link>
           </div>
       </div>
   </>
)
};

export default starships;