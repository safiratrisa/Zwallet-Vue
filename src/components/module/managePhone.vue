<template>
  <div v-content>
    <div class="manage-phone-title">Manage Phone Number</div>
    <div class="manage-phone-detail">You can only delete the phone number and then you must add another phone number.</div>
      <div class="manage-primary">
        <div class="primary-phone">
          <div class="phone-number-">
            <div class="up-title">Primary</div>
            <div class="up-value">
                <p>{{getProfile.mainPhone}}</p>
                <i class="fas fa-pen" @click.prevent='editphone'></i>
            </div>
            <div v-if="showphone === 'true'">
              <input v-model="mainPhone"  type="text" class="form-control border-0 bg-light" placeholder="Edit Primary Phone Number" @keypress.enter="updatephone()" />
            </div>
          </div>
        </div>
      </div>
      <div class="manage-phone" v-for="phone in getPhone" :key="phone.id">
        <div class="first-name">
          <div class="phone-number-">
            <div class="up-title">Secondary</div>
            <div class="up-value">
              <p>{{phone.phoneNumber}}</p>
              </div>
          </div>
          <div v-on:click="changePage(phone.id)" class="trash-button">
            <i class="fas fa-trash fa-lg"></i>
          </div>
        </div>
      </div>
      <button v-on:click="AddPhone(getPhoneTotal.totalData)" class="add-button">
        Add
      </button>
      <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SweetAlert from '../../mixins/alert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'ManagePhoneComp',
  title: 'Manage Phone',
  data () {
    return {
      mainPhone: '',
      showphone: '',
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updatePhone: 'updatePhone', getAllPhone: 'getAllPhone', deletePhone: 'deletePhone' }),
    changePage (idPhone) {
      localStorage.setItem('PhoneDeleteId', idPhone)
      this.deletePhone()
      this.getAllPhone()
    },
    updatephone () {
      this.isLoading = true
      const payload = {
        mainPhone: this.mainPhone
      }
      this.updatePhone(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Phone Number Updated' })
          this.getUserProfile()
          this.mainPhone = ''
          this.showphone = 'false'
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    AddPhone (total) {
      if (total >= 2) {
        this.alertError({ title: 'Failed!', text: 'Maximum phone number added is 2' })
      } else {
        this.$router.push('addphone')
      }
    },
    editphone () {
      if (this.showphone === 'true') {
        this.showphone = 'false'
      } else {
        this.showphone = 'true'
      }
    }
  },
  computed: {
    ...mapGetters(['getProfile', 'getPhone', 'getPhoneTotal'])
  },
  mounted () {
    this.getUserProfile()
    this.getAllPhone()
  }
}
</script>

<style scoped>
i {
  cursor: pointer;
}
i:hover {
  color: black;
}
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
.phone-number- {
  width: 100%;
}
.add-button {
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
.primary-phone {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
input {
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #7A7886 ;
  margin-top: 1%;
}
.manage-phone-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
}

.manage-phone-detail {
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: #7A7886;
  padding-right: 48%;
}

.manage-phone {
  width: 100%;
  margin-top: 3%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
}

.manage-primary {
  width: 100%;
  margin-top: 3%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
}
.first-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  flex-direction: row;
  align-items: center;
}
.up-value p {
    font-weight: bold;
    font-size: 22px;
    color: #514F5B;
    width: 100%;
    margin: 0;
}
.trash-button {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
@media screen and (max-width: 767px) {
    .manage-phone-detail {
    padding-right: 0%;
}
}
</style>
