<script lang="ts" setup>
import ComponentGroup from '@/components/ComponentGroup.vue';
import ComponentView from '@/components/ComponentView.vue';
import { RuiSkeletonLoader, type SkeletonLoaderProps } from '@rotki/ui-library';

type SkeletonData = SkeletonLoaderProps & {
  class?: string;
};

const types = [
  'paragraph',
  'heading',
  'article',
  'button',
  'icon',
  'avatar',
  'thumbnail',
] as const;

const loaders = ref<(SkeletonData)[]>([]);

function generateLoaders(): SkeletonData[] {
  const customBase: SkeletonData = { type: 'custom', class: 'w-20 h-20' };
  const loaders: SkeletonData[] = [{}];
  for (const type of types) {
    loaders.push({ type });
  }
  loaders.push(customBase, { ...customBase, rounded: 'full' });
  return loaders;
}

onMounted(() => {
  set(loaders, generateLoaders());
});
</script>

<template>
  <ComponentView data-cy="skeleton-loader">
    <template #title>
      Skeleton Loader
    </template>

    <ComponentGroup
      :items="loaders"
      class="grid gap-4 grid-cols-2 items-center justify-center"
    >
      <template #item="{ item }">
        <p class="mb-2">
          {{ item.type ?? 'text' }}
        </p>
        <RuiSkeletonLoader v-bind="item" />
      </template>
    </ComponentGroup>
  </ComponentView>
</template>
