import React from 'react';
import styled from 'styled-components';
import Header from '../src/components/Header';
import Slide from '../src/components/Slide';
import Footer from '../src/components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function Portfolio() {
    return (
        <>
            <div style={{ width: "min(90vw, 800px)", margin: "auto" }} >
                <Header />
                <Slide />
            </div>
            <Footer />
        </>
    )
}

export default Portfolio;