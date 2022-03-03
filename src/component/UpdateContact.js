import React, { useEffect, useState } from 'react';
import './contact.css';
import { getDatails } from './APIs';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const UpdateContact = ({ history }) => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');

	const params = useParams();

	//get data from the list to display on the update form
	useEffect(
		() => {
			getDatails(params.id).then((detail) => {
				setName(detail.data.name);
				setEmail(detail.data.email);
				setPhone(detail.data.phone);
			});
		},
		[ params ]
	);
	//update each user
	const handleDetails = (event, id) => {
		event.preventDefault();
		axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { name, email, phone }).then((res) => {
			setName('');
			setEmail('');
			setPhone('');
			alert('Updated Successfully');
		});
	};
	return (
		<div className='updateContact'>
			<h2>Edit Contact</h2>
			<p>Name</p>
			<input name='name' onChange={(e) => setName(e.target.name)} />
			<p>Email</p>
			<input name='email' onChange={(e) => setEmail(e.target.name)} />
			<p>Phone No</p>
			<input name='phone' onChange={(e) => setPhone(e.target.name)} />
			<Button onClick={handleDetails}>Update User</Button>
		</div>
	);
};

export default UpdateContact;
