<template>
  <section class="calendar-section">
    <div class="content">
      <h2>Calendar</h2>
      <p>
        See all your data entered in a clear way through frequent analysis
        reports and calendars, also you can provide data to your specialized
        doctor.
      </p>
    </div>
    <div class="images">
    <div >
      <img src="../assets/home-calendar-3.fcbf20e.png" class="square" />
    </div>
    <div ><img
      src="../assets/Calendar.png"
      alt="Phone with calendar" class="phone-image"/></div>
      <div ><img src="../assets/home-calendar-2.6e8418e.png" class="point"/></div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.calendar-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c2e7ea;
  padding: 2rem;
  /* height: 530px !important;
  flex-wrap: wrap !important; */
  
}

.content {
  max-width: 40%;
  /* color: #322f75 !important; */
  /* display: flex !important;
  height: 530px !important;
  flex-wrap: wrap !important;
  align-items: center !important; */
}

.content h2 {
  color: #322f75 !important;
  font-weight: 700 !important;
  font-size: 40px !important;
  margin-top: 0 !important;
  margin-bottom: .75rem !important;
}

.content p {
  width: 370px !important;
  color: #322f75 !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  margin-bottom: 0 !important;
    margin-top: 0 !important;
    
}
.images {
  position: relative;
  width: 100%;
  height: 530px; 
  overflow: hidden;

}


  
  

.phone-image {
  position: absolute;
    transform: rotate(-80deg);
    width: 80%;
    margin-top: -86px;
    margin-left: 188px;
    height: 530px;}


    /* transform: translateY(100px); */

.square{
  /* top: 0px;
  left: 0px; */
  margin: auto !important;
  top: 2.5rem !important;
  right: 428px !important;
  left: 0 !important;
  position: absolute !important;

  /* transform: rotate(0deg); */
}
/* .point::before {
  transform: rotateY(180deg);
  background-color: #b1e2e5;
  background-image: url("@/assets/Calendar.png") ;
  background-repeat: repeat;
  content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
} */
.point{
  /* right: .25rem !important;
  top: 1.5rem !important; */
  /* position: absolute !important; */
  /* left: 25%; */
  right: .25rem !important;
  top: 1.5rem !important;
  position: absolute !important;
  /* transform: rotate(-10deg);
  margin-left: 636px;
    margin-top: -123px */
}
</style>
