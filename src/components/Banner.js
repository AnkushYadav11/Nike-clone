import React from 'react';
import Banners from '../images/banner.png'
export function Banner() {
    return (
        <>
            <div className="mt-20 mb-3 flex-col">
                <img src={Banners} alt="Banner_image" className="h-150 w-full" />
                <div className="flex m-10 justify-center">
                    <button className="justify-center-safe rounded-full border shadow-blue-500/50 px-4 py-1 hover:bg-gray-300">Shop Just Do It</button>
                </div>
            </div>
        </>
    );
}