<template>
    <div id="todos" class="text-center">
        <section class="todoapp">
            <header class="header">
                <h2>Todos</h2>
                <input 
                    class="form-control"
                    autofocus
                    autocomplete="off"
                    placeholder="¿Que tienes que hacer"
                    @keyup.enter="addTodo"
                >
            </header>

            <section v-show="todos.length">
                <hr />
 
                <div class="col-md-8 col-md-offset-2">
                    <span class="col-md-4" v-for="(val, key) in filters">
                        
                    </span>

                </div>

            </section>

        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

