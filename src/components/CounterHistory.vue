<template>
    <div class="container">
        <h3>History</h3>
        <div class="flex">
            <p
                v-for="(number, index) in history"
                :key="index"
            >
                {{ number }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(["history"])
    }
}
</script>

<style scoped>
    .container {
        margin-top: 7rem;
    }
    .flex {
        display: flex;
        text-align: center;
        width: 25rem;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }

    .flex p {
        margin: 1rem;
    }
</style>