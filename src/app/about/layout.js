import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <ul className='flex gap-5 bg-orange-400 text-2xl '>
                   
                    <Link href={'/about/aboutstudent'}>About Student</Link>
                    <Link href={'/about/aboutcollage'}>About Collage</Link>
                </ul>
            </div>
            {children}
        </div>
    );
};

export default Layout;