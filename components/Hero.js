import React from 'react';
import styled from 'styled-components';


const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    //top: 0;
    background-color: green;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                <h1>Herrro</h1>
            </HeroWrapper>
            
        </HeroSection>
    )
}

export default Hero;
