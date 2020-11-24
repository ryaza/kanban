import { mapMutations, mapState, mapGetters } from 'vuex';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';

// @vue/component

export default {
  name: 'card-edit-component',
  components: {
    [ButtonComponent.name]: ButtonComponent,
  },
  props: {
    cardId: {
      type: Number,
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
        isReadMode: false,
        id: null,
      },
    };
  },
  computed: {
    card() {
      return this.cards.find((elem) => elem.id === this.cardId);
    },
    ...mapGetters({
      cards: 'getCards',
    }),
    ...mapState({
      lastCardId: (state) => state.cards[state.cards.length - 1].id,
    }),
  },
  watch: {
    'card.isReadMode': {
      handler(value) {
        this.cardData.isReadMode = value;
      },
      immediate: true,
    },
  },
  methods: {
    save() {
      if (this.cardId !== null) {
        this.cardData.id = this.cardId;
        this.updateDataCard({ id: this.cardId, data: this.cardData });

        this.updateDataField({ id: this.cardId, fieldType: 'isEditMode', value: false });
      } else {
        this.cardData.id = this.lastCardId + 1;
        this.addNewCard(this.cardData);

        this.$emit('closeModel');
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
      updateDataCard: 'updateDataCard',
      updateDataField: 'updateDataField',
    }),
  },
  created() {
    if (this.cardId !== null) {
      this.cardData = { ...this.card };
    }
  },
};
