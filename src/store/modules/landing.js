import { SET_DATA_TABLE, IS_FILTER_LESS, IS_LOADING } from '../mutation-types';
import axios from 'axios';

const state = () => ({
  dataTable: [],
  loading: false,
  isLessThen: false,
});

const mutations = {
  [SET_DATA_TABLE]: (state, data) => {
    let d = [...data]

    d.forEach(x => {
      x.price = x.id * 10;
      x.productName = "Product Name"
      x.sale = "-25%"
    })

    state.dataTable = d
  },
  [IS_FILTER_LESS]: (state, data) => {
    state.isLessThen = data;
  },
  [IS_LOADING]: (state, data) => {
    state.loading = data
  },
};

const actions = {
  turnLoading({ commit }, payload) {
    commit('IS_LOADING', payload);
  },
  async actionTableData({ commit, dispatch }) {
    dispatch('turnLoading', true)
    axios({ url: 'https://jsonplaceholder.typicode.com/photos', method: 'GET' })
      .then((resp) => {
        commit('SET_DATA_TABLE', resp.data);
        dispatch('turnLoading', false)
      })
      .catch((err) => {
        console.log(err);
        dispatch('turnLoading', false)
      });
  },
  actionFilterLess({ commit }, payload) {
    commit('IS_FILTER_LESS', payload);
  }
};

const getters = {
  getDataTable: state => state.dataTable,
  getIsLoading: state => state.loading,
  getIsLessThen: state => state.isLessThen,
};

export default {
  // namespaced: true,
  mutations,
  actions,
  getters,
  state,
};