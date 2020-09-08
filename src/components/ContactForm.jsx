import React from "react";

export default () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div class="text-center">
          <h3 class="section-subheading text-muted">
            Har du noe spørsmål? Ta og skriv til oss!
          </h3>
        </div>
        <form id="contactForm" name="sentMessage" novalidate="novalidate">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Navn *"
                  required="required"
                  data-validation-required-message="Please enter your name."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Epost *"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Telefonnummer *"
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Din melding *"
                  required="required"
                  data-validation-required-message="Please enter a message."
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div id="success"></div>
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Send Melding
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
