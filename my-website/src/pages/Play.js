import React from 'react';
import '../styles/Play.css';
import {Link} from 'react-router-dom';

function Play () 
{
    return (
        <div id="playPage">
            <Link className="playHeading"> Play </Link>
            <h4> Outside of school and work, I love to play! I spend most of my free time trying out new creative hobbies or adventuring with my friends and family. Some of my all time favorite pasttimes are journaling, doing my nails, playing volleyball, and reading. 
            In my apartment, I have a Weekly R.E.P.O.R.T. chart that my roommates and I fill out every Sunday. It is one of my favorite traditions because it gives us all a chance to share what we are reading, eating, playing, obsessing over, recommending, and treating ourselves with each week. To capture the things I love most in this world, I created my all time R.E.P.O.R.T. to share below! </h4>
            <Link className="playHeading"> My All Time R.E.P.O.R.T </Link>
            <div className="weeklyReportContainer">
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> R </Link>
                    <h2> Reading</h2>
                    <p> ★ Yours Truly </p>
                    <p> ★ Brave New Words </p>
                    <p> ★ The Silent Patient </p>
                    <p> ★ An Abundance of Katherines </p>
                    <p> ★ Anything by Emily Henry, Abby Jimenez, or Taylor Jenkins Reid </p>
                </div>
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> E </Link>
                    <h2> Eating </h2>
                    <p> ★ Bagels and cream cheese </p>
                    <p> ★ Deep dish pizza </p>
                    <p> ★ Crispy green grapes </p>
                    <p> ★ Trader Joe's cookie butter ice cream </p>
                    <p> ★ Simply ruffles and white cheddar cheetos puffs</p>
                </div>
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> P </Link>
                    <h2> Playing </h2>
                    <p> ★ Volleyball </p>
                    <p> ★ Knitting, pottery, and woodworking  </p>
                    <p> ★ Fantasy football </p>
                    <p> ★ Hotseat </p>
                    <p> ★ NYT Digits (it was archived so I coded my own!) </p>
                </div>
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> O </Link>
                    <h2> Obsessing </h2>
                    <p> ★ Making (+ eating) sourdough bread </p>
                    <p> ★ Junk journaling </p>
                    <p> ★ Pi (I was born on 3/14!) </p>
                    <p> ★ Ear piercing stacks </p>
                    <p> ★ My matcha green kindle basic </p>
                </div>
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> R </Link>
                    <h2> Recommending </h2>
                    <p> ★ At home gel manicures </p>
                    <p> ★ Taylor Swift, Riley Green, + Mt. Joy </p>
                    <p> ★ Writing down something that makes you smile every day </p>
                    <p> ★ Live or acoustic versions of songs </p>
                    <p> ★ Skydiving </p>

                </div>
                <div className="weeklyReportSection"> 
                    <Link className="weeklyReportLetter"> T </Link>
                    <h2> Treating </h2>
                    <p> ★ Cherry and cotton candy jelly bellies </p>
                    <p> ★ Pilot G2 gel pens</p>
                    <p> ★ Strawberry lemonade </p>
                    <p> ★ An episode of New Girl or Modern Family </p>
                    <p> ★ A lake day on Lake Michigan or Percy Priest </p>
                </div>

                {/* <div className="weeklyReportSection"> E </div>
                <div className="weeklyReportSection"> P </div>
                <div className="weeklyReportSection"> O </div>
                <div className="weeklyReportSection"> R </div>
                <div className="weeklyReportSection"> T</div> */}
            </div>
        </div>
    )   
}

export default Play;