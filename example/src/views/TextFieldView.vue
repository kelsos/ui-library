<script lang="ts" setup>
import {
  type RevealableTextFieldProps,
  RuiRevealableTextField,
  RuiTextField,
  type TextFieldProps,
} from '@rotki/ui-library';
import { objectOmit } from '@vueuse/shared';
import type { Slots } from '@/types';

type TextFieldData = TextFieldProps &
  Slots & {
    value?: string;
  };

type RevealableTextFieldData = RevealableTextFieldProps &
  Slots & {
    value?: string;
  };

const textFields = ref<TextFieldData[]>([
  { value: '', color: 'primary', textColor: 'primary' },
  { value: '', color: 'secondary', textColor: 'secondary' },
  { value: '', color: 'error', textColor: 'error' },
  { value: '', color: 'warning', textColor: 'warning' },
  { value: '', color: 'info', textColor: 'info' },
  { value: '', color: 'success', textColor: 'success' },

  { value: '', color: 'primary', dense: true },
  { value: '', color: 'secondary', dense: true },
  { value: '', color: 'error', dense: true },
  { value: '', color: 'warning', dense: true },
  { value: '', color: 'info', dense: true },
  { value: '', color: 'success', dense: true },

  { value: '', color: 'primary', variant: 'filled' },
  { value: '', color: 'secondary', variant: 'filled' },
  { value: '', color: 'error', variant: 'filled' },
  { value: '', color: 'warning', variant: 'filled' },
  { value: '', color: 'info', variant: 'filled' },
  { value: '', color: 'success', variant: 'filled' },

  { value: '', color: 'primary', variant: 'filled', dense: true },
  { value: '', color: 'secondary', variant: 'filled', dense: true },
  { value: '', color: 'error', variant: 'filled', dense: true },
  { value: '', color: 'warning', variant: 'filled', dense: true },
  { value: '', color: 'info', variant: 'filled', dense: true },
  { value: '', color: 'success', variant: 'filled', dense: true },

  { value: '', color: 'primary', variant: 'outlined' },
  { value: '', color: 'secondary', variant: 'outlined' },
  { value: '', color: 'error', variant: 'outlined' },
  { value: '', color: 'warning', variant: 'outlined' },
  { value: '', color: 'info', variant: 'outlined' },
  { value: '', color: 'success', variant: 'outlined' },

  { value: '', color: 'primary', variant: 'outlined', dense: true },
  { value: '', color: 'secondary', variant: 'outlined', dense: true },
  { value: '', color: 'error', variant: 'outlined', dense: true },
  { value: '', color: 'warning', variant: 'outlined', dense: true },
  { value: '', color: 'info', variant: 'outlined', dense: true },
  { value: '', color: 'success', variant: 'outlined', dense: true },

  { value: '', color: 'primary', variant: 'outlined', disabled: true },
  { value: '', color: 'secondary', variant: 'outlined', disabled: true },
  { value: '', color: 'error', variant: 'outlined', disabled: true },
  { value: '', color: 'warning', variant: 'outlined', disabled: true },
  { value: '', color: 'info', variant: 'outlined', disabled: true },
  { value: '', color: 'success', variant: 'outlined', disabled: true },

  { value: '', color: 'primary', variant: 'outlined', hint: 'Text field hint' },
  {
    value: '',
    color: 'secondary',
    variant: 'outlined',
    hint: 'Text field hint',
  },
  { value: '', color: 'error', variant: 'outlined', hint: 'Text field hint' },
  { value: '', color: 'warning', variant: 'outlined', hint: 'Text field hint' },
  { value: '', color: 'info', variant: 'outlined', hint: 'Text field hint' },
  { value: '', color: 'success', variant: 'outlined', hint: 'Text field hint' },

  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    errorMessages: ['Text field error message'],
  },
  {
    value: '',
    color: 'secondary',
    variant: 'outlined',
    errorMessages: 'Text field error message',
  },
  {
    value: '',
    color: 'error',
    variant: 'outlined',
    errorMessages: ['Text field error message'],
  },
  {
    value: '',
    color: 'warning',
    variant: 'outlined',
    successMessages: ['Text field success message'],
  },
  {
    value: '',
    color: 'info',
    variant: 'outlined',
    successMessages: 'Text field success message',
  },
  {
    value: '',
    color: 'success',
    variant: 'outlined',
    successMessages: ['Text field success message'],
  },

  {
    value: '',
    color: 'primary',
    appendIcon: 'arrow-right-line',
  },
  {
    value: '',
    color: 'primary',
    variant: 'filled',
    appendIcon: 'arrow-right-line',
  },
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    appendIcon: 'arrow-right-line',
    textColor: 'primary',
  },

  {
    value: '',
    color: 'primary',
    prependIcon: 'arrow-right-line',
  },
  {
    value: '',
    color: 'primary',
    variant: 'filled',
    prependIcon: 'arrow-right-line',
  },
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    prependIcon: 'arrow-right-line',
    textColor: 'primary',
  },

  {
    value: '',
    color: 'primary',
    prepend: 'Prepend',
  },
  {
    value: '',
    color: 'primary',
    variant: 'filled',
    prepend: 'Prepend',
    textColor: 'primary',
  },
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    prepend: 'Prepend',
  },
  {
    value: '',
    color: 'primary',
    append: 'Append',
  },
  {
    value: '',
    color: 'primary',
    variant: 'filled',
    append: 'Append',
  },
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    append: 'Append',
    textColor: 'primary',
  },
  {
    value: '',
    color: 'primary',
    append: 'Append',
    clearable: true,
  },
  {
    value: '',
    color: 'primary',
    variant: 'filled',
    append: 'Append',
    clearable: true,
  },
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    append: 'Append',
    clearable: true,
    textColor: 'primary',
  },
]);

