<template>
    <div class="medical-talks-section">
      <div class="content">
        <h2>Medical Talks</h2>
        <p>
          Follow the various topics related to your physical and psychological health and 
          your life matters provided by doctors who specialize in every field, by asking 
          questions and following up on Live-sessions.
        </p>
      </div>
      <div class="home-event">
        <img src="@/assets/doctor.85dacd6.svg" alt="Doctor Illustration" class="image" />
      </div>
    </div>
  </template>
<style scoped>
.medical-talks-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f8f9fa;
  position: relative !important;
  flex-wrap: wrap !important;
}

.content {
  max-width: 50%;
  min-height: 710px !important;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
    /* width: 100%; */
  /* max-width: 1400px !important; */
}

.content h2 {
  color: #322f75;
  font-size: 40px !important;
  font-weight: 700 !important;
  margin-top: 0 !important;
  margin-bottom:  .75rem !important;
}

.content p {
  color: #322f75 !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  width: 470px !important;
}
.home-event{
    background-repeat: no-repeat;
    background-size: cover;
    width: 54% !important;
    display: block !important;
    background-position: 50% !important;
    background-image: url("@/assets/events--home-en-bg.9d509ab.svg");
    min-height: 900px !important;
}
.image {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  width: 300.35px;
  /* max-width: 100%; */
  height: 664.6px !important;
  right: 380px !important;
  /* overflow-clip-margin: content-box;
  overflow: clip; */
  /* margin-top: 349px;
  margin-left: 32px; */
  /* transform: rotateY(180deg); */
  bottom: 0 !important;
  position: absolute !important;
}


</style>
  