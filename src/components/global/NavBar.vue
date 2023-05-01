<template>
  <!-- Start Header -->
  <div class="header" id="header">
    <div class="container">
      <router-link to="/">
        <a href="#" class="logo">
          <img src="../../assets/imgs/logo.png" alt="" /> الشيخ كــار</a
        >
      </router-link>
      <ul class="main-nav">
        <router-link to="/buy" replace>
          <li><a>شراء</a></li>
        </router-link>
        <router-link to="/sale" replace>
          <li><a>بيع</a></li>
        </router-link>
        <router-link to="/lease" replace>
          <li><a>تأجير</a></li>
        </router-link>
      </ul>
    </div>
  </div>
  <!-- End Header -->
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import "../../scss/global/_navbar.scss";
export default class NavBar extends Vue {}
</script>
