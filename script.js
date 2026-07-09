// Book Review App / Sebastian Miletic
// Each review becomes its own tab.

const STORAGE_KEY = 'sm_book_reviews';

function getReviews() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveReviews(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
}

const SEEDED_KEY = 'sm_book_reviews_seeded_v4';

function seedReviews() {
    if (localStorage.getItem(SEEDED_KEY)) return;
    const seed = [{
        id: 'strange-objects-1991',
        title: 'Strange Objects',
        author: 'Gary Crew',
        genre: 'Young Adult',
        rating: '2',
        dateFinished: '2025-05-10',
        summary: 'In 1986, sixteen year old Steven Messenger discovers a hidden iron pot in Western Australia containing a mummified human hand wearing a gold ring and a historical journal. After surrendering the hand to authorities, Steven secretly keeps the ring and begins suffering severe hallucinations and psychological changes. The book interweaves Steven\'s contemporary descent into madness with the translated journal of Wouter Loos, a Dutch mutineer marooned in Australia in 1629 alongside the teenage killer Jan Pelgrom. Dr Hope Michaels of the Institute of Maritime Archaeology frames the narrative by compiling Steven\'s scrapbook into a clinical report. The novel uses letters, newspaper clippings, journal entries, and mock footnotes to explore the Batavia shipwreck and its bloody aftermath across centuries.',
        review: 'Strange Objects tries to be different from normal teen books, but it doesn\'t really work. The story is confusing and way too depressing.\n\n1. No Ending. Steven just disappears. We never find out what the ring actually does or what happens to the Dutch guys in the end. The author leaves everything hanging and pretends it is deep, but it just feels like he could not be bothered finishing the story.\n\n2. Annoying Characters. Steven is not someone you root for. He is cocky, selfish, and just mean. His historical twin, Jan Pelgrom, is a crazy murderer. There is no one to like or care about, so watching them fall apart is boring instead of sad.\n\n3. Broken Up Storytelling. The scrapbook style ruins any flow. Every time Wouter\'s journal gets interesting, the book cuts to boring newspaper articles or fake footnotes. It makes reading feel like homework.\n\n4. Weird Mix of Genres. Historical fiction, horror, and random alien spaceship stuff are all chucked in together. The sci-fi bits feel completely random next to the serious Batavia story.\n\n5. Too Depressing. There is no hope, no jokes, no happy moments. It is just darkness the whole way through, which makes the book feel heavy and not fun to read at all.',
        cover: 'strange-objects-cover.jpg',
        createdAt: new Date('2025-05-10').toISOString()
    },
    {
        id: 'eragon-2003',
        title: 'Eragon',
        author: 'Christopher Paolini',
        genre: 'Fantasy',
        rating: '5',
        dateFinished: '2025-06-14',
        summary: 'Eragon is a fifteen year old farm boy living in Alagaesia, a land ruled by the evil King Galbatorix. While hunting in the Spine, a mountain range most people are scared to enter, Eragon finds a polished blue stone that turns out to be a dragon egg. The egg hatches into a dragon named Saphira, and Eragon secretly raises her while his uncle Garrow is killed by creatures called Ra\'zac, sent to find the egg. Eragon sets out on a revenge quest with Saphira and Brom, an old storyteller who is secretly a former Dragon Rider. Brom teaches Eragon magic, sword fighting, and the history of the Dragon Riders, an ancient order wiped out by Galbatorix and his followers. After Brom is killed, Eragon travels to the Varden, a rebel group hiding in the mountain city of Farthen Dur, where he joins a massive battle against an army of Urgals and a Shade named Durza.',
        review: 'Eragon is honestly one of the best books I have ever read. It is long but I literally did not want to put it down.\n\n1. The World. Alagaesia feels real. Paolini gives you history, legends, languages, and geography without ever just dumping it on you. The Spine, the Beor Mountains, Farthen Dur, it all has weight behind it.\n\n2. Saphira. Eragon and Saphira\'s bond is the best part of the book. The way she talks to him in his head, protects him, and teases him feels like a real friendship, not just a pet thing. She has attitude and I love it.\n\n3. Brom. Brom teaching Eragon magic and sword fighting is my favourite part. He is grumpy and secretive but you can tell he actually cares about Eragon. When he dies it actually hurt to read.\n\n4. The Magic System. Magic in this book is not just saying words and stuff happens. You have to understand the true name of what you are doing, and it costs you energy equal to doing the task by hand. It makes magic feel dangerous and smart.\n\n5. The Big Battle. The battle at Farthen Dur against the Urgals and Durza is epic. Eragon is exhausted, hurt, and way out of his depth, which made it feel real instead of him just being overpowered.\n\nMy only small complaint is that sometimes you can tell Paolini was young when he wrote it, like some of the dialogue is a bit cheesy. But honestly it does not matter because the story is so good. I would recommend this to anyone who likes fantasy, dragons, or just a really good adventure. I am already reading Eldest.',
        cover: 'eragon-cover.jpg',
        createdAt: new Date('2025-06-14').toISOString()
    },
    {
        id: 'the-chibineko-kitchen-2021',
        title: 'The Chibineko Kitchen',
        author: 'Yuta Takahashi',
        genre: 'Fiction',
        rating: '3',
        dateFinished: '2025-07-02',
        summary: 'Kiyo is a young chef whose life in Tokyo has fallen apart. Heartbroken and unsure what to do next, he moves back to his small hometown and to the Chibineko Kitchen, the little diner run by his grandmother. She is getting older and her memory is starting to fade, but the recipes she has cooked for decades still connect her to the people she loves. As Kiyo takes over the kitchen, he cooks the same simple, comforting dishes and serves them to customers who come carrying their own grief and worries. The book follows Kiyo as he slowly heals through cooking, reconnects with his grandmother, and learns what it means to care for someone whose memory is slipping away. It is a quiet story about grief, memory, family, and how food can carry love across generations.',
        review: 'The Chibineko Kitchen was nice but a bit slower than I expected, and I liked it a lot less than Eragon.\n\n1. The Grandmother Relationship. The best part was Kiyo and his grandmother. She has dementia so sometimes she remembers him, sometimes she does not. The scenes where he cooks old family recipes and she briefly remembers are actually really touching.\n\n2. Slow Pacing. Nothing really dramatic happens. It is just Kiyo cooking, taking care of his grandmother, and thinking about his life. Sometimes that was peaceful, but sometimes it dragged and I found my mind wandering.\n\n3. Food Writing. The food descriptions are really good, maybe too good, because I kept getting hungry reading it. Each chapter is built around a dish and it does make you think about how food is connected to memory.\n\n4. Kiyo. He is fine. He is not annoying like Steven from Strange Objects, but he is not super interesting either. Mostly he is just sad and tired. I wanted him to have a bit more fight in him.\n\n5. Ending. The ending is sad but kind of warm at the same time. It did not blow me away but it felt right for the story.\n\nOverall it was okay. Decent compared to Strange Objects, but nowhere near as good as Eragon. I would recommend it if you like slow, emotional books about food and family, but it is not the kind of book I would read again.',
        cover: 'chibineko-cover.jpg',
        createdAt: new Date('2025-07-02').toISOString()
    }];
    saveReviews(seed);
    localStorage.setItem(SEEDED_KEY, 'true');
}

