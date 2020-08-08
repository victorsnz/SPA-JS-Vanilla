import view from '../views/notFound.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    return divElement;
}
