<script setup lang="ts">
import RuiFormTextDetail from '@/components/helpers/RuiFormTextDetail.vue';
import { type PopperOptions, usePopper } from '@/composables/popper';

export interface MenuProps {
  modelValue?: boolean;
  openOnHover?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  openDelay?: number;
  closeDelay?: number;
  popper?: PopperOptions;
  wrapperClass?: string | object | string[];
  menuClass?: string | object | string[];
  closeOnContentClick?: boolean;
  persistOnActivatorClick?: boolean;
  hint?: string;
  errorMessages?: string | string[];
  successMessages?: string | string[];
  showDetails?: boolean;
  dense?: boolean;
  persistent?: boolean;
}

defineOptions({
  name: 'RuiMenu',
});

const props = withDefaults(defineProps<MenuProps>(), {
  modelValue: false,
  openOnHover: false,
  disabled: false,
  fullWidth: false,
  openDelay: 0,
  closeDelay: 0,
  popper: () => ({}),
  wrapperClass: '',
  menuClass: '',
  closeOnContentClick: false,
  persistOnActivatorClick: false,
  hint: undefined,
  errorMessages: () => [],
  successMessages: () => [],
  persistent: false,
});

const emit = defineEmits<{
  (e: 'update:model-value', value: boolean): void;
}>();

const {
  modelValue,
  closeDelay,
  openDelay,
  popper,
  disabled,
  persistOnActivatorClick,
  closeOnContentClick,
  openOnHover,
  errorMessages,
  successMessages,
  persistent,
} = toRefs(props);

const {
  reference: activator,
  popper: menu,
  open,
  popperEnter,
  leavePending,
  onLeavePending,
  onOpen,
  onClose,
  onPopperLeave,
  updatePopper,
} = usePopper(popper, disabled, openDelay, closeDelay);

const { width } = useElementSize(activator);

const click = ref<boolean>(false);

function onLeave(event?: KeyboardEvent) {
  if (!get(open))
    return;
  onClose();
  set(click, false);
  event?.stopPropagation();
}

function checkClick() {
  if (get(open) && get(click)) {
    if (!get(persistOnActivatorClick))
      onLeave();
  }
  else {
    onOpen();
    set(click, true);
  }
}

watch(modelValue, (value) => {
  if (value) {
    onOpen();
    set(click, true);
  }
  else {
    onLeave();
  }
});

watch(open, (open) => {
  emit('update:model-value', open);
});

onClickOutside(menu, () => {
  if (get(open) && !get(persistent))
    onLeave();
}, { ignore: [activator] });

const menuAttrs = computed(() => {
  if (get(disabled))
    return {};

  const openOnHoverVal = get(openOnHover);
  const clickVal = get(click);
  return {
    onMouseover: () => {
      if (openOnHoverVal)
        onOpen();
    },
    onMouseleave: () => {
      if (openOnHoverVal && !clickVal)
        onClose();
    },
    onClick: checkClick,
  };
});

const { hasError, hasSuccess } = useFormTextDetail(
  errorMessages,
  successMessages,
);
</script>

<template>
  <div @keydown.esc.stop="onLeave()">
    <div
      ref="activator"
      :class="[$style.wrapper, wrapperClass, { 'w-full': fullWidth }]"
      :data-menu-disabled="disabled"
    >
      <slot
        name="activator"
        v-bind="{ attrs: menuAttrs, open, disabled, hasError, hasSuccess }"
      />
    </div>
    <Teleport
      v-if="!disabled"
      to="body"
    >
      <div
        v-if="popperEnter"
        ref="menu"
        :class="[
          $style.menu,
          menuClass,
          $style[`menu__${popper?.strategy ?? 'absolute'}`],
        ]"
        role="menu"
        @click="closeOnContentClick ? onLeave() : undefined"
      >
        <TransitionGroup
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-1"
          @before-enter="updatePopper()"
          @after-leave="leavePending ? onPopperLeave() : undefined"
          @before-leave="onLeavePending()"
        >
          <div
            v-if="open"
            key="menu"
            :class="$style.base"
            role="menu-content"
          >
            <slot v-bind="{ width }" />
          </div>
        </TransitionGroup>
      </div>
    </Teleport>
    <RuiFormTextDetail
      v-if="showDetails"
      class="pt-1"
      :class="[dense ? 'px-2' : 'px-4']"
      :error-messages="errorMessages"
      :success-messages="successMessages"
      :hint="hint"
    />
  </div>
</template>

<style lang="scss" module>
.wrapper {
  @apply relative inline-flex max-w-full;
}

.menu {
  @apply w-max transform transition-opacity delay-0 z-[9999];

  &__fixed {
    @apply fixed;
  }

  &__absolute {
    @apply absolute;
  }

  .base {
    @apply rounded overflow-hidden shadow-8;
    @apply bg-white text-rui-text;
  }
}

:global(.dark) {
  .menu {
    .base {
      @apply bg-[#2E2E2E];
    }
  }
}
</style>
