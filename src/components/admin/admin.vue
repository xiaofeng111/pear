<template>
  <div>
    <header>欢迎来到管理员界面</header>
    <div class="left_container">
      <ul>
        <li>课程列表</li>
      </ul>
    </div>
    <div class="right_container">课程列表信息</div>
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  // classId
  beforeCreate() {
    this.$http.get("").then(res => {
      let resultDatas = [
        {
          classId: "aaaaaaaaaaaaa1",
          className: "语文1",
          time: 100,
          teacher: "小浣熊"
        },
        {
          classId: "aaaaaaaaaaaaa2",
          className: "语文2",
          time: 100,
          teacher: "小浣熊"
        },
        {
          classId: "aaaaaaaaaaaaa3",
          className: "语文3",
          time: 100,
          teacher: "小浣熊"
        }
      ];
    });
  },
  name: "Admin",
  data: {
    api: "http://192.168.0.100:8080"
  }
};
</script>


