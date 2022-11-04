import booklist_main from '../img/booklist_app/main.jpg'
import bookList_sub from '../img/booklist_app/booklist.jpg'
import paint_site_main from '../img/paint_site/main.jpg'
import paint_site_sub1 from '../img/paint_site/sub_1.jpg'
import paint_site_sub2 from '../img/paint_site/sub_2.jpg'
import techscroll_main from '../img/techscroll/main.jpg'
import techscroll_sub1 from '../img/techscroll/sub_1.jpg'
import techscroll_sub2 from '../img/techscroll/sub_2.jpg'
import image_upload_api_main from '../img/Image_upload_api/main.jpg'
import image_upload_api_sub1 from '../img/Image_upload_api/sub_1.jpg'
import image_upload_api_sub2 from '../img/Image_upload_api/sub_2.jpg'
import image_upload_api_sub3 from '../img/Image_upload_api/sub_3.jpg'
import image_upload_api_sub4 from '../img/Image_upload_api/sub_4.jpg'
import main from '../img/default/main.jpg'
import sub1 from '../img/default/sub_1.jpg'
import sub2 from '../img/default/sub_2.jpg'




const data: {title: string, mainImage: string, sourceCodeLink: string, link: string, imgs: {original: string}[], desc: string }[] = [
    {
        title: 'Book List App',
        mainImage: booklist_main,
        sourceCodeLink: 'https://github.com/Asumie-code/book_list.github.io',
        link: 'https://asumie-code.github.io/book_list.github.io/', 
        imgs: [{original: bookList_sub}],
        desc: "A Book list app, using modern  javascript and bootstrap, this app uses browser's localStorage api to save and retrive book items. the project is written in an object oriented fashion. "
    },
    {
        title: 'Acrylic Paint site', 
        mainImage: paint_site_main,
        sourceCodeLink: 'https://github.com/Asumie-code/scroll_animate_website.github.io',
        link: 'https://asumie-code.github.io/scroll_animate_website.github.io/', 
        imgs: [{original: paint_site_sub1}, {original: paint_site_sub2}],
        desc: "Painting Gallery page with card for each painting, the site uses aos  library for animation on scroll, the page is responsive "
    },
    {
        title: 'Techscroll',
        mainImage: techscroll_main,
        sourceCodeLink: 'https://github.com/Asumie-code/bootstrap_website_with_scroll_animatin.github.io',
        link: 'https://asumie-code.github.io/bootstrap_website_with_scroll_animatin.github.io/', 
        imgs: [{original: techscroll_sub1}, {original: techscroll_sub2}],
        desc: "Product landing Page, the page is done using css, html, bootstrap. and scrollreveal for scrolling animation   "
    },
    {
        title: 'Image upload API',
        mainImage: image_upload_api_main,
        sourceCodeLink: 'https://github.com/Asumie-code/image_upload_site_expressback',
        link: '#', 
        imgs: [{original: image_upload_api_sub1}, {original: image_upload_api_sub2}, {original: image_upload_api_sub3}, {original: image_upload_api_sub4}],
        desc: "API for authenticating users and serving images, the project uses expressjs, jwt, mongodb. you can authenticate or add users and add or delete images to monogodb using this API.  to run this API you need to have mongodb installed on your machine or you can run the front-end part of this project from my github "
    },
    {
        title: 'Coming Soon',
        mainImage: main,
        sourceCodeLink: '#',
        link: '#', 
        imgs: [{original: sub1}, {original: sub2}],
        desc: "In progress project, wonder what will be here "
    },
    {
        title: 'Coming Soon',
        mainImage: main,
        sourceCodeLink: '#',
        link: '#', 
        imgs: [{original: sub1}, {original: sub2}],
        desc: "In progress project, wonder what will be here "
    },
    {
        title: 'Coming Soon',
        mainImage: main,
        sourceCodeLink: '#',
        link: '#', 
        imgs: [{original: sub1}, {original: sub2}],
        desc: "In progress project, wonder what will be here "
    },
    {
        title: 'Coming Soon',
        mainImage: main,
        sourceCodeLink: '#',
        link: '#', 
        imgs: [{original: sub1}, {original: sub2}],
        desc: "In progress project, wonder what will be here "
    },
]





export default data