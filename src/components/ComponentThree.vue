<template>
  <div>
    <component-four></component-four>
    <counter-history></counter-history>
  </div>
</template>

<script>
import ComponentFour from './ComponentFour.vue';
import CounterHistory from './CounterHistory.vue'

export default {
  components: {
    ComponentFour,
    CounterHistory
  }
}
</script>
