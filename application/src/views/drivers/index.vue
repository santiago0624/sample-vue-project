<template>
  <div class="component">
    <div class="container--fluid">
      <h1>Drivers</h1>
      <div v-if="result">
        {{ result }}
      </div>

      <div v-if="!result" class="loader-container">
        <div class="loader"></div>
        <div class="loader-text">Loading Drivers ...</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import DriversService from "@/services/drivers";

export default {
  name: "views-orders-index",
  watch: {},
  props: {},
  data() {
    return {
      result: undefined,
    };
  },
  methods: {
    getDrivers() {
      return DriversService.getDrivers().then((result) => {
        this.result = result;
      });
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.getDrivers();
  },
  beforeDestroy() {},
  mixins: [],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.loader-container {
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #32b2db;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

.loader-text {
  margin-top: 20px;
  font-size: 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
