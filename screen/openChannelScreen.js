import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ButtonListItem,
  Avatar,
  FlatList,
  ListItem,
} from 'react-native';
import {connect} from 'react-redux';
import {
  getOpenChannelList,
  sbCreateOpenChannelListQuery,
} from '../src/action/openChannelActions';

class OpenChannel extends Component {
  static navigationOptions = {
    title: 'OPEN CHANNEL',
  };

  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      openChannelListQuery: null,
      list: [],
      openChannelList: '',
      // openChannelList: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this._initOpenChannelList();
  }

  _initOpenChannelList = () => {
    this._getOpenChannelList(true);
  };

  _getOpenChannelList = init => {
    console.log(this.props);
    if (init) {
      const openChannelListQuery = sbCreateOpenChannelListQuery();
      this.setState({openChannelListQuery}, () => {
        this.props.getOpenChannelList(this.state.openChannelListQuery);
      });
    } else {
      this.props.getOpenChannelList(this.state.openChannelListQuery);
    }
  };

  _onListItemPress = channelUrl => {
    // TODO: enter channel
  };

  _handleScroll = e => {
    if (e.nativeEvent.contentOffset.y < -100 && !this.state.refresh) {
      this.setState(
        {list: [], openChannelList: ds.cloneWithRows([]), refresh: true},
        () => {
          this._initOpenChannelList();
        },
      );
    }
  };

  _renderList = rowData => {
    return (
      // <FlatList
      //   data={this.props.list}
      //   renderItem={({item}) => (
      //     <ListItem
      //       title={`${item} test`}
      //       onPress={() => this._onListItemPress(rowData.url)}
      //     />
      //   )}
      // />
      <Text>init text</Text>
    );
  };

  render() {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.openChannelList.list,
  };
}

export default connect(mapStateToProps, {getOpenChannelList})(OpenChannel);
