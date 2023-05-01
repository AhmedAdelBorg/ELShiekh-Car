<template>
  <div class="album py-5">
    <div class="container">
      <div
        id="album-row"
        class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
      >
        <div class="col" v-for="car in dataCars" :key="car.id">
          <div class="card shadow-sm">
            <div class="card text-center shadow-sm">
              <img :src="require(`../assets/imgs/Gallery/${car.img}`)" alt="" />
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h2>{{ car.title }}</h2>
              </div>

              <div class="card-body">
                <div
                  class="btn-group d-flex justify-content-between align-items-center"
                >
                  <div>
                    <font-awesome-icon icon="fa-solid fa-gauge-high" />
                    <p>{{ car.spead }}</p>
                  </div>
                  <div>
                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                    <p>{{ car.model }}</p>
                  </div>
                </div>
                <div>
                  <font-awesome-icon icon="fa-solid fa-location-dot" />
                  <p>{{ car.location }}</p>
                </div>
                <div class="price">{{ car.lease }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import dataCars from "../json/leaseCars.json";
export default defineComponent({
  data() {
    return {
      dataCars: dataCars,
    };
  },
});
</script>
