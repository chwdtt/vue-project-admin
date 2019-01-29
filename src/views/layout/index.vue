<template>
  <div class="wrap-container">
    <el-container class="wrap-container">
      <el-aside width="200px">
          <el-scrollbar style="height: 100%">
            <Aside />
          </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            123213
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from '@/components/aside';
export default {
	name: 'layout',
	components: {
		Aside
	}
};
</script>
<style lang="scss" scoped>
.wrap-container {
    height: 100%;
    /deep/el-scrollbar {
        height: 100%;
    }
    /deep/.el-scrollbar__wrap {
        overflow-x: hidden;
    }
    /deep/.el-scrollbar__view {
        height: 100%;
    }
    /deep/.el-aside {
        height: 100%;
    }
    /deep/.el-menu {
        height: 100%;
    }
}
</style>

