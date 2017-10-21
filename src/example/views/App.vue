<template>
  <article>
    <example-header :title="Example"></example-header>
    <div class="container">
      <p>hello</p>
    </div>
    <example-footer></example-footer>
  </article>
</template>

<script>
import ExampleHeader from 'example/components/Header'
import ExampleFooter from 'example/components/Footer'

export default {
  components: {
    ExampleHeader,
    ExampleFooter,
  }
}
</script>

<style lang="scss" scoped>

@import '~example/styles/variables';

.container {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

  p {
    color: $color-red;
  }
}


</style>
