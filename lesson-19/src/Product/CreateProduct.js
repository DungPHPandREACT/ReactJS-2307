import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import React from 'react';
import { Container } from 'reactstrap';
import * as Yup from 'yup';

const CreateProduct = ({ listProducts, setListProducts }) => {
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
	const formik = useFormik({
		initialValues: {
			id: '',
			title: '',
			description: '',
			image: '',
		},
		onSubmit: (values) => {
			setListProducts([...listProducts, values]);
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

	return (
		<Container>
			<form onSubmit={formik.handleSubmit}>
				<div className='mt-5'>
					<Input
						addonBefore='ID'
						placeholder='Enter your id product'
						size='large'
						onChange={formik.handleChange}
						name='id'
					/>
					<p style={{ color: 'red' }}>{formik.errors.id}</p>
				</div>
				<div className='mt-5'>
					<Input
						addonBefore='Title'
						placeholder='Enter your title product'
						size='large'
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
						onChange={formik.handleChange}
						name='image'
					/>
					<p style={{ color: 'red' }}>{formik.errors.image}</p>
				</div>

				<div className='mt-5'>
					{/* <Button type='primary'>Add Product</Button> */}
					<button type='submit'>Add Product</button>
				</div>
			</form>
		</Container>
	);
};

export default CreateProduct;
