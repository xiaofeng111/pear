import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex);
export const myStore = new Vuex.Store({
    state: {
        // 用户用来存放共享的数据
        name: "xiaohuanxiong"
    },
    mutations: {
        // 显式的更改state里的数据
    },
    getters: {
        //获取数据的方法
    },
    actions: {
        //
    }
})

