<template>
  <div>
    <header>欢迎来到管理员界面</header>
    <div class="container_box">
      <div class="left_container">
        <ul>
          <li>课程列表</li>
        </ul>
      </div>
      <div class="right_container">
        <div style="position:relative;">
          <h5 class="lesson_title">{{title}}</h5>
          <button @click="addCourse" class="btn btn-success new-course">新增课程</button>
          <button type="button" class="btn btn-default" aria-label="Left Align">
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </button>
        </div>

        <div class="lesson_table" v-if="isShowCourseList">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <td>课程排序</td>
                <td>课程名称</td>
                <td>课程开始时间</td>
                <td>课程结束时间</td>
                <td>课程老师</td>
                <td>选课人数</td>
                <td>课程时长</td>
                <td>是否可选</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(lesson,index) in lessons" :key="lesson.courseId">
                <td>{{index}}</td>
                <td>{{lesson.courseName}}</td>
                <td>{{lesson.courseStartTime}}</td>
                <td>{{lesson.courseEndTime}}</td>
                <td>{{lesson.teacherName}}</td>
                <td>{{lesson.selectNumber?lesson.selectNumber:0}}</td>
                <td>{{lesson.courseTime}}</td>
                <td>{{lesson.isActive?"可选":"不可选"}}</td>
                <td>
                  <button @click="deleteLesson(lesson.courseId)">删除</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="lesson_table" v-if="!isShowCourseList">
          <course-mange :currentCourse="currentCourse"></course-mange>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lesson_title {
  font-size: 28px;
  font-weight: 800;
}
header {
  height: 100px;
  background: rebeccapurple;
  line-height: 100px;
  font-size: 28px;
}

.new-course {
  position: absolute;
  right: 70px;
  top: 4px;
  border: none;
  padding: 2px 8px;
  border-radius: 5px;
  background: #b7aeae;
}
.container_box {
  display: flex;
}

.left_container {
  width: 150px;
  border-right: 1px solid #dfdfdf;
}
.right_container {
  flex: 1;
  padding: 30px;
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
import axios from "axios";
import CourseMange from "./courseMange";
export default {
  // courseId
  beforeCreate() {
    // this.$store.commit("show", "/course/findAll", "GET");
    // this.$http.get(this.api + "/api/course/findAll").then(res => {
    //   console.log(res);
    // });
  },
  async mounted() {
    console.log(5555);
    let result = await this.httpService("/api/course/findAll", "GET");
    console.log("result:", result.success);
    this.lessons = result.data;

    // this.$set(data, "title", "dasdasdadsa");
    // .then(result=>{
    //   console.log(result);
    // })
  },
  components: {
    "course-mange": CourseMange
  },
  activated() {
    console.log(666666);
    // this.httpService("/api/course/findAll", "GET");
  },
  data() {
    return {
      api: "http://192.168.150.1:9001",
      title: "课程列表信息",
      isShowCourseList: true,
      temCourse: {},
      currentCourse: {
        courseId: "aaaaaaaaaaaaa2",
        courseName: "语文2",
        time: 100,
        teacherId: "dsadsadasd",
        teacherName: "小浣熊",
        courseStartTime: "2019-02-21 22:55:07",
        courseEndTime: "2019-02-21 22:55:07",
        createTime: "2019-02-21 22:55:07",
        selectNumber: null,
        courseTime: 10,
        isActive: 0
      },
      lessons: [
        {
          courseId: "aaaaaaaaaaaaa1",
          courseName: "语文1",
          time: 100,
          teacherId: "dsadsadasd",
          teacherName: "小浣熊",
          courseStartTime: "2019-02-21 22:55:07",
          courseEndTime: "2019-02-21 22:55:07",
          createTime: "2019-02-21 22:55:07",
          selectNumber: null,
          courseTime: 10,
          isActive: 0
        },
        {
          courseId: "aaaaaaaaaaaaa2",
          courseName: "语文2",
          time: 100,
          teacherId: "dsadsadasd",
          teacherName: "小浣熊",
          courseStartTime: "2019-02-21 22:55:07",
          courseEndTime: "2019-02-21 22:55:07",
          createTime: "2019-02-21 22:55:07",
          selectNumber: null,
          courseTime: 10,
          isActive: 0
        },
        {
          courseId: "aaaaaaaaaaaaa3",
          courseName: "语文3",
          time: 100,
          teacherId: "dsadsadasd",
          teacherName: "小浣熊",
          courseStartTime: "2019-02-21 22:55:07",
          courseEndTime: "2019-02-21 22:55:07",
          createTime: "2019-02-21 22:55:07",
          selectNumber: null,
          courseTime: 10,
          isActive: 0
        }
      ]
    };
  },
  methods: {
    deleteLesson(lessonId) {
      this.httpService("/api/course/findAll", "GET");
      alert(lessonId);
    },
    async httpService(url, type) {
      switch (type) {
        case "GET":
          return axios.get(this.api + url).then(res => {
            if (res.status === 200) {
              console.log("res", res);
              return res.data;
            }
          });
          break;
      }
    },
    addCourse() {
      this.isShowCourseList = false;
      this.temCourse = this.currentCourse;
    }
  }
};
</script>
