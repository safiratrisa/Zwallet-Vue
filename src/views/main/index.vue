<template>
<div>
    <Header />
    <div class="container">
        <div class="leftside">
            <Navbar />
        </div>
        <div class="rightside">
            <router-view/>
        </div>
    </div>
    <div>
        <Footer />
    </div>
</div>
</template>

<script>
import Header from '../../components/module/Header'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.leftside{
    width: 25%;
    margin-right: 5%;
}
.rightside{
    width: 75%;
}
.container {
    display: flex;
    flex-direction: row;
    border: 5px;
    margin-bottom: 2%;
}
@media screen and (max-width: 1199px) {
    .leftside {
        width: 100%;
        margin-bottom: 3%;
    }
    .rightside {
        width: 100%;
    }
    .container {
        flex-direction:column
    }
}
</style>
