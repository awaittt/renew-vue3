<template >
    
    <div>
        <div>{{msg}}</div>
        <div>{{ count(1,2) }}</div>
        <button @click="change">点我更新消息</button>
    </div>

</template>
<script>
export default {
            data(){
                return {msg:'哈哈哈哈哈'}
            },
            methods:{
                count(a,b){
                    return a+b
                },
                change(){
                    this.msg='消息更新了'
                }
            }
        }
</script>