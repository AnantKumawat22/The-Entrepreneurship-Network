import React from 'react';
import { Link } from 'react-router-dom';

function Explore(props) {
    return (
        <>
            <div className="explore_1">
                <div className="explore_1_img">
                    <img src={props.imgsrc} alt="Teen study group" />
                </div>
                <div className="explore_quote">
                    <p className="explore_quote_para">{props.title}</p>
                    <Link className="learn_more_btn" to={`/${props.click}`}>Learn More</Link>
                </div>
            </div>
        </>
    );
}

export default Explore;
