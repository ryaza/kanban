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
      },
      // {
      //   title: 'Test 1',
      //   description: 'Test 1',
      //   tasks: [
      //     {
      //       title: 'Test Task',
      //       isCompleted: true,
      //       isEditMode: true,
      //     },
      //     {
      //       title: 'Test Task2',
      //       isCompleted: false,
      //       isEditMode: true,
      //     },
      //   ],
      //   columnType: 'to-do',
      //   id: 1,
      //   isEditMode: false,
      // },
      // {
      //   title: 'Test 1',
      //   description: 'Test 1',
      //   tasks: [
      //     {
      //       title: 'Test Task',
      //       isCompleted: true,
      //       isEditMode: true,
      //     },
      //     {
      //       title: 'Test Task2',
      //       isCompleted: false,
      //       isEditMode: true,
      //     },
      //   ],
      //   columnType: 'in-progress',
      //   id: 2,
      //   isEditMode: false,
      // },
    ],
  },
  getters: {
    getCards: (state) => state.cards,
    getColumns: (state) => state.columns,
  },
  mutations: {
    changeCardInfo(state, { id, fieldType, value }) {
      const card = state.cards.find(((elem) => elem.id === id));

      card[fieldType] = value;
    },
    setEditMode(state, { id, value }) {
      const card = state.cards.find(((elem) => elem.id === id));

      card.isEditMode = value;
    },
    addNewCard(state, card) {
      state.cards.push(card);
    },
    updatedCard(state, { data }) {
      state.cards[data.id] = data;

      console.log('test', state.cards[data.id]);
    },
    updateTitle(state, data) {
      console.log(data);
      state.cards[data.id].title = data;
    },
  },
});
