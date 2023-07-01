import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    skills: []
  },
  getters: {
  },
  mutations: {
    setSkills(state, data){
      state.data = data
    }
  },
  actions: {
    async getData({commit}){
      const data = await axios.get('https://lc1007.github.io/portfolio-json-data/data.json')
      commit('setSkills', data.skills)
      console.log(data.data.skills);
    }
  },
  modules: {
  }
})
