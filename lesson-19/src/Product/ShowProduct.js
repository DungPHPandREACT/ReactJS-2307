import React, { useState } from 'react';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import { Container } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const ShowProduct = ({ listProducts }) => {
	const navigate = useNavigate();

	const handleRedirectPage = (idProduct, type = 'product') => {
		navigate(`/${type}/${idProduct}`);
	};

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
								<span onClick={() => handleRedirectPage(product.id, 'edit')}>
									<EditOutlined key='edit' />
								</span>,
								<EllipsisOutlined key='ellipsis' />,
							]}
						>
							<Meta
								title={
									<span onClick={() => handleRedirectPage(product.id)}>
										{product.title}
									</span>
								}
								description={product.description}
							/>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default ShowProduct;
