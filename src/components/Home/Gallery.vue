<template>
  <div class="gallery" id="gallery">
    <h2 class="main-title">المعرض</h2>
    <div class="container">
      <div class="box" v-for="image in images" :key="image.id">
        <div class="image">
          <img
            :src="require(`../../assets/imgs/Gallery/${image.img}`)"
            alt=""
          />
        </div>
      </div>
      >
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

import ImgCar from "../../json/cars.json";
export default class Gallery extends Vue {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  images: any;
  data() {
    return {
      images: ImgCar,
    };
  }
}
</script>
