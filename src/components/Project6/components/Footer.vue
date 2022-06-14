<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__firstline">
        <div class="footer__logo">
          <img class="logo__img" src="/assets/logoCITI.png" alt="Logo" />
        </div>
        <div class="footer__links">
          <router-link :to="{ name: 'LoginView' }"
            >Terms &#38; Conditions</router-link
          >
          <router-link :to="{ name: 'LoginView' }">Privacy</router-link>
          <router-link :to="{ name: 'LoginView' }"
            >Notice at Collection</router-link
          >
          <router-link :to="{ name: 'LoginView' }">CA Privacy Hub</router-link>
          <router-link :to="{ name: 'LoginView' }">Contact us</router-link>
          <router-link :to="{ name: 'LoginView' }">Sitemap</router-link>
        </div>
      </div>

      <div class="row footer__secondline">
        <span>
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  padding-top: 7px;
  padding-bottom: 5px;
  background-color: #333333;
  height: auto;
  width: 100%;
}

.footer__content {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  width: 60%;
}

.footer__firstline {
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}

.footer__links {
  display: flex;
  font-size: 11px;
  flex-wrap: wrap;
  font-weight: 500;
  justify-content: flex-end;
  color:#FFF;
  text-decoration: none;
}

a {
  margin: 5px 0 2px 10px;
}

.footer__secondline {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  font-size: 8px;
  color: #fff;
  margin: 15px 0 15px 0;
}

.logo__img {
  height: 3vh;
  width: auto;
}

img{
  vertical-align:baseline;
}
</style>