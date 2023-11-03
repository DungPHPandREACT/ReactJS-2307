import { Button, Input, message } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import * as Yup from 'yup';
import { db } from '../firebase/InitFirebase';
import { addDoc, collection } from 'firebase/firestore';

const CreateProduct = ({ listProducts, setListProducts }) => {
	const [statusPage, setStatusPage] = useState('create');
	const [messageApi, contextHolder] = message.useMessage();
	// Cách 1
	// const product = {};
	// const getId = (e) => {
	// 	product.id = e.target.value;
	// };

	// const getTitle = (e) => {
	// 	product.title = e.target.value;
	// };

	// const getDescription = (e) => {
	// 	product.description = e.target.value;
	// };

	// const getImage = (e) => {
	// 	product.image = e.target.value;
	// };

	// const handleAddProduct = () => {
	// 	console.log(product);
	// };

	// Cách 2
	// Get data
	const params = useParams();
	const location = useLocation();
	let product = null;

	if (params.id) {
		product = listProducts.find((element) => element.id == params.id);
	}

	const formik = useFormik({
		initialValues: {
			id: product != null ? product.id : '',
			title: product != null ? product.title : '',
			description: product != null ? product.description : '',
			image: product != null ? product.image : '',
		},
		onSubmit: async (values) => {
			if (statusPage === 'create') {
				setListProducts([...listProducts, values]);
				try {
					const docRef = 
					await addDoc(collection(db, "products"), values);
					console.log("Document written with ID: ", docRef.id);
				  } catch (e) {
					console.error("Error adding document: ", e);
				  }
				  
				messageApi.open({
					type: 'success',
					content: 'Create succcessfully',
				});
			} else {
				const dataTemp = [...listProducts];
				const index = dataTemp.findIndex((product) => product.id === values.id);

				dataTemp[index] = { ...values };

				setListProducts([...dataTemp]);

				messageApi.open({
					type: 'success',
					content: 'Edited succcessfully',
				});
			}
		},
		validationSchema: Yup.object().shape({
			id: Yup.number().required('Bắt buộc phải có id'),
			title: Yup.string()
				.min(6, 'Too Short!')
				.max(20, 'Too Long!')
				.required('Required'),
			description: Yup.string()
				.min(20, 'Ít kí tự quá')
				.max(50, 'Quá nhiều kí tự')
				.required('Required'),
			image: Yup.string().required('Bắt buộc phải có ảnh sản phẩm'),
		}),
	});

	if (location.pathname.includes('/edit') && statusPage !== 'edit') {
		setStatusPage('edit');
	}

	return (
		<Container>
			{contextHolder}
			<form onSubmit={formik.handleSubmit}>
				<div className='mt-5'>
					<Input
						addonBefore='ID'
						placeholder='Enter your id product'
						size='large'
						onChange={formik.handleChange}
						value={formik.values.id}
						name='id'
						disabled={statusPage === 'edit' ? true : false}
					/>
					<p style={{ color: 'red' }}>{formik.errors.id}</p>
				</div>
				<div className='mt-5'>
					<Input
						addonBefore='Title'
						placeholder='Enter your title product'
						size='large'
						value={formik.values.title}
						onChange={formik.handleChange}
						name='title'
					/>
					<p style={{ color: 'red' }}>{formik.errors.title}</p>
				</div>
				<div className='mt-5'>
					<Input
						addonBefore='Description'
						placeholder='Enter your description product'
						size='large'
						value={formik.values.description}
						onChange={formik.handleChange}
						name='description'
					/>
					<p style={{ color: 'red' }}>{formik.errors.description}</p>
				</div>
				<div className='mt-5'>
					<Input
						addonBefore='Image'
						placeholder='Enter your image product'
						size='large'
						value={formik.values.image}
						onChange={formik.handleChange}
						name='image'
					/>
					<p style={{ color: 'red' }}>{formik.errors.image}</p>
				</div>

				<div className='mt-5'>
					{/* <Button type='primary'>Add Product</Button> */}
					<button type='submit'>
						{statusPage === 'create' ? 'Add Product' : 'Edit Product'}
					</button>
				</div>
			</form>
		</Container>
	);
};

export default CreateProduct;
