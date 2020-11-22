import { mapMutations, mapState, mapGetters } from 'vuex';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';

// @vue/component

export default {
  name: 'card-edit-component',
  components: {
    [ButtonComponent.name]: ButtonComponent,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    card: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      cardData: {
        title: '',
        description: '',
        tasks: [],
        columnType: 'to-do',
        isEditMode: false,
        id: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      cards: 'getCards',
    }),
    ...mapState({
      lastCardId: (state) => state.cards[state.cards.length - 1].id,
    }),
  },
  methods: {
    save() {
      if (this.cardData.title !== '') {
        if (this.id !== null) {
          this.cardData.id = this.id;
          this.updatedCard({ data: this.cardData });
        } else {
          this.cardData.id = this.lastCardId + 1;
          this.addNewCard(this.cardData);
        }
      }
    },
    addTask() {
      this.cardData.tasks.push({
        title: '',
        isCompleted: false,
        isEditMode: true,
      });
    },
    setEditCheckBoxMode(key, value) {
      this.cardData.tasks[key].isEditMode = value;
    },
    ...mapMutations({
      addNewCard: 'addNewCard',
      updatedCard: 'updatedCard',
    }),
  },
  created() {
    if (this.card !== null) {
      this.cardData = this.card;
    }
  },
};
