import logo from './logo.svg';
import './App.css';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import ShowProduct from './Product/ShowProduct';
import CreateProduct from './Product/CreateProduct';
import Detail from './Product/Detail';

function App() {
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
				<Route path='/' element={<ShowProduct />} />
				<Route path='/create' element={<CreateProduct />} />
				<Route path='/edit' element={<CreateProduct />} />
				<Route path='/product/id' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
