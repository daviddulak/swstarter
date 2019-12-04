import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {swapi} from '../services/swapi';
import {get} from 'lodash';
import {
  StandardText,
  StandardTextLink,
  H1,
  H2,
  StandardButton,
  ScreenContainer,
} from '../ui-kit';

export class PersonDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  handleBackToSearch = () => {
    Navigation.popToRoot(this.props.componentId);
  }

  handlePressItem = (item) => () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'FilmDetail',
        passProps: { id: item.id },
      },
    });
  }

  componentDidMount() {
    if (this.props.id) {
      swapi
        .getPersonDeep(this.props.id)
        .then(response => {
          console.log(response);
          this.setState({
            item: response,
          });
        })
        .catch(response => {
          console.log(response);
        });
    }
  }

  render() {
    const itemArray = get(this.state, 'item.films', []);
    return (
      <SafeAreaView>
        <ScreenContainer>
          <View style={styles.container}>
            <View style={styles.containerUpper}>
              <H1>{get(this.state, 'item.name', 'Unknown')}</H1>
              <View style={styles.section}>
                <H2 withHorizontalRule>Details</H2>
                <View style={styles.row}>
                  <StandardText>{`Birth Year: ${get(this.state, 'item.birth_year', '···')}`}</StandardText>
                  <StandardText>{`Gender: ${get(this.state, 'item.gender', '···')}`}</StandardText>
                  <StandardText>{`Eye Color: ${get(this.state, 'item.eye_color', '···')}`}</StandardText> 
                  <StandardText>{`Hair Color: ${get(this.state, 'item.hair_color', '···')}`}</StandardText>
                  <StandardText>{`Height: ${get(this.state, 'item.height', '···')}`}</StandardText> 
                  <StandardText>{`Mass: ${get(this.state, 'item.mass', '···')}`}</StandardText>
                </View>
              </View>
              <View style={styles.section}>
                <H2 withHorizontalRule>Movies</H2>
                <View style={styles.inline}>
                  {itemArray.map((item, index) => {
                    return <StandardTextLink onPress={this.handlePressItem(item)} key={`item-${index}`}>{`${item.name}, `}</StandardTextLink>;
                  })}
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <StandardButton onPress={this.handleBackToSearch}>
                Back To Search
              </StandardButton>
            </View>
          </View>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  section: {
    paddingTop: 30,
  },
  inline: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
});
