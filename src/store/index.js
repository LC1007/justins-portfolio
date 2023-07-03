import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://lc1007.github.io/portfolio-json-data/data.json'
export default createStore({
  state: {
    skills: [],
    education: [],
    work: [],
    projects: [],
    testimonials: []
  },
  getters: {
  },
  mutations: {
    setSkills(state, data){
      state.skills = data
    },
    setEdu(state, data){
      state.education = data
    },
    setWork(state, data){
      state.work = data
    },
    setProjects(state, data){
      state.projects = data
    },
    setTestimonials(state, data){
      state.testimonials = data
    }
  },
  actions: {
    async getData({commit}){
      const getSkills = await axios.get(url)
      commit('setSkills', getSkills.data.skills)
    },
    async getEdu({commit}){
      const getEduData = await axios.get(url)
      commit('setEdu', getEduData.data.education)
    },
    async getWork({commit}){
      const getWorkData = await axios.get(url)
      commit('setWork', getWorkData.data.work)
    },
    async getProjects({commit}){
      const getProjectData = await axios.get(url)
      commit('setProjects', getProjectData.data.projects)
    },
    async getTestimonials({commit}){
      const getTestimonialData = await axios.get(url)
      commit('setTestimonials', getTestimonialData.data.testimonials)
      console.log(getTestimonialData.data.testimonials);
    }
  },
  modules: {
  }
})
