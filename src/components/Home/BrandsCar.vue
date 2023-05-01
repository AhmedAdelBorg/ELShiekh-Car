<template>
  <div class="brands" id="brands">
    <h1 class="main-title">الماركات</h1>
    <div class="container">
      <div class="box" v-for="brand in brands" :key="brand.id">
        <img :src="require(`../../assets/imgs/Brands/${brand.img}`)" alt="" />
        <div class="content">
          <h3>{{ brand.title }}</h3>
        </div>
        <div class="info">
          <a href="">المزيد</a>
          <font-awesome-icon class="icon" icon="fa-solid fa-arrow-left" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

import BransCar from "../../json/brands.json";
export default class BrandsCar extends Vue {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  brands: any;
  data() {
    return {
      brands: BransCar,
    };
  }
}
</script>
