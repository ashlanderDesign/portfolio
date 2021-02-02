<template>
  <div class="home">
    <div class="cover">
      <h1>ashlander</h1>
      <chevrons-down-icon class="expand"></chevrons-down-icon>
    </div>
    <div class="bio">
      
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ChevronsDownIcon } from "vue-feather-icons";

@Component({
  components: { ChevronsDownIcon },
})
export default class Home extends Vue {}
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
    background-size: contain;
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
    }
  }

  .bio {
    height: 100vh;
  }
}
</style>
