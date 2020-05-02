import { request } from "../../request/index.js"
Page({
  data: {
    leftMenuList:[],
    rightContentList:[],
    currentIndex:0
  },
  CateList:[],
  onLoad: function(options){
    const CatesLocal = wx.getStorageSync("CateList");
      if (!CatesLocal) {
          this.getCategoryList();
      } else {
          if (Date.now() - CatesLocal.time > 1000 * 60 * 10) {
              this.getCategoryList();
          } else {
              this.CateList = CatesLocal.data;
              //构建左侧菜单数据
              let leftMenuList = this.CateList.map(v => v.cat_name);
              //右侧内容
              let rightContentList = this.CateList[0].children;
              this.setData({
                  leftMenuList,
                  rightContentList
              })
          }
      }
  },
  async getCategoryList(){
    // request({url: "/categories"})
    //     .then(result => {
    //       this.CateList = result.data.message;
      //       //存入缓存
      //       wx.setStorageSync("CateList", {time:Date.now(), data:this.CateList});
      //       //构建左侧菜单数据
      //       let leftMenuList = this.CateList.map(v => v.cat_name);
      //       //右侧内容
      //       let rightContentList = this.CateList[0].children;
      //       this.setData({
      //         leftMenuList,
      //         rightContentList
      //       })
      //     })
    const res = await request({url : "/categories"});
    this.CateList = res.data.message;
    //存入缓存
    wx.setStorageSync("CateList", {time:Date.now(), data:this.CateList});
    //构建左侧菜单数据
    let leftMenuList = this.CateList.map(v => v.cat_name);
    //右侧内容
    let rightContentList = this.CateList[0].children;
    this.setData({
      leftMenuList,
      rightContentList
    })
  },
  handleItemTap(e){
    const {index} = e.currentTarget.dataset;
      //右侧内容
      let rightContentList = this.CateList[index].children;
      this.setData({
          currentIndex:index,
          rightContentList
      })
  }
});