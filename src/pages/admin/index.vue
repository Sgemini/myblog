<template>
    <div class='admin'>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo nav-menu"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>宠回家</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/admin/adoptions">领养宠物</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
        <router-view/>
    </div>
</template>

<script>
export default {
    created () {
        if (!this.$getCookie('auth_token')) {
            this.$router.push({
                path: '/admin/login'
            })
        }
    }
}
</script>

<style scoped lang='scss'>
    .admin {
        display: flex;
        min-height: 100%;
    }
    .nav-menu {
        width: 200px;
    }
</style>
