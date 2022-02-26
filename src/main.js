import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios';

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0]
        }
    },
    mutations: {
        addToCounter(state, payload) {
            state.counter += payload
            state.history.push(state.counter)
        },

        substractToCounter(state, payload) {
            state.counter -= payload
            state.history.push(state.counter)
        }
    },
    actions: {
        // actions can be used for asynchronous http requests
        async addRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");

            console.log(data);

            context.commit("addToCounter", data.data);
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app')
