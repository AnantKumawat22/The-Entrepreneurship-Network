import React from 'react';


function BenefitDetails(props) {
    return (
        <>
            <div className="benefit_details_1">
                <img src={props.src} alt="Capture" />
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
        </>
    );
}

export default BenefitDetails;
