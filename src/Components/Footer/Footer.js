import React from 'react';
import fb from "../../Assets/img/fb.png"
import insta from "../../Assets/img/insta.png"

export const Footer = () => {
	return (
		<footer className="social-media">
			<a href="https://www.facebook.com/reflex.radio.fm">
				<img className="facebook" src={fb} alt="facebook" />
			</a>

			<a href="https://www.instagram.com/reflex_fm/">
				<img className="insta" src={insta} alt="insta" />
			</a>
		</footer>
	);
};
