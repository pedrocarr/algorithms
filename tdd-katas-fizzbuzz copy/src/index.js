

function copyName(name) {
  const regex = /\(copy\)(?:\((\d+)\))?$/;
  const match = name.match(regex);

  if (match) {
      if (match[1] !== undefined) {
          const counter = parseInt(match[1]) + 1;
          return name.replace(regex, `(copy)(${counter})`);
      } else {
          return name + '(1)';
      }
  } else {
      return name + ' (copy)';
  }
}



module.exports.copyName = copyName;
