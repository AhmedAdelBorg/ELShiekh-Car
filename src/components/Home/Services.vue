<template>
  <div class="services" id="services">
    <h2 class="main-title">خدمات الموقع</h2>
    <div class="container">
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-user-shield" />
        <h3>الأمان</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-screwdriver-wrench" />
        <h3>مراكز الصيانة</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-map-location-dot" />
        <h3>الموقع</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-laptop-code" />
        <h3>التواصل</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-car" />
        <h3>المعارض</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-bullhorn" />
        <h3>اخبار السيارات</h3>
        <div class="info">
          <a href="#">التفاصيل</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Services extends Vue {}
</script>
