<template>
  <div class="component">
    <div class="container--fluid">
      <h1 class="ml-5">Drivers</h1>

      <div v-if="result" id="driverListView">
        <div class="drivers-list-container" id="driverListConatiner">
          <input class="form-control driver-search" type="search" v-model="searchQuery" placeholder="Search Driver" id="driverSearch"/>
          <div v-for="driver in resultQuery()" :key="driver.id" class="drivers-list-row"
               @click="navigateToDriverDetails(driver.id)" id="driver.id">
            <i class="glyphicon glyphicon-user"></i>
            <div class="driver-name" id="driverName">{{ driver.first_name }}</div>
            <app-avatar :driver="driver"></app-avatar>
          </div>
        </div>
      </div>

      <div v-if="!result" class="loader-container" id="loaderComponent">
        <div class="loader" id="loaderIcon"></div>
        <div class="loader-text" id="loaderText">Loading Drivers ...</div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import DriversService from "@/services/drivers";
import Avatar from "@/components/avatar"

export default {
  name: "views-orders-index",
  watch: {},
  props: {},
  data() {
    return {
      result: undefined,
      searchQuery: undefined,
    };
  },
  methods: {
    getDrivers() {
      return DriversService.getDrivers().then((result) => {
        this.result = result;
      });
    },
    navigateToDriverDetails(id) {
      this.$router.push({ name: "driver-details", params: { driverId: id } });
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.result.filter((driver) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((value) => driver.first_name.toLowerCase().includes(value));
        });
      } else {
        return this.result;
      }
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.getDrivers();
  },
  beforeDestroy() {},
  mixins: [],
  components: {
    'app-avatar': Avatar
  },
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

.driver-search {
  margin: 30px;
  width: 320px;
  height: 40px;
  border-radius: 15px;
}

.drivers-list-container {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.drivers-list-row {
  display: flex;
  align-items: center;
  border: 1px solid #32b2db;
  border-bottom: none;
  padding: 15px 20px;
  width: 320px;
}

.drivers-list-row:hover {
  cursor: pointer;
  background-color: #69c8e7;
  color: white;
}

.drivers-list-row:first-child {
  border-radius: 10px 10px 0 0;
}

.drivers-list-row:last-child {
  border-bottom: 1px solid #32b2db;
  border-radius: 0 0 10px 10px;
}

.driver-name {
  margin-left: 15px;
  font-size: 15px;
  width: 215px;
}
</style>
