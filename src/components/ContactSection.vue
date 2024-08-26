<template>
    <div class="contact-section">
      <div class="contact-info">
        <h2>We'd love to hear from you.</h2>
        <p>If you have any questions or suggestions don't hesitate, contact us</p>
        
          <p class="email-contact"><strong>Email:</strong></p>
          <p class="email-answer">tahara@tahara.com.sa</p>
          <p class="number-contact"><strong>Phone number:</strong></p>
          <p class="number-answer"> 56658544455</p>
        
          <div class="social-icons">
            <img src="@/assets/download (1).svg" class="icon"/>
            <img src="@/assets/download (2).svg" class="icon"/>
            <img src="@/assets/home-instagram.22dfcd3.svg" class="icon"/>
          </div>
      </div>
      <div class="contact-form">
        <form>
          <div class="form-group">
            <div class="input-wrapper">
              <label for="username" class="name-inputs"> Name</label>
              <span class="p-input-icon-left">
                <i class="fa-regular fa-user"></i>
              </span>
              <input type="text" placeholder= "User Name"/>
            </div>
            <div>
              <label for="email" class="email-inputs">Email</label>
              <span class="p-input-icon-left">
                <i class="fa-regular fa-envelope"></i>
                <input type="email" placeholder="example@gmail.com" />
              </span>
            </div>
            <label for="subject" class="subject-inputs">Subject</label>
            <input type="text" placeholder="Subject Title" />
            <label for="message" class="message-inputs">Message</label>
            <textarea placeholder="Write Your Message ..."></textarea>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  <style scoped>
  .contact-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap !important;
    background-color: #3e348f;
    padding: 50px;
    color: #fff;
  }
  
  .contact-info {
    width: 47% !important;
    margin-bottom: .5rem !important;
  }
  
  .contact-info h2 {
    font-size: 40px !important;
    margin-bottom: .5rem !important;
    font-weight: 700 !important;
    margin-top: 0 !important;
  }
  
  .contact-info p {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    /* margin-top: 0 !important;
    margin-bottom: 1.5rem !important; */
  }
  
  .email-contact{
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    margin-top: 25px !important;
    /* margin-bottom: 0.5rem !important; */
  }
  .email-answer{
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    margin-top: 0 !important;
    margin-bottom: .5rem !important;
  }
  .number-contact{
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    margin-top: 0 !important;
    /* margin-bottom: 0.5rem !important; */
  }
  .number-answer{
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    margin-top: 0 !important;
    margin-bottom: 0.5rem !important;
  }
  
  .social-icons {
    /* width: 33.333333% !important; */
    padding-bottom: .5rem !important;
    padding-top: .5rem !important;
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }
  
  .social-icons .icon {
    margin-right: .5rem !important;
    cursor: pointer !important;
    width: 40px;
    height: 40px;
  }
  
  .contact-form {
    width: 50%;
    background-color: white;
    padding: 2rem !important;
    border-radius: 1rem !important;
    color: #333;
    
  }
  
  .form-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    flex-wrap: wrap !important;
  }
  /* .input-wrapper{
    display: flex;
   align-items: center;
   border-radius: 0.5rem;
    padding: 0.5rem;

  }
  .input-wrapper i{
    margin-right: 0.5rem;
  } */
  
  .name-inputs,
  .email-inputs,
  .subject-inputs,
  .message-inputs{
    color: #738195;
    font-weight: 800 !important;
  }
  
  /* .form-group input {
    width: 50%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  } */

  
  
  input[type="text"],
  input[type="email"],
  textarea {
    background-color: rgba(241, 232, 248, .5);
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 2px solid #ddd;
    border-radius: 5px;
  }

  /* input[type="text"],
  input[type="email"], */
  textarea:focus {
    border-color: blue;
    outline: none;
  }
  input[type="text"]:focus{
    border-color: blue;
    outline: none;
  }
  input[type="email"]:focus {
    border-color: blue;
    outline: none;
  }
  textarea {
    height: 100px;
    resize: none;
  }
  
  button {
    background-color: #009da9;
    color: #fff;
    padding: 10px 20px !important;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 800 !important;
    margin-top: 1.5rem !important;
    text-align: center;
    
  }
  </style>
    