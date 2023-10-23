import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ShowProduct from './Product/ShowProduct';
import CreateProduct from './Product/CreateProduct';
import Detail from './Product/Detail';
import { useState } from 'react';

function App() {
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
		<div className='App'>
			<Navbar color='dark' dark>
				<NavLink to='/'>
					<img
						alt='logo'
						src='/logo192.png'
						style={{
							height: 40,
							width: 40,
							marginRight: '8px',
						}}
					/>
					Quản lý Product
				</NavLink>
				<NavLink to='/create'>Create product</NavLink>
				{/* <NavbarBrand href='/create'>Create product</NavbarBrand> */}
			</Navbar>

			<Routes>
				<Route path='/' element={<ShowProduct listProducts={listProducts} />} />
				<Route
					path='/create'
					element={
						<CreateProduct
							setListProducts={setListProducts}
							listProducts={listProducts}
						/>
					}
				/>
				<Route path='/edit' element={<CreateProduct />} />
				<Route path='/product/id' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
