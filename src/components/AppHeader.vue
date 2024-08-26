<template>
    <div class="container">
    <div class="ones">
      <img src="@/assets/home-cycles--en-1.955e5c2.png" alt="Mobile Mockup" class="mockup-image" />
    </div>
   

    <div class="cycle-info">
      <h2>Learn about the stages of your cycle in detail</h2>
      <StageCard
        v-for="(stage, index) in stages"
        :key="index"
        :stage="stage"
        :index="index"
        @change-background="changeColors(color)"
      />

    </div>
   </div>
  </template>
  <script setup>
  import StageCard from './StageCard.vue';
  
  const stages = [
    {
      title: "pre-ovulation stage",
      description: "Tracking this stage encourages you to do different activities such as sports",
    },
    {
      title: "Cycle/menstruation Stage",
      description: "Tracking this stage helps you plan your month to be prepared",
    },
    {
      title: "Ovulation Stage",
      description: "Keeping track of this stage is important when planning pregnancy",
    },
  ];
 
    // const c = changeColors(color){
    //   console.log()
    //  };

  
  </script>
  
  <style scoped>
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #54c4d1;
    padding: 2rem;
    /* max-width: 1400px !important; */
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;

  }

  /* .app-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #54c4d1;
    padding: 2rem;
  } */
  .ones {
    width: 25.333333% !important;
    margin-top: 57px !important;
  }
  .mockup-image {
    max-width: 100% !important;
    height: 600px !important;
    margin-left: 77px;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
    /* border-radius: 2rem; */
  }

  .cycle-info {
    width: 55% !important;
    margin-top: 57px !important;
    margin-bottom: 1.25rem !important;
    /* padding: 2rem; */
    background-color: #54c4d1;
    /* color: #fff; */
  }
  
  h2 { 
    color: #fff; 
    font-size: 2rem !important;
    margin-bottom: 1rem;
    font-weight: 700 !important;
    margin-top: 0 !important;
    line-height: 64px !important;
  }
  </style>
  