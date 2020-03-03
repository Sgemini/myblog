<template>
    <div class='login'>
        <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" class='login--form'>
            <el-form-item label="邮箱" prop="email">
                <el-input type="password" v-model="loginForm.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginForm: {
                email: '',
                passwrod: ''
            },
            loginRules: {
                email: [{ required: true }],
                password: [{ required: true }]
            }
        }
    }
}
</script>

<style scoped lang='scss'>
    .login {
        background-color: rgb(84, 92, 100);
        height: 100%;
    }
    .login--form {
        width: 50%;
    }

</style>

<style lang='scss'>
    .login--form {

        .el-form-item__label {
            color: white;
        }
    }

</style>