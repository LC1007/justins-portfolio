import { createStore } from 'vuex'
import axios from 'axios'

const url = 'https://lc1007.github.io/portfolio-json-data/data.json'
export default createStore({
  state: {
    skills: [],
    education: [],
    work: [],
    projects: [],
    testimonials: [],
    qualification: [],
    aboutMe: []
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
    },
    setQualification(state, data){
      state.qualification = data
    },
    setAbout(state, data){
      state.aboutMe = data
    }
  },
  actions: {
    async getData({commit}){
      try {        
        const getSkills = await axios.get(url)
        commit('setSkills', getSkills.data.skills)
      } catch (error) {
        alert(error);
      }
    },
    async getEdu({commit}){
      try {        
        const getEduData = await axios.get(url)
        commit('setEdu', getEduData.data.education)
      } catch (error) {
        alert(error);
      }
    },
    async getWork({commit}){
      try {
        const getWorkData = await axios.get(url)
        commit('setWork', getWorkData.data.work)
      } catch (error) {
        alert(error);
      }
    },
    async getProjects({commit}){
      try {
        const getProjectData = await axios.get(url)
        commit('setProjects', getProjectData.data.projects)
      } catch (error) {
        alert(error);
      }
    },
    async getTestimonials({commit}){
      try {
        const getTestimonialData = await axios.get(url)
        commit('setTestimonials', getTestimonialData.data.testimonials)
      } catch (error) {
        alert(error);
      }
    },
    async getQualifications({commit}){
      try {
        const getQualificationData = await axios.get(url)
        commit('setQualification', getQualificationData.data.qualification)
      } catch (error) {
        alert(error);
      }
    },
    async getAbout({commit}){
      try {        
        const getAboutData = await axios.get(url)
        commit('setAbout', getAboutData.data.aboutMe)
      } catch (error) {
        alert(error);
      }
    }
  },
  modules: {
  }
})
