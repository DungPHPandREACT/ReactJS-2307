import React, { useState } from 'react';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import { Container } from 'reactstrap';
const { Meta } = Card;

const ShowProduct = () => {
	const [listProducts, setListProducts] = useState([
		{
			id: 1,
			title: 'Product 1',
			description: 'This is the description product 1',
			image:
				'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png',
		},
		{
			id: 2,
			title: 'Product 2',
			description: 'This is the description product 2',
			image:
				'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png',
		},
		{
			id: 3,
			title: 'Product 3',
			description: 'This is the description product 3',
			image:
				'https://theecommmanager.com/wp-content/uploads/sites/6/2020/07/17-Product-Attribute-Examples-Types-for-Ecommerce-01.png',
		},
	]);

	return (
		<Container className='mt-5'>
			<Row justify='space-evenly'>
				{listProducts.map((product) => (
					<Col
						xl={6}
						lg={8}
						md={12}
						sm={24}
						style={{ padding: '8px' }}
						key={product.id}
					>
						<Card
							style={{
								width: '100%',
							}}
							cover={<img alt='example' src={product.image} />}
							actions={[
								<EditOutlined key='edit' />,
								<EllipsisOutlined key='ellipsis' />,
							]}
						>
							<Meta title={product.title} description={product.description} />
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ShowProduct;
