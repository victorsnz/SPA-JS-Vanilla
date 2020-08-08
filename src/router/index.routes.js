import {pages} from '../controllers/index';

let content = document.getElementById('root');

const router = async (route) => {
    content.innerHTML = "";
    switch(route){
        case '':
        case '#/':
            return content.appendChild(pages.home());
        
        case '#/posts':
            return content.appendChild(await pages.posts());

        default:
            return content.appendChild(pages.notFound());
    }
};
export { router };