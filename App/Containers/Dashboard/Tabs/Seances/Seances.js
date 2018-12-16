import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import SeanceCard from '../../../../Components/SeanceCard'
import { Metrics } from '../../../../Themes';

const { widthUnit } = Metrics;

class Seances extends Component {
  
  seances = [
    {
      _id: '15b7c686-e0b3-46b7-a7f8-cc1bb11e0d51',
      name: 'Introduction',
      date: '15/12/2018',
      module: 'Jave'
    },
    {
      _id: '92a45fab-a054-466e-ad50-a2dcc982e97b',
      name: 'Chapitre 1',
      date: '16/12/2018',
      module: 'UML'
    }
  ]

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
    // Get Seances
  }


  render() {
    return (
      <View>
        <View style={{ paddingLeft: widthUnit(16) }}>
          <FlatList
            data={this.seances}
            showsVerticalScrollIndicator={false}
            keyExtractor={seance => seance._id}
            automaticallyAdjustContentInsets={false}
            scrollEnabled={false}
            renderItem={({ item }) => <SeanceCard seance={item} onPress={() => {}} />}
          />
        </View>
      </View>
    );
  }
}

export default Seances;