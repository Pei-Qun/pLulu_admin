<template>
  <main class="login-content">
    <form>
      <h2>登入帳號</h2>
      <ValidationProvider rules="required|email" v-slot="{ errors }" tag="div"
        class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="formData.email"
          placeholder="請輸入電子信箱" class="form-control mt-2" id="email">
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider >
      <ValidationProvider rules="required" v-slot="{ errors }" tag="div"
        class="form-group mt-4">
        <label for="password">Password</label>
        <input type="password" v-model="formData.pwd"
          placeholder="請輸入密碼" class="form-control mt-2" id="password">
        <small class="form-text text-danger">{{ errors[0] }}</small>
      </ValidationProvider >
      <button class="btn btn-warning form-control">登入</button>
    </form>
  </main>
</template>

<script>
import { ValidationProvider, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';

// No message specified.
extend('email', email);

// Override the default message.
extend('required', required);

// Install and Activate the Arabic locale.
localize('zhTW', zhTW);

export default {
  data() {
    return {
      formData: {
        email: '',
        pwd: '',
      },
    };
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="scss" scoped>
$purple:  #4e54c8;

.login-content{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  form{
    width: 350px;
    background-color: #fff;
    padding: 30px 30px 50px 30px;
    box-shadow: 1px 1px 6px rgba(#000, 0.3);
    border-radius: 5px;
    border-bottom: 8px solid $purple;
    h2{
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      color: $purple;
      margin-bottom: 20px;
    }
    label{
      color: #555;
    }
    button{
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
