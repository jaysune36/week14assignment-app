import React, { useState } from "react";
import ReviewList from "./ReviewList";

function ReviewForm () {
    const [ reviews, setReviews ] = useState([])
    const reviewAdded = () => {
      let reviewInput = document.querySelector('#reviewEntryValue');
      let reviewEmailInput = document.querySelector('#reviewEmailInput');
      setReviews([
        ...reviews, 
        {reviewLog: reviewInput.value, reviewEmail: reviewEmailInput.value}
      ])
      reviewInput.value = '';
      reviewEmailInput.value = '';
    }
    return (

      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="reviewEmailInput" className="form-label">Email address</label>
            <input type="email" className="form-control" id="reviewEmailInput" placeholder="name@example.com"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="reviewEntryValue" className="form-label">Review</label>
            <textarea className="form-control" id="reviewEntryValue" rows="3"></textarea>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
              <button className="btn btn-primary me-md-2" type="button"
                onClick={reviewAdded}>Submit</button>
            </div>
          </div>
        </form>
        <ReviewList {...reviews}/>
      </div>
    )

}

export default ReviewForm
