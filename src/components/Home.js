import React from 'react';
import Banners from '../images/bannerimg.jpg'
import { Cards } from '../components/Cards'
import { Cat } from './Cat';
import { Banner } from './Banner';
import { Footer } from './Footer';

export function Home() {
    return (
        <>
            <div>
                <img src={Banners} class="" alt="..." />
            </div>

            <Cards />
            <Cat />
            <Banner />
            <Footer />
        </>
    );
}