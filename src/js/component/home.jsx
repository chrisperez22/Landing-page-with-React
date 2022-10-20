import React from "react";
import Navbar from "./Navbar.jsx";
import Box from "./Box.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
<div>
	<Navbar />
	<div className="container">
	<Box />
		</div>
</div>
	);
};

export default Home;
