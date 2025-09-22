// let intro = document.querySelector('.intro');
// let logo = document.querySelector('.logo-header');
// let logoSpan = document.querySelectorAll('.splash-logo');

// window.addEventListener('DOMContentLoaded', () => {

//     setTimeout(()=>{

//        logoSpan.forEach((span, idx) => {
//             setTimeout(() => {
//                 span.classList.add('active');
//             }, (idx + 1) * 400)
//         });

//         setTimeout(() => {
//             logoSpan.forEach((span, idx) => {

//                 setTimeout(() => {
//                     span.classList.remove('active');
//                     span.classList.add('fade');
//                 }, (idx +1) * 50)
//             })
//         }, 2000);

//         setTimeout(() => {
//             intro.style.top = '-100vh';
//         }, 1000);

//     })
// })



// -------------------- NAV SCROLL EFFECT --------------------
const navbar = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// -------------------- BOOK TABS: data + rendering --------------------
const BOOK_READ_DATA = [
  // ---- Grey Man series ----
  {
    cover: '/img/books/gm1.jpg',
    title: 'The Gray Man',
    author: 'Mark Greaney',
    note: 'The #1 Gray Man novel. The go-to book to enjoy action. It is rare but the movie is just as good.',
    rating: 4.8
  },
  {
    cover: '/img/books/gm2.jpg',
    title: 'On Target',
    author: 'Mark Greaney',
    note: 'A Gray Man novel. Sustained, did not disappoint.',
    rating: 4.3
  },
  {
    cover: '/img/books/gm3.jpg',
    title: 'Ballistic',
    author: 'Mark Greaney',
    note: 'A Gray Man novel. A bit monotonous.',
    rating: 4
  },
  {
    cover: '/img/books/gm4.jpg',
    title: 'Burner',
    author: 'Mark Greaney',
    note: 'A Gray Man novel.',
    rating: 4.5
  },

  {
    cover: '/img/books/tjnd.jpg',
    title: 'Drowning: The Rescue of Flight 1421 ----------- Most Recent',
    author: 'T. J. Newman',
    note: 'High-stakes aviation thriller about a downed flight and a race against time underwater.',
    rating: 4.3
  },


  // ---- Dan Brown series ----
  {
    cover: '/img/books/dbad.jpg',
    title: 'Angels & Demons',
    author: 'Dan Brown',
    note: 'Robert Langdon series. My first Dan Brown book. Fantastic & gripping. Could not put the book down.',
    rating: 4.8
  },
  {
    cover: '/img/books/dbdvc.jpg',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    note: 'Robert Langdon series.',
    rating: 4.5
  },
  {
    cover: '/img/books/dbo.jpg',
    title: 'Origin',
    author: 'Dan Brown',
    note: 'Robert Langdon series.',
    rating: 0
  },

  // ---- Shawshank Redemption (+ extra King you added) ----
  {
    cover: '/img/books/ssr.jpg',
    title: 'The Shawshank Redemption',
    author: 'Stephen King',
    note: 'Novella (Rita Hayworth and Shawshank Redemption). Picked it up at an airport. A must-read!',
    rating: 4.5
  },
  {
    cover: '/img/books/skbs.jpg',
    title: 'Billy Summers --------------------------- Currently Reading',
    author: 'Stephen King',
    note: 'Standalone thriller.',
    rating: 0
  },

  // ---- James Patterson ----
  {
    cover: '/img/books/jpacas.jpg',
    title: 'Along Came a Spider',
    author: 'James Patterson',
    note: 'Alex Cross #1.',
    rating: 4.5
  },
  {
    cover: '/img/books/jppi.jpg',
    title: 'Private India',
    author: 'James Patterson & Ashwin Sanghi',
    note: 'Private series (India). Not a James Patterson-level book.',
    rating: 2.5
  },

  // ---- Hound of the Baskervilles ----
  {
    cover: '/img/books/shb.jpg',
    title: 'The Hound of the Baskervilles',
    author: 'Arthur Conan Doyle',
    note: 'Sherlock Holmes, my first ever novel. My buddy handed this book to me at my school library & there is no turning back.',
    rating: 5
  },

  // ---- Dr. JMH ----
  {
    cover: '/img/books/djmh.jpg',
    title: 'Strange Case of Dr Jekyll and Mr Hyde',
    author: 'Robert Louis Stevenson',
    note: 'Gothic novella. My childhood read, & an introduction to western stories. Was quite fascinated.',
    rating: 4.5
  },

  // ---- HP Series ----
  {
    cover: '/img/books/hp1.jpg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    note: 'Harry Potter #1.',
    rating: 4.5
  },
  {
    cover: '/img/books/hp2.jpg',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    note: 'Harry Potter #2.',
    rating: 4.5
  },
  {
    cover: '/img/books/hp3.jpg',
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
    note: 'Harry Potter #3.',
    rating: 4.5
  },
  {
    cover: '/img/books/hp4.jpg',
    title: 'Harry Potter and the Goblet of Fire',
    author: 'J.K. Rowling',
    note: 'Harry Potter #4.',
    rating: 4.5
  },
  {
    cover: '/img/books/apj.jpg',
    title: 'Wings of Fire',
    author: 'A. P. J. Abdul Kalam (with Arun Tiwari)',
    note: 'Autobiography tracing Kalam’s journey from Rameswaram to ISRO/DRDO and India’s missile program.',
    rating: 5
  },
  {
    cover: '/img/books/pcta.jpg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    note: 'This was pretty decent and a good read.',
    rating: 4
  },
  {
    cover: '/img/books/askk.jpg',
    title: 'Keepers of the Kalachakra',
    author: 'Ashwin Sanghi',
    note: 'Mythology-meets-science thriller.',
    rating: 2
  }
];
// ----------------------------------------------WISHLIST DATA----------------//

