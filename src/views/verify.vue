<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Verify',
  title: 'Zwallet',
  mounted () {
    console.log('coba')
    axios.put(`${process.env.VUE_APP_SERVICE_API}/users/verify/${this.$route.query.sendid}`)
      .then(() => {
        console.log('berhasil')
        this.$router.push('/auth/login')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
