import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import ModuleCard from '../../../../Components/ModuleCard'
import { Images } from '../../../../Themes';

class Modules extends Component {
  
  modules = [
    {
      _id: '15b7c686-e0b3-46b7-a7f8-cc1bb11e0d51',
      name: 'Java',
    },
    {
      _id: '92a45fab-a054-466e-ad50-a2dcc982e97b',
      name: 'UML',
    },
    {
      _id: '92a45fab-a054-466e-ad50-a2dcc982e97K',
      name: 'PHP',
    },
    {
      _id: '92a45fab-a054-466e-ad50-a2dcc982e97F',
      name: 'Oracle',
    },
    {
      _id: '92a45fab-a054-466e-ad50-a2dcc982e97Z',
      name: 'Development Web',
    }
  ]

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    // Get Modules
  }


  render() {
    return (
      <View>
        <View style={styles.menuContainer}>
          <FlatList
            data={this.modules}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={_module => _module._id}
            scrollEnabled={false}
            automaticallyAdjustContentInsets={false}
            renderItem={({ item }) => <ModuleCard _module={item} image={Images.moduleIcon} onPress={() => null} />}
          />
          </View>
      </View>
    );
  }
}

export default Modules;