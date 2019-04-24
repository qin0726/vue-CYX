<template>
  <div id="index">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

// @ is an alias to /src
import Header from './common/header'
import Footer from './common/footer'
export default {
    name:"index",
  components: {
   Header,
    Footer
  }
}
</script>
