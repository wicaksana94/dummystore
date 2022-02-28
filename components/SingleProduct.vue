<template>
  <div>
    <h1>{{id}}</h1>
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>
