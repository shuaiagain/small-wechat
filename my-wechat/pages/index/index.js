//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'welcome to my home',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    mineInfo: {
      name: ''
    },
    testArr: [{
        'name': 1
      },
      {
        'name': 2
      },{
        'name':3
      }
    ]
  },
  onShareAppMessage(obj) {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showMe: function(e) {
    console.log(e);
    // this.data.mineInfo.name='ss'
    if(this.data.mineInfo.name){
      this.setData({
        mineInfo: {
          name: '',
          hobby: ''
        }
      })
    }else{
    this.setData({
      mineInfo: {
        name: app.globalData.userInfo.nickName,
        hobby: 'basketball'
      }
    })
    }
  },
  goEnter:function(){
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({

        success: res => {

          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})