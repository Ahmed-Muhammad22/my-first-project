<template>
    <div class="feature-icons">
      <div class="feature-icon" v-for="feature in features" :key="feature.label">
        
        <div class="icon-container">
          <img :src="feature.icon" :alt="feature.label" />
        </div>

        <span>{{ feature.label }}</span>
      
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureIcons',
    data() {
      return {
        features: [
          {
            label: 'Blogs',
            icon: ('../src/assets/home-heading-blogs.3980d31.svg'),
          },
          {
            label: 'Medical Talks',
            icon: ('../src/assets/home-heading-events.5a002c4.svg'),
          },
          {
            label: 'Calendar',
            icon: ('../src/assets/home-heading-calendar.da139f8.svg'),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .feature-icons {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 40px 0;
    width:100%;
  }
  
  .feature-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }
  
  .icon-container {
    background-color: #00bfa5;
    border-radius: 50%;
    /* padding: 15px; */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
   /* justify-content: center; */
  }
  
  .icon-container img {
    width: 25px;
    height: 25px;
    /* margin-top: 10px !important; */
    
  }
  
  .feature-icon span {
    color: #2d277f;
    font-size: .875rem !important;
    line-height: 1.25rem !important;
    font-weight: 600;
    margin-bottom: 20px;
    margin-left: .5rem !important;
    margin-right: .5rem !important;
  
    
  }
  </style>
  