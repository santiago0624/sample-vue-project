<template>
    <div class="component">
        <div class="container--fluid">
            <h1>Drivers</h1>
            {{ result }}
        </div>
    </div>
</template>

<script type="text/babel">
    import DriversService from '@/services/drivers'

    export default {
        name: 'views-orders-index',
        watch: {},
        props: {},
        data() {
            return {
                result: undefined
            }
        },
        methods: {
            getDrivers() {
                return DriversService.getDrivers()
                    .then((result) => {
                        this.result = result;
                    })
            },
        },
        computed: {

        },
        created() {
        },
        mounted() {
            this.getDrivers();
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
