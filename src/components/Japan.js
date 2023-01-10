import React from 'react';
// import Mycomponent from './Mycomponent';
// import ReactPlayer from 'react-player';
// import styled from 'styled-components';
import {
	GoogleMap,
	useLoadScript,
	// useJsApiLoader,
} from '@react-google-maps/api';

// const Overlay = styled.div`
// 	position: absolute;
// 	top: 0;
// 	left: 0;
// 	width: 100vw;
// 	height: 100vh;
// 	background-color: rgba(0, 0, 0, 0.4);
// `;
// const containerStyle = {
// 	width: '800px',
// 	height: '800px',
// };

// const center = {
// 	lat: 37.5624945,
// 	lng: 126.9752957,
// };
const Japan = () => {
	const { isLoaded } = useLoadScript({
		// googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
		googleMapsApiKey: 'AIzaSyBITe_nLJByutJisIZPV1bnGxJfxIa8A-g',
	});

	if (!isLoaded) return <div>Loading...!!!!</div>;
	return (
		<div>
			{/* <ReactPlayer
				className="react-player"
				url={
					'https://www.youtube.com/watch?v=QOjmvL3e7Lc&ab_channel=TokyoLiveCamera'
				}
				width="100vw"
				height="100vh"
				loop={true}
				playing={true}
				muted={true}
				controls={false}
			></ReactPlayer> */}
			{/* <Mycomponent /> */}
			{/* <Overlay /> */}
			<Map />
		</div>
	);
};

export default Japan;

function Map() {
	return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} />;
}
