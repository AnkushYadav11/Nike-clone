import React from "react";
import Running from '../images/running.jpg';
import Football from '../images/football.jpg';
import Golf from '../images/golf.jpg';
import Tenis from '../images/tenis.jpg';
import Sketboard from '../images/skateboard.jpg';

export function Cat() {
    return(
        <>
        <div className="mr-20 ml-20 mt-10">
            <h1 className="text-[27px] mb-5">Shop by Sport</h1>
            <div className="flex overflow-x-auto">
                <div className="flex gap-2 mb-5">
                    <div className="w-100">
                        <img src={Running} alt="Running" />
                        <div className="m-5 font-semibold text-[23px]">
                            <h1>Running</h1>
                        </div>
                    </div>

                    <div className="w-116">
                        <img src={Football} alt="Football" />
                        <div className="m-5 font-semibold text-[23px]">
                            <h1>Football</h1>
                        </div>
                    </div>

                    <div className="w-100">
                        <img src={Golf} alt="Golf" />
                        <div className="m-5 font-semibold text-[23px]">
                            <h1>Golf</h1>
                        </div>
                    </div>

                    <div className="w-107">
                        <img src={Sketboard} alt="" />
                        <div className="m-5 font-semibold text-[23px]">
                            <h1>Sketeboard</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}