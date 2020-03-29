<template>
    <div style="color:white">
      <van-swipe :style="{height:ha}" vertical @change="onChange" >
        <van-swipe-item>
          <div class="ewm" style="position: absolute;top: 90%;left: 2%;color: rgba(255,255,255,0.8)">
            <img src="../assets/1577602713.png" style="padding-right: 5px;float: left;width: 40px;height: 40px;" alt="">
            <div style="float: left;font-size: 5px;">关注环创电脑工作室</div>
            <div style="font-size: 5px;">微信公众号</div>
            <div style="font-size: 5px;">查看2019年</div>
            <div style="font-size: 5px;">水电报告</div>
          </div>
          <div class="fudong" style="left: 10%;top: 9%;">
            <img src="../assets/ren1.png" alt="">
          </div>
          <div class="bg bg1">
            <div class="bolad wow fadeInUp" style="position: relative;top: 25%;">{{building}}</div>
            <div class="wow fadeInUp" data-wow-delay="0.5s" style="position: relative;top: 25%;">在<span class="bolad">2019</span>年里</div>
            <div class="wow fadeInUp" data-wow-delay="1s" style="position: relative;top: 30%;">在韶关学院所有苑区中</div>
            <div class="wow fadeInUp" data-wow-delay="1.5s" style="position: relative;top: 30%;">总用电排行是第<span class="bolad">{{res.rank.building.allEle}}</span>名</div>
            <div class="wow fadeInUp" data-wow-delay="2s" style="position: relative;top: 30%;">总用水排行是第<span class="bolad">{{res.rank.building.allWater}}</span>名</div>
            <div class="wow fadeInUp" data-wow-delay="2.5s" style="position: relative;top: 35%;">超越约<span class="bolad">{{res.rank.building.over}}</span>的苑区</div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="ewm" style="position: absolute;top: 90%;left: 2%;color: rgba(255,255,255,0.8)">
            <img src="../assets/1577602713.png" style="padding-right: 5px;float: left;width: 40px;height: 40px;" alt="">
            <div style="float: left;font-size: 5px;">关注环创电脑工作室</div>
            <div style="font-size: 5px;">微信公众号</div>
            <div style="font-size: 5px;">查看2019年</div>
            <div style="font-size: 5px;">水电报告</div>
          </div>
          <div class="bg bg2">
           <div style="width: 100%;height: 100%" v-if="theIndex>=1">
             <div style="position: relative;top: 15%;" class="bolad animated fadeInUp">2019年</div>
             <div class="animated fadeInUp" style="position: relative;top: 20%;animation-delay: 0.5s;">韶关学院所有宿舍</div>
             <div class="animated fadeInUp" style="position: relative;top: 20%;animation-delay: 1s;">日均用电量<span class="bolad">{{res.average.all.ele}}</span>元</div>
             <div class="animated fadeInUp" style="position: relative;top: 20%;animation-delay: 1.5s;">日均用水量<span class="bolad">{{res.average.all.water}}</span>元</div>
             <div class="animated fadeInUp" style="position: relative;top: 25%;animation-delay: 2s;"><span class="bolad">{{building}}{{room}}</span>宿舍在2019年中</div>
             <div class="animated fadeInUp" style="position: relative;top: 25%;animation-delay: 2.5s;">日均用电量<span class="bolad">{{res.average.doc.ele}}</span>元</div>
             <div class="animated fadeInUp" style="position: relative;top: 25%;animation-delay: 3s;">日均用水量<span class="bolad">{{res.average.doc.water}}</span>元</div>
             <div class="animated fadeInUp" style="position: relative;top: 30%;animation-delay: 3.5s;">超越了<span class="bolad">{{res.average.doc.over}}</span>的宿舍</div>
           </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="fudong" style="left: 10%;top: 15%;">
            <img src="../assets/ren4.png" style="width: 100px;" alt="">
          </div>
          <div class="ewm" style="position: absolute;top: 90%;left: 2%;color: rgba(255,255,255,0.8)">
            <img src="../assets/1577602713.png" style="padding-right: 5px;float: left;width: 40px;height: 40px;" alt="">
            <div style="float: left;font-size: 5px;">关注环创电脑工作室</div>
            <div style="font-size: 5px;">微信公众号</div>
            <div style="font-size: 5px;">查看2019年</div>
            <div style="font-size: 5px;">水电报告</div>
          </div>
          <div class="bg bg4">
            <div  style="width: 100%;height: 100%" v-if="theIndex>=2">
              <div class="animated fadeInUp" style="position: relative;top: 33%;animation-delay: 0.5s;"><span class="bolad">{{building}}{{room}}</span>宿舍</div>
              <div class="animated fadeInUp" style="position: relative;top: 38%;animation-delay: 1s;">总共用电<span class="bolad">{{res.doc.fea.ele}}</span>元</div>
              <div class="animated fadeInUp" style="position: relative;top: 38%;animation-delay: 1.5s;">总共用水<span class="bolad">{{res.doc.fea.water}}</span>元</div>
              <div class="animated fadeInUp" style="position: relative;top: 38%;animation-delay: 2s;">总费用<span class="bolad">{{res.doc.fea.all}}</span>元</div>
              <div class="animated fadeInUp" style="position: relative;top: 43%;animation-delay: 2.5s;">超越<span class="bolad">{{res.doc.fea.over}}</span>的宿舍</div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="ewm" style="position: absolute;top: 90%;left: 2%;color: rgba(255,255,255,0.8)">
            <img src="../assets/1577602713.png" style="padding-right: 5px;float: left;width: 40px;height: 40px;" alt="">
            <div style="float: left;font-size: 5px;">关注环创电脑工作室</div>
            <div style="font-size: 5px;">微信公众号</div>
            <div style="font-size: 5px;">查看2019年</div>
            <div style="font-size: 5px;">水电报告</div>
          </div>
          <div  style="position: absolute;left: 50%;top: 70%;">
            <img src="../assets/ren3.png" style="width: 100px;" alt="">
          </div>
          <div  style="position: absolute;left: 20%;top: 5%;">
            <img src="../assets/ren2.png" style="width: 80px;" alt="">
          </div>
          <div class="bg bg4">
            <div  style="width: 100%;height: 100%" v-if="theIndex>=3">
              <div class="animated fadeInUp" style="position: relative;top: 37%;animation-delay: 0.5s;"><span class="bolad">{{building}}{{room}}</span>宿舍</div>
              <div class="animated fadeInUp" style="position: relative;top: 37%;animation-delay: 1s;">在<span class="bolad">{{res.doc.most.ele.date}}</span>用电最多</div>
              <div class="animated fadeInUp" style="position: relative;top: 37%;animation-delay: 1.5s;">用了<span class="bolad">{{res.doc.most.ele.fea}}</span>元的电费</div>
              <div class="animated fadeInUp" style="position: relative;top: 37%;animation-delay: 2s;">在<span class="bolad">{{res.doc.most.water.date}}</span>用水最多</div>
              <div class="animated fadeInUp" style="position: relative;top: 37%;animation-delay: 2.5s;">用了<span class="bolad">{{res.doc.most.water.fea}}</span>元的水费</div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="ewm" style="position: absolute;top: 90%;left: 2%;color: rgba(255,255,255,0.8)">
            <img src="../assets/1577602713.png" style="padding-right: 5px;float: left;width: 40px;height: 40px;" alt="">
            <div style="float: left;font-size: 5px;">关注环创电脑工作室</div>
            <div style="font-size: 5px;">微信公众号</div>
            <div style="font-size: 5px;">查看2019年</div>
            <div style="font-size: 5px;">水电报告</div>
          </div>
          <div class="bg bg3">
            <div  style="width: 100%;height: 100%" v-if="theIndex>=4">
              <div class="animated fadeInUp" style="position: relative;top: 30%;animation-delay: 0.5s;">根据<span class="bolad">2019年</span>的大数据统计</div>
              <div class="animated fadeInUp" style="position: relative;top: 34%;animation-delay: 1s;"><span class="bolad">{{building}}{{room}}</span>宿舍获得<span class="bolad">{{res.doc.newName}}</span>称号</div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
  import {WOW} from 'wowjs'
    export default {
        name: "Result",
      data:function () {
        return {
          ha:document.documentElement.clientHeight+"px",
          theIndex:0,
          res:JSON.parse(this.$route.query.res),
          building:this.$route.query.building,
          room:this.$route.query.room
        }
      },methods:{
        onChange(index){
          if(this.theIndex==0&&index==4){
            this.$router.push('/')
          }
          if(this.theIndex==4&&index==0){
            this.$router.push('/')
          }
          this.theIndex = index;
        }
      },mounted() { new WOW().init() }
    }
</script>

<style scoped>
  .bg{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: darkslategrey;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    text-align: center;
  }
  @keyframes fd{
    0% {margin-top:  0px;}
    25% {margin-top: 10px;}
    50% {margin-top: 0px;}
    75% {margin-top: 10px;}
    100% {margin-top: 0px;}
  }
  .fudong{
    position: absolute;
    animation-name: fd; /*动画名称*/
    animation-duration: 5s; /*设置秒数*/
    animation-timing-function: ease-in-out;/*速度曲线*/
    animation-iteration-count: infinite;/*播放次数*/
    animation-direction: alternate;/*逆向播放*/
    animation-play-state: running;/*正在运行*/
  }
  .fudong img{
    width: 50px;
  }
  .bolad{
    font-weight: bold;
    padding: 0px 15px;
  }
  .bg div{
    height: 40px;
    animation-duration: 2s;
  }
  .bg1{
    background: url("../assets/bg_1.jpg") no-repeat center bottom;
  }
  .bg2{
    background: url("../assets/bg_2.jpg") no-repeat center bottom;
  }
  .bg4{
    background: url("../assets/bg_4.jpg") no-repeat center bottom;
  }
  .bg3{
    background: url("../assets/bg3.jpg") no-repeat center bottom;
  }
</style>
