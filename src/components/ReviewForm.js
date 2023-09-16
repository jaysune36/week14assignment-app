import React, { useState } from "react";
import ReviewList from "./ReviewList";

function ReviewForm () {
  // the deconstructed variable will keep and set the state for each review added.
    const [ reviews, setReviews ] = useState([])
  // function adds each review to its associated parent element. It uses the target to select that parents review and email inputs and stores to each state.
    const reviewAdded = (e) => {
      console.log(e.target.parentNode.parentNode.previousElementSibling.lastChild)
      let reviewInput = e.target.parentNode.previousElementSibling;
      let reviewEmailInput = e.target.parentNode.parentNode.previousElementSibling.lastChild;
      setReviews([
        ...reviews, 
        {reviewLog: reviewInput.value, reviewEmail: reviewEmailInput.value}
      ])
      reviewInput.value = '';
      reviewEmailInput.value = '';
    }
    return (
// creates the Review component and adds the reviewList to it which it then passes the reviews array state to the ReviewList component to be used when creating the list
      <div className="reviewForm">
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
