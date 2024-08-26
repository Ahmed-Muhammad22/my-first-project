<template>
  <main class="main-content">
    <div>
      <div><FeatureIcons /></div>
    
    
     <div class="text-content">
       <h1>Track your menstrual cycle and achieve your health goals</h1>
       <p>
        Tahara app will enable you to track your period by recording your
        symptoms and building predictions and tips that fit your monthly
        routine.
       </p>
       <div class="download-buttons">
        <button class="google-play">
          <img src="@/assets/google-play.50d7da3.svg" class="play-app"/>
          <span> Google Play</span> 
        </button>
        <button class="app-store">
            <img src="@/assets/apple.1cc9c66.svg" class="apple-app" />
            <span>App Store</span>
        </button>
      </div>
    </div>
   </div> 
    

    <div class="app-preview">
      <img src="@/assets/Home-landing-mob-img-en.cdc8689.svg" alt="App Preview" />
    </div>
  </main>
</template>

<script>
import FeatureIcons from './FeatureIcons.vue';
export default {
  name: 'MainContent',
  components: {
    FeatureIcons,
  },
};
</script>

<style scoped>
.main-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 40px; */
  background-color: #b1e2e5;
  /* min-height: calc(100vh - 100px);  */
  box-sizing: border-box;
  padding: 60px 5%;
  flex: 1;
  
}

.text-content {
  max-width: 300px;
}

.text-content h1 {
  color: #322f75;
  font-size: 3rem !important;
  line-height: 62px !important;
  font-weight: 800 !important;
  margin-top: 0 !important;
 margin-bottom: 1rem !important;
  
}

.text-content p {
  color: #322f75;
  margin-left: .5rem !important;
  font-weight: 500 !important;
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
  margin-bottom: 40px !important;

}
.download-buttons {
  display: flex;
  flex-wrap: wrap !important;
  gap: 20px;
}
.google-play{
  background-color: #009da9;
  box-shadow: none;
  border: 1px solid #009da9;
  margin-top: 0 !important;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  align-items: center;
    cursor: pointer;
    display: inline-flex;
    /* margin: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: bottom; */
    padding: 12px 25px;
    border-radius: 5px;
   font-size: 1rem;
}
.google-play img {
  margin-right: .25rem !important;
}
.google-play span {
  text-align: left !important;
}
.app-store{
  background-color: #009da9;
  box-shadow: none;
  border: 1px solid #009da9;
  margin-top: 0 !important;
  margin-left: 1rem !important;
  margin-right: 1rem !important;
  align-items: center;
    cursor: pointer;
    display: inline-flex;
    /* margin: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: bottom; */
    padding: 12px 25px;
    border-radius: 5px;
   font-size: 1rem;
   font-weight: 600;
} 
.app-store img {
  margin-right: .25rem !important;
}
.app-store span {
  text-align: left !important;
}
/* .google-play,
.app-store {
  background-color: #009da9;
  border: none;
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;
} */
.app-preview{
  width: 33.333333% !important;
  margin-top: 0 !important;
  padding-bottom: 38px !important;
}
.app-preview img {
  width: 300px;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
  height: 580px !important;
  background-color: #b1e2e5;
  margin-top: -157px;
  /* margin-top: 71px; */
}
</style>


  