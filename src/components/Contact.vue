<template>
    <div class="hello">
        <h1>{{title}}</h1>
        <ul>
            <li v-for="name in names" v-bind:key="name">{{name}}</li>
        </ul>
        <input type="text" id="item" v-model="item"/>
        <button id="btnAdd" @click="addItem">Add Item</button>
        <button v-bind:class="{'is-loading': isLoading}" @click="toggleClass">Toggle Me</button>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        props: {
            title: String
        },
        data: function () {
            return {
                item: '',
                isLoading: false,
                msg: 'Hello',
                names: ['A', 'B', 'C']
            }
        },
        mounted() {
           // traditional way to bind event to element
           // document.querySelector("#btnAdd").addEventListener("click", () => {
           //     let item = document.querySelector("#item").value;
           //    this.names.push(item);
           //});
        },
        methods: {
            addItem() {
                this.names.push(this.item);
            },
            toggleClass() {
                this.isLoading = !this.isLoading;
            }
        }
    }

    


</script>