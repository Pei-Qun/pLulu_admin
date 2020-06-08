<template>
  <div class="container my-5 product">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="title">
      <button class="btn btn-outline-primary" @click="$router.push('/product')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2 class="h2">商品內容編輯</h2>
    </div>
    <section class="edit mt-sm-4 mt-0">
      <div class="data">
        <div class="d-flex">
          <p>商品編號：</p>
          <p class="text-secondary">{{ formData.uid }}</p>
        </div>
        <div class="d-flex">
          <p>上架日期：</p>
          <p class="text-secondary">{{ formData.uploadDate }}</p>
        </div>
        <div class="d-flex">
          <p>上次修改日期：</p>
          <p class="text-secondary">{{ formData.editDate }}</p>
        </div>
      </div>
      <!-- item -->
      <ValidationProvider rules="required|min:4|max:40" v-slot="{ errors }" tag="div"
        class="form-group" name="商品名稱">
        <label for="name">商品名稱</label>
        <input type="text" v-model="formData.name"
          id="name" class="form-control">
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <!-- item -->
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group" name="合作商家">
        <label for="store">合作商家</label>
        <input type="text" v-model="formData.store"
          id="store" class="form-control">
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <!-- item -->
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group" name="Echoin">
        <label for="echoin">Echoin</label>
        <input type="number" v-model="formData.echoin"
          id="echoin" class="form-control">
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <!-- item -->
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group" name="商品種類">
        <label for="types">商品種類</label>
        <select class="form-control" id="types" v-model="formData.types">
          <option value="" disabled>請選擇</option>
          <option v-for="item in classList" :key="item">{{ item }}</option>
        </select>
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <!-- item -->
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group" name="商品分類">
        <label for="class">商品分類</label>
        <select class="form-control" id="class" v-model="formData.class">
          <option value="" disabled>請選擇</option>
          <option v-for="item in typeList" :key="item">{{ item }}</option>
        </select>
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <!-- item -->
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group" name="商品說明">
        <label for="bio">商品說明</label>
        <textarea class="form-control" id="bio" v-model="formData.bio"></textarea>
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider>
      <!-- item end -->
      <button class="btn btn-primary" @click="creatPost()">立即發佈</button>
    </section>
  </div>
</template>

<script>
import { ValidationProvider, extend, localize } from 'vee-validate';
import { required, min, max } from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

// Override the default message.
extend('required', required);
extend('min', min);
extend('max', max);

// Install and Activate the Arabic locale.
localize('zhTW', zhTW);

export default {
  data() {
    return {
      formData: {
        uid: '4s5da5s4rs8d5fs5e4',
        name: '譜樂樂折扣優惠碼',
        store: 'ㄆㄌㄌ',
        echoin: 100,
        types: '蝦皮折扣',
        class: '音樂周邊',
        uploadDate: '2020/05/30',
        editDate: '2020/06/30',
        bio: '折扣折扣折扣折扣折扣折扣折扣折扣\n折扣折扣折扣折扣折扣折扣折扣折扣\n折扣折扣折扣折扣折扣折扣折扣折扣',
      },
    };
  },
  components: {
    ValidationProvider,
  },
  computed: {
    classList() {
      return this.$store.state.classList;
    },
    typeList() {
      return this.$store.state.typeList;
    },
  },
  watch: {
    'formData.bio': {
      handler: function autogrow() {
        const textarea = document.getElementById('bio');
        let adjustedHeight = textarea.clientHeight;
        adjustedHeight = Math.max(textarea.scrollHeight, adjustedHeight);
        if (adjustedHeight > textarea.clientHeight) {
          textarea.style.height = `${adjustedHeight}px`;
        }
      },
    },
  },
  methods: {
    confirmDelete() {
      const r = window.confirm('確定要刪除?');
      if (r === true) {
        console.log('確定要刪除');
      }
    },
  },
};
</script>
