function Persion(props) {
  return (
    React.createElement('div', { 'class': 'persion' },
      React.createElement('h1', null, props.name),
      React.createElement('p', null, 'Age is ', props.age)));


}

var app =
React.createElement('div', null,
  React.createElement(Persion, { name: 'Cirilla', age: '22' }),
  React.createElement(Persion, { name: 'Triss', age: '45' }));



ReactDOM.render(app,
document.querySelector('#app'));