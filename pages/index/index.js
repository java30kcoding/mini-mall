import { request } from "../../request/index.js"

//Page Object
Page({
  data: {
    //轮播图数组
    swiperList:[],
    cateList:[],
    floorList:[]
  },
  //options(Object)
  onLoad: function(options){
    //1.异步请求
    // wx.request({
    //   url: '/home/swiperdata',
    //   success: (result)=>{
    //     this.setData({
    //       swiperList: result.data.message
    //     })
    //   }
    // });
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },
  getSwiperList(){
    request({url: "/home/swiperdata"})
        .then(result => {
          this.setData({
            swiperList: result.data.message
          })
        })
  },
  getCateList(){
    request({url: "/home/catitems"})
        .then(result => {
          this.setData({
            cateList: result.data.message
          })
        })
  },
  getFloorList(){
    request({url: "/home/floordata"})
        .then(result => {
            this.setData({
              floorList: result.data.message
            })
        })
  }
});