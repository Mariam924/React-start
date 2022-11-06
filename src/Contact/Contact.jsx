import React, { Component } from 'react'
import c from "./Contact.module.css";

export default class Contact extends Component {

  render() {
    return (
      <>
      <section class="page-section" id="contact">
            <div class="container">
                <h2 class="section-heading text-center text-uppercase text_secondary mb-0">Contact Me</h2>

                <div class="divider-custom">
                    <div class="divider-line"></div>
                    <div class="divider-custom-icon"><svg class="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></div>
                    <div class="divider-line"></div>
                </div>

                <div class="row">
                    <div class="col-lg-8 mx-auto">
                       
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form_control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form_control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address."/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group label-form-group controls mb-0 pb-2">
                                    <label>Phone Number</label>
                                    <input class="form_control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number."/>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form_control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn_primary btn_xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}
