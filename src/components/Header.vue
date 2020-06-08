<template>
  <header class="header">
    <div class="header-content">
      <form action="">
        <input type="search" name="search" id="search" placeholder="Search">
        <button><i class="fas fa-search"></i></button>
      </form>
      <div class="user">
        <div class="pic"
          style="background-image: url(https://cdn.pixabay.com/photo/2020/05/25/15/55/bird-5219205_960_720.jpg)"></div>
        <p>曾霈宭</p>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  background-color: #eee;
  form{
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 999px;
    margin: 3px 0;
    flex: 0 1 300px;
    input{
      padding: 5px 20px;
      color: #333;
      flex-grow: 1;
      border: none;
      border-radius: 99px 0 0 99px;
      &:focus{
        outline: none;
      }
    }
    button{
      border: none;
      background: transparent;
      color: #fff;
      flex: 0 0 40px;
      align-items: center;
      justify-content: center;
      background-color: #6368cf;
      transition: all 0.2s ease-in-out;
      &:hover{
        background-color: #fdc83b;
        color: #555;
      }
      @media (max-width: 575px){
        display: none;
      }
    }
  }
  .header-content{
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: 100vw;
    padding: 15px 5%;
  }
}
.user{
  display: flex;
  align-items: center;
  .pic{
    background-color: #333;
    background-size: cover;
    background-position: center;
    flex: 0 0 45px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin: 0 10px;
  }
  @media (max-width: 575px){
    .pic{
      margin: 0;
    }
    p{
      display: none;
    }
  }
}
</style>
