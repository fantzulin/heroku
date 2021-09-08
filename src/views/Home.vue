<template>
  <el-row :gutter="20">
    <el-col xs="24" :md="8">
      <div class="grid-content">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h3>FAN TZU-LIN</h3>
        <h5>Front-End Developer</h5>
      </div>
    </el-col>
    <el-col xs="24" :md="16">
      <div class="grid-content">
        <h5>Skills</h5>
        <ul class="ul-skill">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Git</li>
        </ul>
        <h5>Experience</h5>
        <p>PAPAGO! 2017 - present</p>
        <p>Dacoms 2016/09 - 2017/05</p>
        <h5>Education</h5>
        <p>Ming Chuan University</p>
        <p>
          Digital Media Design<br>
          Graduation in 2016
        </p>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="scss">
  h3, h5{
    color: #295ea4;
  }
  ul.ul-skill{
    margin: 0 auto;
    padding: 0;
    width: 100px;
    list-style: none;
    text-align: initial;
    li::before{
      margin-left: -16px;
      width: 16px;
      display: inline-block;
      content: "\2022";
      color: #295ea4;
    }
  }
</style>
<script>

</script>