const BOOK_WISHLIST_DATA = [
  {
    cover: '/img/books/krbe.jpg',
    title: 'The Book of Elsewhere',
    author: 'Keanu Reeves & China Miéville',
    note: 'A BRZRKR novel.',
    rating: 0
  },
  {
    cover: '/img/books/lc1.jpg',
    title: 'Killing Floor',
    author: 'Lee Child',
    note: 'Jack Reacher #1.',
    rating: 0
  },
  {
    cover: '/img/books/jb1.jpg',
    title: 'The Bourne Identity',
    author: 'Robert Ludlum',
    note: 'Jason Bourne #1.',
    rating: 0
  },
  {
    cover: '/img/books/jb2.jpg',
    title: 'The Bourne Supremacy',
    author: 'Robert Ludlum',
    note: 'Jason Bourne #2.',
    rating: 0
  },
  {
    cover: '/img/books/jb3.jpg',
    title: 'The Bourne Ultimatum',
    author: 'Robert Ludlum',
    note: 'Jason Bourne #3.',
    rating: 0
  },
  {
    cover: '/img/books/jrngb.jpg',
    title: 'Jack Reacher: Never Go Back',
    author: 'Lee Child',
    note: 'Jack Reacher (movie tie-in).',
    rating: 0
  },
  {
    cover: '/img/books/jros.jpg',
    title: 'Jack Reacher: One Shot',
    author: 'Lee Child',
    note: 'Jack Reacher #9 (movie tie-in).',
    rating: 0
  }
];
// -----------------------------------------------------------------

const getBookTab = () => {
  const u = new URL(location.href);
  return (u.searchParams.get('tab') || 'read').toLowerCase();
};

const renderStars = (n = 0) => {
  // Show ★ for full stars, ½ for half, ☆ for the rest
  const full = Math.floor(n);
  const half = n - full >= 0.5 ? 1 : 0;
  const empty = Math.max(0, 5 - full - half);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
};

const renderBooksList = (items = []) => `
  <ul class="book-list">
    ${items.map(b => `
      <li>
        <article class="book-card">
          <img class="book-cover" src="${b.cover || ''}" alt="${b.title} cover" loading="lazy" />
          <div class="book-info">
            <h4 class="book-title">${b.title}</h4>
            <p class="book-author">by ${b.author || ''}</p>
            ${b.note ? `<p class="book-note">${b.note}</p>` : ''}
            <div class="book-rating" aria-hidden="true">${renderStars(b.rating)}</div>
            <span class="sr-only">Rating: ${b.rating || 0} out of 5</span>
          </div>
        </article>
      </li>
    `).join('')}
  </ul>
`;

