<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: [
    'title',
  ]
}
</script>

<style lang="scss" scoped>
  @import '~example/styles/variables';

  h1 {
    margin: 20px 0 10px;
    // color: brightness($color-blue);
    color: $color-blue;
  }
</style>
