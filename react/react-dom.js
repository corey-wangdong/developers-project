export function render(element, container) {
  console.log('element:', element);
  console.log('container:', container);

  const dom = element.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(element.type)
  console.log('dom----', dom);
  Object.keys(element.props).filter(key => key !== 'children').forEach(name => {
    console.log('name---', name);
    dom[name] = element.props[name]
  })

  element.props.children.forEach((child) => render(child, dom))

  container.appendChild(dom)
}