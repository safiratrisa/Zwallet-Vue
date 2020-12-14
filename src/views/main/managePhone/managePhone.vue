<template>
<div class="aside2">
                        <div class="manage-phone-title">Manage Phone Number</div>
                        <div class="manage-phone-detail">You can only delete the phone number and then you must add another phone number.</div>
                        <div class="manage-primary">
                        <!-- <div class="manage-phone"> -->
                            <div class="primary-phone">
                                <div class="phone-number-">
                                    <div class="up-title">Primary</div>
                                    <div class="up-value">{{getProfile.mainPhone}}</div>
                                </div>
                                <div class="edit-primary" style="width: 60%; padding: 1%">
                                    <input v-model="mainPhone" type="text" placeholder="Edit Primary Phone Number" >
                                    <button @click.prevent="updatephone()" class="phone-button">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div class="manage-phone" v-for="phone in getPhone" :key="phone.id">
                        <!-- <div class="manage-phone"> -->
                            <div class="first-name">
                                <div class="phone-number-">
                                    <div class="up-title">Secondary</div>
                                    <div class="up-value">{{phone.phoneNumber}}</div>
                                </div>
                                <button v-on:click="changePage(phone.id)" class="trash-button">
                                <!-- <button class="trash-button"> -->
                                    <img src="../../../assets/img/trash.png" alt="">
                                </button>
                            </div>
                        </div>
                        <button v-on:click="AddPhone()" class="add-button">
                            Add
                        </button>

                    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ManagePhone',
  data () {
    return {
      mainPhone: ''
    }
  },
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updatePhone: 'updatePhone', getAllPhone: 'getAllPhone', deletePhone: 'deletePhone' }),
    changePage (idPhone) {
      localStorage.setItem('PhoneDeleteId', idPhone)
      this.deletePhone()
      this.$router.push('manage-phone-change')
    },
    updatephone () {
      const payload = {
        mainPhone: this.mainPhone
      }
      this.updatePhone(payload)
      this.$router.push('manage-phone-change')
    },
    AddPhone () {
      this.$router.push('addphone')
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'getPhone'])
  },
  mounted () {
    this.getUserProfile()
    this.getAllPhone()
  }
}
</script>

<style scoped>
.add-button {
    margin-top:40px;
    width: 90%;
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
    margin-left: 5%;
    margin-right: 5%;
}
.primary-phone {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.phone-button {
    margin-left: 2%;
    color: none;
    border: none;
    /* outline: none; */
}
input {
    margin-top: 2%;
    width: 80%;
    height: 30px;
    border: none;
    border-bottom: 1px solid #7A7886 ;
}
.aside2 {
    height: 678px;
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.manage-phone-title {
    margin-left: 5%;
    margin-top: 5%;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
}

.manage-phone-detail {
    margin-top: 5%;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #7A7886;
    padding-right: 48%;
    padding-left: 5%;
}

.manage-phone {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    /* height: 60px; */
    padding-right: 3%;
    padding-top: 0%;
    padding-bottom: 0%;
    padding-left: 2%;
}

.manage-primary {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    /* height: 60px; */
    padding-right: 0%;
    padding-top: 0%;
    padding-bottom: 0%;
    padding-left: 2%;
}

.first-name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.up-title {
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7A7886;
    margin-bottom: 2%;
    width: 100%;
}

.up-value {
    font-weight: bold;
font-size: 22px;
line-height: 30px;
color: #514F5B;
width: 100%;
}

.trash-button {
    background: transparent;
    border: none;
    outline: none;
}
</style>
