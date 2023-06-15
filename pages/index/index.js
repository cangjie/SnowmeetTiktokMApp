const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    
    /*
    tt.showDouyinOpenAuth({
      scopes: {"video.search": 0},
      success: (res) => {
        console.log('open auth', res)
      },
      fail: (res) => {
        console.log('open auth fail', res)
      },
    });
    */
  },
  getPhoneNumberHandler: function(e){
    console.log('get phone number', e)
  }
})
