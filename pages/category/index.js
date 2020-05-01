import { request } from "../../request/index.js"
Page({
  data: {
    leftMenuList:[],
    rightContentList:[],
    currentIndex:0
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
          let leftMenuList = this.CateList.map(v => v.cat_name);
          //右侧内容
          let rightContentList = this.CateList[0].children;
          this.setData({
            leftMenuList,
            rightContentList
          })
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