import React, {useState} from 'react'
import FormInput from '../common/FormInput'
import formImg from "../../images/formImg.png"

const RegistrationForm = () => {
    const [submitted, setSubmitted] = useState(sessionStorage.getItem('formSubmitted'));

    const formInputData = [
        {name: "Name", for: "fname", id: "fname", type:"text", placeholder: "Enter Your Name", require: true},
        {name: "Company",for: "cname", id: "cname", type:"text", placeholder: "Enter Your Company Name"},
        {name: "Email Address",for: "email", id: "email", type:"email", placeholder: "Enter Your Email Address", require: true},
    ]
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Handle form submission logic (send data to server, etc.)
    
        // Set a flag in session storage to indicate form submission
        sessionStorage.setItem('formSubmitted', 'true');
        setSubmitted(true);
      };
  return (
    <section className='registrationFormSection'>
        <div>
        <img src={`${formImg}`} alt="formImg" className='' />
        </div>
        <div className='formDiv'>
            <h1>Registration</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
           { submitted ? 
                <p>Thank you for registering!</p> : 
            <form onSubmit={handleSubmit}>
                <div className='formField'>
            {formInputData.map((item) => {
                return (
                    <FormInput item={item} />
                )
            })}
                    </div>
            <button className='submitButton' type='submit'>Submit</button>
            </form>
        }
        </div>
    </section>
  )
}

export default RegistrationForm