import React from 'react'
import "./header.css"

function Header() {
    return (
        <>
        <header className='header'>
            <div className="flex-row headerco1"> 
                <h1>snap</h1>
                <select className='dropdown'>
                    <option>Todo List</option>
                    <option>Calender</option>
                    <option>Remainders</option>
                    <option>Planning</option>
                </select>
                <select className='dropdown'>
                    <option>History</option>
                    <option>Our Blog</option>
                    <option>Team</option>
                </select>
                <p>Careers</p>
                <p>About</p>
            </div>
            <div className='btns flex-row '>
                <div>Login</div>
                <button className='btn'>Register</button>
            </div>
        </header>
        </>
    )
}

export default Header
