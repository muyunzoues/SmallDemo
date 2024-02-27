import {defineStore} from 'pinia'
import {ref} from "vue";

/**
 * 第一个参数：名字，唯一性
 * 第二个参数：函数，函数的内容可以定义状态的所有内容
 */

export const userTokenStore=defineStore('token',()=>{
    //定义状态内容
    //1.响应式变量
    const token=ref('')

    //2.定义函数修改token的值
    const setToken =(newToken)=>{
        token.value=newToken
    }
    //3.移除token
    const removeToken=()=>{
        token.value=''
    }
    return {
        token,setToken,removeToken
    }

},{
    persist:true//持久化存储
});