const setActiveBookToggle = () => {
  const currentTab = getBookTab();
  document.querySelectorAll('.book-tog-link').forEach(a => {
    const linkTab = new URL(a.href, location.href).searchParams.get('tab') || 'read';
    const active = linkTab.toLowerCase() === currentTab;
    a.classList.toggle('is-active', active);
    a.setAttribute('aria-selected', String(active));
  });
};

const renderBookTab = () => {
  const mount = document.getElementById('book-content');
  if (!mount) return; // not on this page
  const tab = getBookTab();
  const data = tab === 'wishlist' ? BOOK_WISHLIST_DATA : BOOK_READ_DATA;
  mount.innerHTML = renderBooksList(data);
};

// ===== ABOUT - EXPERIENCE SECTION data =====
const EXP_DATA = {
  stanford: {
    title: 'Stanford University',
    sub: 'Intern | Software Engineer (2024–2025)',
    bullets: [
      'Built & deployed cross-service API integrations in JavaScript.',
      'Designed DW schemas for 2M+ records to improve query efficiency.',
      'Automated ETL pipelines; reduced manual effort significantly.'
    ]
  },
  discover_assoc: {
    title: 'Discover',
    sub: 'Associate Consultant (2021–2022)',
    bullets: [
      'Owned backend card services; improved availability & fault tolerance.',
      'Shipped monitoring dashboards; reduced MTTD.',
      'Ensured compliance & production readiness (SLIs/SLOs).'
    ]
  },
  discover_senior: {
    title: 'Discover',
    sub: 'Senior Software Engineer (2020–2021)',
    bullets: [
      'Led microservice hardening & incident response.',
      'Mentored junior developers; drove coding standards.',
      'Optimized critical paths; measurable latency reduction.'
    ]
  },
  discover_se: {
    title: 'Discover',
    sub: 'Software Engineer (2019–2020)',
    bullets: [
      'Implemented features across backend APIs and data integrations.',
      'Improved DB query performance.',
      'Added observability (metrics/logs).'
    ]
  },
  capgemini: {
    title: 'Capgemini',
    sub: 'Intern | Full-Stack Developer (2018–2019)',
    bullets: [
      'Prototyped REST APIs (Java/Spring) & React frontends.',
      'Wrote tests; raised coverage.',
      'Helped with CI basics and deployment scripts.'
    ]
  }
};

// ===== ABOUT - EXPERIENCE SECTION modal wiring (SPA-safe) =====
(() => {
  let lastTrigger = null;

  // Helper: always resolve the modal nodes *now*
  const getEls = () => {
    const modal = document.getElementById('exp-modal');
    const title = document.getElementById('exp-title');
    const sub   = document.getElementById('exp-sub');
    const list  = document.getElementById('exp-list');
    if (!modal || !title || !sub || !list) return null;
    return { modal, title, sub, list };
  };

  const renderExp = (key) => {
    const els = getEls();
    if (!els) return;
    const { title, sub, list } = els;
    const d = EXP_DATA[key];
    if (!d) return;
    title.textContent = d.title;
    sub.textContent   = d.sub || '';
    list.innerHTML    = (d.bullets || []).map(li => `<li>${li}</li>`).join('');
  };

  const openModal = () => {
    const els = getEls();
    if (!els) return;
    const { modal, title } = els;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('modal-open');
    title.focus?.();
  };

  const closeModal = () => {
    const els = getEls();
    if (!els) return;
    const { modal } = els;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-open');
    lastTrigger?.focus?.();
  };

  // Open on card click (delegated so it works after SPA loads about.html)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.experience-box[data-exp]');
    if (card) {
      e.preventDefault();  // prevent href="#" jump
      lastTrigger = card;
      renderExp(card.dataset.exp);
      openModal();
      return;
    }
    // Close on overlay click or [data-close]
    const els = getEls();
    if (els && (e.target === els.modal || e.target.closest?.('[data-close]'))) {
      closeModal();
    }
  });

  // Keyboard: Space to open, Esc to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeModal(); return; }
    const card = e.target.closest?.('.experience-box[data-exp]');
    if (card && e.key === ' ') {
      e.preventDefault();
      lastTrigger = card;
      renderExp(card.dataset.exp);
      openModal();
    }
  });
})();




