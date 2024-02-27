<script setup>
import { ref } from 'vue'
import useUserInfoStore from '@/stores/userInfo.js'
import { userPwdUpdateService} from "@/api/user.js";
import {ElMessage} from "element-plus";
import {userTokenStore} from "@/stores/token.js";
const userInfoStore = useUserInfoStore()
const userInfo = ref({...userInfoStore.info})
//添加密码数据模型
const  updatePassword= ref({
  oldPwd: '',
  newPwd: '',
  rePwd: ''
})
//校验密码函数
const checkRePassword=(rule,value,callback)=>{
  if(value===''){
    callback(new Error('请再次输入密码'))
  }else if(value !== updatePassword.value.newPwd){
    callback(new Error('请确保两次密码一致'))
  }else {
    callback()
  }

}
const rules = {
  oldPwd: [
    {required:true,message:'请输入原密码',trigger:'blur'},
    {min:5,max:16,message: '长度为5到16位非空字符',trigger: 'blur'}
  ],
  newPwd: [
    {required:true,message:'请输入新密码',trigger:'blur'},
    {min:5,max:16,message: '长度为5到16位非空字符',trigger: 'blur'}
  ],
  rePwd: [
    {validator:checkRePassword,trigger:'blur'}
  ]
}
import {useRouter} from 'vue-router'
const router=useRouter()
const submitUpdate=async ()=>{

  let result = await userPwdUpdateService(updatePassword.value)
  ElMessage.success(result.message? result.message:'修改成功')
  //跳转到首页 路由完成跳转
  await router.push('/login')
}
</script>
<template>
  <el-card class="page-container">
    <template #header>
      <div class="header">
        <span>修改密码</span>
      </div>
    </template>
    <el-row>
      <el-col :span="12">
        <el-form :model="updatePassword" :rules="rules" label-width="100px" size="large">
          <el-form-item label="原密码" prop="oldPwd">
            <el-input v-model="updatePassword.oldPwd" ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPwd">
            <el-input v-model="updatePassword.newPwd"></el-input>
          </el-form-item>
          <el-form-item label="确认新密码" prop="rePwd">
            <el-input v-model="updatePassword.rePwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitUpdate">提交修改</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>