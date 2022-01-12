<template>
  <div id="app">
    <Header></Header>
    <div id="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header/Header.vue'
import Footer from './components/common/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#content {
  height: 1300px;
  background: gray;
}
</style>
