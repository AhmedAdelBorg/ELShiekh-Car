<template>
  <div class="videos" id="videos">
    <h2 class="main-title">مقاطع الفيديو</h2>
    <div class="container">
      <div class="holder">
        <div class="list">
          <div class="name">أهم مقاطع الفيديو <i class="fa fa-random"></i></div>
          <ul>
            <li>أهم مقاطع الفيديو <span>05:18</span></li>
            <li>أهم مقاطع الفيديو <span>03:18</span></li>
            <li>أهم مقاطع الفيديو <span>05:25</span></li>
            <li>أهم مقاطع الفيديو <span>04:16</span></li>
            <li>أهم مقاطع الفيديو <span>07:48</span></li>
            <li>أهم مقاطع الفيديو <span>03:12</span></li>
            <li>أهم مقاطع الفيديو <span>08:10</span></li>
          </ul>
        </div>
        <div class="preview">
          <div class="video-box">
            <!-- <img src="../assets/imgs/cars-video.jpg" alt="" /> -->
            <a
              href="https://www.youtube.com/watch?v=fdGWRq1dVBA"
              class="play-btn"
              target="_blank"
            ></a>
          </div>
          <div class="info">Everything About The Virtual Hosts</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Videos extends Vue {}
</script>
