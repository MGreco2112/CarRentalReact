import React from "react";
import Container from "../common/Container";
import Splash from "../common/Splash";
import splashImg from "../../assets/splash.jpg"

const Home = () => {
    return (
        <Container>
            <Splash
            image = {splashImg}
            style={{
                color: '#F1F1F1',
            }}
            >
                <h1
                style={{
                    textShadow: '1px 1px black'
                }}
                >
                    Welcome to Expression Car Rental!</h1>
                <h2
                style={{
                    textShadow: '1px 1px black'
                }}
                >All cars have coffee holders</h2>
            </Splash>
        </Container>
    )
}


export default Home;