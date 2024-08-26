<template>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-content">
          <div class="app-links">
            <img src="@/assets/logo.f562438.svg" alt="Tahara logo" class="logo" />
            <p class="get-app-text">Get App now</p>
            <div class="store-buttons">
              <button class="app-store-button">
                <img src="@/assets/apple.1cc9c66.svg" class="apple" />
                <span>App Store</span>
              </button>
              <button class="play-store-button">
                <img src="@/assets/google-play.50d7da3.svg" class="play"/>
               <span>Play Store</span> 
              </button>
            </div>
          </div>
          <div class="footer-links">
            <h3>Hot Links</h3>
            <ul>
              <li><a href="#">About Tahara</a></li>
              <li><a href="#">Medical Talks</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
            <router-view/>
          </div>
          <div class="contact-info">
            <h3>Contact info.</h3>
            <p class="email-contact">
              <span class="s1">Email:</span>
              <span class="s2">tahara@tahara.com.sa</span>
            </p>
            <p class="number-contact">
              <span class="s3">Phone number:</span>
              <span class="s4">5665854455</span>
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="social-icons">
            <img src="@/assets/download (3).svg" class="icon"/>
            <img src="@/assets/download (4).svg" class="icon"/>
            <img src="@/assets/footer-instagram.f44b60d.svg" class="icon"/>
          </div>
          <div class="copyright">
            <p class="one"> All rights reserved 
              <span>Tahara</span>
            </p>
            <p class="two">  2022 ©</p>
        </div>
          
          <div class="footer-terms">
            <a href="/en/privacy-policy" class="privacy">Privacy policy</a>
            <a href="/en/terms-and-conditions" class="conditions">Terms and conditions</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  };
  </script>
<style scoped>
.footer-section {
  background-color: #fff;
  /* padding: 20px 0; */
  padding-top: 48px !important;
  border-top: 1px solid #e0e0e0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.app-links{
    width: 33.333333% !important;

}
.app-links .logo {
  width: 150px;
  cursor: pointer !important;
  margin-bottom: 0px !important;
  font-size: 1rem;
  font-weight: 400;
}

.get-app-text {
  color: #3b3791;
  font-weight: 800 !important;
  margin: 20px 0;
  text-align: left !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  /* margin-bottom: 24px !important; */
}

.store-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap !important;
}
.app-store-button{
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    margin: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    vertical-align: bottom;
    border-radius: .375rem;
    color: #fff;
    font-size: 1rem;
    padding: .75rem 1rem;
    transition: none;

}
.apple{
    margin-right: .25rem !important;
}

.play-store-button{
    margin-top: 0 !important;
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    margin: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: bottom;
    border-radius: .375rem;
    color: #fff;
    font-size: 1rem;
    padding: .75rem 1rem;
    transition: none;
}
.play{
    margin-right: .25rem !important;
}
.app-store-button, .play-store-button {
  background-color: #009da9;
  /* color: #fff; */
  padding: 10px 20px;
  /* border-radius: 5px; */
  font-weight: 500;
  border: none;
}
.footer-links{
    width: 20% !important;
    margin-top: 0 !important;

}
.footer-links h3, .contact-info h3 {
  color: #3b3791 !important;
  font-weight: 800 !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  margin-top: 0 !important;
  margin-bottom: 24px !important;
  text-align: left !important;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 10px;
}

.footer-links ul li a {
  color: #111720;
  text-decoration-line: none !important;
  text-align: left !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  display: block !important;
  margin-bottom: 24px !important;


}

.footer-links ul li a:hover {
  text-decoration: underline;
}
.contact-info{
    margin-top: 0 !important;
    width: 33.333333% !important;
    
}
.contact-info .email-contact {
    margin-top: 0 !important;
    margin-bottom: 36px !important;
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    
    text-align: left !important;
    /* display: block !important; */
}
.email-contact .s1{
  color: #475569;
}
.email-contact .s2{
  color: #111720 !important;
  /* display: block; */

}
.contact-info .number-contact{
    color: #475569;
    text-align: left !important; 
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    margin-top: 0 !important;
    margin-bottom: 24px !important;
    /* display: block !important; */
}
.number-contact .s3{
  color: #475569;
}
.number-contact .s4 {
  color: #111720 !important;
}

.footer-bottom {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
  flex-wrap: wrap !important;
  /* border-top: 1px solid #e0e0e0; */
  /* padding-top: 20px; */
  padding-bottom: 24px !important;
  padding-top: 24px !important;
  margin-top: 20px;
}
.social-icons{
  width: 33.333333% !important;
  padding-bottom: .5rem !important;
  padding-top: .5rem !important;
  display: flex !important;
  
}
.social-icons img {
  margin-right: .75rem !important;
  cursor: pointer !important;
  width: 40px;
  height: 40px;
  margin-bottom: 24px !important;
  /* margin-left: .25rem !important;
  margin-right: .25rem !important; */

  /* margin-right: 10px; */
}

/* .social-icons a i {
  font-size: 20px;
} */

/* .social-icons a:hover {
  color: #00a4a8;
} */

.copyright {
  width: 33.333333% !important;
  padding-bottom: .5rem !important;
  padding-top: .5rem !important;
  display: flex !important;
  /* font-size: 14px; */
}
/* mark{
  background-color: #fff;
  color: #009da9;
} */
.one {
  text-align: left !important;
  color:#1d1d26;
  font-weight: 500 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  margin-top: 0 !important;
  margin-bottom: 24px !important;
}
.one span {
  color: #009da9 !important;
  font-weight: 800 !important;
}
.two{
  text-align: left !important;
  color: #1d1d26 !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  margin-top: 0 !important;
  margin-bottom: 24px !important;
  margin-left: .25rem !important;
  margin-right: .25rem !important;
}
.footer-terms{
  width: 33.333333% !important;
  padding-bottom: .5rem !important;
  padding-top: .5rem !important;
  display: flex !important;
}
.footer-terms .privacy {
  text-align: left !important;
  color: #1d1d26 !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  display: block !important;
  margin-bottom: 24px !important;
  /* margin-left: 10px; */
  text-decoration-line: none !important;

}
.footer-terms .conditions {
  text-align: left !important;
  text-decoration-line: none !important;
  color: #1d1d26 !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  display: block !important;
  margin-bottom: 24px !important;
  margin-left: 1.25rem !important;
  margin-right: 1.25rem !important;
}
/* .footer-terms a:hover {
  text-decoration: underline;
} */
</style>
  