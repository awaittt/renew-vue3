
import {createApp } from 'vue/dist/vue.esm-bundler'


const Root={
    data(){
        return {
            message:'我爱vue'
        }
    },
    tempalate:"<div>{{message}}</div>"
}

createApp(Root).mount("#root")