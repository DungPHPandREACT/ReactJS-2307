import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: 'AIzaSyCiA2uFTprC2jVY36diMUNVXQ_51DoiIeU',
	authDomain: 'ecommerce-5fd10.firebaseapp.com',
	projectId: 'ecommerce-5fd10',
	storageBucket: 'ecommerce-5fd10.appspot.com',
	messagingSenderId: '123703489060',
	appId: '1:123703489060:web:852168a6aef9211633deb1',
	measurementId: 'G-QLDCWS8MR9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)