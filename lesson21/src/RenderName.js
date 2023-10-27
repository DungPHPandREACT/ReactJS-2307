import React from 'react';

const RenderName = ({ name,name1,name2,name3 }) => {
	console.log('RenderName');

	return <h1>{name}</h1>;
};

export default React.memo(RenderName);
