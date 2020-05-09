import React from 'react';
import "../styles/Header.css"
import { Link } from "react-scroll";

const Header = () => {
	return (
		<div className="header">
			<div className="header-content">
				<h1 className="title">What's in the fridge...?</h1>
				<h2 className="desc1">Tell us what you have in, and we will give you some recipe ideas.</h2>
				<Link
					activeClass="active"
					to="ingredients-input"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				>
					<i id="chevron" class="fas fa-chevron-down"></i>
				</Link>
			</div>
		</div>
	);
}

export default Header;