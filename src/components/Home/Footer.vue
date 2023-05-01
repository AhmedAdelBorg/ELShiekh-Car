<template>
  <div class="footer">
    <div class="container">
      <div class="box">
        <h3>الشيخ كــار</h3>
        <ul class="social">
          <li>
            <a href="#" class="facebook">
              <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" class="twitter">
              <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#" class="youtube">
              <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
            </a>
          </li>
        </ul>
        <p class="text">يسعدناالتعمل معك</p>
      </div>
      <div class="box">
        <ul class="links">
          <li>
            <a href="#"
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-angles-left"
              />خدمات المعرض</a
            >
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-angles-left"
              />نظام معاملاتنا
            </a>
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-angles-left"
              />خدمات الموقع
            </a>
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-angles-left"
              />أهم المعارض
            </a>
          </li>
          <li>
            <a href="#"
              ><font-awesome-icon
                class="icon"
                icon="fa-solid fa-angles-left"
              />الماركات
            </a>
          </li>
        </ul>
      </div>
      <div class="box">
        <div class="line">
          <font-awesome-icon class="icon" icon="fa-solid fa-map-location-dot" />
          <div class="info">مصر - مركز طنطا الغربية - قرية نواج</div>
        </div>
        <div class="line">
          <font-awesome-icon class="icon" icon="fa-solid fa-clock" />
          <div class="info">ساعات العمل: من 10:00 الي 18:00</div>
        </div>
        <div class="line">
          <font-awesome-icon class="icon" icon="fa-solid fa-phone-volume" />
          <div class="info">
            <span>+20123456789</span>
            <span>+20198765432</span>
          </div>
        </div>
      </div>
      <div class="box footer-gallery">
        <img src="../../assets/imgs/logo.png" alt="" />
      </div>
    </div>
    <p class="copyright">Made With &lt;3 By ELBorg</p>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class footerPage extends Vue {}
</script>
