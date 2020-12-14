<template>
<div class="aside2">
                        <div class="add-phone-title">Add Phone Number</div>
                        <div class="add-phone-detail">Add at least one phone number for the transfer ID so you can start transfering your money to another user</div>
                        <div class="form-box">
                            <div class="input-box">
                                <span class="phone-code">+62</span>
                                <input v-model="phoneNumber" class="phoneNumber" type="text" placeholder="Add phone number" >
                                <!-- <input class="phone-number" type="text" placeholder="Add phone number"> -->
                            </div>
                             <button v-on:click="insertphone()" class="login-btn">Add</button>
                        </div>
                    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'phoneNumber',
  data () {
    return {
      phoneNumber: ''
    }
  },
  methods: {
    ...mapActions({ insertPhone: 'insertPhone' }),
    insertphone () {
      const payload = {
        phoneNumber: this.phoneNumber
      }
      this.insertPhone(payload)
      this.$router.push('manage-phone')
    }
  }
}
</script>

<style scoped>
.aside2 {
    height: 678px;
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.add-phone-title {
    position: absolute;
    left: 5%;
    top: 5%;
    font-weight: bold;
font-size: 18px;
line-height: 25px;
color: #3A3D42;
}

.add-phone-detail {
    position: absolute;
    top: 10%;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #7A7886;
    padding-right: 48%;
    padding-left: 5%;
}

.form-box {
    position: absolute;
    top: 25%;
    left: 15%;
    right: 20%;
    color: rgba(58, 61, 66, 0.6);
}

.input-box {
    width: 100%;
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);;
    padding-top: 60px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: row;
}

.input-box input {
    width: 80%;
    border: none;
    outline: none;
    background: transparent;
}

.login-btn {
    margin-top:40px;
    width: 100%;
    display: block;
    outline: none;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border : 0px;
}

.phone-code {
    margin-right: 1%;
    margin-left: 3%;
    font-weight: 600;
    font-size: 16px;
    color: #3A3D42;
}
</style>