// -------------------- SPA-LIKE ROUTER ----------------------
(() => {
  const app = document.querySelector('#app');
  if (!app) return;

  // Smooth-scroll Contact -> footer, and don't trigger the router
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href="#footer"]');
    if (!a) return;
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Treat "/", "", and "/index.html" as home
  const isHomePath = (pathname) => {
    const p = pathname.replace(/\/+$/, '');
    return p === '' || p === '/' || /\/index\.html$/.test(p);
  };

  const setRouteClass = (pathname) => {
    document.body.classList.toggle('is-internal', !isHomePath(pathname));
  };

  // -------------------- HERO (".text-box") MANAGER --------------------
  // Remove hero on internal routes; restore on home
  const HERO_SELECTOR = '.text-box';
  let heroNode = document.querySelector(HERO_SELECTOR) || null;
  const heroParent = heroNode?.parentNode || null;

  const ensureHeroFor = (pathname) => {
    const wantHero = isHomePath(pathname);
    const inDom = !!document.querySelector(HERO_SELECTOR);

    if (wantHero) {
      if (!inDom && heroNode && heroParent) heroParent.appendChild(heroNode);
    } else {
      if (inDom) {
        heroNode = document.querySelector(HERO_SELECTOR);
        heroNode?.remove();
      }
    }
  };

  // -------------------- ACTIVE NAV HIGHLIGHT --------------------
  const navLinks = Array.from(document.querySelectorAll('a.main-nav-link[data-link]'));
  const setActiveLink = (pathname) => {
    const current = pathname.replace(/\/+$/, '') || '/';
    navLinks.forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) return a.classList.remove('nav-active');

      const linkPath = new URL(href, location.origin).pathname.replace(/\/+$/, '') || '/';
      const isActive =
        (isHomePath(current) && isHomePath(linkPath)) ||
        (!isHomePath(current) && current === linkPath);

      a.classList.toggle('nav-active', isActive);
    });
  };


  // Normalize odd paths like "/about.html/" -> "/about.html"
  const normalize = (href) => {
    const u = new URL(href, location.href);
    u.pathname = u.pathname.replace(/\.html\/+$/, '.html');
    return u.href;
  };

  // Fetch a page and extract only the <main id="app"> content + <title>
  const fetchAppChunk = async (url) => {
    const res = await fetch(url, { headers: { 'X-Partial': 'true' } });
    if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
    const html = await res.text();
    const dom = new DOMParser().parseFromString(html, 'text/html');

    const chunk = dom.querySelector('#app');
    if (!chunk) throw new Error('No #app in fetched page');

    return {
      inner: chunk.innerHTML,
      title: dom.querySelector('title')?.textContent ?? document.title,
    };
  };

  const goto = async (url, push = true) => {
    const path = new URL(url, location.href).pathname;
    const { inner, title } = await fetchAppChunk(url);

    const swap = () => {
      // 1) update header hero + header size for this route
      ensureHeroFor(path);

      // 2) swap content
      app.innerHTML = inner;
      document.title = title;

      // a11y
      app.setAttribute('tabindex', '-1');
      app.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // 3) state classes + active link
      setRouteClass(path);
      setActiveLink(path);
      setActiveBookToggle();
      renderBookTab();
      window.initImageRotators && window.initImageRotators();  
    };

    if (document.startViewTransition) document.startViewTransition(swap);
    else swap();

    if (push) history.pushState({}, '', url);
  };

  // Intercept same-origin <a data-link>, allow in-page anchors like #footer
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-link]');
    if (!a) return;

    const href = a.getAttribute('href') || '';
    if (href.startsWith('#')) return;
    if (a.origin !== location.origin) return;

    e.preventDefault();
    const url = normalize(a.href);
    goto(url).catch(() => (window.location.href = url));
  });

  // Back/forward buttons
