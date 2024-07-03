document.addEventListener('DOMContentLoaded', () => {
    const ownersContainer = document.querySelector('.owners-container');
    const categoriesContainer = document.querySelector('.categories-container');
    const staffContainer = document.querySelector('.staff-container');
    const detailsContainer = document.querySelector('.details-container');

    //  data for owners
    const owners = [
        {
            
            name: 'RomeoX',
            photo: 'img/romeo1.jpg',
            about: 'سڵاو من ناوم ڕۆمیۆ یە، تەمەنم 22 ساڵە و خەڵکی ڕانیەم، لە تەمەنی مناڵیەوە لە دەرەوەم، وە هیچ حەزێکم نیە بۆ شتەکان، وە ڕقم لە هیچیش نیە، وە بۆ ماوەی 5-6 ساڵ ئەبێ  لە دیسکۆردم، وە هیچ ئەزمونێکم نیە لە دیسکۆرد بەڵام ئەزانم چۆن کەسەکان بجوڵێنم بەو شێوازەی کە خۆم ئەمەوێت. وە من خۆم بە خاوەنی لاست ڤیلەج  نازانم، ئەوەی لەم سێرڤەرە لەگەڵمان بێت بەشێکە لەم ماڵە بچوکە،'
        },
       
    ];

    // data for categories
    const categories = [
        {
            name: 'Global',
            photo: 'img/g.png',
            about: 'سێرڤەرێک بە تەواوی گشت گیر'
        },
        {
            name: 'Community',
            photo: 'img/cc.png',
            about: 'ماڵێک بۆ یەکتر ناسینو بەسەر بردنی کاتەکانت'
        },
        {
            name: 'Gamming',
            photo: 'img/gg.png',
            about: 'شوێنێک بۆ یاری کردن لەگەڵ هاوڕێیانت'
        },
        {
            name: 'Media',
            photo: 'img/md.png',
            about: 'گشتگیر لەبوارە جیاجیاکانی وێنە،و ڤیدیۆ'
        },
        {
            name: 'Quotes',
            photo: 'img/qo.png',
            about: 'گشتگیر لەبوارەکانی نوسین،شیعر،وتە'
        },
        {
            name: 'Fun',
            photo: 'img/fu.png',
            about: 'بۆ بەسەر بردنی کاتێکی خۆش'
        },
        {
            name: 'Giveaway',
            photo: 'img/gi.png',
            about: 'بەردەوام خەڵاتی جۆراو جۆر'
        },
    ];

    // data for staffs
    const staffMembers = [

        {
            role: 'ROLE:Pirate',
            name: 'PAMOx',
            photo: 'img/pamo.jpg',
            about: ''
        },
        {
            role: 'ROLE:Pirate',
            name: 'IBOYx',
            photo: 'img/iboy.jpg',
            about: ''
        },
        {
            role: 'ROLE:Overseer',
            name: 'RENAZ',
            photo: 'img/renaz.jpg',
            about: 'من ڕێناز تەمەنم ١٧ ساڵە خوێندکاری پۆلی ١٢ ئامادەیی و خەڵکی کەرکوکم ماوەی چوار ساڵە بەکارهێنەری بەرنامەی دیسکۆردم و ئەزموونێکی باشم لێی هەیە، هەروەها لە 16/3/2022 تاکو ئێستا ستافم لە سێرڤەری لاست ڤیلەج بە شانازێوە، حەزم لە تێکەڵ بوون و گفتوگۆ کردنە لەسەر بابەتە زانستێکان و حەز و خولیایەکی تایبەتم هەیە بۆ کتێب خوێندنەوە و گوێ گرتن لە شعر'
        },
        {
            role: 'ROLE:Overseer',
            name: 'AKAM',
            photo: 'img/akam.jpg',
            about: ''
        },
        {
            role: 'ROLE:Senior Mod',
            name: 'MAFFA',
            photo: 'img/mafa.jpg',
            about: ''
        },
        {
            role: 'ROLE:Senior Mod',
            name: 'Li1y',
            photo: 'img/lily.jpg',
            about: 'لیلی تەمەنم 17 ساڵە و خەڵکی سلێمانیم و ئارەزووی کتێب خوێندنەوەی ئەکەم بەتایبەتی ئینگلیزی وە کوردیش ، لە ئێستایە ستافم لە لاست ڤیلەج  و بەردەوامم لە خزمەتکردن وەکو ڕۆڵ بە دەستێک ، کە ئەوێ مایەی شانازی منە🧡.'
        },
        {
            role: 'ROLE:Manage Staff',
            name: 'REVO',
            photo: 'img/revo.gif',
            about: ''
        },
        {
            role: 'ROLE:Manage Staff',
            name: 'UNDERRATED',
            photo: 'img/under.jpg',
            about: 'سڵاو من ئەندێرڕەیتێد تەمەنم ١٨ ساڵە قوتابی پۆلی ١٢ی زانستی و نزیکەی ٦ ساڵە دیسکۆرد بەکار ئەهێنم و وەکو ستافێک حەزم کردووە خزمەتی لاست ڤیلەج  بکەمو ئەوێم هەڵبژارد و ڕقم لە درۆ و بوختانە'
        },
        {
            role: 'ROLE:Manage Staff',
            name: 'HAZHA',
            photo: 'img/hazha.jpg',
            about: 'سڵاو من هاژە تەمەنم ١٦ ساڵە قوتابیم لە پۆلی ١١ی وێژەیی و حەزم لێیە لە داهاتوودا ببمە پارێزەر بۆ نەهێشتنی خراپەکاری و ماوەی نزیکەی ساڵێکە دیسکۆرد بەکار ئەهێنم و لەوکاتەوە ستافم لە سێرڤەری لاست ڤیلەج  ئەوێم هەڵبژارد و هەر خزمەتی ئەوێش ئەکەم حەزم لە یەکسانی و دادپەروەرییە ڕقیشم لە بوختان و درۆ و قسەی ڕەقە'
        },
    ];

    // Generate owners
    owners.forEach((owner, index) => {
        const ownerCircle = document.createElement('div');
        ownerCircle.classList.add('owner-circle');
        ownerCircle.setAttribute('onclick', `showDetails('owner${index + 1}'); handleViewCount('owner${index + 1}');`);
        ownerCircle.innerHTML = `
            <img src="${owner.photo}" alt="${owner.name}">
            <p>${owner.name}</p>
        `;
        ownersContainer.appendChild(ownerCircle);

        const ownerDetails = document.createElement('div');
        ownerDetails.classList.add('details');
        ownerDetails.id = `owner${index + 1}`;
        ownerDetails.innerHTML = `
            <div class="details-img">
                <img src="${owner.photo}" alt="${owner.name}">
            </div>
            <h3>${owner.name}</h3>
            
            <h4 class="about-section">${owner.about}</h4>
            <div class="close-btn" onclick="closeDetails('owner${index + 1}')">
                <img src="img/close-icon.png" alt="Close">
            </div>
        `;
        detailsContainer.appendChild(ownerDetails);
    });

    // Generate categories
    categories.forEach((category, index) => {
        const categoryCircle = document.createElement('div');
        categoryCircle.classList.add('category-circle');
        categoryCircle.setAttribute('onclick', `showDetails('category${index + 1}'); handleViewCount('category${index + 1}');`);
        categoryCircle.innerHTML = `
            <img src="${category.photo}" alt="${category.name}">
            <p>${category.name}</p>
        `;
        categoriesContainer.appendChild(categoryCircle);

        const categoryDetails = document.createElement('div');
        categoryDetails.classList.add('details');
        categoryDetails.id = `category${index + 1}`;
        categoryDetails.innerHTML = `
            <div class="details-img">
                <img src="${category.photo}" alt="${category.name}">
            </div>
            <h3>${category.name}</h3>
            <p class="about-section">${category.about}</p>
            <div class="close-btn" onclick="closeDetails('category${index + 1}')">
                <img src="img/close-icon.png" alt="Close">
            </div>
        `;
        detailsContainer.appendChild(categoryDetails);
    });

    // Generate staff
    staffMembers.forEach((staff, index) => {
        const staffCircle = document.createElement('div');
        staffCircle.classList.add('staff-circle');
        staffCircle.setAttribute('onclick', `showDetails('staff${index + 1}'); handleViewCount('staff${index + 1}');`);
        staffCircle.innerHTML = `
            <img src="${staff.photo}" alt="${staff.name}">
            <p>${staff.name}</p>
        `;
        staffContainer.appendChild(staffCircle);

        const staffDetails = document.createElement('div');
        staffDetails.classList.add('details');
        staffDetails.id = `staff${index + 1}`;
        staffDetails.innerHTML = `
            <div class="details-img">
                <img src="${staff.photo}" alt="${staff.name}">
            </div>
            <h3>${staff.name}</h3>
            <h3>${staff.role}</h3>
            <h4 class="about-section">${staff.about}</h4>
            <div class="close-btn" onclick="closeDetails('staff${index + 1}')">
                <img src="img/close-icon.png" alt="Close">
            </div>
        `;
        detailsContainer.appendChild(staffDetails);
    });
});

function toggleColorSwitcher() {
    const colorSwitcher = document.getElementById('colorSwitcher');
    colorSwitcher.style.display = colorSwitcher.style.display === 'none' ? 'block' : 'none';
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
    document.body.style.color = color === 'black' ? 'white' : 'black';
}

function showDetails(id) {
    const details = document.querySelectorAll('.details');
    details.forEach(detail => {
        if (detail.id === id) {
            detail.style.display = 'block';
            detail.style.maxHeight = detail.scrollHeight + 'px';
            detail.style.opacity = '1';
        } else {
            detail.style.display = 'none';
            detail.style.maxHeight = '0';
            detail.style.opacity = '0';
        }
    });
}

function closeDetails(id) {
    const detail = document.getElementById(id);
    detail.style.display = 'none';
    detail.style.maxHeight = '0';
    detail.style.opacity = '0';
}

