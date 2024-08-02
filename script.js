const mainContent = document.getElementById('main-content');
const linkData = {
    whatsapp: {
        daerah: [
            { name: 'Sumatera Utara', url: 'https://chat.whatsapp.com/FtGzUnUvLanB42cKpJpEP8' },
            { name: 'Sumatera Barat', url: 'https://chat.whatsapp.com/J2Zby3iB41T8cUvsEB2eOT' },
            { name: 'Riau', url: 'https://chat.whatsapp.com/HrtE90qxkH09WZuJs9GnaY' },
            { name: 'Kepulauan Riau', url: 'https://chat.whatsapp.com/G851bNEIAlfLAOgw3WBXI2' },
            { name: 'Jambi', url: 'https://chat.whatsapp.com/HMrsr6xSt7V7q4mv6VeHeY' },
            { name: 'Sumatera Selatan', url: 'https://chat.whatsapp.com/EHH2r0NdrUJD2mbUPw8Y20' },
            { name: 'Kepulauan Bangka Belitung', url: 'https://chat.whatsapp.com/H6XapFFF2lEB33n1tVC85j' },
            { name: 'Bengkulu', url: 'https://chat.whatsapp.com/BVXD4pRsfODD8uw8qwwrwo' }
        ],
        instansi: [
            { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/L9yeLROPu5aAETSTElzd4k' },
            { name: 'Mahkamah Agung Republik Indonesia (MA)', url: 'https://chat.whatsapp.com/C1mKLLJFSkyL1nnCsnJ2cd' },
            { name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud)', url: 'https://chat.whatsapp.com/KNimVhgwNYa5C8AKF4C6m9' }
        ]
    },
    telegram: [
        { name: 'INFO CPNS 2024', url: 'https://t.me/cpnsdanpppk_indonesia' },
        { name: 'GRUP CPNS & KEDINASAN 2024 BY RETTA PRAMESTI', url: 'https://t.me/Cpns2024rettaa' },
        { name: 'INFORMASI CPNS PPPK 2024', url: 'https://t.me/informasicpns2' },
        { name: 'INFO CPNS 2024 (NEW)', url: 'https://t.me/cpns_2024' },
        { name: 'dikkusi cpns 2024 /JADI ASN', url: 'https://t.me/grupcpns2023' }
    ],
    contact: [
        { name: 'Paid Promote', content: '<i class="fab fa-whatsapp"></i> <a href="https://wa.me/6287737766321" target="_blank">087737766321</a>' }
    ]
};

function showMainCategories() {
    let html = `
        <div class="category-container">
            <div class="category" data-category="whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span>Whatsapp Group</span>
            </div>
            <div class="category" data-category="telegram">
                <i class="fab fa-telegram"></i>
                <span>Telegram Group</span>
            </div>
            <div class="category" data-category="contact">
                <i class="fas fa-address-book"></i>
                <span>Contact Person</span>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
    mainContent.classList.add('fade-in');
    document.querySelectorAll('.category').forEach(cat => {
        cat.addEventListener('click', () => showCategory(cat.dataset.category));
    });
}

function showCategory(category) {
    if (category === 'whatsapp') {
        showWhatsAppSubcategories();
    } else if (category === 'telegram') {
        showLinks('telegram');
    } else if (category === 'contact') {
        showContactInfo();
    }
}

function showWhatsAppSubcategories() {
    let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Back</button>';
    html += `
        <div class="category-container">
            <div class="category" data-subcategory="daerah">
                <i class="fas fa-map-marker-alt"></i>
                <span>Daerah</span>
            </div>
            <div class="category" data-subcategory="instansi">
                <i class="fas fa-building"></i>
                <span>Instansi</span>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
    mainContent.classList.add('fade-in');
    document.querySelector('.back-button').addEventListener('click', showMainCategories);
    document.querySelectorAll('.category').forEach(cat => {
        cat.addEventListener('click', () => showWhatsAppLinks(cat.dataset.subcategory));
    });
}

function showWhatsAppLinks(subcategory) {
    const links = linkData.whatsapp[subcategory];
    let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Back</button><ul class="links">';
    links.forEach(link => {
        html += `<li><a href="${link.url}" target="_blank"><i class="fab fa-whatsapp"></i> ${link.name}</a></li>`;
    });
    html += '</ul>';
    mainContent.innerHTML = html;
    mainContent.classList.add('fade-in');
    document.querySelector('.back-button').addEventListener('click', showWhatsAppSubcategories);
}

function showLinks(category) {
    const links = linkData[category];
    let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Back</button><ul class="links">';
    links.forEach(link => {
        html += `<li><a href="${link.url}" target="_blank"><i class="fab fa-telegram"></i> ${link.name}</a></li>`;
    });
    html += '</ul>';
    mainContent.innerHTML = html;
    mainContent.classList.add('fade-in');
    document.querySelector('.back-button').addEventListener('click', showMainCategories);
}

function showContactInfo() {
    const contactInfo = linkData.contact[0];
    let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Back</button>';
    html += `<h2>${contactInfo.name}</h2>`;
    html += `<p>${contactInfo.content}</p>`;
    mainContent.innerHTML = html;
    mainContent.classList.add('fade-in');
    document.querySelector('.back-button').addEventListener('click', showMainCategories);
}

showMainCategories();