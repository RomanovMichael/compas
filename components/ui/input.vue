<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  isError: {
    type: Function,
    required: false
  }
})

const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div :class="[
    'ui-input', {'ui-input--error' : isError}]">
    <label :for="name" class="ui-input__label">{{ label }}</label>
    <input 
      :type="type"
      :name="name"
      :id="name"
      :value="value"
      @input="updateValue"
      class="ui-input__text">
  </div>
</template>

<style lang="scss">
.ui-input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &.ui-input--error {
    label {
      color: red !important;
    }

    input {
      border-color: red !important;
    }
  }

  label {
    font-size: 12px;
    line-height: 120%;
    color: var(--dark);
  }

  input {
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -webkit-outline: none;
    padding: unset;
    border: 1px solid var(--gray-strong);
    border-radius: 5px;
    height: 40px;
    font-size: 18px;
    padding-left: 10px;
    transition: .25s ease;

    &:focus {
      border-color: var(--blue);
      transition: .25s ease;
    }
  }
}
</style>