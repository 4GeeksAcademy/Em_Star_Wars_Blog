import React, {useContext, useState, useEffect}  from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import propTypes from "prop-types";
import Planets from "../views/planets.jsx"


export const Home = () => {

    const {store, actions} = useContext(Context)

	return(
		<>
			<h1>Planets</h1>
			<div className=" text-center mt-5">
				<div className="cards">
					<div className="cardLot text-center mt-5">
						{store.planetsInfo.map((item)=>	<Planets uid={item.uid} key={item.url} name={item.name}/>)}
					</div>
				</div>
			</div>
		</>
	)
};
