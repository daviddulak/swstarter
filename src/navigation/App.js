import {Navigation} from 'react-native-navigation';

import {Search} from '../screens/Search';
import {FilmDetail} from '../screens/FilmDetail';
import {PersonDetail} from '../screens/PersonDetail';
import {Results} from '../screens/Results';
import {StoryBook} from '../screens/StoryBook';

import {Colors, Header} from '../ui-kit';
console.disableYellowBox = true;

Navigation.registerComponent('Search', () => Search);
Navigation.registerComponent('FilmDetail', () => FilmDetail);
Navigation.registerComponent('PersonDetail', () => PersonDetail);
Navigation.registerComponent('Results', () => Results);
Navigation.registerComponent('StoryBook', () => StoryBook);
Navigation.registerComponent('HeaderBackground', () => Header);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      leftButtonColor: Colors.green.default,
      drawBehind: true,
      background: {
        color: 'white',
        translucent: true,
        blur: false,
      },
      title: {
        text: 'SWStarter',
        fontSize: 18,
        color: Colors.green.default,
        fontFamily: 'Poppins-Bold',
      },
      noBorder: false,
      backButton: {
        title: 'Back',
        color: Colors.green.default,
        showTitle: false,
      },
    },
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Search',
            },
          },
        ],
      },
    },
  });
});
