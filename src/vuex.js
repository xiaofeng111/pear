import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Vuex);
export const myStore = new Vuex.Store({
    state: {
        // 用户用来存放共享的数据
        name: "xiaohuanxiong",
        api: "http://192.168.0.104:9001/api"
    },
    mutations: {
        // 显式的更改state里的数据
        http(state, url, type) {
            switch (type) {
                case 'GET':
                    axios.get(state.api + url)
                    .then(res=>{
                        console.log('res:',res);
                    })
                    break;
            }
        }
    },
    getters: {
        //获取数据的方法
    },
    actions: {
        //
    }
})

