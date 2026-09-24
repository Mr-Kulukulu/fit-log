import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between border-t bg-black border-gray-400 py-7 '>
            <div className='flex items-center gap-2'>

                <Image
                    src="/logo.png"
                    alt="FitLog logo"
                    width={20}
                    height={20}
                />
                <h2 className="font-bold">FITLOG</h2>
            </div>
            <div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;