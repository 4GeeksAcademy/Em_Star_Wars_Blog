import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import propTypes from "prop-types";
import Planets from "./planets.jsx"
import Starships from "./starships.jsx"


export const Home = () => {

    const {store, actions} = useContext(Context)

	return(
		<>
			<h1>Planets</h1>
			<div className="planets text-center mt-5">
				<div className="planetCards">
					<div className="planetLot text-center mt-5">
						{store.planetsInfo.map((item)=>	<Planets uid={item.uid} key={item.url} name={item.name}/>)}
					</div>
				</div>
			</div>
			<h1>Starships</h1>
			<div className="starships text-center mt-5">
				<div className="starshipCards">
					<div className="starshipLot text-center mt-5">
						{store.starshipsInfo.map((item)=>	<Starships uid={item.uid} key={item.url} name={item.name}/>)}
					</div>
				</div>
			</div>
		</>
	)
};
