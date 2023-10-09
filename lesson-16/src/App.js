import logo from './logo.svg';
import './App.css';
import CardProduct from './CardProduct.js';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import Content from './Content';
import PageLayout from './PageLayout';

function App() {
	const classRoom = 'REACTJS-2307';
	const objStyle = {
		color: 'red',
		fontSize: '50px',
		fontWeight: 'bold',
	};

	const srcImage =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoCTYRcfGjnbVelMBLnBu6Na40t20GBYk1rEnFJJg&s';

	return (
		<>
			<PageLayout> 
				{/* form login */}
				{/* thông tin chi tiết sản phẩm */}
				{/* list product */}
				<Content />
			</PageLayout>

			{/* <div className='App'>
				<h1 className='h1' style={objStyle}>
					{1 + 2}
				</h1>
				<h1>Têst</h1>
			</div>
			<img src={srcImage} />
			<div></div>
			<CardProduct></CardProduct>
			<CardProduct />
			<CardProduct></CardProduct>
			<CardProduct></CardProduct>
			<CardProduct></CardProduct> */}
		</>
	);
}

export default App;
