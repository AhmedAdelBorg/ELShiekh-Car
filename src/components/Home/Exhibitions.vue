<template>
  <div class="exhibitions" id="exhibitions">
    <h2 class="main-title">أهم المعارض</h2>
    <div class="container">
      <div class="box" v-for="exhibition in exhibitions" :key="exhibition.id">
        <div class="data">
          <img :src="require(`../../assets/imgs/${exhibition.img}`)" alt="" />
          <div class="social">
            <a href="#">
              <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
            </a>
            <a href="#">
              <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
            </a>
            <a href="#">
              <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
        <div class="info">
          <h3>{{ exhibition.title }}</h3>
          <p>
            {{ exhibition.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

import exhibitions from "../../json/exhibitions.json";

export default class Exhibitions extends Vue {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  exhibitions: any;
  data() {
    return {
      exhibitions: exhibitions,
    };
  }
}
</script>
