import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';

const Detail = ({ listProducts }) => {
	const params = useParams();

	const [productDetail, setProductDetail] = useState(null);

	if (params.id) {
		const product = listProducts.find((element) => element.id == params.id);

		if (product !== undefined && productDetail == null) {
			//cập nhật lại state
			setProductDetail({ ...product });
		}
	}

	return (
		<Container>
			<Row style={{ marginTop: '24px' }}>
				<Col span={12}>
					<img
						// src={productDetail !== null ? productDetail.image : ''}
						src={productDetail?.image}
						alt='Image product'
						style={{
							width: '100%',
						}}
					/>
				</Col>
				<Col span={12} style={{ paddingLeft: '24px' }}>
					{/* <h1>{productDetail !== null ? productDetail.title : ''}</h1> */}
					<h1>{productDetail?.title}</h1>
					{/* <h2>{productDetail !== null ? productDetail.description : ''}</h2> */}
					<h2>{productDetail?.description}</h2>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;
