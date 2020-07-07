<template>
    <div class="component">
        <h1>Hello World Layout</h1>
        <div>
            <button v-on:click="setRandom">Set Random number in state</button>
        </div>
        <router-link v-bind:to="{name:'hello-world-index'}">Hello World</router-link> -
        <router-link v-bind:to="{name:'about-index'}">About</router-link>
        <router-view></router-view>
    </div>
</template>

<script type="text/babel">
    import * as HelloWorldMutationTypes from '@/store/modules/hello-world/mutation-types'

    export default {
        name: 'layouts-hello_world-index',
        watch: {},
        props: {},
        data() {
            return {}
        },
        methods: {
            setRandom() {
                this.$store.commit(`HelloWorld/${HelloWorldMutationTypes.RANDOM}`, Math.random());
            }
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        beforeDestroy() {
        },
        mixins: [],
        components: {}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
