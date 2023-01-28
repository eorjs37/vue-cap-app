import { LocalNotifications } from '@capacitor/local-notifications';

const requestPermission = () => {
  return LocalNotifications.requestPermissions();
};

const notifs = async () => {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: 'Title',
        body: 'Body',
        id: 1,
        schedule: { at: new Date(Date.now() + 1000 * 5) },
        sound: null,
        attachments: null,
        actionTypeId: '',
        extra: null,
      },
    ],
  });
};

export { notifs, requestPermission };
