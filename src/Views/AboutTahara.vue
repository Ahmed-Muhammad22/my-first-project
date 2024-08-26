

<template>
    <div class="page-container">
      <div><TaharaHeaderComponent/></div>  
      <div><StateSection/></div>
      <div><TaharaFooterSection/></div>
    </div>
  </template>
  <style>
  html{
    scroll-behavior: smooth;
  }
   /* .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(to bottom, #f0f4f8, #d9e2ec);
    font-family: 'Helvetica Neue', Arial, sans-serif;
    
  }
  
  .header-section {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px 40px;
    border-bottom: 2px solid #e0e0e0;
    z-index: 1000;
    position: sticky;
    top: 0;
  }
  
  .state-section {
    flex: 1;
    padding: 40px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: 20px;
    border-radius: 8px;
  }
  
  .footer-section {
    background-color: #2f3e46;
    padding: 20px 40px;
    text-align: center;
    color: #ffffff;
    border-top: 2px solid #e0e0e0;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  } */
  </style>

<script setup>
import TaharaFooterSection from '../components/FooterSection.vue';
import TaharaHeaderComponent from '../components/HeaderComponent.vue';
import StateSection from '../components/StateSection.vue';
// export default{
//   name:'AboutTahara',
//   components:{
//     TaharaFooterSection,
//     TaharaHeaderComponent,
//     StateSection

//   }
// }
</script>