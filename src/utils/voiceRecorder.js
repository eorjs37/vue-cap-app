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

const recordStop = () => {
  return VoiceRecorder.stopRecording();
};

export { hasPermission, requestPermission, recordStart, recordStop };
