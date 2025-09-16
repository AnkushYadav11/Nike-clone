import React from "react";
import Running from '../images/running.jpg';
import Football from '../images/football.jpg';
import Golf from '../images/golf.jpg';
import Sketboard from '../images/skateboard.jpg';
import Baseball from '../images/baseball.png'
import Af from '../images/afimg.png'
import Tenis from '../images/tenis.png'

export function Cat() {
    return (
        <>
            <div className="mr-10 ml-10 mt-5">
                <h1 className="text-[25px] mb-1 ml-10 font-semibold">Shop by Sport</h1>
                <div className="flex overflow-x-auto">
                    <div className="flex gap-2 mb-1">
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

                        <div className="w-120">
                            <img src={Baseball} alt="baseball" className="size-150 w-120" />
                            <div className="m-5 font-semibold text-[23px]">
                                <h1>Baseball</h1>
                            </div>
                        </div>

                        <div className="w-125">
                            <img src={Af} alt="American Football" className="size-150 w-120" />
                            <div className="m-5 font-semibold text-[23px]">
                                <h1>American Football</h1>
                            </div>
                        </div>

                        <div className="w-110">
                            <img src={Tenis} alt="Tenis" className="size-150" />
                            <div className="m-5 font-semibold text-[23px]">
                                <h1>Tenis</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}