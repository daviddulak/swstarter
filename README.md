__Notes__
- Extra gear icon in the top left is to demonstrate my UI-Kit approach using StoryBook and reusable components.  I typically place this in a secret menu that is not built for prduction releases.
- Green line under menu is missing.  I implemented using Wix TopBar background component, but that made all buttons on the menu fail.  I'm still researching the reason.
- Tests are extremely minimal.  With more time, it would make a lot of sense to add tests for the services layer.
- Redux or Mobx would be a nice addition to create a better state abstraction.
- Animations would also be next on my list.  To see some examples of RN animations I've done, see the Dribe app (https://www.youtube.com/watch?v=eDQ554pWQG4&feature=youtu.be)



__Run React Native Simulator__
```bash
$ npm run ios
```
or
```bash
$ npm run android
```
or for release version on Android
```bash
$ npm run installandroid
```


__Blueprint__
```bash
$ cd scripts && node blueprint.js uikit classname
``` 
or 
```bash
$ cd scripts && node blueprint.js screen classname
``` 
