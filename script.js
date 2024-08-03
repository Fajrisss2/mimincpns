document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const linkData = {
        whatsapp: {
            daerah: [
                { name: 'Sumatera Utara', url: 'https://chat.whatsapp.com/FtGzUnUvLanB42cKpJpEP8' },
                { name: 'Sumatera Barat', url: 'https://chat.whatsapp.com/J2Zby3iB41T8cUvsEB2eOT' },
                { name: 'Aceh', url: 'https://chat.whatsapp.com/IkmM2MsSYba73sgqQN4YWJ' },
                // ... (sisanya tetap sama)
            ],
            instansi: [
                { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/L9yeLROPu5aAETSTElzd4k' },
                { name: 'Kemenkumham', url: 'https://chat.whatsapp.com/Fcuq1buii6NHXpmA1zFh0l' },
                { name: 'Kemenkumham Grup 2', url: '' },
                // ... (sisanya tetap sama)
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
            { name: 'WhatsApp', content: 'Hubungi Kami' }
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

    function setupNotifications() {
        const notificationIcon = document.createElement('div');
        notificationIcon.className = 'notification-icon';
        notificationIcon.innerHTML = '<i class="fas fa-bell"></i><span class="notification-count">2</span>';
        document.body.appendChild(notificationIcon);

        const notificationPanel = document.createElement('div');
        notificationPanel.className = 'notification-panel';
        notificationPanel.innerHTML = `
            <div class="notification-header">
                <h3>Notifications</h3>
                <button id="closeNotifications">&times;</button>
            </div>
            <div class="notification-list">
                <div class="notification-item">
                    <h4>Welcome!</h4>
                    <p>Welcome to your new profile page!</p>
                </div>
                <div class="notification-item">
                    <h4>New Feature</h4>
                    <p>Check out the new notification system!</p>
                </div>
            </div>
        `;
        document.body.appendChild(notificationPanel);

        notificationIcon.addEventListener('click', () => {
            notificationPanel.style.display = notificationPanel.style.display === 'block' ? 'none' : 'block';
        });

        const closeButton = notificationPanel.querySelector('#closeNotifications');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                notificationPanel.style.display = 'none';
            });
        } else {
            console.error('Close button not found');
        }

        console.log('Notification panel created:', notificationPanel);
        console.log('Close button found:', closeButton);
    }

    // Inisialisasi tampilan
    showMainCategories();

    // Setup notifikasi
    setupNotifications();
});
