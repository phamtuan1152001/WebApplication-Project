import React, { useState } from 'react'
import "./SubcribeForm.css";
function SubcribeForm() {
  const [submit, setSubmit] = useState(false);
  const handleSubcribe = (e) => {
    e.preventDefault();
    setSubmit(true);

    setTimeout(() => {
      setSubmit(false);
    }, 3000);
  };
  return (
    <>
      {submit && alert("Subcribe Successfully!")}
      <form onSubmit={handleSubcribe}>
        <fieldset className="form-group">
          <label>
            <input
              className="form-control"
              placeholder="Enter your email address"
            />
          </label>
          <button className="btn btn-outline-dark" type="submit">
            Subcribe
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default SubcribeForm