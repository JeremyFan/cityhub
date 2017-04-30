<template>
  <article>
    aqi:
    {{ aqi }}
  </article>
</template>

<script>
  export default {
    name: 'weather-aqi',

    props: ['aqi']
  }
</script>