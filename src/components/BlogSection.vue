<template>
    <section class="blog-section">
      <div><img src="../assets/download.svg" alt="home-blogs" class="home-blogs"/></div>
      <div><img src="../assets/home-blogs-2.5de6280.svg" alt="home-blogs-2" class="home-blogs-2"/></div>
      <div class="container">
        <h2 class="section-title">Blogs</h2>
        <p class="section-description">
          Follow the latest topics presented specifically to you to support the level of awareness and culture of all matters related to you, your health, and sufficient information about your menstrual cycle.
        </p>
        <div class="blogs">
          <div class="blog-card" v-for="(blog, index) in blogs" :key="index">
            <img :src="blog.image" :alt="blog.title" class="blog-image" />
            <h3 class="blog-title">{{ blog.title }}</h3>
            <div><a href="#" class="blog-read-more">Read More...</a></div>
            <div class="doctor-sentence">
              <img src="../assets/20230910145713-userPhoto_bvPjbSmS.png" alt="tahara-logo" class="tahara-logo"/>
              <p class="blog-author">Tahara Editor "B"</p>
            </div>
          </div>
        </div>
        <div class="button-style"> <button class="blog-button">To Blogs</button></div>
        
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "BlogSection",
    data() {
      return {
        blogs: [
          {
            image: "../src/assets/article1.png",
            title: "The power of skills and self-development during adolescence",
          },
          {
            image: "../src/assets/article2.png",
            title: "Dealing with Life Challenges: Basic Negotiation and Problem-Solving Skills for Teens",
          },
          {
            image: "../src/assets/article3.png",
            title: "The Way to Set and Achieve Goals in Teenage",
          },
          {
            image: "../src/assets/article4.png",
            title: "How do I protect my children from bullying during adolescence?",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-section {
    background-color: #43378e;
    padding: 50px 20px;
    color: #fff;
    text-align: center;
    position: relative;
    /* width: 1400px; */
  }
  .home-blogs-2{
      display: block !important;
      /* transform: rotateY(180deg); */
      top: 35px !important;
      right: 2.25rem !important;
      position: absolute !important;
      margin-top: -11px;
  
  }
  .home-blogs{
    display: block !important;
    transform: rotateY(180deg);
    bottom: 0 !important;
    position: absolute !important;
    margin-left: -95px;
  }
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: 700 !important;
    text-align: left;
  }
  
  .section-description {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
    padding-bottom: .5rem !important;
    margin-top: 0 !important;
    margin-bottom: 40px;
    max-width: 600px !important;
    text-align: left;
  }
  
  .blogs {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .blog-card {
    background-color: #fff;
    color: #000;
    border-radius: 8px;
    padding: 20px;
    max-width: 280px;
    text-align: left;
    cursor: pointer !important;
    margin-bottom: .5rem !important;
    position: relative !important;
    padding-left: .5rem !important;
    padding-right: .5rem !important;
    width: 25% !important;
    margin-top: 42px;
  }
  
  .blog-image {
    width: 100%;
    height: auto;
    border-radius: .75rem !important;
  }
  .blog-title {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    margin: 15px 0;
    font-weight: 900 !important;
    color:#334155 !important;
    min-height: 115px;
    margin-left: 10px;
  }
  
  .blog-read-more {
    color: #64748b;
    text-decoration: none;
    font-weight: 500 !important;
    font-size: .875rem !important;
    line-height: 1.25rem !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    margin-top: .25rem !important;
    margin-bottom: .75rem !important;
    margin-left: 10px;
  }
  .doctor-sentence{
    align-items: center !important;
    display: flex !important;
    margin-top: .75rem !important;
    margin-left: 10px;
  }
  .tahara-logo{
    border-radius: 50% !important;
    width: 32px;
    aspect-ratio: auto 32 / 32;
    height: 32px;
    overflow-clip-margin: content-box;
    overflow: clip;
    margin-right: .25rem !important;
   
  }
  .blog-author {
    font-size: .875rem !important;
    line-height: 1.25rem !important;
    color: #334155;
    font-weight: 800 !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .button-style{
    display: flex;
    justify-content: center !important;
  }
  .blog-button {
    background-color: #009da9;
    color: #fff;
    border: none;
    padding-bottom: .75rem !important;
    padding-top: .75rem !important;
    padding-left: 2.25rem !important;
    padding-right: 2.25rem !important;
    border-radius: 10px !important;
    cursor: pointer;
    margin-top: 3.25rem !important;
    margin-bottom: 2.5rem !important;
    display: block !important;
    
    font-weight: 800 !important;
  }
  </style>
  