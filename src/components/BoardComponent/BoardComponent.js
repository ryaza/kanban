// @vue/component
import { mapGetters, mapMutations } from 'vuex';
import ColumnComponent from '../ColumnComponent/ColumnComponent.vue';
import ButtonComponent from '../ButtonComponent/ButtonComponent.vue';
import CardPreviewComponent from '../CardPreviewComponent/CardPreviewComponent.vue';
import ModalComponent from '../ModalComponent/ModalComponent.vue';
import CardEditComponent from '../CardEditComponent/CardEditComponent.vue';

export default {
  name: 'board-component',
  components: {
    [ColumnComponent.name]: ColumnComponent,
    [ButtonComponent.name]: ButtonComponent,
    [CardPreviewComponent.name]: CardPreviewComponent,
    [ModalComponent.name]: ModalComponent,
    [CardEditComponent.name]: CardEditComponent,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      cards: 'getCards',
      columns: 'getColumns',
    }),
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeCardModal(id) {
      this.updateDataField({ id, fieldType: 'isEditMode', value: false });
      this.updateDataField({ id, fieldType: 'isReadMode', value: false });
    },
    ...mapMutations({
      updateDataField: 'updateDataField',
    }),
  },
};
