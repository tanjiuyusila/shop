<template>
  <div>
      <van-tabs>
          <van-tab title="登录">
            <van-cell-group>
              <van-field
                label="用户名"
                placeholder="请输入用户名"
                v-model="loginUsername"
                required
                clearable
              />
              <van-field
                label="密码"
                type="password"
                placeholder="请输入密码"
                v-model="loginPassword"
                required
                clearable
              />
              </van-cell-group>
            <div>
              <van-button type="primary" size="large" @click="loginHandler">登录</van-button>
            </div>
          </van-tab>
          <van-tab title="注册">
            <van-cell-group>
              <van-field
                label="用户名"
                placeholder="请输入用户名"
                v-model="registUsername"
                required clearable
              />
              <van-field
                label="密码"
                type="password"
                placeholder="请输入密码"
                v-model="registPassword"
                required
                clearable
              />
            </van-cell-group>
            <div>
              <van-button type="primary" size="large" @click="registHandler">注册</van-button>
            </div>
          </van-tab>
      </van-tabs>
  </div>
</template>

<script>
  import axios from 'axios';
  import url from '@/service.config.js';
  import{ mapActions } from 'vuex';
  export default {
    data(){
      return{
        loginUsername:'',
        loginPassword:'',
        registUsername:'',
        registPassword:''
      }
    },
    methods:{
      ...mapActions(['loginAction']),

      //注册处理方法
      registHandler(){
        //axios对象写法
        axios({
          url:url.registUser,
          method:'post',
          data:{
            userName:this.registUsername,
            password:this.registPassword
          }
        }).then(res =>{
              // console.log(res)
          if(res.data.code == 200){
            this.$toast.success('注册成功');
            this.registUsername = '';
            this.registPassword = '';
          }else{
            this.$toast.fail('注册失败')
          }
        }).catch(err => {
              console.log(err);
          this.$toast.fail('注册失败')
        })
      },
      //登录处理方法
      loginHandler(){
        axios({
          url:url.loginUser,
          method:'post',
          data:{
            userName:this.loginUsername,
            password:this.loginPassword,
          }
        }).then(res => {
            // console.log(res);
            if(res.data.code == 200){
                //模拟网络不好，隔一段时间再进行判断
              new Promise((resolve,reject) => { //异步操作管理
                setTimeout(()=>{
                  resolve();
                },1000);
              }).then(()=>{
                this.$toast.success('登陆成功');
                //保存登录状态
                this.loginAction(res.data.userInfo);
                this.$router.go(-1);
              }).catch(err=>{
                this.$toast.fail('登录状态失败');
              })
            }
        }).catch(err => {
              console.log(err);
              this.$toast.fail('登录失败')
        })
      }
    }
  }
</script>

