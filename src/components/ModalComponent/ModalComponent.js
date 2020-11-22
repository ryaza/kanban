// @vue/component

export default {
  name: 'modal-component',
  methods: {
    close() {
      this.$emit('closeModal');
      console.log('closeModal');
    },
  },
};
