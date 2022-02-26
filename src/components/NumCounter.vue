<template>
    <div>
        <h1>Vuex Counter</h1>
        <h1 class="counter">{{ $store.state.counter }}</h1>
        <button @click="substractToCounter(parseFloat(value))">-</button>
        <input type="number"
            v-model="value"
        />
        <button @click="addToCounter(parseFloat(value))">+</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            value: 0
        }
    },
    computed: {
        ...mapState(["counter"])
    },
    methods: {
        ...mapMutations(["addToCounter", "substractToCounter"])
    }
}
</script>

<style>
    .counter {
        font-size: 5rem;
    }

    button {
         border-radius: 100%;
         border: none;
         width: 2rem;
         height: 2rem;
         font-weight: 700;
         cursor: pointer;
    }

    input {
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }
</style>
