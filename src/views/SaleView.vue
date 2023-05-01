<template>
  <div id="add" class="text-center mb-5 mt-5">
    <div class="container">
      <div class="card">
        <div class="card-header text-center">
          <h2>بيع عربيتك</h2>
        </div>

        <div class="body-card p-3">
          <form action="" class="row">
            <div class="input">
              <div class="brand input-group row mb-3">
                <span class="input-group-text col-md-2">إختر الماركة: </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="اختر الماركة الخاصه بسيارتك...!"
                  v-model="brand"
                />
              </div>
              <div class="model input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2">الموديل: </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="ما هو موديل سيارتك..؟"
                  v-model="model"
                />
              </div>
              <div class="manufacturing input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2">سنة الصنع: </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="سنة تصنيع السيارة"
                  v-model="madeYear"
                />
              </div>
              <div class="capacity input-group flex-nowrap row mb-4">
                <span class="input-group-text col-md-2"
                  >سعة المحرك (سي سي):
                </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="كم سعة محرك سيارتك..؟"
                  v-model="capacityEngine"
                />
              </div>
              <div class="kilometer input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2">الكيلومتر (كم): </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="عدد الكيلومترات...!"
                  v-model="kilometres"
                />
              </div>
              <div class="price input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2">السعر (جنيه): </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="ما هو السعر المطلوب في السيارة..؟"
                  v-model="price"
                />
              </div>
              <div class="governorate input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2"> المحافظة: </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="المحافظة التي يتواجد فيها السيارة"
                  v-model="governorate"
                />
              </div>
              <div class="region input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2"> المنطقة: </span>
                <input
                  type="text"
                  class="form-control col-md-10"
                  placeholder="المنطقة الخاصة بالمحافظه"
                  v-model="region"
                />
              </div>
              <div class="comment input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2">
                  تعليقات إضافية (اختياري):
                </span>
                <textarea
                  class="col-md-10"
                  placeholder="اذا كنت تريد اضافة شئ اكتبه هنا..."
                  v-model="comment"
                ></textarea>
              </div>
              <div class="image input-group row flex-nowrap mb-4">
                <span class="input-group-text col-md-2"> الصوره: </span>
                <input
                  type="file"
                  class="form-control col-md-10"
                  @change="onFileSelected"
                />
              </div>
            </div>
            <div class="button p-3 m-auto">
              <button
                id="add-pigeon"
                type="button"
                class="btn"
                @click="addCars"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "saleView",
  data() {
    return {
      brand: "",
      model: "",
      madeYear: "",
      capacityEngine: "",
      kilometres: "",
      price: "",
      governorate: "",
      region: "",
      comment: "",
      image: "",
    };
  },
  methods: {
    async addCars() {
      const result = await axios.post("http://localhost:3000/buyCars", {
        brand: this.brand,
        model: this.model,
        madeYear: this.madeYear,
        capacityEngine: this.capacityEngine,
        kilometres: this.kilometres,
        price: this.price,
        governorate: this.governorate,
        region: this.region,
        comment: this.comment,
        image: this.image,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Buy" });
      }
    },
    onFileSelected(event: any) {
      this.image = event.target.files[0].name;
    },
  },
});
</script>

<style>
textarea {
  resize: none;
  height: 100px;
}
.body-card {
  direction: rtl;
}
.btn {
  width: 90%;
  border-radius: 20px;
  background-color: #002e6a;
  color: #fff;
}
.btn:hover {
  background-color: #e81c22;
  color: #fff;
}
</style>
