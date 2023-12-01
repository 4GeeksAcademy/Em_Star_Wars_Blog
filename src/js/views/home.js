import React from "react";
import "../../styles/home.css";
import propTypes from "prop-types";
import Planets from "../views/planets.jsx"

export const Home = () => (
	<div className="text-center mt-5">
		<Planets/>
	</div>
);
