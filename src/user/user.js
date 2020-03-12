import SendBird from 'sendbird';

const APP_ID = 'E033AE2D-E8CA-480D-AFA2-D17B17287C9D';

export const sbConnect = (userId, nickname) => {
  return new Promise((resolve, reject) => {
    const sb = new SendBird({appId: APP_ID});
    sb.connect(userId, (user, error) => {
      if (error) {
        reject('SendBird Login Failed.');
      } else {
        sb.updateCurrentUserInfo(nickname, null, (user, error) => {
          if (error) {
            reject('Update User Failed.');
          } else {
            resolve(user);
          }
        });
      }
    });
  });
};

export const sbDisconnect = () => {
  return new Promise((resolve, reject) => {
    const sb = SendBird.getInstance();
    if (sb) {
      sb.disconnect(() => {
        resolve(null);
      });
    } else {
      resolve(null);
    }
  });
};
