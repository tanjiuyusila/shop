<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
    <div clsss="card">
      <van-card v-for="(item,index) in productList" :key="index" :price="item.price" :desc="item.company" :title="item.name" :thumb=item.img >
        <div slot="footer">
          <van-button size="mini" @click="delCart(item._id,index)">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit-bar" @submit="onSubmit" :price="totalPrice" button-text="提交订单" submit="onSubmit"/>
    </div>
</template>

<script>
  import {mapState} from 'vuex';
  import axios from 'axios';
  import url from '@/service.config.js';
  export default {
    data(){
      return{
        // imageUrl:'http://img49.nongjx.com/2/20180408/636588011697775992997_198_170_5.png',
        productList:[],
      }
    },
    computed:{
      ...mapState(['userInfo']),
      totalPrice(){
        return this.productList.reduce((sum,elem) => {
          sum += elem.price;
          return sum;
        },0)*10*10;
      }
    },
    created(){
      //验证用户是否登录
      if(JSON.stringify(this.userInfo) === '{}'){
        this.$toast.fail('请登录');
        setTimeout(() => {
          this.$router.push('/profile');
        },1000);
      }else{
          axios({
            url:url.getCart,
            method:'get',
            params:{
              userId:this.userInfo._id,
            }
          }).then(res => {
            for( let item of res.data){
              this.productList.push(item.productId)
            }
          }).catch(err => {
            console.log(err)
          })
      }
    },
    methods:{
      onSubmit(){
          this.$toast.success('进入付款界面');
      },
      delCart(id,index){
        //删除数据库的数据，如果删除成功，进入回调函数，然后在回调函数中，如下代码：
        this.productList.splice(index,1);
      }
    },

  }
</script>

<style scoped>
.submit-bar{
  margin-bottom:1rem;
}
</style>
