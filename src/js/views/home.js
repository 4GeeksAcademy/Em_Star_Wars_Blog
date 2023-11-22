import React from "react";
import "../../styles/home.css";
import propTypes from "prop-types";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Planets</h1>
		<div>
			<div className="card">
				<img src="..." className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">here goes the planet's name</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
