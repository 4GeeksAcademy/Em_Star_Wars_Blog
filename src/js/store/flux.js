const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planetsInfo:[],
			specificPlanetData:[],
			starshipsInfo:[],
			myFavs:[]
		},
			actions: {
			// Use getActions to call a function within a fuction
			

			planetsData: () => {
				fetch("https://www.swapi.tech/api/planets",)
				.then(response => response.json())
				.then((data) => setStore({planetsInfo: data.results}))
			},
			starshipsData: () => {
				fetch("https://www.swapi.tech/api/starships",)
				.then(response => response.json())
				.then((data) => setStore({starshipsInfo: data.results}))
			},
			 addToFavs: (name) => {
				console.log("name is: " , name)
			 	 setStore({myFavs: name})
			 },




			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => { 
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		}
	};
};

export default getState;
