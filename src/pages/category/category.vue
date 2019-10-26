<template>
  <div id="category">
    <!-- 按钮 -->
    <div class="btns">
			<el-button @click="" type="primary" size="small">添加</el-button>
			<el-button type="danger" size="small" @click="">批量删除</el-button>
		</div>
    <!-- 表单开始 -->
    
    <!-- 表单结束 -->
    <!-- 表格开始 -->
    <el-table :data="categories" size="small" @selection-change="">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="栏目名称"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="icon" label="图标"></el-table-column>
      <el-table-column prop="parentId" label="上级栏目"></el-table-column>
      <el-table-column label="操作" width="100px" align="center">
        <template #default="record">
          <a href="" class="el-icon-delete" @click.prevent = ""></a> &nbsp;
          <a href="" class="el-icon-edit-outline" @click.prevent = ""></a>
          <a href=""  @click.prevent = "">详情</a>
        </template>
      </el-table-column>
    </el-table>
    <!-- 表格结束 -->
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {

    }
  },
  created(){
    this.findAllCategories();
  },
  computed: {
    ...mapState("category",["categories"])
  },
  methods: {
    //动作
    ...mapActions("category",["findAllCategories"])
    //突变
    
  }
}
</script>
<style scoped>

</style>