<template>
  <article>
    now:
    {{ now }}
  </article>
</template>

<script>
  export default {
    name: 'weather-basic',

    props: ['now']
  }
</script>