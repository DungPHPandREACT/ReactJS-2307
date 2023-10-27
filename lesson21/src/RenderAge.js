import React from 'react';

const RenderAge = ({ age }) => {
	console.log('RenderAge');
	return <h1>{age}</h1>;
};

export default React.memo(RenderAge);
