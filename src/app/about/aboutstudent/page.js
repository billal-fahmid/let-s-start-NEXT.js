import Link from 'next/link';
import React from 'react';

const AboutStudent = () => {
    return (
        <div className='h-screen bg-slate-300'>
            <h2 className='text-5xl text-orange-500 font-bold text-center p-5'>This is Student About page</h2>
            <Link href={'/'}>Home</Link>
        </div>
    );
};

export default AboutStudent;