import React from 'react';
import Mycomponent from './Mycomponent';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
	width: '800px',
	height: '800px',
};

const center = {
	lat: 37.5624945,
	lng: 126.9752957,
};
const Japan = () => {
	// const { isLoaded } = useLoadScript({
	// 	googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	// });

	// if (!isLoaded) return <div>Loading...</div>;
	return (
		<div>
			<h1>hi</h1>
			<Mycomponent />
			Japan
		</div>
	);
};

export default Japan;
