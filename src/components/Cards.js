import React from "react";
import Card from '../images/Cards.png'
export function Cards() {
    return (
        <>
            <div>
                <p className="size-10 ml-5 mt-5 w-50 font-semibold">Shoes for Running</p>
                <div className="flex">
                    <div className="flex-col shadow-lg shadow-red-100/10 ml-10 mb-5 size-130">
                        <img src={Card} alt="" className="absolute h-130" />
                        <div className="absolute ml-9 mt-95">
                            <h1 className="mb-1 text-white font-semibold">Pegasus</h1>
                            <h1 className="text-white font-semibold">Run Power</h1>
                            <button className="mt-5 rounded-full bg-white p-1 px-4">
                                Shop
                            </button>
                        </div>
                    </div>

                    <div className="flex-col shadow-lg shadow-red-100/10 ml-8 size-130">
                        <img src={Card} alt="" className="absolute h-130" />
                        <div className="absolute ml-9 mt-95">
                            <h1 className="mb-1 text-white font-semibold">Vomero</h1>
                            <h1 className="text-white font-semibold">Run Bigger</h1>
                            <button className="mt-5 rounded-full bg-white p-1 px-4">
                                Shop
                            </button>
                        </div>
                    </div>

                    <div className="flex-col shadow-lg shadow-red-100/10 ml-8 size-130">
                        <img src={Card} alt="" className="absolute h-130" />
                        <div className="absolute ml-9 mt-70">
                            <h1 className="mb-1 text-white font-semibold">Structure</h1>
                            <h1 className="text-white font-semibold">Run Supported</h1>
                            <button className="mt-5 rounded-full bg-white p-1 px-4">
                                Shop
                            </button>
                        </div>
                    </div>      

                </div>
            </div>
        </>
    );
}