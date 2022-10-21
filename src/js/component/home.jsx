import React from "react";
import Navbar from "./Navbar.jsx";
import Box from "./Box.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import jobs from "../../img/4NJQM5U3X5BKJIVJDZQ33HRYUE.png"
import geeks from "../../img/madrid-1.png"
import classes from "../../img/coding-for-kids-1.png"
import coding from "../../img/depositphotos_62689899-stock-photo-programmer-occupation-writing-programming-code.png"

//create your first component
const Home = () => {
	const cardInfo = [
		{
			title: "Dynamic Classes",
			text: "Get access to out top-notch knowledge, taught by certified professionals",
			img: classes
		},
		{
			title: "Interactive Exercises",
			text: "You can enjoy and play around with our various resources. State-of-the-art practices with comprehensive video tutorials for further assistance.",
			img: geeks
		},
		{
			title: "Exciting Layout",
			text: "We assure you that our beautiful and moder layout will be of your liking. Our goal is to incentivice you to stay glued to your screen as much time as possible so you become a pro.",
			img: coding
		},
		{
			title: "Job Preparedness",
			text: "After you graduate, we will offer other resources to ensure you find employment in this marvelous field within a year. There's a whole other world out there to explore.",
			img: jobs
		},
	]
	return (
<div>
	<Navbar />
	<div className="container">
	<div className="row">
	<Box />
	</div>
	<div className="row">
	{	cardInfo.map((titles, i)=>{
			return <Card title={titles.title} text={titles.text} img={titles.img} key={i}/>
		})}

	</div>
	</div>
	<Footer />
</div>
	);
};

export default Home;
