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
     },[])
    var imageURL = "https://starwars-visualguide.com/assets/img/starships/" + props.uid + ".jpg"
return(
   <>  
       <div className="card mx-1" key={props.url}>
           <img src={imageURL} onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} className="card-img-top" alt="..."/>
           <div className="card-body" id={props.uid}>
               <h5 className="card-title">{props.name}</h5>
               <h5 className="card-title">{props.uid}</h5>
                   <p className="card-text"><strong>Model: </strong>{starshipsData.model}</p>
                   <p className="card-text"><strong>Passengers: </strong> {starshipsData.passengers}</p>
                   <Link to={"/specificStarship/" + props.uid}>
                   <button href="#" className="btn btn-secondary">See more</button>
               </Link>
                <button onClick={() => actions.addToFavs(props.name)} className="btn btn-secondary">
                    {actions.corazonColor(props.name) ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg> 
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                        </svg>
                    }
                </button>
           </div>
       </div>
   </>
)
};

export default starships;