document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const linkData = {
        whatsapp: {
            daerah: [
                { name: 'Sumatera Utara', url: 'https://chat.whatsapp.com/FtGzUnUvLanB42cKpJpEP8' },
                { name: 'Sumatera Barat', url: 'https://chat.whatsapp.com/J2Zby3iB41T8cUvsEB2eOT' },
                { name: 'Aceh', url: 'https://chat.whatsapp.com/IkmM2MsSYba73sgqQN4YWJ' },
                { name: 'Sumatera Utara', url: 'https://chat.whatsapp.com/FtGzUnUvLanB42cKpJpEP8' },
                { name: 'Sumatera Barat', url: 'https://chat.whatsapp.com/J2Zby3iB41T8cUvsEB2eOT' },
                { name: 'Riau', url: 'https://chat.whatsapp.com/HrtE90qxkH09WZuJs9GnaY' },
                { name: 'Kepulauan Riau', url: 'https://chat.whatsapp.com/G851bNEIAlfLAOgw3WBXI2' },
                { name: 'Jambi', url: 'https://chat.whatsapp.com/HMrsr6xSt7V7q4mv6VeHeY' },
                { name: 'Sumatera Selatan', url: 'https://chat.whatsapp.com/EHH2r0NdrUJD2mbUPw8Y20' },
                { name: 'Kepulauan Bangka Belitung', url: 'https://chat.whatsapp.com/H6XapFFF2lEB33n1tVC85j' },
                { name: 'Bengkulu', url: 'https://chat.whatsapp.com/BVXD4pRsfODD8uw8qwwrwo' },                    { name: 'Lampung', url: 'https://chat.whatsapp.com/KGBPFP1ueD0KsKKzJv3iPA' },
                { name: 'DKI Jakarta', url: 'https://chat.whatsapp.com/JQoHbEUQpM7AgQwy9wCxfp' },
                { name: 'Jawa Barat', url: 'https://chat.whatsapp.com/KollCIJyrNcI0yGfkvEXaS' },
                { name: 'Banten', url: 'https://chat.whatsapp.com/EXoWHoEdyy4L4oDxbgvFsB' },
                { name: 'Jawa Tengah', url: 'https://chat.whatsapp.com/B7ZRHaa0HXz2trF2FU8rio' },
                { name: 'DI Yogyakarta', url: 'https://chat.whatsapp.com/CJQg5Z5nuFZ6Wm72ERTYUC' },
                { name: 'Jawa Timur', url: 'https://chat.whatsapp.com/HLnkNhjunnb1bcd5dqrcQL' },                    { name: 'Bali', url: 'https://chat.whatsapp.com/KsLhvIA86j7AAlbnBVcB6i' },
                { name: 'Nusa Tenggara Barat', url: 'https://chat.whatsapp.com/Fb4OjzG4TI87yk7xwwvBTN' },
                { name: 'Nusa Tenggara Timur', url: 'https://chat.whatsapp.com/HK5bHG9I0DUCBRK9LtWb4q' },
                { name: 'Kalimantan Barat', url: 'https://chat.whatsapp.com/HmhxNomWXitA0bV31fRkG9' },
                { name: 'Kalimantan Tengah', url: 'https://chat.whatsapp.com/LDj0SfsgSjYG6yGDqtd3cY' },
                { name: 'Kalimantan Selatan', url: 'https://chat.whatsapp.com/KtET1Lkj4bTLAbBUaXUrkH' },
                { name: 'Kalimantan Timur', url: 'https://chat.whatsapp.com/JJ0pRUKDJiz1PGgpGkwmgG' },
                { name: 'Kalimantan Utara', url: 'https://chat.whatsapp.com/LQPnfP4GsE9Klc6EUs6TsK' },
                { name: 'Sulawesi Utara', url: 'https://chat.whatsapp.com/IUIR6CCRjZu5W52gqir8ym' },                    { name: 'Gorontalo', url: 'https://chat.whatsapp.com/HeiJ9kVBMLU8uldWmGPrIF' },
                { name: 'Sulawesi Tengah', url: 'https://chat.whatsapp.com/FhRXMsuP3S0Aa0Tm7U3YLu' },
                { name: 'Sulawesi Barat', url: 'https://chat.whatsapp.com/B9QMvfWZKHjLftRDD0irgQ' },
                { name: 'Sulawesi Selatan', url: 'https://chat.whatsapp.com/L3TVQxDM3kLEvy0n20clRS' },
                { name: 'Sulawesi Tenggara', url: 'https://chat.whatsapp.com/CFO2mi5I9TSDEq2KU8lkid' },
                { name: 'Maluku', url: 'https://chat.whatsapp.com/Jn7mp3spN9gLIiNlp0jUR9' },
                { name: 'Maluku Utara', url: 'https://chat.whatsapp.com/JgScihTEffg7vsvNeOZ2FL' },
                { name: 'Papua Barat', url: 'https://chat.whatsapp.com/Imq2mSu3pep4Sha2oFIo4Y' },
                { name: 'Papua', url: 'https://chat.whatsapp.com/LGPktd8lopaCGeQsAaD8Mf' }
            ],
            instansi: [
                { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/L9yeLROPu5aAETSTElzd4k' },
                { name: 'Kemenkumham', url: 'https://chat.whatsapp.com/Fcuq1buii6NHXpmA1zFh0l' },
                { name: 'Kemenkumham Grup 2', url: '' },
                { name: 'Kemenkumham Grup 3', url: '' },
                { name: 'Kejaksaan Agung', url: 'https://chat.whatsapp.com/FWa0ZVGHWZ26aXACnTmnS1' },
                { name: 'Kejaksaan Agung Grup 2', url: '' },
                { name: 'Arsiparis Kejaksaan RI', url: '' },
                { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/L9yeLROPu5aAETSTElzd4k' },
                { name: 'Mahkamah Agung Republik Indonesia (MA)', url: 'https://chat.whatsapp.com/C1mKLLJFSkyL1nnCsnJ2cd' },
                { name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud)', url: 'https://chat.whatsapp.com/KNimVhgwNYa5C8AKF4C6m9' },                    { name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud) Grup 2', url: '' },
                { name: 'Badan Intelijen Negara (BIN)', url: 'https://chat.whatsapp.com/E7UH1hnlGjjAFNdfSFrTSi' },
                { name: 'Sekretariat Jenderal DPR RI', url: 'https://chat.whatsapp.com/GHlBoG7ikesCXdbXxqZdc7' },
                { name: 'Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)', url: 'https://chat.whatsapp.com/HiKayv7cM36CFEqsyVDTtR' },
                { name: 'Kementerian Kesehatan (Kemenkes)', url: 'https://chat.whatsapp.com/LOPFFhb5w1jIrciP5occ6w' },
                { name: 'Kementerian Kesehatan (Kemenkes) Grup 2', url: '' },
                { name: 'Kementerian Agama RI (Kemenag)', url: 'https://chat.whatsapp.com/K13jEZqSGJZH4nIWT9UvK8' },
                { name: 'Kementerian Pertanian (Mentan)', url: 'https://chat.whatsapp.com/KXSPCJmTqQcGKwZ0mYZlAx' },                    { name: 'Kementerian ATR/BPN', url: 'https://chat.whatsapp.com/CAgYsWMML0E5Jpa2Zly2D5' },
                { name: 'Badan Pengawas Pemilu (Bawaslu)', url: 'https://chat.whatsapp.com/Khrubc8nVHE5aS3GnFdyfI' },
                { name: 'Kementerian Perhubungan (Kemenhub)', url: '' },
                { name: 'Badan Nasional Pencarian dan Pertolongan (Basarnas)', url: 'https://chat.whatsapp.com/E6k8X1Bgri4G36xNBmDs9L' },
                { name: 'Kementerian Sosial (Kemensos)', url: '' },
                { name: 'Kementerian PUPR RI', url: 'https://chat.whatsapp.com/EJGIk6No3PpB6AoUxABILA' },
                { name: 'Kementerian Kelautan dan Perikanan', url: '' },
                { name: 'Sekolah Kedinasan 2024', url: '' },
                { name: 'Kementerian Pan-RB', url: 'https://chat.whatsapp.com/FR5mqbACxBy530GHCzMOgp' },
                { name: 'Kementerian Pertahanan', url: 'https://chat.whatsapp.com/FXRyuLkyWZ668KEh8cZxEK' }
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
            { name: 'WhatsApp', content: '+6285171546073' }
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
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button>';
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
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button><ul class="links">';
        links.forEach(link => {
            html += `
                <li class="link-box">
                    <a href="${link.url}" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        <span>${link.name}</span>
                        <i class="fas fa-copy copy-icon" data-url="${link.url}"></i>
                    </a>
                </li>`;
        });
        html += '</ul>';
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', showWhatsAppSubcategories);
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.addEventListener('click', copyToClipboard);
        });
    }

    function showLinks(category) {
        const links = linkData[category];
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button><ul class="links">';
        links.forEach(link => {
            html += `
                <li class="link-box">
                    <a href="${link.url}" target="_blank">
                        <i class="fab fa-telegram"></i>
                        <span>${link.name}</span>
                        <i class="fas fa-copy copy-icon" data-url="${link.url}"></i>
                    </a>
                </li>`;
        });
        html += '</ul>';
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', showMainCategories);
        document.querySelectorAll('.copy-icon').forEach(icon => {
            icon.addEventListener('click', copyToClipboard);
        });
    }

    function showContactInfo() {
        const contacts = linkData.contact;
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button><ul class="links">';
        contacts.forEach(contact => {
            html += `
                <li class="link-box">
                    <a href="https://wa.me/${contact.content}" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        <span>${contact.name}: ${contact.content}</span>
                    </a>
                </li>`;
        });
        html += '</ul>';
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', showMainCategories);
    }

    function copyToClipboard(event) {
        event.preventDefault();
        const url = event.currentTarget.dataset.url;
        navigator.clipboard.writeText(url).then(() => {
            showAlert('Link berhasil disalin!');
        });
    }

    function showAlert(message) {
        const alertElement = document.createElement('div');
        alertElement.className = 'alert-message';
        alertElement.textContent = message;
        document.body.appendChild(alertElement);

        setTimeout(() => {
            alertElement.classList.add('fade-out');
            setTimeout(() => {
                document.body.removeChild(alertElement);
            }, 500);
        }, 2000);
    }

    // Inisialisasi tampilan
    showMainCategories();
});