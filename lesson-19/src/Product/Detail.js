import { Col, Row } from 'antd';
import React from 'react';
import { Container } from 'reactstrap';

const Detail = () => {
	return (
		<Container>
			<Row style={{ marginTop: '24px' }}>
				<Col span={12}>
					<img
						src='https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png'
						alt='Image product'
						style={{
							width: '100%',
						}}
					/>
				</Col>
				<Col span={12} style={{ paddingLeft: '24px' }}>
					<h1>Product 1</h1>
					<h2>This is description product 1</h2>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;
