<template>
  <div class="discount" id="discount">
    <div class="image">
      <div class="content">
        <h2>اسعارنا مناسبة للجيع</h2>
        <p>
          لدينا اسعار بسيطة وفي متناول اليد وايضا تجربة تنقلك الي عالم اخر
          وستشعر معنا بالتميز و الاختلاف بأذن الله
        </p>
        <img src="../../assets/imgs/discount.png" alt="" />
      </div>
    </div>
    <div class="form">
      <div class="content">
        <h2>تواصل معنا</h2>
        <form action="">
          <input class="input" type="text" placeholder="أسمك" name="name" />
          <input class="input" type="email" placeholder="الأميل" name="email" />
          <input
            class="input"
            type="text"
            placeholder="رقم التليفون"
            name="mobile"
          />
          <textarea
            class="input"
            placeholder="أخبرنا ما الذي تحتاحه"
            name="message"
          ></textarea>
          <input type="submit" value="إرسال" />
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class Discount extends Vue {}
</script>
