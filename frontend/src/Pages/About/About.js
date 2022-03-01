import React from "react";
import './About.css'
import axios from "axios/index";

const About = () => {
    return (<div>
        <div className="container transcript">
            <div className="text-centre"><h1 className="color-dark">About MuzTrade</h1></div>
            <div className="content ins">
                <div className="row">
                    <div className="col-md-3"><h4>Inspiration</h4></div>
                    <div className="col-md-9"><p>Would you be surprised if you get to know that the investor sentiment is backed up by music sentiment? We surely were surprised and conducted research and found that there are studies going on that aim to measure investor sentiment and study its impact on the stock returns. How cool would it be if we could predict tomorrow’s stock market direction based on the top songs that people listen to today?
                    </p>
                        <p>Many would agree that the success of top songs is due to a complicated mix of marketing, popularity, and blockbuster theory in which companies invest big money into a few products. Yet, we hypothesised that the lyrical sentiment of top songs can be viewed as transient, but a genuine snapshot of the public mood. There is a plethora of research that unequivocally confirms both the influence of mood on music choice and the influence of music on mood and even the buying behaviour of the investor (Areni and Kim, 1993; Bruner, 1990; Chen et al., 2007; R McCraty, 1998).</p></div>
                </div>

            </div>
            <div className="content sol">
                <div className="row">
                    <div className="col-md-3"><h4>Solution</h4></div>
                    <div className="col-md-9">Using the power of the state-of-the-art pre-trained BERT Model, MuzTrade helps investors to anticipate how the stock market will perform the next day based on the sentiments of the top 200 most streamed songs for the day. The core heart of MuzTrade is the ML model that helps it make the prediction of the direction of the DJIA Index.

Furthermore, it has a react-based web app that shows the daily & historical predictions from the model along with the actual historical movement of the DJIA Index. Our system daily fetches the top 200 songs from Spotify and their lyrics from Genius.com and makes predictions out of it. These predictions persist in the DynamoDB in the AWS cloud. Users can visit the web app anytime to see quick results. Our application follows the microservice architecture and each and every functionality works independently of each other.
                        <p>
                        </p></div>
                </div>

            </div>
        </div>
    </div>)
}

export default About;