<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Contact title="Test" />
    <br />

    <Task title="Completed Tasks" :type="true" />
    <Task title="Incompleted Tasks" :type="false" />
    <Task title="All Tasks" />
    <Coupon @applied="onCouponApplied" />
    <h1 v-show="couponApplied">You used a coupon!</h1>
</template>

<script>
    import { getCurrentInstance } from 'vue'
    import HelloWorld from './components/HelloWorld.vue'
    import Contact from './components/Contact.vue'
    import Task from './components/Task.vue'
    import Coupon from './components/Coupon.vue'
   
    export default {
        name: 'App',
        components: {
            HelloWorld,
            Contact,
            Task,
            Coupon
        },
        setup() {
            const internalInstance = getCurrentInstance();
            internalInstance.appContext.config.globalProperties.emitter = internalInstance.proxy;
            console.log("internalInstance", internalInstance.proxy);
        },
        data: function() {
            return {
                couponApplied: false,
                msg: 'Hello',
                names: ['A', 'B', 'C']
            }
        },
        mounted() {
            //you need to import this all file in order to use Event class
            //import $Event from './event';
            //$Event.on("applied", function (data) {
            //}

            //this.emitter.on("applied", (data) => {
            //    //this.couponApplied = data;
            //    this.onCouponApplied(data);
            //});            
            
        },
        methods: {
            onCouponApplied(couponApplied) {
                console.log("result:" + couponApplied);
                //this.couponApplied = couponApplied;
            }
        },
        created() {
            
        }
    }

</script>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.4;
    }
</style>
