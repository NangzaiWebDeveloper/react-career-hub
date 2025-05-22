import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <header className='max-w-6xl mx-auto'>
                <Navbar/>
            </header>
        
            <main className='mt-6 max-w-6xl mx-auto px-4 md:px-0'> 
                <Outlet/> 
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;