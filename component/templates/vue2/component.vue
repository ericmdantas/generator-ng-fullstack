<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'yo!'
            }
        },
        mounted() {
            console.log(':D')
        },
        methods: {
            save() {

            },
            update() {

            },
            remove() {

            }
        }
    }
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>
