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
		</Container>
	);
};

export default Main;
