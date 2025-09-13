import React from "react";
import Running from '../images/running.jpg';
import Football from '../images/football.jpg';
import Golf from '../images/golf.jpg';
import Tenis from '../images/tenis.jpg';
import Sketboard from '../images/skateboard.jpg';

export function Cat() {
    return(
        <>
        <div className="mr-20 ml-20 mt-10 overflow-x-auto">
            <h1 className="text-[27px] mb-5">Shop by Sport</h1>
            <div className="flex">
                <div className="flex gap-5 border h-150">
                    <div>
                        <img src={Running} alt="Running" />
                        <div>
                            <h1>Running</h1>
                        </div>
                    </div>

                    <div>
                        <img src={Football} alt="Football" />
                        <div>
                            <h1>Football</h1>
                        </div>
                    </div>

                    <div>
                        <img src={Golf} alt="Golf" />
                        <div>
                            <h1>Golf</h1>
                        </div>
                    </div>

                    <div>
                        <img src={Tenis} alt="Table Tenis" />
                        <div>
                            <h1>Tenis</h1>
                        </div>
                    </div>
                    <div>
                        <img src={Sketboard} alt="" />
                        <div>
                            <h1>Sketeboard</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}