<template>
  <div class="container">
    <header style="height:100px;">
      <h2 class="home_header">小浣熊学生管理系统</h2>
      <div class="home_login">
        <router-link to="/login/login">登录</router-link>
        <router-link to="/login/register">注册</router-link>
      </div>
    </header>
    <div class="home_body">
      <div class="aside_nav">
        <router-link :to="{path:'news'}" append>新闻</router-link>
      </div>
      <div class="nav_detail">
        <router-view></router-view>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside_nav {
  width: 200px;
  height: 100%;
  border-right: 1px solid #efefef;
  background: #bd763a;
}
.nav_detail {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  background: #333333;
  height: 100px;
  position: relative;
  border-bottom: 1px solid #cdcdcd;
}
.home_header {
  height: 100%;
  width: 100%;
  line-height: 100px;
  color: beige;
}
.home_login {
  position: absolute;
  right: 25px;
  top: 15px;
}
.home_body {
  flex: 1;
  display: flex;
}
footer {
  background: #666666;
  height: 100px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      api: "http://192.168.0.103:9001/users/view/1"
    };
  },
  methods: {
    handle() {
      alert("小浣熊");
      this.$http.get(this.api).then(res => {
        console.log(res);
      });
    }
  }
};
</script>


