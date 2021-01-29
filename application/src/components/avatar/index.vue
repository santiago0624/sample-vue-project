<template>
  <div class="avatar" @class="avatarStyle">{{ avatarInitials }}</div>
</template>

<script type="text/babel">
export default {
  name: "app-avatar",
  watch: {},
  props: {
      driver: {
          type: Object,
          required: true
      }
  },
  data() {
    return {
      avatarStyle: {},
      avatarInitials: undefined,
    };
  },
  methods: {
    getInitials() {
      let string = this.driver.first_name + ' ' + this.driver.last_name;  
      let namesBySpace = string.split(" ");
      let nameByCaps = string.match(/([A-Z])/g);
      let nameByNums = string.match(/([\d])/g);
      let nameByCapsAndNums = string.match(/([A-Z\d])/g);

      if (namesBySpace.length > 1) {
        let initialsBySpace = namesBySpace[0].substring(0, 1).toUpperCase();
        initialsBySpace += namesBySpace[namesBySpace.length - 1]
          .substring(0, 1)
          .toUpperCase();
        return initialsBySpace;
      } else if (!nameByCaps && nameByNums && isNaN(string[0])) {
        let initialsByNumNoCaps = string[0].toUpperCase() + nameByNums[0];
        return initialsByNumNoCaps;
      } else if (!nameByCaps && nameByNums && !isNaN(string[0])) {
        let initialsByNumFirstCharNoCaps = nameByNums[0];
        let splitString = string.split("");
        for (var i = 1; i < splitString.length; i++) {
          if (isNaN(splitString[i])) {
            initialsByNumFirstCharNoCaps += splitString[i].toUpperCase();
            break;
          }
        }
        return initialsByNumFirstCharNoCaps;
      } else if (nameByCaps && nameByNums) {
        let initialsByCapsAndNums = nameByCapsAndNums[0];
        if (nameByCapsAndNums.length > 1) {
          initialsByCapsAndNums += nameByCapsAndNums[1];
        }
        return initialsByCapsAndNums;
      } else if (nameByCaps && !nameByNums) {
        let initialsByCaps = nameByCaps[0];
        if (nameByCaps.length > 1) {
          initialsByCaps += nameByCaps[1];
        }
        return initialsByCaps;
      } else if (string) {
        return string[0].toUpperCase();
      }
    },
  },
  computed: {},
  created() {},
  mounted() {
    this.avatarInitials = this.getInitials();
  },
  beforeDestroy() {},
  mixins: [],
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.avatar {
  color: white;
  background: #2adf0b;
  border-radius: 50%;
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 36px / 2;
}
</style>