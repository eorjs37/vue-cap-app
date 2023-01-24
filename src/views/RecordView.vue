<template>
  <div class="center">
    <button class="btn" @click="startRecord">녹음</button>
  </div>
</template>

<script>
import { hasPermission, requestPermission } from '@/utils/voiceRecorder';
import { logDeviceInfo } from '@/utils/appInfo';
import { showAlert } from '@/utils/dialog';
import { onMounted, reactive } from '@vue/runtime-core';
export default {
  setup() {
    let device = reactive({});
    const setPermission = async () => {
      try {
        const { value } = await hasPermission();

        if (!value) {
          requestPermission();
        }
        return value;
      } catch (error) {
        console.error('setPermission error : ', error);
        return false;
      }
    };

    const startRecord = async () => {
      const { platform } = device;
      if (platform !== 'web') {
        const { value } = await hasPermission();
        if (!value) {
          showAlert('녹음 권한이 존재하지 않습니다.');
          setPermission();
        }
      } else {
        showAlert('모바일에서만 가능합니다.');
      }
    };

    const getDevice = async () => {
      try {
        device = await logDeviceInfo();
      } catch (error) {
        console.error('getDevice error : ', error);
      }
    };

    onMounted(async () => {
      await getDevice();
      const { platform } = device;
      if (platform !== 'web') {
        setPermission();
      }
    });

    return {
      startRecord,
    };
  },
};
</script>

<style></style>
