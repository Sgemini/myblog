<template>
    <div>
        <el-button type="primary" icon="el-icon-plus" circle @click='isShowCreateForm = true' class='createAdoption--button'></el-button>
        <el-dialog title="收货地址" :visible.sync="isShowCreateForm">
            <el-form :model="form">
                <el-form-item label="活动名称">
                    <el-input autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShowCreateForm = false">取 消</el-button>
                <el-button type="primary" @click="isShowCreateForm = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'CreateAdoption',
    data () {
        return {
            isShowCreateForm: false,
            form: {}
        }
    },
    methods: {
        showCreateForm: function () {
            this.isShowCreateForm = true
        }
    }
}
</script>

<style scoped lang='scss'>
    .createAdoption--button {
        position: fixed;
        bottom: 5%;
        right: 5%;
    }
</style>
