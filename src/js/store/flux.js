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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			planetsData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				
				var raw = JSON.stringify([]);
				
				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					// body: raw,
					redirect: 'follow'
				};

				//const [planetName, setPlanetName] = useState([]) ------------- EMILIO CONTINUAR CON ESTO
				
				fetch("https://www.swapi.tech/api/planets/1/", requestOptions)
				.then(response => response.json())
				//.then(result => setPlanetName(result)) ------------- EMILIO CONTINUAR CON ESTO
				.then(result => console.log(result))
				.catch(error => console.log('error', error));
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
			}
		}
	};
};

export default getState;
