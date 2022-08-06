import React, { useState } from 'react'

function About() {

  const [btnText, setbtnText] = useState("Enable Dark mode");



  return (
    <>
      <div class="m-4 "  id="about-outer">
        <h1>About Us</h1>
        <div class="accordion" id="myAccordion" >
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingOne">
              <button type="button" class="accordion-button collapsed"  data-bs-toggle="collapse" data-bs-target="#collapseOne">1. What is HTML?</button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div class="card-body">
                <p>HTML stands for HyperText Markup Language. HTML is the standard markup language for describing the structure of web pages. <a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank">Learn more.</a></p>
              </div>
            </div>
          </div>
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingTwo" >
              <button type="button" class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" >2. What is Bootstrap?</button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion" >
              <div class="card-body">
                <p>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development. It is a collection of CSS and HTML conventions. <a href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/" target="_blank">Learn more.</a></p>
              </div>
            </div>
          </div>
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingThree" >
              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">3. What is CSS?</button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
              <div class="card-body">
                <p>CSS stands for Cascading Style Sheet. CSS allows you to specify various style properties for a given HTML element such as colors, backgrounds, fonts etc. <a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank">Learn more.</a></p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default About