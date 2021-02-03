const app = {
    data () {
        return {
            firstname : 'Ruangrit',
            lastname : 'Kaewkrom',
            profession : 'Front-End Developer', 
            article : 24,
            follower : 248,
            rating : '9.8',
            imgURL : './images/harold.jpg'
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            setInterval(() => {
                mountedApp.follower += 1
            }, 500);
            setInterval(() => {
                mountedApp.article += 1
            }, 5000);
        })
      }
}

mountedApp = Vue.createApp(app).mount('#app')
