<template>
   <div class="component">
        <div class="drivers-list-container" id="driverListConatiner">
          <div class="driver-search">
            <input class="form-control driver-search-input" type="search" v-model="searchQuery"
                   placeholder="Search Driver" id="driverSearch"/>
          </div>
          <div v-for="driver in resultQuery()" :key="driver.id" class="drivers-list-row" 
               @click="navigateToDriverDetails(driver.id)" id="driver.id">
            <i class="glyphicon glyphicon-user"></i>
            <div class="driver-name" :style="changer" id="driverName">
              {{ driver.first_name }}
            </div>
            <app-avatar :driver="driver"></app-avatar>
          </div>
          <div class="select-color-section">
             <label for="color">Select Font Color: </label>
             <input id="color" class="color-picker" type="color" v-model="changer.color"/>
          </div>
        </div>
    </div>
</template>

<script type="text/babel">
import Avatar from "@/components/avatar";

export default {
  name: "app-list",
  watch: {},
  props: {
      drivers: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
      searchQuery: undefined,
      changer:{
        color: "#000000"
      }
    };
  },
  methods: {
    navigateToDriverDetails(id) {
      this.$router.push({ name: "driver-details", params: { driverId: id } });
    },
    resultQuery() {
      if (this.searchQuery) {
        return this.drivers.filter((driver) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((value) => driver.first_name.toLowerCase().includes(value));
        });
      } else {
        return this.drivers;
      }
    },
  },
  computed: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  mixins: [],
  components: {
    "app-avatar": Avatar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.driver-search {
  padding: 20px 20px;
  width: 320px;
  border: 1px solid #32b2db;
  border-radius: 10px 10px 0 0;
}

.driver-search-input {
  height: 38px;
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
  padding: 15px 20px;
  width: 320px;
  border-top: none;
}

.drivers-list-row:hover {
  cursor: pointer;
  background-color: #69c8e7;
  color: white;
}

.drivers-list-row:first-child {
  border-radius: 10px 10px 0 0;
  border-top: none;
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

.select-color-section {
  display: flex;
  flex-direction: column;
  width: 320px;
  padding: 15px;
  align-items: center;
}

.color-picker {
  cursor: pointer;
}

</style>