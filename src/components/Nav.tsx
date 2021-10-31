import React from 'react';
import { Link } from 'react-router-dom';

export const Nav :React.FC = ()=>{
    return <nav className = 'header'>
        <Link to='/'>Home</Link> 
        <Link to='/About'>About</Link>
        <Link to='/MyToDoList'>My todo list</Link>  
    </nav>

}