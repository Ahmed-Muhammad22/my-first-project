<template>
  <header class="header">
    <div class="header-container">
    <div class="log-link">
    <div class="logo">
      <img src="@/assets/tahara-logo.png" alt="Tahara Logo" />
    </div>
    <nav class="navigation">
      <ul>
        <li><a href="#">About Tahara</a></li>
        <li><a href="#">Medical Talks</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </nav>
  </div>
    <div class="cta-buttons">
      <button class="language-btn">
        <img src="@/assets/World-light.214f008.svg" class="english-btn" />
        <span>English</span>
      </button>
      <button class="download-btn">Download App now</button>
    </div>
  </div> 
  </header>
</template>

<script>
export default {
  name: 'TaharaHeaderComponent',
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between !important;
  align-items: center !important;
  /* padding: 20px; */
  background-color: #fdffff;
  position: fixed;
  z-index: 1000 !important;
  width: 100% !important;
  height: 88px !important;
  /* margin-left: -60px; */
  border-bottom: 1px solid #f1f5f9;
  /* max-width: 1400px !important; */
}
.header-container{
  max-width: 1400px !important;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
}
.log-link{
  display:flex;
  flex-wrap: wrap;
  align-items: center !important;
}
.logo img {
  /* width: 200px; */
  /* margin-right: 145px; */
  cursor: pointer !important;
  /* margin-left: 55px; */
  margin-right: 3rem !important;
  font-size: 1rem;
  font-weight: 400;
}

/* .navigation ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-left: -327px;
} */

.navigation a {
  border-bottom: 2px solid #009da9;
  padding-bottom: 2px;
  text-align: left !important;
  display: block !important;
  margin-right: 1rem !important;
  text-decoration-line: none !important;
  /* text-decoration: none; */
  color: #111720;
  font-weight: 700 !important;
  font-size: 1rem !important;
  line-height: 1.5rem !important;
  margin-bottom: 0 !important;       
    /* margin-left: -310px;  */
} 

.cta-buttons {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-wrap: wrap-reverse !important;
  /* gap: 20px;
  margin-left: 100px; */
}
.language-btn {
  background-color: transparent;
  border: none;
  box-shadow: none;
  border: 1px solid #009da9;
  color: #111720 !important;
  border-radius: 100px !important ;
  /* padding: 10px 20px; */
  margin-left: .75rem !important;
  margin-right: .75rem !important;
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
  cursor: pointer;
}
.english-btn{
  color: #475569;
  margin-left: .25rem !important;
  margin-right: .25rem !important;

}
.language-btn span{
  font-weight: 900 !important;
  font-size: .875rem !important;
  line-height: 1.25rem !important;
}
/* span {
  font-weight: 900 !important;
  font-size: .875rem !important;
  line-height: 1.25rem !important;
} */
.language-btn:hover{
  background-color: #009da9;
  color: white;
}
.download-btn {
  background-color: #009da9;
  /* padding: .75rem 1rem;
  border-radius: .375rem; */
  border: 1px solid #009da9;
  box-shadow: none;
  display: block !important;
  align-items: center;
    cursor: pointer;
    /* display: inline-flex; */
    margin: 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    /* -webkit-user-select: none; */
    -moz-user-select: none;
    user-select: none;
    /* vertical-align: bottom; */
  color: white;
  cursor: pointer;
}
.download-btn:hover{
  border-color: #009da9;
}

</style>

