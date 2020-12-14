<template>
    <!-- <router-view/> -->
        <div>
        <div class="fullside">
            <section class="leftside">
                <h1 class="branding">Zwallet</h1>
                <div class="phone">
                        <div class="phone1">
                            <img src="../../assets/img/png-phone.png">
                        </div>
                        <div class="phone2">
                            <img src="../../assets/img/png-phone2.png">
                        </div>
                    </div>
                <h2 class="tagline">App that Covering Banking Needs.</h2>
                <p class="info">
                    Zwallet is an application that focusing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.
                </p>
            </section>
            <section class="rightside">
                <router-view/>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style lang="scss" scoped>
.fullside {
    display: flex;
    overflow: hidden;
    position: relative;
    height: 50%;
  }
  .rightside {
    background-color:white;
    width: 57%;
    height: 100vh;
    position: relative;
  }
  .leftside {
      height: 5%;
    background-color:#6379F4;
    width: 42%;
    min-width: 500px;
    height: 100vh;
    position: relative;
    background-image: url("../../assets/img/Mask Group.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .branding {
    font-size: 40px;
    margin-top: 2%;
    margin-left: 10%;
    margin-bottom: 0%;
    font-family: NunitoSans;
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
}

.phone {
    margin-right: auto;
    margin-left: auto;
    position: relative;
    padding: 0%;
}

.phone1 img {
    margin-left: 40%;
    width: 40%;
    margin-top: 0%;
    margin-bottom: 0%;
}

.phone2 img {
    position: absolute;
    top: 0%;
    left: 20%;
    width: 38%;
}
.tagline {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 2%;
    font-size: 30px;
    font-family: NunitoSans;
    color: #FFFFFF;
    font-weight: bold;
    line-height: 40px;
}

.info {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 0%;
    font-family: NunitoSans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
}

@media screen and (max-width: 1024px) {
    .branding {
        font-size: 29px;
    }
    .tagline {
        font-size: 24px;
        line-height: 35px;
    }
    .info {
        font-size: 16px;
    }
}

@media screen and (max-width: 840px) {
    .leftside {
        display: none;
    }
    .rightside {
        width: 100vw;
    }
}
</style>
