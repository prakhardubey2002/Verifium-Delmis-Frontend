import React from 'react'

const EncryptCredetials = () => {
  return (
    <div className="form">
       <section className="contact-us" id="contact-section">
  <form id="contact" action="" method="post">
    <div className="section-heading">
      <h4>Encrypt credentials</h4>
      <p>Note: Once </p>
    </div>
    <div className="inputField">
      <input
        type="file"
        name="name"
        id="name"
        placeholder="Your name"
        autoComplete="on"
        required=""
      />
      <span className="valid_info_name" />
    </div>
    <div className="inputField">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Fname"
        required=""
      />
      <span className="valid_info_email" />
    </div>
    <div className="inputField">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Lname"
        required=""
      />
      <span className="valid_info_email" />
    </div>
    <div className="inputField">
      <input
        type="number"
        name="email"
        id="email"
        placeholder="InstituteCode"
        required=""
      />
      <span className="valid_info_email" />
    </div>
    {/* <div className="inputField">
      <textarea
        name="message"
        id="message"
        placeholder="Your message"
        defaultValue={""}
      />
      <span className="valid_info_message" />
    </div> */}
    <div className="inputField btn">
      <button
        type="submit"
        id="form-submit"
        className="main-gradient-button"
        disabled=""
      >
        Send a message
      </button>
    </div>
  </form>
</section>

    </div>
  )
}

export default EncryptCredetials