/*
 * @Author: jiashuangxi
 * @Date: 2021-12-02 22:56:52
 * @LastEditors: jiashuangxi
 * @LastEditTime: 2021-12-24 19:13:48
 * @Describe: 
 */
import { registerMicroApps, start } from 'qiankun'; // 底层是基于single-spa

registerMicroApps([
    {
        name: 'm-vue',
        entry: '//localhost:20000',
        container: '#container',
        activeRule: '/vue',
        props: { a:1 }
    },
    // {
    //     name: 'sub-preview',
    //     entry: '//localhost:2000',
    //     container: '#container',
    //     activeRule: '/preview',
    //     props: { a:1 }
    // },
], {
    beforeLoad: () => {
        console.log('加载前')
    },
    beforeMount: () => {
        console.log('挂在前')
    },
    afterMount: () => {
        console.log('挂载后')
    },
    beforeUnmount: () => {
        console.log('销毁前')
    },
    afterUnmount: () => {
        console.log('销毁后')
    },
})
start();