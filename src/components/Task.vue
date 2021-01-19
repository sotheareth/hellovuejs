<template lang="html">

    <section class="task">
        <h1>{{title}} {{type}}</h1>
        <ul>
            <li v-for="task in completedTasks" v-bind:key="task">
                {{task.description}}
            </li>
        </ul>
    </section>

</template>

<script lang="js">

    export default {
        name: 'task',
        props: {
            title: String,
            type: {
                type: Boolean,
                require: false,
                default: undefined
            }
        },
        mounted() {

        },
        data() {
            return {
                tasks: [
                    { description: 'Go to the store', completed: true },
                    { description: 'Finish screencast', completed: false },
                    { description: 'Make donation', completed: false },
                    { description: 'Clear inbox', completed: false },
                    { description: 'Make dinner', completed: false },
                    { description: 'Clean room', completed: true },
                ]
            }
        },
        methods: {

        },
        computed: {
            completedTasks() {
                var type = this.type;
                if (type != undefined) {
                    console.log(1);
                    return this.tasks.filter(function (task) {
                        return task.completed == type;
                    });
                }
                else {
                    console.log(2);
                    return this.tasks;
                }
            }
        }
    }


</script>
