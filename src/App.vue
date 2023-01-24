<template>
  <Header></Header>

  <router-view />
</template>

<script>
import { App } from '@capacitor/app';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const addAppAddListener = () => {
      App.addListener('backButton', e => {
        if (e.canGoBack) {
          router.back();
        } else {
          App.exitApp();
        }
      });
    };

    onMounted(() => {
      addAppAddListener();
    });
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
