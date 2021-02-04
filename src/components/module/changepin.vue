<template>
    <div v-content>
                        <div class="change-pin-title">Change PIN</div>
                        <div class="change-pin-detail">Enter your current 6 digits Zwallet PIN and your new Zwallet Pin</div>
                        <div class="pin-box">
                            <div class="pin">
                                <p>Old Pin</p>
                                <PincodeInput
                                :length= length
                                v-model="pin"
                                placeholder="_"
                                :secure= secure
                                />
                            </div>
                        </div>
                        <div class="pin-box">
                            <div class="pin">
                                <p>New Pin</p>
                                <PincodeInput
                                :length= length
                                v-model="newpin"
                                placeholder="_"
                                :secure= secure
                                />
                  <button type="button" class="change-btn" @click.prevent="updatepin">Change Pin</button>
                            </div>
                        </div>
                        <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
                    </div>
</template>

<script>
import { mapActions } from 'vuex'
import SweetAlert from '../../mixins/alert'
import PincodeInput from 'vue-pincode-input'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'ChangepinComp',
  title: 'Change PIN',
  components: {
    PincodeInput,
    Loading
  },
  data () {
    return {
      pin: '',
      newpin: '',
      length: parseInt(6),
      secure: true,
      isLoading: false,
      fullPage: true,
      userID: parseInt(localStorage.getItem('userID'))
    }
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ updatePin: 'updatePin' }),
    updatepin () {
      this.isLoading = true
      const payload = {
        pin: this.pin,
        newpin: this.newpin
      }
      this.updatePin(payload)
        .then((res) => {
          this.newpin = ''
          this.alertSuccess({ title: 'Success!', text: 'PIN Updated!' })
        })
        .catch((err) => {
          if (this.userID === 92) {
            this.alertError({ title: 'Failed!', text: 'You can not change this account PIN' })
          } else if (err.response.data.err.message === 'Wrong PIN') {
            this.alertError({ title: 'Failed!', text: 'Wrong PIN' })
          }
          this.newpin = ''
        })
        .finally(() => {
          this.isLoading = false
          this.pin = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
.change-pin-title {
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
}
.pin {
    text-align: center;
}

.change-pin-detail {
    font-size: 16px;
    color: #7A7886;
    padding-right: 48%;
}
.pin-box{
    margin-top: 5%;
    width : 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.change-btn {
    margin-top:40px;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border : 0px;
    outline: none !important;
}
p {
    font-weight: 700;
}
@media screen and (max-width: 767px) {
    .change-pin-detail {
    padding-right: 0%;
}
}
</style>
