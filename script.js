let classes;

function goload(url) {
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      classes = data;
      populate(classes);
    });
}

goload('data/classes.json')

function populate(classesgot) {
  let classnames = Object.keys(classesgot);
  for (let i = 0; i < classnames.length; i++) {
    const opt = document.createElement('option');
    opt.value = classnames[i];
    opt.innerText = classnames[i];
    document.querySelector('#class-select').appendChild(opt);
    console.log('successfully added ' + classnames[i]);
  }
}
