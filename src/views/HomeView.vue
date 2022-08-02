<template>
  <div class="home">
    <!-- <p v-color="'pink'">我是王子豪，慢慢努力，慢慢接受，慢慢来是诚意</p> -->
    <p v-permission="'user:list:delete'">
      我是王子豪，慢慢努力，慢慢接受，慢慢来是诚意
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  created() {
    this.$store.commit("setList");
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
