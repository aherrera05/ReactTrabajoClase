import React from 'react';
import { Calculator } from './Calculator/Calculadora'
import { Link } from 'react-router-dom';

export const About = () => {
	return <><Calculator/>
		<Link to='/'> Back to Home</Link>
	</>
}