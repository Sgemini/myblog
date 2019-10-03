export default {
    data () {
        return {
            dateFormat (date) {
                date = new Date(date)
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
            }
        }
    }
}
