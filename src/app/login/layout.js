import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <ul className='text-xl text-black bg-orange-600 font-semibold p-5 flex gap-5'>
                  
                    <li><Link href={'/login'}>Login Main</Link></li>
                    <li><Link href={'/login/loginstudent'}>Login Student</Link></li>
                    <li><Link href={'/login/loginteacher'}>Login Teacher</Link></li>
                </ul>
            </div>
            {
                children
            }
        </div>
    );
};

export default Layout;