window.addEventListener('popstate', () => {
  // If only query changes (e.g., ?tab=read <-> ?tab=wishlist), just re-render books
  if (new URL(location.href).searchParams.has('tab')) {
    setActiveBookToggle();
    renderBookTab();
    return;
  }
  // Otherwise, perform normal SPA navigation
  goto(location.href, false);
});


  // Hover prefetch
  const prefetchCache = new Map();
  document.querySelectorAll('a[data-link]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || a.origin !== location.origin) return;
    a.addEventListener('mouseenter', () => {
      if (!prefetchCache.has(a.href)) {
        prefetchCache.set(a.href, fetch(a.href, { headers: { 'X-Partial': 'true' } }).catch(() => {}));
      }
    });
  });

  // Initial state (covers hard refresh on /about.html, etc.)
  setRouteClass(location.pathname);
  setActiveLink(location.pathname);
  // setActiveBookToggle(location.pathname); 
  ensureHeroFor(location.pathname);
  setActiveBookToggle();
  renderBookTab();

})();

// BOOK TOGGLE (no full refresh; updates ?tab= and re-renders)
document.addEventListener('click', (e) => {
  const a = e.target.closest('.book-tog-link');
  if (!a) return;

  // extract tab from href (?tab=read) or #read
  const href = a.getAttribute('href') || '';
  const url = new URL(href, location.href);
  const tab = url.searchParams.get('tab') || (href.startsWith('#') ? href.slice(1) : '');

  if (!tab) return;

  e.preventDefault();                           // stop navigation
  const next = new URL(location.href);          // update URL (no reload)
  next.searchParams.set('tab', tab);
  history.pushState({ tab }, '', next);

  setActiveBookToggle();                        // highlight the active pill
  renderBookTab();                              // swap only #book-content
});


// --- Footer Quote Rotator (no hover pause) ---
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.quote-box');
  if (!box) return;

  const el1 = box.querySelector('.quote');       // first line
  const el2 = box.querySelector('.quote-two');   // second line (has quote icon)
  const src = box.querySelector('.quote-source');
  const mea = box.querySelector('.meaning');

  const QUOTES = [
    {
      line1: 'शत हस्त समाहार,',
      line2: 'सहस्र हस्त संकीरा।',
      source: '~ Atharva Veda 3.24.5',
      meaning: '- Procure with hundred hands, donate with a thousand.'
    },
    {
      line1: 'न हि ज्ञानेन सदृशं',
      line2: 'पवित्रम् इह विद्यते',
      source: '~ Bhagavad Gita 4.38',
      meaning: '- Nothing purifies like knowledge.'
    },
    {
      line1: 'सत्यं वद,',
      line2: 'धर्मं चर',
      source: '~ Taittiriya Upanishad',
      meaning: '- Speak the truth, walk in righteousness.'
    },
    {
      line1: 'मधुमतीस्थ,',
      line2: 'मधुमतीं वाचमुदेयम्।',
      source: '~ Atharva Veda 16.2.2',
      meaning: '- Let my speech be sweet; may I speak delicious.'
    },
    {
      line1: 'उत्साहो बलवानार्य,',
      line2: 'नस्त्युत्साहात्परं बलं',
      source: '~ Valmiki Ramayanam 4.1.121',
      meaning: '- There is no greater strength than enthusiasm.'
    }
  ];

  let i = 0;
  const DURATION = 10000;  // 10s per quote
  const OUT_MS = 350;

  const render = (q) => {
    // slide out current
    box.classList.add('is-out');
    setTimeout(() => {
      // prep next + update text
      box.classList.remove('is-out');
      box.classList.add('is-enter');

      el1.textContent = q.line1;

      // preserve your icon inside .quote-two
      const icon = el2.querySelector('.quote-icon');
      el2.textContent = q.line2 + ' ';
      if (icon) el2.appendChild(icon);

      src.textContent = q.source;
      mea.textContent = q.meaning;

      // slide in
      requestAnimationFrame(() => box.classList.remove('is-enter'));
    }, OUT_MS);
  };

  // rotate every 10s; never pauses on hover
  setInterval(() => {
    i = (i + 1) % QUOTES.length;
    render(QUOTES[i]);
  }, DURATION);
});


