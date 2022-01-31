import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musics:[],
    selected: null,
    nextId: null,
  },
  getters: {
    musics: state => state.musics,
    selected: state => state.selected,
    nextId: state => state.nextId
  },
  mutations: {
    setMusics(state, musics) {
      state.musics = musics
    },
    setSelected(state, selected) {
      state.selected = selected
    },
    setNextId(state, nextId) {
      state.nextId = nextId
    }
  },
  actions: {
    async addMusic(state, music) {
      await axios.post('http://localhost:3010/music/add-music', music)
    },
    async getMusic(state) {
      const musics = await axios.get('http://localhost:3010/music/get-music')
      musics.data[0].map(v => v.loops_music = JSON.parse(v.loops_music))
      musics.data[0].map(v => v.accords_music = JSON.parse(v.accords_music))
      state.commit('setMusics', musics.data[0])
      state.commit('setNextId', musics.data[1][0]["MAX(id_music)"] +1)
    },
    getSelected(state, selected) {
      state.commit('setSelected', selected)
    },
    async udMusic(state, music) {
      await axios.post('http://localhost:3010/music/ud-music', music)
    },
  },
  modules: {
  }
})
