import React from 'react';
import styled, { keyframes, withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import videoBg from '../assets/video.mp4';
// import japan from '../assets/japan.png';
// import thailand from '../assets/thailand.png';
// import usa from '../assets/usa.png';
// import taiwan from '../assets/taiwan.png';
// import finland from '../assets/finland.png';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

// background video
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

// const Countries = styled.div`
// 	display: flex;
// 	position: absolute;
// 	z-index: 99999;
// 	img {
// 		width: 65px;
// 		opacity: 0.6;
// 	}
// 	img:hover {
// 		transition: linear 0.6s;
// 		transform: scale(1.5);
// 		opacity: 1;
// 	}
// `;

// main sentence
const typing = keyframes`
	0% {
		width: 0%;
	}
	50% {
		width: 350px;
	}
	100% {
		width: 0%;
	}
`;

const Writing = styled.h1`
	color: transparent;
	white-space: nowrap;
	display: flex;
	justify-content: center;
	&:after {
		content: 'Hello Real LIVE World!';
		position: absolute;
		top: 24rem;
		color: #fff;
		overflow: hidden;
		border-right: 2px solid #fff;
		animation: ${typing} 7s steps(25) infinite;
	}
`;

// link
const Button = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 60px;
	font-size: 17px;
	/* color: white; */
	opacity: 0.7;
	border-radius: 20px / 20px;
	cursor: pointer;
	&:hover {
		opacity: 1.5;
	}
`;
// const linkStyle = {
// 	position: 'absolute',
// 	top: 0,
// 	// display: 'flex',
// 	// justifyContent: 'center',
// 	textDecoration: 'none',
// 	color: 'white',
// };
const Main = () => {
	return (
		<Container>
			<Overlay />
			<Video src={videoBg} autoPlay loop muted />
			{/* <Countries>
				<Link to="/japan">
					<img src={japan} alt="japan" />
				</Link>
				<Link to="/thailand">
					<img src={thailand} alt="thailand" />
				</Link>
				<Link to="/usa">
					<img src={usa} alt="usa" />
				</Link>
				<Link to="/taiwan">
					<img src={taiwan} alt="taiwan" />
				</Link>
				<Link to="/finland">
					<img src={finland} alt="finland" />
				</Link>
			</Countries> */}
			<Writing />
			<Link to="/countries">
				<Button>Let's dive into a LIVE world 🌍</Button>
			</Link>
		</Container>
	);
};

export default Main;
