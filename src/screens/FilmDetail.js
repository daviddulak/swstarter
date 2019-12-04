import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {
  StandardText,
  StandardTextLink,
  H1,
  H2,
  ScreenContainer,
  StandardButton,
} from '../ui-kit';

export class FilmDetail extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScreenContainer>
          <H1>Obi-wan</H1>
          <View style={styles.section}>
            <H2 withHorizontalRule>Opening Crawl</H2>
            <StandardText>
              Luke Skywalker has returned to his home planet of Tatooine in an
              attempt to rescue his friend Han Solo from the clutches of the
              vile gangster Jabba the Hutt. Little does Luke know that the
              GALACTIC EMPIRE has secretly begun construction on a new armored
              space station even more powerful than the first dreaded Death
              Star. When completed, this ultimate weapon will spell certain doom
              for the small band of rebels struggling to restore freedom to the
              galaxy...
            </StandardText>
          </View>
          <View style={styles.section}>
            <H2 withHorizontalRule>Opening Crawl</H2>
            <StandardTextLink>
              Luke Skywalker, Jabba Desiliijiic Tiure, Wedge Antilles, Jek Tono
              Porkins, Raymus Antilles, C-3PO, R2-D2, Darth Vader, Bib Fortuna,
              Leia Organa, Owen Lars, Beru Whitesun Lars, R5-D4, Biggs
              Darklight, Obi-Wan Kenobi, Wilhuff Tarkin, Chewbacca, Han Solo
            </StandardTextLink>
          </View>
          <StandardButton onPress={this.handleTextFieldSubmit}>
            Back To Search
          </StandardButton>
        </ScreenContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 30,
  },
});
