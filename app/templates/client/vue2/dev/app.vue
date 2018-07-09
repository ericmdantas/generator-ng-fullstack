<template>
    <div>
        <TodoCmp />
    </div>
</template>

<script>
    import TodoCmp from './todo/components/todo-cmp'

    export default {
        name: 'app',
        components: {
            TodoCmp,
        }
    }
</script>
