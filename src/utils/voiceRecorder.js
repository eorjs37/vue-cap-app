import { VoiceRecorder } from 'capacitor-voice-recorder';

const hasPermission = () => {
  return VoiceRecorder.hasAudioRecordingPermission();
};

const requestPermission = () => {
  return VoiceRecorder.requestAudioRecordingPermission();
};

const recordStart = () => {
  return VoiceRecorder.startRecording();
};

export { hasPermission, requestPermission, recordStart };
