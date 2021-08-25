import React from 'react';

function Explore(props) {
    return (
        <>
            <div className="explore_1">
                <div className="explore_1_img">
                    <img src={props.imgsrc} alt="Teen study group" />
                </div>
                <div className="explore_quote">
                    <p className="explore_quote_para">{props.title}</p>
                    <button className="learn_more_btn">Learn More</button>
                </div>
            </div>
        </>
    );
}

export default Explore;
