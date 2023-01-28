<template>
  <div class="center">
    <button class="btn" @click="move('/record')">녹음하러 가기</button>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { notifs, requestPermission } from '@/utils/localNoti';
export default {
  name: 'HomeView',
  setup() {
    const router = useRouter();

    const move = path => {
      router.push(path);
    };
    onMounted(() => {
      notifs();
    });

    return {
      move,
    };
  },
};
</script>

<style lang="scss" scoped></style>
