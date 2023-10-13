import React, { useState } from 'react';
import styles from './light-traffic.module.css';

const LightTraffic = () => {
	const [color, setColor] = useState('red');

	const handleChangeColor = () => {
		if (color === 'red') {
			setColor('yellow');
		} else if (color === 'yellow') {
			setColor('green');
		} else {
			setColor('red');
		}
	};

	return (
		<div>
			<button onClick={handleChangeColor}>Next</button>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<div
					className={styles.light}
					style={{ background: color === 'red' ? color : '' }}
				></div>
				<div
					className={styles.light}
					style={{ background: color === 'yellow' ? color : '' }}
				></div>
				<div
					className={styles.light}
					style={{ background: color === 'green' ? color : '' }}
				></div>
			</div>
		</div>
	);
};

export default LightTraffic;
