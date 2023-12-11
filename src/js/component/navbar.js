import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext }  from "react";


export const Navbar = () => {
	const {store, actions} = useContext(Context)
	{console.log(store.myFavs)}
	return (
		<>
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">--STAR-WARS--</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Planets & Starships</button>
					</Link>
				</div>
				<div className="ml-auto">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
						Favorites
					</button>
				</div>
			</nav>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">Favorites</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<ul>
							{store.myFavs.map((item)=> <li id={item.uid}>{item}</li>)}
						</ul>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Save changes</button>
					</div>
					</div>
				</div>
			</div>
		</>
	);
};
