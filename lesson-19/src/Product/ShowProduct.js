import React, { useState } from 'react';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
	DeleteOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Col, Input, Row } from 'antd';
import { Container } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
const { Meta } = Card;

const { Search } = Input;

const ShowProduct = ({ listProducts }) => {
	const navigate = useNavigate();

	const [keywords, setKeywords] = useState('');

	const handleRedirectPage = (idProduct, type = 'product') => {
		navigate(`/${type}/${idProduct}`);
	};

	const getKeywords = (e) => {
		setKeywords(e.target.value);
	};

	const onSearch = (keywords) => {
		setKeywords(keywords);
	};

	return (
		<Container className='mt-5'>
			<Row justify='center'>
				<Col span={24}>
					<Search
						placeholder='Enter your keywords...'
						// onSearch={onSearch}
						onChange={getKeywords}
						style={{
							width: '100%',
						}}
						size='large'
					/>
				</Col>
			</Row>
			<Row justify='space-evenly'>
				{listProducts
					.filter(
						(product) =>
							product.title.includes(keywords) ||
							product.description.includes(keywords)
					)
					.map((product) => (
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
									<DeleteOutlined key='ellipsis' />,
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
