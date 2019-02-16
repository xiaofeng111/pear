<template>
  <div class="container">这里是消息中心</div>
</template>

<script>
export default {
  name: "News",
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