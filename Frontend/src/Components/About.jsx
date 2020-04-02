import React from 'react';

function About() {
    return (
        <div className='about-text'>
            <h1>Dev: Kameron Montague</h1>

            <p>This project is all about showcasing a few small features together in the
                React frontend. I used the Youtube Api to get access to any video the user
                wants to see. All they have to do is type their search results on the main
                page and the api will find as many videos as I want it to display on the site.
                Then when the user clicks it they can see the video in its own page. I used Hooks
                to easily collect that information into state varibles and axios to pull the 
                data from the youtube Api.
            </p>
        </div>
    );
}

export default About;
