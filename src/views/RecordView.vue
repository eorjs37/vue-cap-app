<template>
  <div class="center">
    <button class="btn" @click="startRecord">녹음</button>
  </div>
  <h1 class="center blue">
    <font-awesome-icon icon="fa-solid fa-play" size="3x"></font-awesome-icon>
  </h1>
  <h1 class="center blue">
    <font-awesome-icon icon="fa-solid fa-stop" size="3x"></font-awesome-icon>
  </h1>
  <div class="center" v-if="audio">
    <button class="btn" @click="audio.play()">음악시작</button>
  </div>
</template>

<script>
import { hasPermission, requestPermission, recordStop, recordStart } from '@/utils/voiceRecorder';
import { logDeviceInfo } from '@/utils/appInfo';
import { showAlert } from '@/utils/dialog';
import { onMounted, reactive, ref } from '@vue/runtime-core';
export default {
  setup() {
    let device = reactive({});
    let audio = ref(null);
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
        audio.value = null;
        const { value } = await hasPermission();
        if (!value) {
          showAlert('녹음 권한이 존재하지 않습니다.');
          setPermission();
        }
      } else {
        showAlert('모바일에서만 가능합니다.');
      }

      recordStart()
        .then(() => {
          setTimeout(() => {
            stopRecord();
          }, 6000);
        })
        .catch(error => console.log(error));
    };

    const stopRecord = () => {
      recordStop()
        .then(result => {
          const { recordDataBase64, mimeType } = result.value;

          audio.value = new Audio(`data:${mimeType};base64,${recordDataBase64}`);
        })
        .catch(error => console.log(error));
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
      audio,
    };
  },
};
</script>

<style lang="scss" scoped>
.blue {
  color: $blue;
}
</style>
