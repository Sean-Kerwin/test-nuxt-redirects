<template>
  <div>
    <h1>Product Page with ID: {{ id }}</h1>
    <nuxt-link to="/products">&larr; Back to Products</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData ({ params }) {
    const id = params.id
    return { id }
  }
}
</script>

<style></style>
