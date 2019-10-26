import {get,post,post_array} from '../http/axios'
export default {
  namespaced:true,
  state: {
    visible:false,
    categories:[],
    tltle:"添加栏目信息"
  },
  mutations: {
    //重载数据
    refreshCategories(state,categories){
      state.categories = categories
    }
  },
  actions: {
    //查询所有栏目信息
    async findAllCategories(context){
      let response = await get("categoey/findAll");
      context.commit("refreshCategories",response.date)
    }
  }
}