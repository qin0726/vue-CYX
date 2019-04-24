<template>
    <div id="not">
        <h2>网页正在建设中。。。</h2>
        <img src="../../static/img/benkui.gif" alt="">
        <hr>
        <h2>{{time}}秒后返回<router-link to="/">主页</router-link></h2>
    </div>
</template>
<script>
export default {
    name:"not",
    data(){
        return{
            time:3
        }
    },
    methods:{
        
        dao(){
            var t=setInterval(() => {
                
                if(this.time==0){
                    this.$router.push("/")
                    clearInterval(t);
                    return;
                }else{
                    this.time--;
                }
                console.log("2")
            }, 1000);
        }
    },
    created(){
        this.dao()
    }
}
</script>
<style>

</style>