function getStars(rating) {
    const num = parseInt(rating, 10);
    return '★'.repeat(num) + '☆'.repeat(5 - num);
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function truncate(str, len) {
    if (str.length <= len) return str;
    return str.slice(0, len - 1) + '…';
}

/* ---------- TABS ---------- */

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.tab === tabId) btn.classList.add('active');
    });

    // Scroll active tab into view in navbar
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- DYNAMIC BOOK TABS & SECTIONS ---------- */

function createBookTab(review, navTabs) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.className = 'tab-btn';
    btn.dataset.tab = `book-${review.id}`;
    btn.textContent = truncate(review.title, 22);
    btn.title = review.title;
    btn.addEventListener('click', () => switchTab(`book-${review.id}`));
    li.appendChild(btn);
    navTabs.insertBefore(li, navTabs.lastElementChild);
}

function createBookSection(review, container) {
    const section = document.createElement('section');
    section.id = `book-${review.id}`;
    section.className = 'tab-content';
    const coverHtml = review.cover
        ? `<img src="${escapeHtml(review.cover)}" alt="${escapeHtml(review.title)} cover" class="cover-img">`
        : '<span>📖</span>';

    section.innerHTML = `
        <div class="book-page">
            <div class="book-header">
                <div class="book-header-cover">${coverHtml}</div>
                <div class="book-header-text">
                    <h1>${escapeHtml(review.title)}</h1>
                    <p class="book-author">by ${escapeHtml(review.author)}</p>
                    <div class="book-meta">
                        <span class="genre-tag">${escapeHtml(review.genre)}</span>
                        <span class="book-rating">${getStars(review.rating)}</span>
                    </div>
                </div>
            </div>
            <div class="book-block">
                <h3>Summary</h3>
                <p class="summary-text">${escapeHtml(review.summary || review.review)}</p>
            </div>
            <div class="book-block">
                <h3>My Review</h3>
                <p>${escapeHtml(review.review).replace(/\n/g, '<br>')}</p>
            </div>
            <div class="book-footer">
                <span>Finished ${formatDate(review.dateFinished)}</span>
                <button class="delete-book-btn" data-id="${review.id}">Delete Review</button>
            </div>
        </div>
    `;
    container.appendChild(section);

    const delBtn = section.querySelector('.delete-book-btn');
    delBtn.addEventListener('click', () => deleteReview(review.id));
}

