<template>
  <nav class="navs" :class="{'toggleNav': dom.toggleNav}">
    <div class="title">
      <h1 class="overflow-text">譜樂樂商城管理</h1>
      <button @click="toggleNavFuc()">
        <i class="fas fa-chevron-left"></i>
      </button>
    </div>
    <ul>
      <li>
        <router-link class="links" to="/">
          <span><i class="fas fa-home"></i></span>
          <h4 class="overflow-text">回到首頁</h4>
        </router-link>
      </li>
      <li>
        <router-link class="links" to="/product">
          <span><i class="fab fa-shopify"></i></span>
          <h4 class="overflow-text">商品管理</h4>
        </router-link>
      </li>
      <li>
        <router-link class="links" to="/login">
          <span><i class="fab fa-shopify"></i></span>
          <h4 class="overflow-text">帳號登入</h4>
        </router-link>
      </li>
    </ul>
    <div class="footer">
      <h6 class="logout">
        <span><i class="fas fa-sign-out-alt"></i></span>
        <h4 class="overflow-text">帳號登出</h4>
      </h6>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      dom: {
        toggleNav: false,
      },
    };
  },
  methods: {
    toggleNavFuc() {
      this.dom.toggleNav = !this.dom.toggleNav;
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-text{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  transition: width 0.5s ease-in-out;
}
.navs{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  background-image: linear-gradient(#4e54c8, #8f94fb);
  transition: all 0.5s ease-in-out;
  .title{
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    align-items: center;
    background-color: rgba(#fff, .1);
    h1{
      font-size: 18px;
      color: #fff;
    }
    button{
      background: #6368cf;
      color: #fff;
      border: 1px solid rgba(#fff, .5);
      padding: 3px 7px;
      border-radius: 3px;
      transition: all 0.2s ease-in-out 0.5s;
      &:focus {
        outline: none;
      }
    }
  }
  ul{
    padding: 10px 15px;
    flex: 1;
  }
  .links{
    color: rgba(#fff, .8);
    display: block;
    padding: 15px 0 20px 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    span{
      width: 24px;
      flex: 0 0 24px;
      text-align: center;
      margin-right: 10px;
    }
    h4{
      font-size: 18px;
    }
    &::after{
      content: '→';
      opacity: 0.7;
      font-weight: bold;
      transition: all 0.3s cubic-bezier(0.8, -0.28, 0.5, 1.15);
    }
    &::before{
      content: '';
      height: 5px;
      width: 0;
      opacity: 0;
      background-color: #ffd460;
      max-width: 100%;
      display: block;
      bottom: 0;
      left: 100%;
      position: absolute;
      border-radius: 5px;
      transition: all 0.5s cubic-bezier(0.8, -0.28, 0.5, 1.15);
    }
    &:hover{
      &::before{
        width: 50px;
        left: 0%;
        opacity: 1;
      }
      &::after{
        transform: translateX(-30px);
        opacity: 1;
      }
    }
  }
  .router-link-exact-active{
    color: #fff;
    &::after{
      opacity: .2;
    }
    &:hover{
      &::after{
        opacity: .2;
        transform: translateX(0) rotateY(180deg);
      }
    }
  }
  @media (min-width: 992px){
    width: 250px;
  }
  @media only screen and (max-width: 991px) and (min-width: 576px){
    position: fixed;
    left: 0;
    height: 100%;
    z-index: 1000;
    width: 60px;
    .overflow-text{
      width: 0%;
    }
    .title{
      button{
        transform: rotateY(180deg);
      }
    }
    .links{
      &::after{
        content: '';
      }
    }
  }
}
.toggleNav{
  @media (min-width: 992px){
    width: 60px;
    .overflow-text{
      width: 0%;
    }
    .title{
      button{
        transform: rotateY(180deg);
      }
    }
    .links{
      &::after{
        content: '';
      }
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 576px){
    width: 250px;
    .overflow-text{
      width: 100%;
    }
    .title{
      button{
        transform: rotateY(0deg);
      }
    }
  }
}
.footer{
  padding: 30px 15px;
  .logout{
    display: flex;
    cursor: pointer;
    color: #fff;
    span{
      display: block;
      flex: 0 0 24px;
      text-align: center;
    }
    h4{
      margin-left: 5px;
    }
  }
}
@media (max-width: 575px){
  .navs{
    position: fixed;
    z-index: 1000;
    height: 100%;
    overflow: hidden;
    width: 0;
    .title{
      // background-image: linear-gradient(to right,#4e54c8, #8f94fb);
      background-color: #4e54c8;
      position: fixed;
      width: 100%;
      z-index: 999;
      button{
        svg{
          display: none;
        }
        &::before{
          content: 'Menu';
          white-space: nowrap;
        }
      }
    }
    ul{
      margin-top: 64px;
    }
  }
  .toggleNav{
    width: 300px;
  }
}
</style>
