<template>
    <div class="component">
        <h2>Hello World Component</h2>
        <span>{{ message }}</span>

        <template v-if="isRetrievingSample">
            Retrieving sample
        </template>
        <template v-else-if="sampleString">
            <h5>{{ sampleString }}</h5>
        </template>
        <template v-else="">
            No Sample data
        </template>
    </div>
</template>

<script type="text/babel">
    import HelloWorldService from '@/services/helloWorld'

    export default {
        name: 'components-hello-world-index',
        watch: {},
        props: {
            message: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                isRetrievingSample: false,
                sampleJson: null
            }
        },
        methods: {
            getAndFormatSample() {
                this.isRetrievingSample = true;

                HelloWorldService.getSampleJsonByID(1)
                    .then((sampleJson) => {
                        this.sampleJson = sampleJson;
                    })
                    .finally(() => {
                        this.isRetrievingSample = false;
                    });
            }
        },
        computed: {
            sampleString() {
                if (!this.sampleJson) {
                    return;
                }

                return `Title: ${this.sampleJson.title}, ID: ${this.sampleJson.id}`;
            }
        },
        created() {
        },
        mounted() {
            this.getAndFormatSample();
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
