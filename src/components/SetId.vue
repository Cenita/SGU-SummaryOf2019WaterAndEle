<template>
  <div id="main" :style="{height:ha}">

    <div class="animated bounceIn" style="animation-delay:3s;width: 200px;position: absolute;top: 95%;left: 50%;margin-left: -100px;color: rgba(255,255,255,0.7);font-size: 5px">
      <span>环创电脑工作室出品</span>
    </div>
    <div class="animated bounceIn" style="animation-delay:3s;width: 200px;position: absolute;top: 93%;left: 50%;margin-left: -100px;color: rgba(255,255,255,0.7);font-size: 5px">
      <span>韶关学院</span>
    </div>
    <div class="animated bounceIn" style="animation-delay:3s;width: 200px;position: absolute;top: 97%;left: 50%;margin-left: -100px;color:rgba(255,255,255,0.7);font-size: 5px">
      <span>数据截止到2019年12月中旬</span>
    </div>
    <div class="animated bounceIn" id="sgulogo" style="animation-delay:3s;width: 200px;position: absolute;top: 87%;left: 50%;margin-left: -100px;">
      <img src="../assets/sgulogo.png" alt="" style="position: relative;display: inline-block;width: 40px;height: 40px;">
    </div>
    <div id="BigTitle" class="animated fadeInDown" >我的宿舍</div>
    <van-divider class="animated zoomIn" id="fenge" :style="{'animation-delay': '0.5s', color: 'rgba(16, 74, 66, 0.8)', borderColor: 'rgba(16, 74, 66, 0.8)', padding: '0 5px' }">
      2019年
    </van-divider>
    <div id="smallTitle" style="animation-delay:1s" class="animated fadeInUp">水电报告</div>
    <div id="choice" class="animated fadeInUp" style="animation-delay:1.5s">
      <p id="sebuilding" @click="showBuildingPopup">{{buildingTitle}}</p>
      <p @click="showRoomPopup">{{roomTitle}}
        <span v-if="selectRoom">号宿舍</span>
      </p>
    </div>
    <div id="start">
      <div id="stbtn" class="animated wobble" v-if="selectRoom&&selectBuilding" @click="hasOk">查看报告</div>
    </div>
    <van-popup v-model="Buildingshow"
               position="bottom"
               :style="{ height: '60%' }"
    >
      <van-picker
        :columns="building"
        show-toolbar
        defaultIndex="3"
        title="选择苑区"
        @confirm="BuildingonConfirm"
        @cancel="Buildingshow=false"
        visible-item-count="9"
      />
    </van-popup>
    <van-popup v-model="RoomShow"
               position="bottom"
               :style="{ height: '60%' }"
    >
      <van-picker
        :columns="room"
        show-toolbar
        title="选择宿舍号"
        @confirm="RoomonConfirm"
        visible-item-count="9"
        @cancel="RoomShow=false"
      />
    </van-popup>
  </div>
</template>

<script>
  import animate from 'animate.css'
  import { Toast } from 'vant';
  import axios from 'axios'
const roomList = ["0","1","2","3","4","5","6","7","8","9"];
const buildingList = ["紫藤1栋","碧桃21栋","碧桃24栋","碧桃28栋",
  "碧桃29栋","丹桂22栋","丹桂23栋","碧桃25栋","碧桃27栋","丹竹A栋","丹竹B栋","丹竹C栋","碧桂B栋"
  ,"碧桂C栋","碧桂A栋","红枫A栋","海棠A栋","海棠B栋","紫荆A栋","紫荆B栋","紫荆C栋","紫薇A栋","紫薇B栋","紫薇C栋","丁香A栋"
  ,"丁香B栋","丁香C栋","丁香D栋","丁香E栋","丁香G栋","丁香F栋","海棠C栋","秋枫A栋","秋枫B栋","秋枫C栋","秋枫D栋","蔷薇A栋"
  ,"蔷薇B栋","蔷薇C栋","芙蓉A栋","芙蓉B栋","芙蓉C栋","芙蓉D栋","银杏A栋","银杏B栋","丹枫A栋","丹枫B栋","红棉东栋","红枫B栋"
  ,"红棉西栋","碧桃20栋","丹桂26栋","黄田坝6栋","黄田坝10栋","黄田坝12栋","黄田坝9栋","紫竹A栋","紫竹B栋","樱花苑栋","梧桐苑栋"]
const buildingIdList = ["909","1177","1250","1332",
  "1366","1426","1486","1623","1649","1688","1811","1924","2047"
  ,"2114","2202","2317","2710","2807","2904","3151","3271","3405","3517","3629","3763"
  ,"3884","4005","4126","4247","4369","4492","4613","4710","4807","4904","5001","5133"
  ,"5246","5359","5456","5569","5682","5795","5908","6011","6090","6169","6290","6320"
  ,"6326","6378","6481","6546","6610","6689","6767","6849","6988","7169","7444"]
export default {
  name: 'SetId',
  data () {
    return {
      a:"",
      ha:document.documentElement.clientHeight+'px',
      building:buildingList,
      room:[{
        values:roomList,
        className: 'column1',
        defaultIndex:2
      },
        {
          values:roomList,
          className: 'column2',
          defaultIndex:2
        },
        {
          values:roomList,
          className: 'column3',
          defaultIndex:2
        }],
      Buildingshow:false,
      selectBuilding:false,
      selectRoom:false,
      buildingId:-1,
      buildingTitle:"选择苑区",
      RoomShow:false,
      roomTitle:"选择宿舍号"
    }
  },
  methods: {
    showBuildingPopup() {
      this.Buildingshow = true;
    },
    showRoomPopup(){
      this.RoomShow=true;
    },
    BuildingonConfirm(val,index){
      this.buildingTitle = val;
      this.buildingId = buildingIdList[index];
      this.Buildingshow = false;
      this.selectBuilding = true;
    },
    RoomonConfirm(val,index){
      this.roomTitle = val[0]+val[1]+val[2];
      this.RoomShow = false;
      this.selectRoom = true;
    },
    hasOk(){
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        message: '加载中...',
        forbidClick: true
      });
      var _this = this;
      axios.get("http://www.hclab.cn:2502/we",{params:{buildingId:this.buildingId,roomId:this.roomTitle}}).then(res=>{
        if(res.data.code===200){
          toast.clear();
          this.$router.push({path:'/re',query:{"building":_this.buildingTitle,"room":_this.roomTitle,"res":JSON.stringify(res.data.data)}});
        }else{
          toast.clear();
          Toast(res.data.message)
        }
      }).catch(()=>{
        toast.clear();
        Toast("服务器请求出错")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #main{
    display: inline-block;
    background: url("../assets/bjm_s.jpg") no-repeat center bottom;
    width: 100%;
    color: white;
  }
  #main >*{
    animation-duration: 2s;
    text-align: center;
  }
  #fenge{
    font-size: 25px;
  }
  #BigTitle{
    margin-top: 100px;
    color: rgba(16, 74, 66, 0.8);
    font-family: "Microsoft YaHei";
    text-indent: 5px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing:5px;
  }
  #smallTitle{
    color: rgba(16, 74, 66, 0.8);
    font-family: "Microsoft YaHei";
    text-indent: 5px;
    margin-top: -10px;
    font-size: 15px;
    font-weight: 800;
    letter-spacing:5px;
  }
  #choice{
   margin-top: 100px;
  }
  #choice >*{
    font-size: 20px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: honeydew;
    margin-top: 30px;
  }
  #start{
    margin-top:100px;
  }
  #stbtn{
    margin: auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #7ac5f5;
    box-shadow: 4px 4px 2px #0d3d45;
  }

</style>
