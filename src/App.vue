<template>
  <nav-bar />
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NavBar from "@/components/global/NavBar.vue"; // @ is an alias to /src

@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style>
@font-face {
  font-family: "Cairo";
  src: local("Cairo"), url(./fonts/Cairo-Regular.ttf) format("truetype");
}
</style>
