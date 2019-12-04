var p = require('preprocess');
var fs = require('fs');
var colors = require('colors');

var className = 'Test';
var type = 'uikit';
process.argv.forEach(function(val, index, array) {
  //console.log(index + ':' + val);
  if (index === 2) {
    type = val;
  }
  if (index === 3) {
    className = val;
  }
});

var bpBase = './blueprint/';
var srcUIKitComponent = '../src/ui-kit/components/';
var srcScreenComponent = '../src/screens/';
var indexFileStorybook = '../src/ui-kit/stories/index.js';
var indexFileUIKitComponents = '../src/ui-kit/index.js';

var data = {
  CLASSNAME: className,
  CLASSNAME_LOWERCASE: className.toLowerCase(),
  CLASSNAME_FIRST_LOWERCASE:
    className.charAt(0).toLowerCase() + className.slice(1),
};

var currentFile = '';

if (type === 'uikit' || type === 'ui-kit') {
  // Create Base Component file
  currentFile = srcUIKitComponent + data.CLASSNAME + '.js';
  if (!fs.existsSync(currentFile)) {
    p.preprocessFileSync(bpBase + 'ui-kit.js', currentFile, data, {type: 'js'});
  } else {
    console.log('File already exists, skipping. ' + currentFile);
  }

  currentFile = srcUIKitComponent + data.CLASSNAME + '.story.js';
  if (!fs.existsSync(currentFile)) {
    p.preprocessFileSync(bpBase + 'ui-kit-story.js', currentFile, data, {
      type: 'js',
    });
  } else {
    console.log('File already exists, skipping. ' + currentFile);
  }

  fs.appendFile(
    indexFileStorybook,
    `\nimport '../components/${data.CLASSNAME}.story';`,
    function(err) {
      if (err) {
        // append failed
      } else {
        // done
        fs.appendFile(
          indexFileUIKitComponents,
          `\nexport * from './components/${data.CLASSNAME}';`,
          function(err) {
            if (err) {
              // append failed
            } else {
              // done
            }
          },
        );
      }
    },
  );
}

if (type === 'screen' || type === 'screens') {
  // Create Base Component sass file
  currentFile = srcScreenComponent + data.CLASSNAME + '.js';
  if (!fs.existsSync(currentFile)) {
    p.preprocessFileSync(bpBase + 'screen.js', currentFile, data, {type: 'js'});

    console.log('****** File Created ******'.bold.yellow);
    console.log('You will still need to add a Route to your new Screen.\n'.bold.yellow);

    console.log(
      `import ${data.CLASSNAME} from '../screens/${data.CLASSNAME}';\n`.bold
        .blue,
    );
    // console.log(
    //   `{\n\tkey: '${data.CLASSNAME_FIRST_LOWERCASE}',\n\tcomponent: ${
    //     data.CLASSNAME
    //   },\n\ttitle: "${data.CLASSNAME}"\n}`.bold.blue,
    // );
  } else {
    console.log('File already exists, skipping. ' + currentFile);
  }
}
