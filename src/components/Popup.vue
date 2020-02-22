<template>
    <div class='popup'>
        <div>是否购买此卡？</div>
        <div>
            <button @click='cancel'>取消</button>
            <button @click='confirm'>确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        message: {
            type: String,
            default: null
        }
    },
    methods: {
        cancel: function () {
            this.$parent.cancel()
        },
        confirm: function () {
            this.$parent.confirm()
        }
    }
}
</script>

<style scoped lang='scss'>
    template {
        width: 100vw;
        height: 100vh;
    }
    .popup {

    }
</style>
