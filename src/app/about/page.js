import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='h-screen bg-slate-300'>
            <h2 className='text-5xl text-orange-500 font-bold text-center p-5'>This is About page</h2>
            <ul className='flex gap-5 bg-orange-400 text-2xl '>
                <Link href={'/'}>Home</Link>
                <Link href={'/about/aboutstudent'}>About Student</Link>
                <Link href={'/about/aboutcollage'}>About Collage</Link>
            </ul>
        </div>
    );
};

export default AboutPage;