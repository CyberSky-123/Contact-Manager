import './App.css';
import UpdateContact from './component/UpdateContact';
import Contact from './component/Contact';
import { Route, Routes } from 'react-router-dom';

export default function App() {
	return (
			<Routes>
				<Route path='/' element={<Contact />} />
				<Route path='/UpdateContact/:id' element={<UpdateContact />} />
			</Routes>
	);
}
