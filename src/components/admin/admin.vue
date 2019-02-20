<template>
  <div>
    <header>欢迎来到管理员界面</header>
    <div class="container">
      <div class="left_container">
        <ul>
          <li>课程列表</li>
        </ul>
      </div>
      <div class="right_container">
        <h5 class="lesson_title">{{title}}</h5>
        <div class="lesson_table">
          <table>
            <thead>
              <tr>
                <td>课程排序</td>
                <td>课程名称</td>
                <td>课时</td>
                <td>课程老师</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lesson,index) in lessons" :key="lesson.classId">
                <td>{{index}}</td>
                <td>{{lesson.className}}</td>
                <td>{{lesson.time}}</td>
                <td>{{lesson.teacher}}</td>
                <td>删除</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
header {
  height: 100px;
  background: rebeccapurple;
  line-height: 100px;
  font-size: 28px;
}
.container {
  display: flex;
}

.left_container {
  width: 150px;
  border-right: 1px solid #dfdfdf;
}
.right_container {
  flex: 1;
  padding-top: 30px;
  padding-left: 20px;
}
.lesson_table {
  width: 100%;
}
.lesson_table table {
  width: 100%;
}
.lesson_table thead {
  background: #b7aeae;
}
.lesson_table tr {
  height: 30px;
}

</style>

<script>
export default {
  // classId
  beforeCreate() {
    // this.$http.get("").then(res => {
    //   let resultDatas = [
    //     {
    //       classId: "aaaaaaaaaaaaa1",
    //       className: "语文1",
    //       time: 100,
    //       teacher: "小浣熊"
    //     },
    //     {
    //       classId: "aaaaaaaaaaaaa2",
    //       className: "语文2",
    //       time: 100,
    //       teacher: "小浣熊"
    //     },
    //     {
    //       classId: "aaaaaaaaaaaaa3",
    //       className: "语文3",
    //       time: 100,
    //       teacher: "小浣熊"
    //     }
    //   ];
    // });
  },
  name: "Admin",
  data() {
    return {
      api: "http://192.168.0.100:8080",
      title: "课程列表信息",
      lessons: [
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
      ]
    }
  }
};
</script>
