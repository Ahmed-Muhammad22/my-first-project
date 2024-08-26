<template>
    <section class="data-protection-section">
      <div class="content">
        <img src="@/assets/home-privacy-2.0eaba14.svg" alt="Protection Icon" class="icon" />
        <h1>Your data is protected</h1>
        <p>
          Thank you for trusting us. We assure you not to share your private information with us and you have the ability to control it at any time.
        </p>
      </div>
    </section>
  </template>
<style scoped>
.data-protection-section {
  /* background: linear-gradient(135deg, #e66465 0%, #9198e5 100%); */
  background-image:  url("@/assets/home-privacy-1.b85aad0.png");
  background-repeat: no-repeat;
  position: relative !important;
  

}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 444px !important;
  color: white;
  text-align: center;
  max-width: 1400px !important;
  padding-top: 86px !important;
  padding-bottom: 104px !important;
  flex-direction: column !important;
   margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
}

.icon {
    width: 88px !important;
  height: 108px;
  margin-bottom: 1px;
}

h1 {
    font-size: 40px !important;
    line-height: 64px !important;
    font-weight: 700 !important;
    margin-top: 2rem !important;
    margin-bottom: .5rem !important;
}

p {
    line-height: 32px !important;
    font-size: 1.25rem !important;
    text-align: center !important;
    max-width: 500px !important;
    margin-top: -2px !important;
    margin-bottom: 0 !important;
}
</style>
  