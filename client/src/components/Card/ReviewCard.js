import React from "react";
import moment from 'moment';


function ReviewCard({ reviewDate, reviewText, userName }) {
    const date = moment(reviewDate).format('MMMM Do YYYY, h:mm:ss a');
    return (
        <div className="card m-2 border border-dark">
            <div className="card-header">
                <strong>Date:</strong> {date}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p><strong>---</strong> "{reviewText}"" </p>
                    <footer className="blockquote-footer"><strong>Username: </strong>{userName}</footer>
                </blockquote>
            </div>
        </div>
    );
}
export default ReviewCard;
