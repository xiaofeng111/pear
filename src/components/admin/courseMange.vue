<template>
  <div class="container">
    <div class="course">
      <label for="courseName">课程名称：</label>
      <input type="text" v-model="currentCourse.courseName">
    </div>
    <div class="course">
      <label for="courseName">授课老师：</label>
      <!-- <input type="text" v-model="currentCourse.teacherName"> -->
      <select name id>
        <option value="小浣熊">小浣熊</option>
        <option value="大熊喵">大熊喵</option>
      </select>
    </div>
    <div class="course">
      <label for="courseName">开始时间：</label>
      <input type="text" v-model="currentCourse.courseStartTime">
    </div>
    <div class="course">
      <label for="courseName">结束时间：</label>
      <input type="text" v-model="currentCourse.courseEndTime">
    </div>
    <div class="course">
      <label for="courseName">课时长度：</label>
      <input type="text" v-model="currentCourse.courseTime">
    </div>
    <div>
        <button>返回</button>
        <button>确认</button>
    </div>
  </div>
</template>

<style lang="scss" scope>
.container {
  display: flex;
  flex-wrap: wrap;
  .course {
    width: 40%;
    height: 66px;
    line-height: 66px;
    label {
      width: 200px;
      text-align: right;
      font-size: 24px;
    }
    select {
      width: 282px;
      font-size: 22px;
    }
    input {
      font-size: 22px;
      margin-left: 10px;
      border: none;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: ["currentCourse"]
};
</script>