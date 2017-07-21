export default {
  data () {
    return {
      dateFormat (date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      }
    }
  }
}
