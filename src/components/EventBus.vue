<script>
    window.Event = new class {
        constructor() {
            this.vue = createApp({});
        }

        fire(event, data = null) {
            this.vue.$emit(event, data);
        }

        listen(event, callback) {
            this.vue.$on(event, callback);
        }
    }
</script>