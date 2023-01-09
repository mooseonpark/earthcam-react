import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import videoBg from '../assets/video.mp4';
import japan from '../assets/japan.png';
import thailand from '../assets/thailand.png';
import usa from '../assets/usa.png';
import taiwan from '../assets/taiwan.png';
import finland from '../assets/finland.png';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

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

const Countries = styled.div`
	display: flex;
	position: absolute;
	z-index: 99999;
	img {
		width: 65px;
		opacity: 0.6;
	}
	img:hover {
		transition: linear 0.6s;
		transform: scale(1.5);
		opacity: 1;
	}
`;

const Writing = styled.h1`
	color: transparent;
	white-space: nowrap;
	&:hover {
		content: 'Hello real live world!';
		position: absolute;
		top: 24rem;
		color: #fff;
		overflow: hidden;
		border-right: 2px solid #fff;
		animation: typing 7s steps(31) infinite;
	}
`;

const Main = () => {
	return (
		<Container>
			<Overlay />
			<Video src={videoBg} autoPlay loop muted />
			<Countries>
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
			</Countries>
			<Writing>ee</Writing>
		</Container>
	);
};

export default Main;
