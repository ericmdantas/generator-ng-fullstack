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

<% if (stylePreprocessor === "none") {%>
<style scoped>
<% } %>
<% if (stylePreprocessor === "less") {%>
<style lang="less" scoped>
<% } %>
<% if (stylePreprocessor === "sass") {%>
<style lang="scss" scoped>
<% } %>
    h1 {
        color: red;
    }
</style>