// --------- +++++++++

/* ===== Image Rotators (10s) with timer cleanup & SPA re-init ===== */
(() => {
  // Use leading "/" for local dev. Switch to "img/..." on GitHub Pages.
  const HERO_IMAGES = [
    '/img/scene1.jpg',
    '/img/scene2.jpg',
    '/img/scene3.jpg',
    '/img/scene4.jpg',
    '/img/scene5.jpg',
  ];
  const SIDE_IMAGES = [
    '/img/side1.jpg',
    '/img/side2.jpg',
    '/img/side0.jpg',
    '/img/side3.jpg'
  ];

  // Keep timer ids so we can clear them when SPA replaces content
  let HERO_TIMER = null;
  let SIDE_TIMER = null;

  // Preload to avoid flicker
  function preload(list) {
    list.forEach(src => { const i = new Image(); i.src = src; });
  }

  /**
   * Attach a rotator to an <img>.
   * Returns the interval id so caller can clear it later.
   */
  function makeRotator(img, list, interval = 10000, fadeMs = 350, startImmediate = false) {
    if (!img || !list?.length) return null;

    preload(list);

    // Try align index with current src (if it matches one of the list items)
    let i = Math.max(0, list.indexOf(img.getAttribute('src')));

    const swap = () => {
      // fade out (requires CSS: .img-fade { opacity:0; } and img has transition)
      img.classList.add('img-fade');
      setTimeout(() => {
        i = (i + 1) % list.length;
        img.src = list[i];
        // optional alt sync
        img.alt = list[i].split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
        // fade back in next frame
        requestAnimationFrame(() => img.classList.remove('img-fade'));
      }, fadeMs);
    };

    if (startImmediate) swap();           // set to true if you want the first change right away
    return setInterval(swap, interval);   // return timer id
  }

  /**
   * Initialize (or re-initialize) both image rotators.
   * Safe to call multiple times — clears previous timers.
   */
  function initImageRotators() {
    const hero = document.getElementById('rot-hero');
    const side = document.getElementById('rot-side');
    if (!hero && !side) return;

    // Clear any previous intervals (prevents duplicates after SPA swaps)
    if (HERO_TIMER) { clearInterval(HERO_TIMER); HERO_TIMER = null; }
    if (SIDE_TIMER) { clearInterval(SIDE_TIMER); SIDE_TIMER = null; }

    HERO_TIMER = makeRotator(hero, HERO_IMAGES, 10000, 350, false);
    SIDE_TIMER = makeRotator(side, SIDE_IMAGES, 10000, 350, false);
  }

  // Run on initial page load
  document.addEventListener('DOMContentLoaded', initImageRotators);

  // Expose for SPA: call window.initImageRotators() after you replace #app
  window.initImageRotators = initImageRotators;
})();






// -------------------------------------------------------------------------------------------------------------------

