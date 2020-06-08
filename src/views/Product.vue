<template>
  <main>
    <Header />
    <div class="container my-5" v-if="$router.currentRoute.path === '/product'">
      <h2 class="h3">商品管理</h2>
      <table class="table list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">商品名稱</th>
            <th scope="col">商品說明</th>
            <th scope="col">
              <article class="btns">
                <router-link to="/product/add" class="btn btn-outline-light">
                  <i class="fas fa-plus"></i> 新增商品
                </router-link>
              </article>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="num">1</th>
            <td class="name">
              <router-link to="product/12345">Mark</router-link>
            </td>
            <td class="bio">
              <p>折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內</p>
            </td>
            <td class="btns">
              <div class="d-flex">
                <router-link to="/product/edit/123" class="btn btn-outline-success mr-2">
                  <i class="fas fa-edit"></i> 編輯
                </router-link>
                <button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i> 刪除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num">2</th>
            <td class="name">
              <router-link to="product/12345">Mark</router-link>
            </td>
            <td class="bio">
              <p>折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內</p>
            </td>
            <td class="btns">
              <div class="d-flex">
                <router-link to="/product/edit/123" class="btn btn-outline-success mr-2">
                  <i class="fas fa-edit"></i> 編輯
                </router-link>
                <button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i> 刪除</button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row" class="num">3</th>
            <td class="name">
              <router-link to="product/12345">Mark</router-link>
            </td>
            <td class="bio">
              <p>折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內折扣內容折扣內容折扣內容折扣內容折扣內容折扣內容折扣內</p>
            </td>
            <td class="btns">
              <div class="d-flex">
                <router-link to="/product/edit/123" class="btn btn-outline-success mr-2">
                  <i class="fas fa-edit"></i> 編輯
                </router-link>
                <button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i> 刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center mt-5">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <router-view />
  </main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'Product',
  components: {
    Header,
  },
  data() {
    return {
      // currentPath: this.$router.currentRoute.path,
    };
  },
  created() {
    // this.data = this.$route.params.id;
  },
};
</script>

<style lang="scss" scoped>
  $purple: #6368cf;
  .list{
    white-space: nowrap;
    tr{
      background-color: #f6f6f6;
      &:nth-child(odd){
        background-color: lighten($purple, 35);
      }
    }
    thead tr{
      background-color: $purple !important;
      color: #fff;
    }
    th, td{
      vertical-align: middle;
    }
    .bio{
      white-space: normal;
      color: #555;
      line-height: 1.3;
    }
    .btns{
      text-align: right;
    }
    @media (max-width: 768px){
      thead{
        display: none;
      }
      tr{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        position: relative;
      }
      .num{
        position: absolute;
        right: 15px;
        top: -10px;
        background-color: $purple;
        color: #fff;
        font-weight: bold;
        &::before{
          content: '#';
          opacity: .7;
        }
      }
      .name::before{
        content: '商品名稱: ';
      }
      .bio::before{
        content: '商品說明:';
        display: block;
        margin-bottom: 5px;
      }
      .btns .d-flex{
        width: 100%;
        .btn{
          flex: 1
        }
      }
    }
  }
</style>
