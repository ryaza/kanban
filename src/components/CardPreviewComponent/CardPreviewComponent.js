import { mapMutations } from 'vuex';

// @vue/component

export default {
  name: 'card-preview-component',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      setEditMode: 'setEditMode',
    }),
  },
};
