<template>
  <!-- <router-view></router-view> -->
  <div id="App">
    <div><HeaderComponent /></div>
    
    <div>
      <MainContent />
    </div>
    <div>
      <AppHeader />
      <StageCard />
    </div>
    <div>
      <PregnancySection />
    </div>
    <div>
      <CalendarSection />
    </div>
    <div>
      <BlogSection />
    </div>
    <div>
      <MedicalTalks />
    </div>
    <div>
    <DataProtectionSection />
    </div>
    <div>
      <ContactSection />
    </div>
    <div>
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import MainContent from './components/MainContent.vue';
import AppHeader from './components/AppHeader.vue';
import PregnancySection from './components/PregnancySection.vue';
import CalendarSection from './components/CalendarSection.vue';
import BlogSection from './components/BlogSection.vue';
import MedicalTalks from './components/MedicalTalks.vue';
import DataProtectionSection from './components/DataProtectionSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';
// export default {
//   name: 'App',
//   components: {
//     HeaderComponent,
//     MainContent,
//     AppHeader,
//     PregnancySection,
//   }
// }
</script>

<style>
html{
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  /* background-color: #e6f3f5; */
  /* color: #00316e; */
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  width: 1400px;
  /* background-color: #b1e2e5; */
  /* width: 100%; */
}

/* a {
  text-decoration: none;
  color: inherit;
} */

/* Header Styles */
.header {
  background-color: #b1e2e5;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
 
  
}

/* .logo img {
  max-width: 200px;
  
} */

/* .navigation ul {
  display: flex;
  gap: 30px;
} */

/* .navigation a {
  font-weight: bold;
  color: #111720;
} */

/* .cta-buttons {
  display: flex;
  gap: 20px;
  
} */


/* .download-btn {
  padding: .75rem 1rem;
  border-radius: .375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
} */

/* .language-btn {
  background-color: transparent;
  border: 5px solid transparent;
  color: black;
  border-radius: 100px !important ;
  padding: 10px 20px;
  cursor: pointer;
} */

/* .download-btn {
  background-color: #009da9;
  color: #ffffff;
  
} */
/* .download-btn:hover{
  border: 2px solid;
  border-color: white;
} */

/* Main Content Styles */
/* .main-content {
  background-color:#b1e2e5;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
 
} */

/* .text-content {
  max-width: 50%;
} */

/* .text-content h1 {
  color: #2d277f;
  font-size: 3rem;
  margin-bottom: 20px;
} */

/* .text-content p {
  color: #00316e;
  margin-bottom: 30px;
  font-size: 1.2rem;
} */

/* .download-buttons {
  display: flex;
  gap: 15px;
} */

/* .google-play,
.app-store {
  background-color: #00bfa5;
  color: #ffffff;
  padding: 12px 25px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
} */

/* .app-preview img {
  width: 350px;
  max-width: 100%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
} */
 /* .app {
  display: flex;
  height: 100vh;
  background-color: #b1e2e5;
  transition: background-color 0.3s ease;
  
}  */

</style>
