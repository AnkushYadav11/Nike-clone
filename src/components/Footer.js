import React from "react";
import Earth from '../images/earth.png'

export function Footer() {
    return(
        <>
        <div>
            <div className="grid grid-cols-4 gap-5 m-5 p-2">
                <div>
                    <h1 className="font-semibold mb-15">
                    Resources
                    </h1>
                    <div className="grid grid-cols gap-3 text-[15px]">
                    <p>Find A Store</p>
                    <p>Become A Memeber</p>
                    <p>Running Shoes Finder</p>
                    <p>Product Advice</p>
                    <p>Nike Coaching</p>
                    <p>Send Us Feedback</p>
                    </div>
                </div>

                <div>
                    <h1 className="font-semibold mb-15">Help</h1>
                    <div className="grid grid-cols gap-3 text-[15px]">
                    <p>Get Help</p>
                    <p>Order Status</p>
                    <p>Delivery</p>
                    <p>Returns</p>
                    <p>Payments Options</p>
                    <p>Contact Us On Nike.com Inquiries</p>
                    <p>Contact Us On All Other Inquires</p>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold mb-15">Company</h1>
                    <div className="grid grid-cols gap-3 text-[15px]">
                    <p>About Nike</p>
                    <p>News</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Sustainbility</p>
                    <p>Impact</p>
                    <p>Report a Concern</p>
                    </div>
                </div>
                <div className="flex justify-end text-[15px]">
                    <img src={Earth} alt="Earth logo" className="size-5" />
                    <p>India</p>
                </div>
            </div>
            <div>
            <div className="flex gap-5 m-20 text-[15px]">
                <p>2025 Nike, Inc. All rights reserved</p>
                <p>Guides</p>
                <p>Terms of Sale</p>
                <p>Terms of Use</p>
                <p>Nike Privacy Policy</p>
                <p>Privacy Settings</p>
            </div>
            </div>
        </div>
        <div className="bg-black">
            .
        </div>
        </>
    );
}