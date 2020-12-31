import React from 'react';
import fb from "../../assets/img/fb.png"
import insta from "../../assets/img/insta.png"

export const Footer = () => {
	return (
		<div className="social-media">
			<a href="https://www.facebook.com/reflex.radio.fm">
				<img className="facebook" src={fb} alt="facebook" />
			</a>

			<a href="https://www.instagram.com/reflex_fm/">
				<img className="insta" src={insta} alt="insta" />
			</a>
		</div>
	);
};
