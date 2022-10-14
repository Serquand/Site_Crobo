<template>
    <div class="app">
        <HeaderBar />
        <main>
            <router-view></router-view>
        </main>    
    </div>
</template>

<script>
import HeaderBar from './components/HeaderBar';
export default {
    components: {
        HeaderBar,
    }
}
</script>

<style>
@import url('https://unpkg.com/reset-css@5.0.1/reset.css');

body {
    background-color: rgb(4, 4, 28);
}

* {
    padding: 0;
    margin: 0;
    border: 1px solid #000;
}
</style>
