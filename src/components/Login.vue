<template>
  <div class="login_container">
    <form v-bind:action="api3" method="POST" @submit.prevent="registerData" v-show="!isLogin">
      <div class="login_box">
        <label for="userName" class="label">用户名:</label>
        <input type="text" placeholder="用户名" v-model="userName" class="input">
        <label for="userName" class="label">密码:</label>
        <input type="password" placeholder="密码" v-model="password" class="input">
        <label for="userName" class="label">确认密码:</label>
        <input type="password" placeholder="再次输入密码" v-model="password2" class="input">
        <input type="submit" value="注册" class="register_btn">
      </div>
    </form>
    <form v-bind:action="api3" method="POST" @submit.prevent="login" v-show="isLogin">
      <div class="login_box">
        <label for="userName" class="label">用户名:</label>
        <input type="text" placeholder="用户名" v-model="userName" name="userName" class="input">
        <label for="password" class="label">密码:</label>
        <input type="password" placeholder="密码" v-model="password" name="password" class="input">
        <p class="btn_box">
          <input type="checkbox" class="check_box">
          <span class="info">记住密码</span>
          <input type="submit" value="登录" class="login_btn">
        </p>
      </div>
    </form>
    <!-- 
    用户名：userName
    密码：password
    再次提交：password2
    -->
  </div>
</template>
<style>
.btn_box {
  height: 50px;
  /* text-align: left; */
  display: flex;
  align-items: center;
  /* line-height: 30px; */
}
.register_btn {
  display: block;
  width: 138px;
  height: 34px;
  background: burlywood;
  border: none;
  margin-left: 93px;
}
.info {
  font-size: 14px;
}
.check_box {
  background: none;
  width: 12px;
  margin-left: 10px;
}
.login_btn {
  width: 172px;
  height: 35px;
  background: none;
  margin-left: 23px;
  /* border: 1px solid green; */
  border: none;
  background: #a9e4a9;
  border-radius: 20px;
  font-size: 24px;
}
.login_container {
  width: 416px;
  height: 322px;
  border: 1px solid #cccccc;
  background: lightskyblue;
}

.login_box {
  display: flex;
  padding: 10px 0px 0px 20px;
  flex-direction: column;
}

.label {
  text-align: left;
  font-size: 20px;
}

.input {
  width: 320px;
  height: 28px;
  text-indent: 14px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
<script>
export default {
  name: "Login",
  data() {
    return {
      api: "http://192.168.0.103:9001/api",
      api2: "http://192.168.0.103:9001/api/login",
      api3: "http://192.168.0.103:9001/api/register",
      userName: "",
      password: "",
      password2: "",
      isLogin: true,
      count: 1
    };
  },
  beforeCreate() {
    console.log(this.$route.params);
  },
  mounted() {
    this.isLogin = this.$route.params.type === "register" ? false : true;
  },
  updated() {
    console.log("Test updated");
  },
  methods: {
    add() {
      this.count++;
      this.isLogin = !this.isLogin;
    },
    handle() {
      alert("小浣熊");
      this.$http.get(this.api).then(res => {});
    },
    registerData() {
      event.preventDefault();
      let formData = new FormData();
      formData.append("userName", this.userName);
      formData.append("password", this.password);
      formData.append("password2", this.password2);
      let config = {
        "Content-Type": "multipart/form-data"
      };
      this.$http.post(this.api + "/register", formData, config).then(res => {
        console.log(res);
      });
    },
    login() {
      event.preventDefault();
      let formData = new FormData();
      formData.append("userName", this.userName);
      formData.append("password", this.password);
      let config = {
        "Content-Type": "multipart/form-data"
      };
      this.$http.post(this.api + "/login", formData, config).then(res => {
        console.log(res);
      });
    }
  }
};
</script>