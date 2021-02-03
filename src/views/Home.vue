<template>
  <div class="home">
    <section class="cover">
      <h1>ashlander</h1>
      <transition name="fade">
        <chevrons-down-icon
          class="expand"
          @click="onExpand()"
          v-if="isExpandShown"
        ></chevrons-down-icon>
      </transition>
    </section>
    <section class="bio">
      <aside class="work-exp">
        <h2 class="title">мой опыт</h2>
        <div class="row">
          <span class="circle-start"></span>
          <span class="period">Сентябрь 2019 - Март 2020</span>
        </div>
        <div class="row">
          <span class="line"></span>
          <div class="work">
            <h3 class="company">Строительный Двор</h3>
            <section class="stack">
              <span class="tech">TypeScript</span>
              <span class="tech">React</span>
              <span class="tech">Mobx</span>
              <span class="tech">Jest</span>
            </section>
          </div>
        </div>
        <div class="row">
          <span class="circle"></span>
          <span class="period">Март 2020 - по настоящее время</span>
        </div>
        <div class="row">
          <span class="line"></span>
          <div class="work">
            <h3 class="company">Carbery</h3>
            <section class="stack">
              <span class="tech">TypeScript</span>
              <span class="tech">React</span>
              <span class="tech">Mobx</span>
              <span class="tech">Jest</span>
              <span class="tech">Angular</span>
              <span class="tech">Next.js</span>
              <span class="tech">Vue.js</span>
            </section>
          </div>
        </div>
        <div class="row">
          <span class="circle-end"></span>
          <span class="period">Ближайшее будущее</span>
        </div>
        <div class="row">
          <span class="line"></span>
          <div class="work">
            <h3 class="company">Тут может быть Ваша компания</h3>
            <section class="stack">
              <a
                href="https://vk.com/ashlander_design"
                target="_blank"
                class="social"
                >ВКонтакте</a
              >
              <a
                href="https://hh.ru/resume/d944600eff0723aaae0039ed1f347538565470"
                target="_blank"
                class="social"
                >HeadHunter</a
              >
              <a
                href="https://career.habr.com/manacast"
                target="_blank"
                class="social"
                >Habr</a
              >
              <a href="https://t.me/D10_BR4ND0" target="_blank" class="social"
                >Telegram</a
              >
            </section>
          </div>
        </div>
      </aside>
      <main class="biography"></main>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ChevronsDownIcon } from "vue-feather-icons";

@Component({
  components: { ChevronsDownIcon },
})
export default class Home extends Vue {
  isExpandShown = true;

  mounted() {
    window.addEventListener("scroll", this.onScroll);
  }

  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll(e: Event) {
    if (window.scrollY > 10) {
      this.isExpandShown = false;
    } else {
      this.isExpandShown = true;
    }
  }

  onExpand() {
    if (window) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  margin: 0;
  padding: 0;

  .cover {
    background-image: url("/images/home_cover.png");
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
      font-family: Canterbury;
      font-size: 20vh;
      color: #323232;
    }

    .expand {
      position: absolute;
      bottom: 10%;
      cursor: pointer;

      &:hover {
        color: #ff1177;
      }
    }
  }

  .circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 8px solid #cecece;
  }

  .circle-start {
    @extend .circle;
    border-color: #ff1177;
  }

  .circle-end {
    @extend .circle;
    border-color: #323232;
  }

  .line {
    width: 8px;
    margin-left: 12px;
    height: 100%;
    border-radius: 12px;
    background-color: #cecece;
  }

  .bio {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .work-exp {
      height: 100%;
      width: 40%;
      padding: 16px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      gap: 32px;

      .title {
        font-family: Montserrat, Roboto, sans-serif;
        width: 100%;
        text-align: left;
        font-size: 14vh;
        line-height: 10vh;
        font-weight: 900;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
      }

      .work {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        font-family: Montserrat;

        .company {
          font-weight: 900;
          font-size: 48px;
          text-align: left;
        }

        .stack {
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
        }

        .tech {
          padding: 4px 8px;
          border-radius: 8px;
          background-color: #cecece;
          font-weight: 500;
        }

        .social {
          padding: 4px 8px;
          border-radius: 8px;
          background-color: #323232;
          color: #fff;
          font-weight: 500;
          text-decoration: none;
        }
        .social-red {
          @extend .social;
          background-color: #ff2222;
        }

        .social-cyan {
          @extend .social;
          background-color: #0099ff;
        }

        .social-blue {
          @extend .social;
          background-color: #2255ff;
        }
      }

      .period {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 18px;
      }
    }

    .biography {
      height: 100%;
      width: 60%;
    }
  }
}
</style>
