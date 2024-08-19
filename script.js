document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const linkData = {
        whatsapp: {
            daerah: [
                { name: 'informasi Formasi', url: 'https://whatsapp.com/channel/0029Val5EQ8KWEKqdW8FGa1l' },
                { name: 'Aceh', url: 'https://chat.whatsapp.com/EJNOTRyAH1qDqYFGVPbd1w' },
                { name: 'Bali', url: 'https://chat.whatsapp.com/EFvuG6V1f5gLkdSimM1ubj' },
                { name: 'Banten', url: 'https://chat.whatsapp.com/FQI228VkrJ17hTsVhTADlC' },
                { name: 'Bengkulu', url: 'https://chat.whatsapp.com/C7xALcq7cPG0vxnBC8vIsX' },
                { name: 'DKI Jakarta', url: 'https://chat.whatsapp.com/FNRgq0YDjUFJfU6mHslYbU' },
                { name: 'Jawa Barat', url: 'https://chat.whatsapp.com/DKewPqfoTy4JLtyijmhA33' },
                { name: 'Jawa Tengah', url: 'https://chat.whatsapp.com/GOjGfzzpADc7hb4Wt2KbDI' },
                { name: 'Jawa Timur', url: 'https://chat.whatsapp.com/G1pGrtkgbs74UEVSGHUWUc' },
                { name: 'DI Yogyakarta', url: 'https://chat.whatsapp.com/Gm8HOulyZUC9fwI4yOrUBG' },
                { name: 'Sumatera Utara', url: 'https://chat.whatsapp.com/DnNmyFHzcyI5bDO7zUIDnb' },
                { name: 'Sumatera Barat', url: 'https://chat.whatsapp.com/E1OJy2oiYM25OFrRrHVqDS' },
                { name: 'Sumatera Selatan', url: 'https://chat.whatsapp.com/BmH4vC3VTUj8r60PFdCQyi' },
                { name: 'Lampung', url: 'https://chat.whatsapp.com/LOy0jJcm31pLlgn7XtpL9o' },
                { name: 'Riau', url: 'https://chat.whatsapp.com/GPZntMs1csp9NiWgEyDJLr' },
                { name: 'Kepulauan Riau', url: 'https://chat.whatsapp.com/IgkkYyg64kDGM7RxvpqJim' },
                { name: 'Jambi', url: 'https://chat.whatsapp.com/FWQciglmJjXCX4lFJuFATQ' },
                { name: 'Kepulauan Bangka Belitung', url: 'https://chat.whatsapp.com/LHq4zCCrcbw5zD5zaVOwHU' },
                { name: 'Nusa Tenggara Barat', url: 'https://chat.whatsapp.com/FeX91vNVJDp6Vaz3nfSOO9' },
                { name: 'Nusa Tenggara Timur', url: 'https://chat.whatsapp.com/LBFXRBwB3yRBE7qCpuizmQ' },
                { name: 'Kalimantan Barat', url: 'https://chat.whatsapp.com/D9tfp08fijBKed5M5VHTni' },
                { name: 'Kalimantan Tengah', url: 'https://chat.whatsapp.com/LDj0SfsgSjYG6yGDqtd3cY' },
                { name: 'Kalimantan Selatan', url: 'https://chat.whatsapp.com/GkoHF0DkN1Y1Iq8MWFglvk' },
                { name: 'Kalimantan Timur', url: 'https://chat.whatsapp.com/CNoudd8fZTW0WZWQ6LIDNa' },
                { name: 'Kalimantan Utara', url: 'https://chat.whatsapp.com/LQPnfP4GsE9Klc6EUs6TsK' },
                { name: 'Sulawesi Utara', url: 'https://chat.whatsapp.com/IUIR6CCRjZu5W52gqir8ym' },
                { name: 'Gorontalo', url: 'https://chat.whatsapp.com/HeiJ9kVBMLU8uldWmGPrIF' },
                { name: 'Sulawesi Tengah', url: 'https://chat.whatsapp.com/Hyw7YkPZmU0539b20LyMp7' },
                { name: 'Sulawesi Barat', url: 'https://chat.whatsapp.com/B9QMvfWZKHjLftRDD0irgQ' },
                { name: 'Sulawesi Selatan', url: 'https://chat.whatsapp.com/DBeOBT0oWdUDjQdbLELpBW' },
                { name: 'Sulawesi Tenggara', url: 'https://chat.whatsapp.com/CFO2mi5I9TSDEq2KU8lkid' },
                { name: 'Maluku', url: 'https://chat.whatsapp.com/Gv9DZGKmObW1Nac7kftDWF' },
                { name: 'Maluku Utara', url: 'https://chat.whatsapp.com/CPmI7iVhHF3AnT4s7L9LNG' },
                { name: 'Papua Barat', url: 'https://chat.whatsapp.com/EHmSkM1E0Ok2aQP3JYQhcu' },
                { name: 'Papua', url: 'https://chat.whatsapp.com/HsWWMklTMqBL8zVp9RxwW3' }
            ],
            instansi: [
                { name: 'informasi Formasi', url: 'https://whatsapp.com/channel/0029Val5EQ8KWEKqdW8FGa1l' },
                { name: 'Kemenkumham', url: 'https://chat.whatsapp.com/DU8hy3PWdb01w2sWsw1SQ8' },
                { name: 'Kominfo', url: 'https://chat.whatsapp.com/DkCLsHpr2KGJHqo9HCajIR' },
                { name: 'Komisi Pemilihan Umum(KPU)', url: 'https://chat.whatsapp.com/EMMX5HzqpnH3hItIBdeYmT' },
                { name: 'Kementerian Pertahanan', url: 'https://chat.whatsapp.com/FpCIJ73x3O2KAiWLm5mYwO' },
                { name: 'Kementerian Perhubungan', url: 'https://chat.whatsapp.com/GB8BIhFp870DPX4peVUECA' },
                { name: 'Kejaksaan Agung', url: 'https://chat.whatsapp.com/JPtDBROV56BH8yjBBqY5QO' },
                { name: 'Mahkamah Agung Republik Indonesia (MA)', url: 'https://chat.whatsapp.com/KkxoOmYYwkY7IS1D1DjM5k' },
                { name: 'BKKBN', url: 'https://chat.whatsapp.com/K88KkRp2h9OKrovyhRHeOy' },
                { name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud)', url: 'https://chat.whatsapp.com/DbDzyngn9MfKDzdNPEqgcI' },
                { name: 'Badan Intelijen Negara (BIN)', url: 'https://chat.whatsapp.com/Id06bdqN0COAtRVduhmugR' },
                { name: 'Sekretariat Jenderal DPR RI', url: 'https://chat.whatsapp.com/CQQeP2Y8fmJBAQCud0lNPi' },
                { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/L9yeLROPu5aAETSTElzd4k' },
                { name: 'Pusat Pelaporan dan Analisis Transaksi Keuangan (PPATK)', url: 'https://chat.whatsapp.com/BfH9D095VHZ6ELytHyGNlQ' },
                { name: 'Kementerian Kesehatan (Kemenkes)', url: 'https://chat.whatsapp.com/Gzr5q45TsYS3TwJ8rBQmMG' },
                { name: 'Kementerian Agama RI (Kemenag)', url: 'https://chat.whatsapp.com/CCfhzlH4vHk63oGU3Aghql' },
                { name: 'Kementerian Pertanian (Mentan)', url: 'https://chat.whatsapp.com/IiUi9W07u3bGvUJAru9Erb' },
                { name: 'Sekretariat Jenderal Komisi Pemberantasan Korupsi (Setjen KPK)', url: 'https://chat.whatsapp.com/JJSji6jMaBnATHseG5h5Ad' },
                { name: 'Kementerian ATR/BPN', url: 'https://chat.whatsapp.com/J4QJnNYmLjABJHv0urJBZ4' },
                { name: 'Badan Pengawas Pemilu (Bawaslu)', url: 'https://chat.whatsapp.com/LKdjYuQmHuS8tfVGCVgLnW' },
                { name: 'Badan Nasional Pencarian dan Pertolongan (Basarnas)', url: 'https://chat.whatsapp.com/EEMJ9iqoZyBLQ9RLjfcCto' },
                { name: 'Kementerian PUPR RI', url: 'https://chat.whatsapp.com/CtdqBeSMPmtCACHQQTgowI' },
                { name: 'Kementerian Pan-RB', url: 'https://chat.whatsapp.com/HvUBlZKDM4C1b2b26afxH5' },
                // ... (sisanya tetap sama)
            ]
        },
        telegram: {
            instansi: [
                { name: 'DISKUSI CPNS 2024 - Umum', url: 'https://t.me/cpnsindonesia24' },
                { name: 'CHANNEL INFORMASI FORMASI', url: 'https://t.me/formasicpns24' },
                { name: 'KEMENTERIAN PERTAHANAN', url: 'https://t.me/kemenhan2024' },
                { name: 'KEMENTERIAN KOMINFO', url: 'https://t.me/cpnskominfo' },
                { name: 'KEJAKSAAN', url: 'https://t.me/cpnskejaksaan2024' },
                { name: 'KEMENTERIAN AGAMA', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENKUMHAM', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENTERIAN PAN RB', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENTERIAN KESEHATAN', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENDIKBUDRISTEK', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENTERIAN PUPR', url: 'https://t.me/cpnsindonesia24' },
                { name: 'MAHKAMAH AGUNG', url: 'https://t.me/cpnsindonesia24' },
                { name: 'KEMENTERIAN PERHUBUNGAN', url: 'https://t.me/cpnsindonesia24' },
                { name: 'BAWASLU', url: 'https://t.me/cpnsindonesia24' },
                { name: 'BASARNAS', url: 'https://t.me/cpnsindonesia24' },
                // Tambahkan instansi lain sesuai kebutuhan
            ],
            formasi: [
                { name: 'DISKUSI CPNS 2024 - Formasi Umum', url: 'https://t.me/cpnsindonesia24' },
                { name: 'CHANNEL INFORMASI FORMASI', url: 'https://t.me/formasicpns24' },
                { name: 'KEMENTERIAN PERTAHANAN', url: 'https://t.me/kemenhan2024' },
                { name: 'Link Ready Setelah Pengunguman Resmi', url: 'https://t.me/cpnsindonesia24' },
                { name: 'Link Ready Setelah Pengunguman Resmi', url: 'https://t.me/cpnsindonesia24' },
                { name: 'Link Ready Setelah Pengunguman Resmi', url: 'https://t.me/cpnsindonesia24' },
                { name: 'Link Ready Setelah Pengunguman Resmi', url: 'https://t.me/cpnsindonesia24' },
                { name: 'Link Ready Setelah Pengunguman Resmi', url: 'https://t.me/cpnsindonesia24' },
                // Tambahkan formasi lain sesuai kebutuhan
            ]
        },
        contact: [
            { name: 'WhatsApp', content: 'Hubungi Kami✅' }
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
            showTelegramSubcategories();
        } else if (category === 'contact') {
            showContactInfo();
        }
    }

    function showWhatsAppSubcategories() {
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button>';
        html += `
            <div class="category-container">
                <div class="category" data-category="whatsapp" data-subcategory="daerah">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Daerah</span>
                </div>
                <div class="category" data-category="whatsapp" data-subcategory="instansi">
                    <i class="fas fa-building"></i>
                    <span>Instansi</span>
                </div>
            </div>
        `;
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', showMainCategories);
        document.querySelectorAll('.category').forEach(cat => {
            cat.addEventListener('click', () => showLinks(cat.dataset.category, cat.dataset.subcategory));
        });
    }

    function showTelegramSubcategories() {
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button>';
        html += `
            <div class="category-container">
                <div class="category" data-category="telegram" data-subcategory="instansi">
                    <i class="fas fa-building"></i>
                    <span>Instansi</span>
                </div>
                <div class="category" data-category="telegram" data-subcategory="formasi">
                    <i class="fas fa-users"></i>
                    <span>Formasi</span>
                </div>
            </div>
        `;
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', showMainCategories);
        document.querySelectorAll('.category').forEach(cat => {
            cat.addEventListener('click', () => showLinks(cat.dataset.category, cat.dataset.subcategory));
        });
    }

    function showLinks(category, subcategory) {
        const links = linkData[category][subcategory];
        let html = '<button class="back-button"><i class="fas fa-arrow-left"></i> Kembali</button><ul class="links">';
        links.forEach(link => {
            const icon = category === 'whatsapp' ? 'fa-whatsapp' : 'fa-telegram';
            html += `
                <li class="link-box">
                    <a href="${link.url}" target="_blank">
                        <i class="fab ${icon}"></i>
                        <span>${link.name}</span>
                        <i class="fas fa-copy copy-icon" data-url="${link.url}"></i>
                    </a>
                </li>`;
        });
        html += '</ul>';
        mainContent.innerHTML = html;
        mainContent.classList.add('fade-in');
        document.querySelector('.back-button').addEventListener('click', () => {
            if (category === 'whatsapp') {
                showWhatsAppSubcategories();
            } else if (category === 'telegram') {
                showTelegramSubcategories();
            }
        });
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
                    <a href="https://wa.me/6285171546073?text=Halo%20Mimin%20Cpns" target="_blank">
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
        notificationIcon.innerHTML = '<i class="fas fa-bell"></i><span class="notification-count">3</span>';
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
                    <img src="./img/ss.png" alt="Logo" class="notification-image">
                    <h4>Kuota Formasi Kab Sijunjung,Bireun Aceh DLL</h4>
                    <p class="notification-text">Silahkan Join Group Untuk File Lengkap. <a href="https://www.groupcpns2024.com/">Baca selengkapnya</a></p>
                    <span class="notification-time">Today</span>
                </div>
                <div class="notification-item">
                    <div class="notification-icon-small"><i class="fas fa-info-circle"></i></div>
                    <h4>INFORMASI</h4>
                    <p class="notification-text">Join Ke Group Secukupnya tidak Perlu semua.</p>
                    <span class="notification-time">today</span>
                </div>
                <div class="notification-item">
                    <div class="notification-icon-small"><i class="fas fa-exclamation-triangle"></i></div>
                    <h4>Tempat Cari Link Belajar&Informasi Terlengkap</h4>
                    <p class="notification-text">Group Instansi,Group Belajar,Grup Tryout,Group Informasi</p>
                    <span class="notification-time">Today</span>
                </div>
            </div>
            <div class="notification-footer">
                <button id="markAllRead">Tandai semua telah dibaca</button>
            </div>
        `;
        document.body.appendChild(notificationPanel);
    
        notificationIcon.addEventListener('click', () => {
            notificationPanel.style.display = notificationPanel.style.display === 'block' ? 'none' : 'block';
            notificationIcon.classList.toggle('active');
        });
    
        const closeButton = notificationPanel.querySelector('#closeNotifications');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                notificationPanel.style.display = 'none';
                notificationIcon.classList.remove('active');
            });
        }
    
        const markAllReadButton = notificationPanel.querySelector('#markAllRead');
        if (markAllReadButton) {
            markAllReadButton.addEventListener('click', () => {
                const notificationItems = notificationPanel.querySelectorAll('.notification-item');
                notificationItems.forEach(item => item.classList.add('read'));
                notificationIcon.querySelector('.notification-count').textContent = '0';
            });
        }
    }    
        
    // Inisialisasi tampilan
    showMainCategories();

    // Setup notifikasi
    setupNotifications();
});
