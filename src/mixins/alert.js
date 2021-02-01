import Swal from 'sweetalert2'
var SweetAlert = {
  methods: {
    alert (options) {
      Swal.fire(options)
    },
    alertSuccess (options) {
      console.log(options)
      this.alert({
        title: options.title,
        text: options.text,
        icon: 'success'
      })
    },
    alertError (options) {
      console.log(options)
      this.alert({
        title: options.title,
        text: options.text,
        icon: 'error'
      })
    }
  }
}
export default SweetAlert