let galleryInterval = null;

function updateHeroGallery() {
    const track = document.querySelector('.cover-slides');
    if (!track) return;

    const reviews = getReviews().filter(r => r.cover);

    if (!reviews.length) {
        track.innerHTML = '<div class="cover-slide"><div class="cover-placeholder">📖</div></div>';
        return;
    }

    track.innerHTML = reviews.map(r => `
        <div class="cover-slide">
            <img src="${escapeHtml(r.cover)}" alt="${escapeHtml(r.title)} cover">
        </div>
    `).join('');

    if (galleryInterval) clearInterval(galleryInterval);
    let current = 0;
    if (reviews.length > 1) {
        galleryInterval = setInterval(() => {
            current = (current + 1) % reviews.length;
            track.style.transform = `translateX(-${current * 100}%)`;
        }, 3500);
    } else {
        track.style.transform = 'translateX(0)';
    }
}

function rebuildTabsAndSections() {
    const navTabs = document.getElementById('nav-tabs');
    const container = document.getElementById('book-sections');

    // Remove existing dynamic tabs (keep Home and About)
    const staticTabs = Array.from(navTabs.children);
    for (const li of staticTabs) {
        const btn = li.querySelector('.tab-btn');
        const tab = btn?.dataset.tab;
        if (tab && tab !== 'home' && tab !== 'about') {
            li.remove();
        }
    }

    // Remove existing book sections
    container.innerHTML = '';

    const reviews = getReviews();

    // Sort by date finished descending
    reviews.sort((a, b) => new Date(b.dateFinished) - new Date(a.dateFinished));

    for (const review of reviews) {
        createBookTab(review, navTabs);
        createBookSection(review, container);
    }

    updateHeroGallery();
}

/* ---------- DELETE ---------- */

function deleteReview(id) {
    if (!confirm('Delete this review?')) return;
    const reviews = getReviews().filter(r => r.id !== id);
    saveReviews(reviews);
    rebuildTabsAndSections();
    updateStats();
    updateOverviewSection();
    updateReadingList();
    updateHeroGallery();
    switchTab('home');
}

/* ---------- STATS ---------- */

function updateStats() {
    const reviews = getReviews();
    const count = reviews.length;
    const booksCount = document.getElementById('books-count');
    const reviewsCount = document.getElementById('reviews-count');
    if (booksCount) booksCount.textContent = count;
    if (reviewsCount) reviewsCount.textContent = count;
}

/* ---------- OVERVIEW SECTION ---------- */

