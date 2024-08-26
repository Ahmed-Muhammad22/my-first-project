<template>
  <header class="header">
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
    <router-view/>
    <div class="cta-buttons" :dir="isArabic ? 'rtl' : 'ltr'">
      <button @click="toggleLanguage" class="language-btn">
        <img src="@/assets/World-light.214f008.svg" class="english-btn" />
<!-- //{{ $t('language') }} -->
        <span>English</span>
      </button>
      <button class="download-btn">Download App now</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isArabic: false,
    };
  },
  methods: {
    toggleLanguage() {
      this.isArabic = !this.isArabic;
      this.$i18n.locale = this.isArabic ? 'ar' : 'en';
      document.documentElement.setAttribute('dir', this.isArabic ? 'rtl' : 'ltr');
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* background-color: #b1e2e5; */
  position: fixed;
  z-index: 1000;
  width: 1325px !important;
  height: 88px;
  margin-left: -60px;
}

.logo img {
  max-width: 200px;
  margin-right: 145px;
  cursor: pointer;
  margin-left: 55px;
 
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin-left: -245px;
}

.navigation a {
  text-decoration: none;
  color: #111720;
  font-weight: 700 !important;
  display: block;
  /* margin-left: -310px; */
  
}

.cta-buttons {
  display: flex;
  /* gap: 20px; */
  margin-left: 79px;
    margin-right: 26px;

}


.download-btn {
  background-color: #009da9;
  padding: .75rem 1rem;
  border-radius: .375rem;
  border: 1px solid #009da9;
  color: white;
  cursor: pointer;
}

.language-btn {
  background-color: transparent;
  border: none;
  box-shadow: none;
  border: 1px solid #009da9;
  color: #111720 !important;
  border-radius: 100px !important ;
  padding: 10px 20px;
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
.language-btn:hover{
  background-color: #009da9;
  color: white;
}
.download-btn:hover{
  border: 2px solid;
  border-color: white;
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
</style>

