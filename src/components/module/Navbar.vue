<template>
<div class="aside1">
    <nav class="navbar">
    <ul>
        <li>
            <router-link to="home" exact tag="li"><a class="a-dashboard"><img src="../../assets/img/grid.png" alt=""><span id="dashboard">Dashboard</span></a></router-link>
        </li>
        <li>
            <router-link to="receiver" exact tag="li"><a class="a-transfer"><img src="../../assets/img/arrow-up.png" alt=""><span id="transfer">Transfer</span></a></router-link>
        </li>
        <li>
            <router-link to="topup" exact tag="li"><a class="a-topup"><img src="../../assets/img/plus.png" alt=""><span id="topup">Top Up</span></a></router-link>
        </li>
        <li>
            <router-link to="personal" exact tag="li"><a class="a-profile"><img src="../../assets/img/user.png" alt=""><span id="profile">Profile</span></a></router-link>
        </li>
        <li class="log-out">
            <!-- <button @click.prevent="logout()"></button> -->
            <div @click.prevent="handlelogout()"><a class="a-logout"><img src="../../assets/img/log-out.png" alt=""><span id="logout">Logout</span></a></div>
            <!-- <router-link to="/auth/login" exact tag="li" ><a class="a-logout"><img src="../../assets/img/log-out.png" alt=""><span id="logout">Logout</span></a></router-link> -->
        </li>
    </ul>
</nav>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions({ logout: 'logout' }),
    handlelogout () {
      this.logout()
      this.$router.push('/main/home')
    }
  }
}
</script>

<style scoped>

li a {
    text-decoration: none;
}
.aside1 {
    /* border:2px solid black; */
    margin-bottom: 19px;
    width: 270px;
    margin-right: 2%;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    padding: 0;
}
.navbar {
    padding-left: 0;
    position: relative;
    width: 100%;
    padding: 0%;
    margin-top: 20%;
    /* height:100%; */
}

ul {
    padding-left: 0;
    /* position: absolute; */
    /* top: 3%; */
    font-weight: bold;
    font-size: 18px;
    list-style: none;
    width: 100%;
    /* height: 100%; */
    /* padding: 0; */
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}

li {
    padding-left: 0;
    position: relative;
    width: 100%;
    margin-bottom: 0%;
    margin-left: 0;
    margin-bottom: 10%;
}

nav ul li a{
    /* border:2px solid black; */
    width: 100%;
    padding-left: 10%;
}

.log-out {
    margin-top: 70%;
}

/* .a-dashboard {
    height: 100%;
    width: 100%;
    border-left: 5px solid #6379F4;
} */

/* #dashboard, #transfer, #topup, #profile, #logout, #dashboard {
    padding-left: 0;
    margin-left: 10px;
} */

/* #dashboard {
    padding-left: 0;
    font-weight: bold;
    font-size: 18px;
    color: #6379F4;
    width: 100%;
    height: 100%;
} */

#transfer, #topup, #profile, #logout, #dashboard {
    margin-left: 10px;
    padding-left: 0;
    font-weight: normal;
    font-size: 18px;
    color: rgba(58, 61, 66, 0.8);
}

@media screen and (max-width: 1199px) {
    .navbar {
        margin-top: 0;
    }
    .aside1 {
        flex-grow: 1;
        margin-left: 0;
        margin-right: 0;
        height: 50px;
        margin-bottom: 10px;
    }
    .log-out {
        margin-top:0%;
    }

    ul {
        /* border: 2px solid black; */
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
    }
    .a-dashboard {
        margin: 0;
        /* padding: 0; */
        /* border: 2px solid black; */
        border-left: 0;
        border-bottom: 5px solid #6379F4;
    }

    li {
        margin: 0;
        padding: 0;
        /* border: 2px solid black; */
        /* width:20%; */
        display: flex;
        flex-direction: column;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        margin: 0;
        padding: 0;
        /* border: 2px solid black; */
        /* padding-top: 6%; */
        padding-left: 5%;
        height: 100%;
    }
}

@media screen and (max-width: 991px) {
    #dashboard, #transfer, #topup, #profile, #logout {
        display: none;
    }
    nav ul li a{
        padding-left: 30%;
    }
    ul {
        top: 5%;
    }
}

</style>
