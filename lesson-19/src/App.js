import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ShowProduct from './Product/ShowProduct';
import CreateProduct from './Product/CreateProduct';
import Detail from './Product/Detail';
import { useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase/InitFirebase';

function App() {
	const [listProducts, setListProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getListProduct = async () => {
		const listProductsFirebase = [];
		const querySnapshot = 
		await getDocs(collection(db, 'products'));
		querySnapshot.forEach((doc) => {
			// console.log(doc.id, ' => ', doc.data());
			listProductsFirebase.push(doc.data());
		});
		setIsLoading(false);
		setListProducts([...listProductsFirebase]);
	};

	useState(() => {
		getListProduct();
	}, []);

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
			</Navbar>

			{isLoading ? (
				<h1 style={{ textAlign: 'center' }}>Loading ... </h1>
			) : (
				<Routes>
					<Route
						path='/'
						element={<ShowProduct listProducts={listProducts} />}
					/>
					<Route
						path='/create'
						element={
							<CreateProduct
								setListProducts={setListProducts}
								listProducts={listProducts}
							/>
						}
					/>
					<Route
						path='/edit/:id'
						element={
							<CreateProduct
								setListProducts={setListProducts}
								listProducts={listProducts}
							/>
						}
					/>
					<Route
						path='/product/:id'
						element={<Detail listProducts={listProducts} />}
					/>
				</Routes>
			)}
		</div>
	);
}

export default App;
