const createElement = <T extends HTMLElement>(node: string, classes: string[] = [], id: string = '', content: HTMLElement | string = ''): T => {
  const element = document.createElement(node) as T;
  element.classList.add(...classes);
  element.id = id;
  if (content instanceof HTMLElement) {
    element.appendChild(content);
  } else {
    element.innerHTML = content;
  }
  return element;
};

export default createElement;
