const { default: Axios } = require("axios")

const getImg = async () => {
    const imgPath = await Axios('https://aws.random.cat/meow');
    const imgSrc = imgPath.data.file;
    return imgSrc;
}

const body = document.querySelector('body');
let imgPath, y, x;

const app = async () => {
    imgPath = await getImg();

    if (imgPath) {
        setTimeout(() => {
            const rndX = Math.random() * window.innerWidth;
            const rndY = Math.random() * window.innerHeight;

            x = rndX;
            y = rndY;

            insertHtml();
        }, 10);
    }
}


let z = 0;
const insertHtml = () => {
    const html = `<img class="img" src="${imgPath}" style="top: ${y}px; left: ${x}px; z-index: ${++z}" />`;

    body.insertAdjacentHTML('afterbegin', html);
    app();
}

app();
