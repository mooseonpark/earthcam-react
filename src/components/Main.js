import React from 'react';
import videoBg from '../assets/video.mp4';
import styled from 'styled-components';

const Video = styled.video`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`;
const Main = () => {
	return (
		<div>
			<Video src={videoBg} autoPlay loop muted />
		</div>
	);
};

export default Main;
