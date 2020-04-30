import { request } from "../../request/index.js"
Page({
  data: {
    leftMenuList:[],
    rightContentList:[]
  },
  CateList:[],
  onLoad: function(options){
    this.getCategoryList();
  },
  getCategoryList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/categories"})
        .then(result => {
          this.CateList = result.data.message;
          //构建左侧菜单数据
        })
  }
});