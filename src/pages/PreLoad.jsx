import React, { useState, useEffect } from 'react'

const PreLoad = ({ onFinish }) => {
    const [phase, setPhase] = useState('showing');

    useEffect(() => {
        const t1 = setTimeout(() => {
            setPhase('sliding');
        }, 500);

        const t2 = setTimeout(() => {
            setPhase('done');
            if (onFinish) onFinish();
        }, 1300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        }
    }, [onFinish])

    if (phase === 'done') return null;

    return (
        <div className="fixed inset-0 z-[2000] bg-white w-full h-screen">
            <div className='z-0 absolute inset-0 leading-30 flex flex-col justify-center h-[100vh] text-center'>
                <h2 className='color-black tracking-widest animate-in fade-in slide-in-from-bottom-100 duration-500 text-[150px] font-extrabold'>
                    BASIC
                </h2>
                <h2 className='color-black duration-200 text-[150px] font-extrabold tracking-tighter'>
                    /DEPT®
                </h2>
            </div>
            <div className={`absolute bg-white inset-0 h-full w-full ${
                phase === 'sliding' 
                    ? 'animate-in fill-mode-forwards duration-800 slide-in-from-bottom-full slide-out-to-top-[50%]'
                    : ''
            }`}>
            </div>
        </div>
    )
}

export default PreLoad