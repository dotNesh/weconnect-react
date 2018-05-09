import React from 'react';

const ReviewForm = () => (
    <div className="wrap forms">
        <form action="#" className="review-form">
            <div className="form-group review">
                <h2>Review</h2>
            </div>

            <div className="form-group review">
                <label className="lbl" htmlFor="reviewtitle">Title:</label>
                <input type="text" id="reviewtitle" className="form-control" placeholder="Title" />
            </div>

            <div className=" form-group review">
                <label htmlFor="reviewdesc">Review:</label>
                <textarea className="form-control" rows="4" id="reviewdesc" placeholder="Write your review" />
            </div>

            <div className=" form-group review">
                <button type="submit" className="btn btn-primary btn-block">Post review</button>
            </div>
        </form>
    </div>

);

export default ReviewForm;
