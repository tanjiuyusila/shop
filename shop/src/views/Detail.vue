<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img :src="detail.img" alt="" class="detail-img">
    <div class="detail">
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-price">￥{{detail.price}}</p>
      <p >公司{{detail.company}}</p>
      <p >产地{{detail.city}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import url from '@/service.config.js'
  export default {
      data(){
        return{
          detail:{}
        }
      },
      created(){
        // console.log(this.$route.params)
        // console.log(this.$route.query.id)
        console.log(this.$route.params.id);
        axios({
          url:url.getDetail,
          method:'get',
          params:{
            id:this.$route.params.id
          }
        }).then(res => {
          this.detail = res.data
        }).catch(err => {
          console.log(err);
        })

      }
  }
</script>

<style scoped lang="scss">
.detail{
  padding:0.2rem;
  &-img{
    width: 100%;
    height: 5rem;
  }
  &-name{
    color:#333;
    font-weight: bolder;
  }
  &-price{
    color:#ff7300;
    font-size: 0.4rem;
  }

}
</style>
