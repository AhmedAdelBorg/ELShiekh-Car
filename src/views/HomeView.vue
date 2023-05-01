<template>
  <div>
    <!-- Start Landing -->
    <landing />
    <!-- Start Brands -->
    <brands-car />
    <div class="spikes"></div>
    <!-- Start Gallery -->
    <gallery />
    <!-- Start Features -->
    <features />
    <!-- Start Work Steps -->
    <work-steps />
    <!-- Start Exhibitions -->
    <exhibitions />
    <div class="spikes"></div>
    <!-- Start Services -->
    <services />
    <!-- Start Skills -->
    <skills />
    <!-- Start Pricing -->
    <pricing />
    <!-- Start Videos -->
    <videos />
    <!-- Start Stats -->
    <stats />
    <!-- Start Discount -->
    <discount />
    <!-- Start Footer -->
    <footer-page />
    <a class="back-to-top" :class="active" @click="scrollToTop"
      ><font-awesome-icon class="icon" icon="fa-solid fa-angles-up"
    /></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BrandsCar from "@/components/Home/BrandsCar.vue";
import Landing from "@/components/Home/Landing.vue";
import Gallery from "@/components/Home/Gallery.vue";
import Features from "@/components/Home/Features.vue";
import WorkSteps from "@/components/Home/WorkSteps.vue";
import Exhibitions from "@/components/Home/Exhibitions.vue";
import Services from "@/components/Home/Services.vue";
import Skills from "@/components/Home/Skills.vue";
import Pricing from "@/components/Home/Pricing.vue";
import Videos from "@/components/Home/Videos.vue";
import Stats from "@/components/Home/Stats.vue";
import Discount from "@/components/Home/Discount.vue";
import footerPage from "@/components/Home/Footer.vue";
import "../scss/_homepage.scss";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      active: "",
    };
  },
  components: {
    BrandsCar,
    Landing,
    Gallery,
    Features,
    WorkSteps,
    Exhibitions,
    Services,
    Skills,
    Pricing,
    Videos,
    Stats,
    Discount,
    footerPage,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      window.scrollY >= 800 ? (this.active = "active") : (this.active = "");
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>
