import React, { useEffect, useState } from 'react';
import { Clear, NoteAddRounded } from '@material-ui/icons';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUsers } from './APIs';

const Contact = () => {
	const [ user, setUser ] = useState([]);

	const deleteUser = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			const itemUser = user.filter((item) => item.id !== id);
			setUser(itemUser);
		}
	};

	useEffect(() => {
		loadUsers();
	}, []);
	const loadUsers = () => {
		getUsers().then((res) => {
			setUser(res.data);
		});
	};
	return (
		<div>
			<div>
				<h2>Contact Manager</h2>
				<p>This is a portfolio project to showcase knowledge of:</p>
				<ul>
					<ol>React Components and JSX.</ol>
					<ol>React Router.</ol>
					<ol>Component state management.</ol>
					<ol>Context api for global state management.</ol>
					<ol>Making asynchronous calls to the Json placeholder fake rest api using "async/await".</ol>
				</ul>
			</div>

			{user.map((users) => (
				<Accordion key={users.id}>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>{users.name} </Accordion.Header>
						<Link to={`/UpdateContact/${users.id}`}>
							<NoteAddRounded />
						</Link>
						<Clear className='deleteIcon' onClick={() => deleteUser(users.id)} />
						<Accordion.Body>
							Email: {users.email} <br />
							Phone No: {users.phone}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			))}
		</div>
	);
};

export default Contact;
