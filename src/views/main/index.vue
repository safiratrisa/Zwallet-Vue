<template>
<div>
    <Header />
    <div class="container">
        <Navbar />
        <router-view/>
    </div>
    <div>
        <Footer />
    </div>
</div>
</template>

<script>
import Header from '../../components/module/Header'
import Navbar from '../../components/module/Navbar'
// import Content from '../components/module/dashContent'
import Footer from '../../components/module/Footer'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Navbar,
    // Content,
    Footer
  },
  data () {
    return {
      results: []
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    height: 140px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.container {
    display: flex;
    flex-direction: row;
    border: 5px;
}
.user {
    display: flex;
    flex-direction: row;
    float: left;
    position: absolute;
    right: 8%;
    top: 25%;
}

.user-profile {
    margin-left: 10px;
}

.bell {
    margin-left: 10px;
}

h1 {
    position: absolute;
    left: 10%;
    top: 25%;
    font-weight: bold;
    font-size: 29px;
    color: #6379F4;
}
@media screen and (max-width: 1199px) {
    .container {
        flex-wrap: wrap;
    }
}
</style>
