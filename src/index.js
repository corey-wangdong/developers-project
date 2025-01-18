// import React from 'react';
import React from '../react';
const element = <div title='foo'>Hello
  <a href='www.baidu.com'> 百度</a>
  <span>123</span>
  <div>456</div>
</div>
console.log('element: ', element);

// const node = document.createElement(element.type);
// node['title'] = element.props.title;
// const text = document.createTextNode('');
// text['nodeValue'] = element.props.children;
// node.appendChild(text)

const container = document.getElementById('root');
// ReactDOM.render(element, container);
// container.appendChild(node);

React.render(element, container);
