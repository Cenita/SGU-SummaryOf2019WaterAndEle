<template>
    <div>
      <p>正在获取你宿舍的一年信息</p>
      <p>{{num}}%</p>
    </div>
</template>

<script>
    export default {
        name: "loading",
        data:function () {
          return {
            num:0
          }
        },
      created(){
          var _this =this;
          setInterval(function () {
            if(_this.num<100){
              _this.num+=1;
            }else{
              _this.$router.push('/re');
            }
          },40)
      }
    }
</script>

<style scoped>

</style>
