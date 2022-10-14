import React, { useContext } from "react";
import "../../styles/home.css";
import { FirstColor } from "../component/firstcolor";
import { SecondColor } from "../component/secondcolor";
import { ThirdColor } from "../component/thirdcolor";
import { FourthColor } from "../component/fourthcolor";
import { Footer } from "../component/footer";

export const Home = () => {
	return (
		<div>
			<FirstColor />
			<SecondColor />
			<ThirdColor />
			<FourthColor />
			<Footer />
		</div>

	);
};