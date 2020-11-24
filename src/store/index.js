import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    columns: [
      {
        title: 'To Do',
        type: 'to-do',
      },
      {
        title: 'In Progress',
        type: 'in-progress',
      },
      {
        title: 'Done',
        type: 'done',
      },
    ],
    cards: [
      {
        title: 'Test',
        description: 'Test',
        tasks: [
          {
            title: 'Test Task',
            isCompleted: true,
            isEditMode: true,
          },
          {
            title: 'Test Task2',
            isCompleted: false,
            isEditMode: true,
          },
        ],
        columnType: 'to-do',
        id: 0,
        isEditMode: false,
        isReadMode: false,
      },
      {
        title: 'Test 1',
        description: 'Test 1',
        tasks: [
          {
            title: 'Test Task',
            isCompleted: true,
            isEditMode: true,
          },
          {
            title: 'Test Task2',
            isCompleted: false,
            isEditMode: true,
          },
        ],
        columnType: 'to-do',
        id: 1,
        isEditMode: false,
        isReadMode: false,
      },
      {
        title: 'Test 1',
        description: 'Test 1',
        tasks: [
          {
            title: 'Test Task',
            isCompleted: true,
            isEditMode: true,
          },
          {
            title: 'Test Task2',
            isCompleted: false,
            isEditMode: true,
          },
        ],
        columnType: 'in-progress',
        id: 2,
        isEditMode: false,
        isReadMode: false,
      },
    ],
  },
  getters: {
    getCards: (state) => state.cards,
    getColumns: (state) => state.columns,
  },
  mutations: {
    updateDataField(state, { id, fieldType, value }) {
      Vue.set(state.cards[id], fieldType, value);
    },
    updateDataCard(state, { id, data }) {
      Vue.set(state.cards, id, data);
    },
    addNewCard(state, data) {
      state.cards.push(data);
    },
  },
});
