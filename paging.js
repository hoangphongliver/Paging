let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;

const product = [
    { id: 1, image: "http://static.ybox.vn/2017/5/12/1041f8a2-368f-11e7-8a7e-cac091044fd5.jpg", title: "1: Charlotte’s Web - E.B White" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "2: Meiko and the Fifth Treasure" },
    { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "3: The Outsiders" },
    { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-qQB5yclfLwCxqLRpD9tY_jhDg0PVIDQl-IO03nXZUi5hDDTpDQ&s", title: "4: The House on Mango Street" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cgZnVmMMj0Eb1An2Mujhbhs0ZVc5EhhY5NPhxuFyBz--M1jkWg&s", title: "5: Thirteen Reasons Why" },
    { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "6: Peter Pan" },
    { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPy6hIPkdydn_GJQ7hFqBnsPSLtNNemFGazeoquHN5czXyyIu2&s", title: "7: The Old Man and the Sea" },
    { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpDmlqUatqqQMgLj_gDhRX_hSRRvNXVjrgfJLEn5VNSpF40HBp&s", title: "8: Ernest Hemmingway" },
    { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvXgwoxPYiT81oxvnETd_06GEcqgLBnusANy1IbVOdtUgD3Rd&s", title: "9: The Giver - Lois Lowry" },
    { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "10: Number the Stars - Lois Lowry" },
    { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "11: A Wrinkle In Time - Madeleine L’engle" },
    { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "12: Silence Once Begun" },
    { id: 13, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "13: Sleep Donation" },
    { id: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "14: Can’t and Won’t" },
    { id: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "15: The News: A User’s Manual" },
    { id: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "16: Every Day Is for the Thief" },
    { id: 17, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "17: The UnAmericans" },
    { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "18: Kinder Than Solitude" },
    { id: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "19: What’s Important is Feeling" },
    { id: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "20: Blood Will Out" },
    { id: 21, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "21: Cubed: A Secret History of the Workplace" },
    { id: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "22: The Last Illusion" },
    { id: 23, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "23: Lost for Words: A Novel" },
    { id: 24, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "24: Summer House With Swimming Pool" },
    { id: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "25: I’ll Be Right There" },
    { id: 26, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "26: English Pronuciation in use" },
    { id: 27, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWJqC2-oWjd4Y41dYAwgYohlTFsWxdVmMwKI1_bCG9TMXDAJKxA&s", title: "27: Cambridge English Skills Real Listening & Speaking" },
    { id: 28, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K9mxh-_NQEZkbeKEXl5vdKiy8nHT7zVhIL8TASmLKTbOKO0tgA&s", title: "28: Everyday Conversations English" },
]

let productArr = [];
let showAdd = false;

const addBookBtn = document.getElementById('add');
const name = document.getElementById('name');
const imgLink = document.getElementById('imgLink');
const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
    if (imgLink.value !== '' && name.value !== '') {
        productArr.push({
            id: product.length + 1,
            image: imgLink.value,
            title: name.value
        })
    }
});


function highlightText() {
    const title = document.querySelectorAll('.content__product__item h3');
    title.forEach((title, index) => {
        let titleText = title.innerHTML;
        let indexOf = Number(titleText.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()));
        let searchTextLength = searchText.value.length;
        titleText = titleText.substring(0, indexOf) + "<span class='highlight'>" + titleText.substring(indexOf, indexOf + searchTextLength) + "</span>" + titleText.substring(indexOf + searchTextLength, titleText.length);
        title.innerHTML = titleText;
        console.log(titleText);
    })
}


productArr = product;


const pageConfig = document.querySelector('.page-config select');
const mySelect = document.getElementById('mySelect');
const countTotalPage = document.querySelector('.total-page');
const countTotalProduct = document.querySelector('.total-item');

let totalPages = Math.ceil(productArr.length / perPage);
const searchText = document.querySelector('.content__search input');
const searchBtn = document.getElementById('search');


function initRender(productAr, totalPage) {
    renderProduct(productAr);
    renderListPage(totalPage);
}

initRender(productArr, totalPages);

function getCurrentPage(indexPage) {
    start = (indexPage - 1) * perPage;
    end = indexPage * perPage;
    totalPages = Math.ceil(productArr.length / perPage);
    countTotalPage.innerHTML = `Total pages: ${totalPages}`;
    countTotalProduct.innerHTML = `Total Product:  ${productArr.length}`
}

const deleteBtn = document.querySelectorAll('.content__product__item .delete');

deleteBtn.forEach((item, index) => {
    deleteBtn[index].addEventListener('click', () => {
        product.splice(index, 1);
        productArr = product;
        renderProduct(productArr)
    });
});

getCurrentPage(1);

searchBtn.addEventListener('click', () => {
    idPage = 1;
    productArr = [];
    product.forEach((item, index) => {
        if (item.title.toLocaleLowerCase().indexOf(searchText.value.toLocaleLowerCase()) != -1) {
            productArr.push(item);
        }
    });
    if (productArr.length === 0) {
        $('.no-result').css('display', 'block')
    } else {
        $('.no-result').css('display', 'none')
    }
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    changePage();
    if (totalPages <= 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
});

searchText.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

addBookBtn.addEventListener('click', () => {
    showAdd = !showAdd;
    if (showAdd) {
        $('.add-book').css('display', 'flex');
    } else {
        $('.add-book').css('display', 'none');
    }
})


pageConfig.addEventListener('change', () => {
    idPage = 1;
    perPage = Number(pageConfig.value);
    getCurrentPage(idPage);
    initRender(productArr, totalPages);
    if (totalPages == 1) {
        $('.btn-prev').addClass('btn-active');
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    changePage();
});



function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="content__product__item">';
            html += '<a>';
            html += '<img src=' + item.image + '>';
            html += '</a>';
            html += '<h3>' + item.title + '</h3>';
            html += '</div>';
            return html;
        }
    });
    document.getElementById('product').innerHTML = html;
    highlightText();
}

function renderListPage(totalPages) {
    let html = '';
    html += `<li class="current-page active"><a>${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    if (totalPages === 0) {
        html = ''
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const idPages = document.querySelectorAll('.number-page li');
    const a = document.querySelectorAll('.number-page li a');
    for (let i = 0; i < idPages.length; i++) {
        idPages[i].onclick = function () {
            let value = i + 1;
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.classList.add('active');
            if (value > 1 && value < idPages.length) {
                $('.btn-prev').removeClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == 1) {
                $('.btn-prev').addClass('btn-active');
                $('.btn-next').removeClass('btn-active');
            }
            if (value == idPages.length) {
                $('.btn-next').addClass('btn-active');
                $('.btn-prev').removeClass('btn-active');
            }
            idPage = value;
            getCurrentPage(idPage);
            renderProduct(productArr);
        };
    }
}

changePage();

$('.btn-next').on('click', () => {
    idPage++;
    if (idPage > totalPages) {
        idPage = totalPages;
    }
    if (idPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    console.log(idPage);
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});

$('.btn-prev').on('click', () => {
    idPage--;
    if (idPage <= 0) {
        idPage = 1;
    }
    if (idPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${idPage - 1})`).addClass('active');
    getCurrentPage(idPage);
    renderProduct(productArr);
});


