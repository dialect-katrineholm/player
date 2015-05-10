'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.fetchName = fetchName;
exports.format = format;
exports.getProgress = getProgress;

function fetchName(str) {
  var filename = str.substr(str.lastIndexOf('/') + 1);

  // Escape URI like this: `http://domain.com/xxx.mp3?xcode=fasda`
  if (filename.indexOf('?') !== -1) {
    var parts = filename.split('?');
    filename = parts[0];
  }

  return filename;
}

function format(list) {
  var songs = [];

  if (typeof list === 'string') {
    songs.push({
      src: list,
      _id: 0 });

    return songs;
  }

  list.forEach(function (item, index) {
    if (typeof item === 'object') {
      item._id = index;
      songs.push(item);
      return;
    }

    songs.push({
      src: item,
      _id: index });
  });

  return songs;
}

function getProgress(p, t, info) {
  var bar = '';
  bar += 'Now playing: ' + info;
  bar += '\n';

  for (var i = 0; i < p; i++) bar += '>';

  for (var i = p; i < t - 1; i++) bar += ' ';

  bar += '|';

  return bar;
}
//# sourceMappingURL=utils.js.map