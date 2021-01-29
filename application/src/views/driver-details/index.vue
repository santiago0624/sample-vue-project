<template>
  <div class="component">
    <div class="container--fluid">
      <div class="driver-details-header" id="driverDetailsHeader">
        <div class="bi bi-arrow-left-circle navigate-back-icon" @click="navigateBack()" id="navigateBackIcon"></div>
        <h1>Driver {{ this.$route.params.driverId }} Details</h1>
      </div>

      <div v-if="drivers">
        <div class="driver-info" id="driverInfo">
          <div class="col-5 driver-info-row" id="driverInfoRow" v-for="attribute in driverInfo" :key="attribute.id">
            <div class="col-3 driver-info-label">{{ attribute.label }}</div>
            <div class="col-9 driver-info-value">{{ attribute.value }}</div>
          </div>
        </div>
      </div>
      
      <div v-if="!drivers" class="loader-container" id="loaderContainer">
        <div class="loader"></div>
        <div class="loader-text">Loading Driver Details ...</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import DriversService from "@/services/drivers";

export default {
  name: "views-driver-details",
  watch: {},
  props: {},
  data() {
    return {
      drivers: undefined,
      driverInfo: [],
    };
  },
  methods: {
    getDrivers() {
      return DriversService.getDrivers().then((result) => {
        this.drivers = result;
        this.setDriverInfo();
      });
    },
    setDriverInfo() {
      const driverInfo = this.drivers.filter(
        (driver) => driver.id === Number.parseInt(this.$route.params.driverId)
      );

      this.driverInfo = [
        { label: "First Name", value: driverInfo[0].first_name },
        { label: "Last Name", value: driverInfo[0].last_name },
        { label: "id", value: driverInfo[0].id },
      ];
    },
    navigateBack() {
      this.$router.push({ name: "drivers-index" });
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

.driver-info {
  margin: 50px;
}

.driver-info-row {
  display: flex;
  padding: 0;
}

.driver-info-label {
  border: 1px solid #32b2db;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  background-color: #32b2db;
  color: white;
  font-size: 18px;
}

.driver-info-value {
  border: 1px solid #32b2db;
  border-bottom: none;
  border-left: none;
  font-size: 16px;
}

.driver-info-row:last-child {
  border-bottom: 1px solid #32b2db;
}

.driver-details-header {
  display: flex;
}

.navigate-back-icon {
  font-size: 33px;
  color: black;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 10px;
}

.navigate-back-icon:hover {
  cursor: pointer;
  color: #32b2db;
}
</style>