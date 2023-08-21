import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className='h-screen bg-slate-300'>
            <h2 className='text-5xl text-orange-500 font-bold text-center p-5'> Login page</h2>
            <div className='flex gap-5 bg-orange-400 text-2xl '>
                <Link href={'/'}>Home</Link>
                <Link href={'/login/loginstudent'}>Login Student</Link>
                <Link href={'/login/loginteacher'}>Login Teacher</Link>
            </div>
        </div>
    );
};

export default LoginPage;