function updateOverviewSection() {
    const container = document.getElementById('overview-card');
    const reviews = getReviews();

    if (!reviews.length) {
        container.innerHTML = `
            <div class="overview-placeholder">
                <p>No books reviewed yet.</p>
                <button class="cta-btn" onclick="openModal()">Add Your First Review</button>
            </div>
        `;
        return;
    }

    const latest = [...reviews].sort((a, b) => new Date(b.dateFinished) - new Date(a.dateFinished))[0];
    const snippet = (latest.summary || latest.review).slice(0, 220);
    const hasMore = (latest.summary || latest.review).length > 220;
    const coverHtml = latest.cover
        ? `<img src="${escapeHtml(latest.cover)}" alt="${escapeHtml(latest.title)} cover" class="cover-img">`
        : '<span>📖</span>';

    container.innerHTML = `
        <div class="overview-card">
            <div class="overview-cover">${coverHtml}</div>
            <div class="overview-details">
                <div class="overview-title">${escapeHtml(latest.title)}</div>
                <div class="overview-author">by ${escapeHtml(latest.author)}</div>
                <div class="overview-meta">
                    <span class="overview-genre">${escapeHtml(latest.genre)}</span>
                    <span class="overview-stars">${getStars(latest.rating)}</span>
                </div>
                <div class="overview-snippet">${escapeHtml(snippet)}${hasMore ? '…' : ''}</div>
                <button class="cta-btn overview-btn" onclick="switchTab('book-${latest.id}')">Read Full Review</button>
            </div>
        </div>
    `;
}

/* ---------- READING LIST ---------- */

function updateReadingList() {
    const container = document.getElementById('reading-list');
    const reviews = getReviews();

    if (!reviews.length) {
        container.innerHTML = '<div class="reading-empty">No books yet. Hit the + button to add one.</div>';
        return;
    }

    const sorted = [...reviews].sort((a, b) => new Date(b.dateFinished) - new Date(a.dateFinished));

    container.innerHTML = sorted.map(r => `
        <div class="reading-row" onclick="switchTab('book-${r.id}')">
            <div class="reading-row-title">${escapeHtml(r.title)}</div>
            <div class="reading-row-author">${escapeHtml(r.author)}</div>
            <div class="reading-row-stars">${getStars(r.rating)}</div>
            <div class="reading-row-date">${formatDate(r.dateFinished)}</div>
        </div>
    `).join('');
}

/* ---------- MODAL ---------- */

function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

/* ---------- INIT ---------- */

function init() {
    // Pre-seed the Strange Objects review if this is the first visit
    seedReviews();

    // Build existing reviews into tabs
    rebuildTabsAndSections();
    updateStats();
    updateOverviewSection();
    updateReadingList();

    // Static tab buttons (Home, About)
    document.querySelectorAll('.tab-btn[data-tab="home"], .tab-btn[data-tab="about"]').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });

    // Add (+) button
    document.getElementById('add-btn').addEventListener('click', openModal);

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Form submit
    const form = document.getElementById('review-form');
    const dateInput = document.getElementById('date-finished');
    if (dateInput) dateInput.valueAsDate = new Date();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const genre = document.getElementById('genre').value;
        const rating = document.getElementById('rating').value;
        const dateFinished = document.getElementById('date-finished').value;
        const summary = document.getElementById('summary').value.trim();
        const reviewText = document.getElementById('review-text').value.trim();

        if (!title || !author || !genre || !rating || !dateFinished || !summary || !reviewText) return;

        const newReview = {
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
            title,
            author,
            genre,
            rating,
            dateFinished,
            summary,
            review: reviewText,
            createdAt: new Date().toISOString()
        };

        const reviews = getReviews();
        reviews.push(newReview);
        saveReviews(reviews);

        form.reset();
        if (dateInput) dateInput.valueAsDate = new Date();
        closeModal();

        // Rebuild tabs and sections, then switch to the new book
        rebuildTabsAndSections();
        updateStats();
        updateOverviewSection();
        updateReadingList();
        updateHeroGallery();
        switchTab(`book-${newReview.id}`);
    });
}

document.addEventListener('DOMContentLoaded', init);
