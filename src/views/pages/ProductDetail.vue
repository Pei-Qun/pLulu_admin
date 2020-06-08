<template>
  <div class="container my-5 product">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="title">
      <button class="btn btn-outline-primary" @click="$router.push('/product')">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2 class="h2">商品詳細說明</h2>
      <router-link to="/product/edit/123" class="btns">
        <i class="fas fa-edit"></i> 編輯
        <span class="d-inline d-sm-none">商品</span>
      </router-link>
    </div>
    <section class="detail mt-sm-4 mt-0">
      <ul>
        <li>
          <p>商品編號</p>
          <h4>4s5da5s4rs8d5fs5e4</h4>
        </li>
        <li>
          <p>商品名稱</p>
          <h4 class="h3 mb-0">譜樂樂折扣優惠碼</h4>
        </li>
        <li>
          <p>合作商家</p>
          <h4>ㄆㄌㄌ</h4>
        </li>
        <li>
          <p>Echoin</p>
          <h4>100</h4>
        </li>
        <li>
          <p>商品種類</p>
          <h4>蝦皮折扣</h4>
        </li>
        <li>
          <p>上架日期</p>
          <h4>2020/05/30</h4>
        </li>
        <li>
          <p>修改日期</p>
          <h4>2020/06/30</h4>
        </li>
        <li>
          <p>商品分類</p>
          <h4>音樂周邊</h4>
        </li>
        <li>
          <p>商品說明</p>
          <h4>折扣折扣折扣折扣折扣折扣折扣折扣<br>折扣折扣折扣折扣折扣折扣折扣折扣<br>折扣折扣折扣折扣折扣折扣折扣折扣</h4>
        </li>
        <li>
          <p>其他</p>
          <button class="btn btn-outline-danger" @click="confirmDelete()">刪除此商品</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
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
