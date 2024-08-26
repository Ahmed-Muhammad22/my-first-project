<template>
    <section class="stats-section">
      <div class="logo">
        <img src="@/assets/tahara-logo.png" alt="Tahara Logo" />
      </div>
      <div class="main-content">
        <h3>We help girls and women to prioritize their health</h3>
        <p>
          By providing access to expert information, knowledge, and support, we
          encourage our users to better understand how the phases of their
          menstrual cycle affect their health & lifestyle.
        </p>
      </div>
      <div class="stats">
      <div class="stat-item">
        <div class="stat-number">0</div>
        <div class="stat-label">User</div>
      </div>
      <div class="divider"></div>
      <div class="stat-item">
        <div class="stat-number">0</div>
        <div class="stat-label">Download</div>
      </div>
      <div class="divider"></div>
      <div class="stat-item">
        <div class="stat-number">0</div>
        <div class="stat-label">Medical consulting</div>
      </div>
    </div>
      
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .stats-section {
    text-align: center;
    padding-top: 146px !important;
    padding-bottom: 56px !important;

    /* padding: 50px 20px; */
    background-color: white;
  }
  .logo{
    display: flex !important;
    justify-content: center !important;
  }
  .logo img {
    width: 100px;
    margin-bottom: 30px !important;
    font-size: 1rem;
    font-weight: 400;
  }
  
  .main-content h3 {
    color: #151d2a;
    font-size: 32px !important;
    text-align: center !important;
    margin-top: 2rem !important;
    margin-bottom: 1rem !important;
    font-weight: 600;
    /* margin-bottom: 10px; */
  }
  
  .main-content p {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    color: #64748b;
    text-align: center !important;
    max-width: 716px !important;
    margin-top: 0 !important;
    margin-bottom: 5rem !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  .stats {
    display: flex !important;
    justify-content: space-around !important;
    margin-bottom: 1.75rem !important;
  }
  
  .stat-item {
    flex: 1;
    max-width: 120px;
    margin: 0 20px;
    text-align: center;
  }
  
  .stat-number {
    font-size: 32px !important;
    color: #009da9 !important;
    font-weight: 700 !important;
    text-align: center !important;
    margin-top: 0 !important;
    margin-bottom: .25rem !important;
  }
  
  .stat-label {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    text-align: center !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    color: #151d2a !important;
  }
  .divider {
   align-items: center;
   width: 1px;
   /* height: 50px; */
   margin: 0 1rem;
    padding: 1rem 0;
  /* background-color: #ccc; */
  display: flex;
    justify-content: center;
    margin: 0 1rem;
    min-height: 100%;
    position: relative;
  /* margin: 0 20px; */
}
  </style>
  