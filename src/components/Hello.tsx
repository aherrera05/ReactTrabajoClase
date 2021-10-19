import React from 'react';
import styled from 'styled-components';

interface HelloProps {
	name: string;
	age: number;
	address?: string;
	email: string;
	handleClick : (name:string) => void;
}

export const Hello: React.FC<HelloProps> = ({ name, age, address = 'no address', email, handleClick }) => {


	return <Container>
		<ul onClick={()=> handleClick(name)}>
			<li>Name: {name}</li>
			<li>Age: {age}</li>
			<li>Address: {address}</li>
			<li> Email: {email}</li>
			
		</ul>
		

	</Container>
};

const Container = styled.div`
	width:200px;
	padding: 15px 10px;
	background: blue ;
`;