/* ===== NOTES: load from /data/notes.json and render into #note-modal ===== */
(() => {
  const NOTES_JSON_URL = '/data/notes.json'; // adjust path if your folder differs
  let NOTES_CACHE = null;
  let lastTrigger = null;

  const q = (sel, root = document) => root.querySelector(sel);

  // Re-query modal nodes each time (SPA-safe)
  const getModalEls = () => {
    const modal = q('#note-modal');
    const title = q('#note-title');
    const meta  = q('#note-meta');
    const body  = q('#note-content');
    if (!modal || !title || !meta || !body) return null;
    return { modal, title, meta, body };
  };

  const escapeHtml = (s) =>
    String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
             .replace(/>/g,'&gt;').replace(/"/g,'&quot;')
             .replace(/'/g,'&#039;');

  async function loadNotesData() {
    if (NOTES_CACHE) return NOTES_CACHE;
    const res = await fetch(NOTES_JSON_URL, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Failed to load notes.json');
    NOTES_CACHE = await res.json();
    return NOTES_CACHE;
  }

  function renderBlocks(blocks = []) {
    let html = '';
    for (const b of blocks) {
      switch (b.type) {
        case 'h2':   html += `<h2>${escapeHtml(b.text ?? '')}</h2>`; break;
        case 'h3':   html += `<h3>${escapeHtml(b.text ?? '')}</h3>`; break;
        case 'p':    html += `<p>${b.html ?? escapeHtml(b.text ?? '')}</p>`; break;
        case 'list': {
          const tag = b.style === 'ol' ? 'ol' : 'ul';
          const items = (b.items || []).map(it =>
            `<li>${typeof it === 'string' ? it : escapeHtml(it?.text ?? '')}</li>`
          ).join('');
          html += `<${tag}>${items}</${tag}>`; break;
        }
        case 'img': {
          const w = b.width ? ` width="${Number(b.width)}"` : '';
          const img = `<img src="${escapeHtml(b.src||'')}" alt="${escapeHtml(b.alt||'')}"${w}>`;
          html += b.caption ? `<figure>${img}<figcaption>${escapeHtml(b.caption)}</figcaption></figure>` : img;
          break;
        }
        case 'code': {
          const lang = b.lang ? ` language-${escapeHtml(b.lang)}` : '';
          html += `<pre><code class="${lang}">${escapeHtml(b.text ?? '')}</code></pre>`; break;
        }
        case 'quote': {
          const cite = b.cite ? `<cite>— ${escapeHtml(b.cite)}</cite>` : '';
          html += `<blockquote><p>${escapeHtml(b.text ?? '')}</p>${cite}</blockquote>`; break;
        }
        case 'hr':   html += `<hr>`; break;
        default:     if (b?.text) html += `<p>${escapeHtml(b.text)}</p>`;
      }
    }
    return html;
  }

  async function openNoteById(id, fallbackCard) {
    const els = getModalEls();
    if (!els) return;
    const { modal, title, meta, body } = els;

    let note = null;
    try {
      const data = await loadNotesData();
      note = data.find(n => n.id === id);
    } catch (e) {
      console.warn('[notes] load error:', e);
    }

    // Fallbacks use the card’s text if JSON missing
    const fbTitle = q('.notes-title', fallbackCard)?.textContent?.trim() || '';
    const fbMeta  = q('.notes-meta',  fallbackCard)?.textContent?.trim() || '';
    const fbBody  = q('.notes-excerpt', fallbackCard)?.outerHTML || '<p></p>';

    title.textContent = note?.title || fbTitle;
    meta.textContent  = note?.meta  || fbMeta;
    body.innerHTML    = note?.blocks?.length ? renderBlocks(note.blocks)
                     : note?.contentHtml ? note.contentHtml
                     : fbBody;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('modal-open');
    title.focus?.();
  }

  function closeNote() {
    const els = getModalEls();
    if (!els) return;
    const { modal } = els;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('modal-open');
    lastTrigger?.focus?.();
  }

  // Open on click (delegated)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.notes-card');
    const card = e.target.closest('.notes-items');
    if (link && card) {
      const id = card.dataset.noteId;
      if (!id) return;
      e.preventDefault();
      lastTrigger = link;
      openNoteById(id, card);
      return;
    }
    // Close on overlay / ✕
    const els = getModalEls();
    if (els && (e.target === els.modal || e.target.closest?.('[data-close]'))) {
      e.preventDefault();
      closeNote();
    }
  });

  // Keyboard: Enter/Space opens, Esc closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeNote(); return; }
    const link = e.target.closest?.('.notes-card');
    if (link && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      const card = link.closest('.notes-items');
      const id = card?.dataset.noteId;
      if (!id) return;
      lastTrigger = link;
      openNoteById(id, card);
    }
  });

  // (Optional) warm cache
  window.addEventListener('load', () => { loadNotesData().catch(()=>{}); });
})();
