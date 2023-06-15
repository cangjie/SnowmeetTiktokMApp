App({
  globalData:{
    sessionKey: '',
    requestUrlPrifix: 'https://mini.snowmeet.top/core/'
  },
  onLaunch: function () {

  },
  loginPromise: new Promise(function (resolve){
    tt.login({
      success: (res) => {
        const app = getApp()
        console.log('log in', res)
        var loginUrl = app.globalData.requestUrlPrifix + 'TiktokHelper/Login/' + encodeURIComponent(res.code)
        tt.request({
          url: loginUrl,
          success: (res) => {
            console.log('session key', res)
            app.globalData.sessionKey = res.data.toString().trim()
          },
          fail: (res) => {
            
          },
        });

      },
      fail: (res) => {
        
      },
    });
  })
})
