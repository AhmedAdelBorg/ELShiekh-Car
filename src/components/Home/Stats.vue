<template>
  <div class="stats" id="stats">
    <h2>احصائيات الموقع</h2>
    <div class="container">
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-people-group" />
        <span class="number" data-goal="150">0</span>
        <span class="text">العملاء</span>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-code" />
        <span class="number" data-goal="135">0</span>
        <span class="text">البيع</span>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-earth-americas" />
        <span class="number" data-goal="50">0</span>
        <span class="text">الشراء</span>
      </div>
      <div class="box">
        <font-awesome-icon class="icon" icon="fa-solid fa-stamp" />
        <span class="number" data-goal="300">0</span>
        <span class="text">التأجير</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "satusPage",
};
</script>
