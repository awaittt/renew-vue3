
let obj={
    name:'孙悟空',
    age:'18'
}

const handler ={
//制定行为
    get(target,prop,receiver){
            return target[prop]
    }
}
const proxy=new Proxy(obj,handler)//两个参数，被代理的对象，代理的行为

console.log(proxy.name)