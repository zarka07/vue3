<template>
  <header>
    <Header />
  </header>
  <main class="main">
    <aside class="main__aside__left">
      <router-link to="/about"><h6>where?</h6></router-link>
    </aside>
    <article class="main__article">
      <section id="text" class="main__article__title">
        <div>FULL-CYCLE</div>
        <div>EVENT AGENCY</div>
      </section>
      <section id="run" class="main__article__runningtext">
        <div class="article__runningtext__top marquee marquee__top">
          <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        </div>
        <div class="article__runningtext__bottom marquee marquee__bottom">
          <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
        </div>
      </section>
      <section class="main__article__textRotated">
        <img class="rot" src="/assets/images/buttons.svg" alt="buttons" />
      </section>
    </article>
    <aside class="main__aside__right">
      <router-link to="/about"><h6>what?</h6></router-link>
    </aside>
    <aside class="main__aside__bottom">
      <router-link to="/about"><h6>who?</h6></router-link>
    </aside>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "HomeView",
  components: {
    Header,
  },
  mounted() {
    let text = document.getElementById("text"),
      //body = document.body,
      steps = 7;
    function threedee(e) {
      let x = Math.round(
          (steps / (window.innerWidth / 2)) * (window.innerWidth / 2 - e.clientX)
        ),
        y = Math.round(
          (steps / (window.innerHeight / 2)) * (window.innerHeight / 2 - e.clientY)
        ),
        shadow = "",
        color = 190,
        //radius = 3,
        i,
        tx,
        ty;

      for (i = 0; i < steps; i++) {
        tx = Math.round((x / steps) * i);
        ty = Math.round((y / steps) * i);
        if (tx || ty) {
          color -= 3 * i;
          shadow +=
            tx + "px " + ty + "px 0 rgb(" + color + ", " + color + ", " + color + "), ";
        }
      }
      shadow +=
        x +
        "px " +
        y +
        "px 1px rgba(0,0,0,.2), " +
        x * 2 +
        "px " +
        y * 2 +
        "px 6px rgba(0,0,0,.3)";

      text.style.textShadow = shadow;
      text.style.webkitTransform =
        "translateZ(0) rotateX(" + y * 1.5 + "deg) rotateY(" + -x * 1.5 + "deg)";
      text.style.MozTransform =
        "translateZ(0) rotateX(" + y * 1.5 + "deg) rotateY(" + -x * 1.5 + "deg)";
    }
    document.addEventListener("mousemove", threedee, false);
  },
};
</script>

<style scoped>
@import "../css/Home.vue.style.css";
</style>
