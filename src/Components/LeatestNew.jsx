import React from 'react';
import Marquee from 'react-fast-marquee';

const LeatestNew = () => {
    return (
        <div className='flex items-center w-12/15 mx-auto gap-3 bg-base-200 my-3'>
            <button className='btn btn-secondary text-white rounded-md'>Leatest</button>
            <Marquee>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, fuga.</p>
            </Marquee>
        </div>
    );
};

export default LeatestNew;