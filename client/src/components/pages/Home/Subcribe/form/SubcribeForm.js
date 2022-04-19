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
        <fieldset className="form-control">
          <label>
            <input placeholder="Enter your email address" />
          </label>
          <button type="submit">Subcribe</button>
        </fieldset>
      </form>
    </>
  );
}

export default SubcribeForm