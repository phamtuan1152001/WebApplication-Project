import React, { useState } from 'react'

function SubcribeForm() {
    const [submit, setSubmit] = useState(false)
    const handleSubcribe = (e) => {
        e.preventDefault();
        setSubmit(true);

        setTimeout(() => {
            setSubmit(false);
        }, 3000)
    }
    console.log(submit);
  return (
    <>  
        {submit && <div>Submiting Form...! </div>}
        <form onSubmit={handleSubcribe}>
            <fieldset>
                <label>
                    <input placeholder='Enter your email address'/>
                </label>
                <button type='submit'>Subcribe</button>
            </fieldset>
        </form>
    </>
  )
}

export default SubcribeForm