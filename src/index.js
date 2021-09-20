import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import UserList from '@/components/user/List'
import UserEdit from '@/components/user/Edit'
import UserCreate from '@/components/user/Add'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'home',
            path: '/',
            component: Welcome
        },
        {
            name: 'userList',
            path: '/user',
            component: UserList
        },
        {
            name: 'userEdit',
            path: '/user/:id/edit',
            component: UserEdit
        },
        {
            name: 'userAdd',
            path: '/user/add',
            component: UserCreate
        }
    ]
})