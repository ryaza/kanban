import { mapMutations } from 'vuex';

// @vue/component

export default {
  name: 'card-preview-component',
  props: {
    cardId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isEditMode: false,
      textModel: '',
    };
  },
  computed: {
    title() {
      return 'Test';
    },
  },
  methods: {
    setLocalEditMode(value) {
      this.isEditMode = value;
    },
    closeLocalEditMode() {
      if (this.textModel !== '') {
        this.setLocalEditMode(false);
        this.updateDataField({ id: this.cardId, fieldType: 'title', value: this.textModel });
      }
    },
    openEditModal() {
      this.updateDataField({ id: this.cardId, fieldType: 'isEditMode', value: true });
    },
    openReadModal() {
      this.updateDataField({ id: this.cardId, fieldType: 'isReadMode', value: true });
    },
    ...mapMutations({
      updateDataField: 'updateDataField',
    }),
  },
};
