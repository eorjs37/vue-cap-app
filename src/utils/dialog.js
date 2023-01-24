import { Dialog } from '@capacitor/dialog';

const showAlert = async text => {
  await Dialog.alert({
    title: 'Stop',
    message: text,
  });
};

const showConfirm = () => {
  return Dialog.confirm({
    title: 'Confirm',
    message: `Are you sure you'd like to press the red button?`,
    okButtonTitle: '확인',
    cancelButtonTitle: '취소',
  });
};

export { showAlert, showConfirm };
