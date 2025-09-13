import React from 'react';
import Banners from '../images/banner.png'
export function Banner() {
    return (
        <>
            <div className="mt-20 border-2 mb-3">
                <img src={Banners} alt="Banner_image" className="h-150 w-full" />
                <div className="m-5 border-2">
                    <button className="justify-center-safe rounded-full border px-4 py-1">Shop Just Do It</button>
                </div>
            </div>
        </>
    );
}