const revealableTextFields = ref<RevealableTextFieldData[]>([
  {
    value: '',
    color: 'primary',
    variant: 'outlined',
    label: 'Password',
    textColor: 'primary',
  },
  {
    value: '',
    color: 'secondary',
    variant: 'outlined',
    label: 'Password',
    textColor: 'secondary',
  },
  {
    value: '',
    color: 'error',
    variant: 'outlined',
    label: 'Password',
    textColor: 'error',
  },
  {
    value: '',
    color: 'warning',
    variant: 'outlined',
    label: 'Password',
    textColor: 'warning',
  },
  {
    value: '',
    color: 'info',
    variant: 'outlined',
    label: 'API Key',
    textColor: 'info',
    disabled: true,
  },
  {
    value: 'some secret key',
    color: 'success',
    variant: 'outlined',
    label: 'API Secret',
    textColor: 'success',
    prependIcon: 'arrow-right-line',
    successMessages: ['lorem ipsum success message'],
    errorMessages: ['lorem ipsum error message'],
    hint: 'lorem ipsum hint',
    disabled: false,
  },
  {
    color: 'info',
    variant: 'outlined',
    label: 'API Key',
    textColor: 'info',
    clearable: true,
    value: 'some values',
  },
]);
</script>

<template>
  <div>
    <h2
      class="text-h4 mb-6"
      data-cy="text-fields"
    >
      Text Fields
    </h2>
    <div class="grid gap-4 grid-rows-2 grid-cols-3">
      <RuiTextField
        v-for="(field, i) in textFields"
        :key="i"
        v-model="field.value"
        :label="field.color"
        placeholder="Placeholder"
        v-bind="field"
      >
        <template
          v-if="field.prepend"
          #prepend
        >
          {{ field.prepend }}
        </template>
        <template
          v-if="field.append"
          #append
        >
          {{ field.append }}
        </template>
      </RuiTextField>
    </div>
    <h2
      class="text-h4 mb-6 mt-14"
      data-cy="text-fields"
    >
      Revealable Text Fields
    </h2>
    <div class="grid gap-4 grid-rows-2 grid-cols-3">
      <RuiRevealableTextField
        v-for="(field, i) in revealableTextFields"
        :key="i"
        v-model="field.value"
        placeholder="Placeholder"
        v-bind="objectOmit(field, ['value', 'append', 'prepend'])"
      />
    </div>
  </div>
</template>
