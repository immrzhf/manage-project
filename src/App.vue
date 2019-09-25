<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header style="padding: 0 0 0 0;">
        <HeadIndex></HeadIndex>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <MenuIndex></MenuIndex>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MenuIndex from "./views/MenuIndex";
import HeadIndex from "./views/HeadIndex";
export default {
  name: "app",
  components: {
    MenuIndex: MenuIndex,
    HeadIndex: HeadIndex
  }
};
</script>
<style lang="less">
.el-header,
.el-footer {
  width: 100%;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
