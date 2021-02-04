<template>
  <div v-content>
    <div class="add-phone-title">Add Phone Number</div>
    <div class="add-phone-detail">Add at least one phone number for the transfer ID so you can start transfering your money to another user</div>
    <div class="form">
      <div class="form-box">
        <div class="input-box">
        <input v-model="phoneNumber" class="phoneNumber" type="text" placeholder="Add phone number" >
      </div>
      <button v-on:click="insertphone()" class="add-btn">Add</button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SweetAlert from '../../mixins/alert'
export default {
  name: 'phoneNumberComp',
  title: 'Add Phone',
  data () {
    return {
      phoneNumber: ''
    }
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ insertPhone: 'insertPhone' }),
    insertphone () {
      const payload = {
        phoneNumber: this.phoneNumber
      }
      this.insertPhone(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Phone Number Added' })
          this.$router.push('manage-phone')
        })
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0%;
}
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
.add-phone-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
}
.add-phone-detail {
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  padding-right: 48%;
}
.form-box {
  width: 70%;
  color: rgba(58, 61, 66, 0.6);
  margin-top: 5%;
}
.input-box {
  width: 100%;
  border-bottom: 1px solid rgba(58, 61, 66, 0.6);;
  display: flex;
  flex-direction: row;
}
.input-box input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
}
.add-btn {
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
@media screen and (max-width: 767px) {
    .add-phone-detail {
    padding-right: 0%;
}
}
@media screen and (max-width: 576px) {
    .form-box {
  width: 100%;
}
}
</style>
