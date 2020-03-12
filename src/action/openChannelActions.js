import {OPEN_CHANNEL_LIST_SUCCESS, OPEN_CHANNEL_LIST_FAIL} from './types';
import SendBird from 'sendbird';

export const sbCreateOpenChannelListQuery = () => {
  const sb = SendBird.getInstance();
  return sb.OpenChannel.createOpenChannelListQuery();
};

export const sbGetOpenChannelList = openChannelListQuery => {
  return new Promise((resolve, reject) => {
    openChannelListQuery.next((channels, error) => {
      if (error) {
        reject(error);
      } else {
        resolve(channels);
      }
    });
  });
};

export const getOpenChannelList = openChannelListQuery => {
  return dispatch => {
    if (openChannelListQuery.hasNext) {
      sbGetOpenChannelList(openChannelListQuery)
        .then(channels =>
          dispatch({
            type: OPEN_CHANNEL_LIST_SUCCESS,
            list: channels,
          }),
        )
        .catch(error => dispatch({type: OPEN_CHANNEL_LIST_FAIL}));
    } else {
      dispatch({type: OPEN_CHANNEL_LIST_FAIL});
    }
  };
};
