<template>
  <div class="container">
    <div class="course-filed">
      <div class="course">
        <label for="courseName">课程名称：</label>
        <input type="text" v-model="currentCourse.courseName" class="course-input">
      </div>
      <div class="course">
        <label for="courseName">授课老师：</label>
        <!-- <input type="text" v-model="currentCourse.teacherName"> -->
        <select class="custom-select">
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
    </div>

    <div class="course-btn">
      <button class="btn btn-light">返回</button>
      <button class="btn btn-success">确认</button>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  .course-filed {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .course {
      width: 44%;
      height: 66px;
      line-height: 66px;
      display: flex;
      label {
        width: 200px;
        text-align: right;
        font-size: 24px;
      }
      select {
        width: 282px;
        font-size: 18px;
        height: 40px;
        margin-top: 10px;
      }
      input {
        font-size: 22px;
        margin-left: 10px;
        border: none;
        border-bottom: 1px solid #ccc;
        text-align: center;
        height: 36px;
        margin-top: 12px;
      }
    }
  }
  .course-btn {
    margin-top: 30px;
    padding-left: 200px;
    .btn {
      margin: 0px 18px;
      width: 100px;
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