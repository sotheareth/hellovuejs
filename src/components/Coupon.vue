<template lang="html">

    <section class="coupon">
        <h1>coupon Component</h1>
        <div>
            <input type="text" id="txtSearch" @blur="toggleMe" />
            <button @click="toggleMe">Toggle Me</button>
        </div>
    </section>

</template>

<script lang="js">

    //import { getCurrentInstance } from 'vue'
    //const Event = require('../../src/event');
    //import Event from '../../src/event';

    export default {
        name: 'coupon',
        props: [],        
        mounted() {
           
        },
        data() {
            return {
                couponApplied: false
            }
        },
        methods: {
            toggleMe() {
                this.couponApplied = !this.couponApplied;
                //console.log(this);
                this.$emit('applied', this.couponApplied);
            }
        },
        computed: {

        }
    }


</script>

