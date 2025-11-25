const ROUTES = {
  HOME: '/',
  BLOG_INDEX: '/blog'
};

const SEO_CONFIG = {
  [ROUTES.HOME]: {
    title: 'Elevate Catering | Gourmet Event Catering Excellence',
    description:
      'Elevate Catering crafts gourmet experiences for weddings, corporate events, and private dinners with custom menus and award-winning service.',
    canonical: 'https://www.example.com/'
  },
  [ROUTES.BLOG_INDEX]: {
    title: 'Elevate Catering Blog | Event Planning & Catering Tips',
    description:
      'Expert insights, planning checklists, and chef perspectives on crafting unforgettable catered events.',
    canonical: 'https://www.example.com/blog'
  }
};

const MENU_PACKAGES = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'R499',
    description: 'Perfect for intimate gatherings and weekday celebrations.',
    features: [
      'Up to 30 guests',
      'Seasonal chef-curated menu',
      'Two-course plated service or buffet',
      'Service team & on-site setup',
      'Standard tableware & linens'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 'R899',
    description: 'Our most popular tier for weddings and milestone events.',
    features: [
      'Up to 80 guests',
      'Customizable three-course menu',
      'Passed canapés on arrival',
      'Sommelier-inspired beverage pairings',
      'Dedicated event captain'
    ]
  },
  {
    id: 'deluxe',
    name: 'Deluxe',
    price: 'R1,499',
    description: 'Tailored for large-scale and luxury experiences.',
    features: [
      'Up to 150 guests',
      'Fully bespoke multi-course tasting menu',
      'Premium bar & signature cocktails',
      'Live chef action station options',
      'Pre-event tasting with the executive chef'
    ]
  }
];

const GALLERY_ITEMS = [
  {
    src: 'assets/gallery1.jpg',
    alt: 'Brown cake slice on a white ceramic plate',
    caption: 'Elegant plated dessert for refined celebrations.',
    prompt: 'Close-up of a gourmet dessert plated on a white ceramic plate, soft lighting, restaurant setting'
  },
  {
    src: 'assets/gallery2.jpg',
    alt: 'Assorted food items on a wooden charcuterie board',
    caption: 'Abundant charcuterie boards for sharing and grazing tables.',
    prompt: 'Overhead view of a rustic charcuterie board with assorted cheeses, meats, and fruit, warm tones'
  },
  {
    src: 'assets/gallery3.jpg',
    alt: 'Close-up of chicken wraps and sandwiches on a serving board',
    caption: 'Gourmet wraps and sandwiches perfect for casual events.',
    prompt: 'Close-up of assorted gourmet wraps and sandwiches on a wood board, natural light, catering display'
  },
  {
    src: 'assets/gallery4.jpg',
    alt: 'Fresh salads served in bowls on a buffet table',
    caption: 'Vibrant seasonal salads for balanced menus.',
    prompt: 'Buffet table with colorful fresh salads in bowls, overhead angle, bright natural light'
  },
  {
    src: 'assets/gallery5.jpg',
    alt: 'Person holding a wooden tray filled with sliced fruits',
    caption: 'Hand-carried fruit platters for cocktail hours and garden parties.',
    prompt: 'Tray of beautifully arranged sliced fresh fruit being carried by a server, outdoor event, warm light'
  },
  {
    src: 'assets/gallery6.jpg',
    alt: 'Buffet table with skewered kebabs and sides',
    caption: 'Live buffet-style kebab stations for interactive dining.',
    prompt: 'Buffet table filled with skewered kebabs and sides, event catering setup, moody restaurant lighting'
  }
];

const TESTIMONIALS = [
  {
    name: 'Amelia Carter',
    eventType: 'Modern City Wedding',
    avatar: 'images/testimonial-amelia.jpg',
    avatarPrompt:
      'Portrait photo of a smiling bride in modern wedding dress, soft background, natural lighting',
    quote:
      'Elevate Catering took our vague ideas and turned them into a five-course story. Our guests still talk about the late-night bites.',
    dateLabel: 'June 2024'
  },
  {
    name: 'Marcus Lee',
    eventType: 'Tech Product Launch',
    avatar: 'images/testimonial-marcus.jpg',
    avatarPrompt:
      'Portrait photo of a stylish man in a blazer at a modern event, blurred lights in background',
    quote:
      'From branded canapés to a plant-forward menu, they created an experience that matched our product perfectly.',
    dateLabel: 'February 2024'
  },
  {
    name: 'Priya Desai',
    eventType: 'Corporate Holiday Gala',
    avatar: 'images/testimonial-priya.jpg',
    avatarPrompt:
      'Portrait photo of a woman at a holiday gala with warm background lights, professional yet festive',
    quote:
      'Flawless execution. The staff anticipated every need so our team could actually enjoy the party.',
    dateLabel: 'December 2023'
  },
  {
    name: 'Jordan & Alex',
    eventType: 'Backyard Signature Dinner',
    avatar: 'images/testimonial-jordan-alex.jpg',
    avatarPrompt:
      'Photo of a couple hosting an outdoor dinner party, bokeh lights, intimate setting',
    quote:
      'They transformed our backyard into a restaurant-level experience. The chef’s table format felt so personal.',
    dateLabel: 'August 2023'
  },
  {
    name: 'Harper Nguyen',
    eventType: 'Nonprofit Fundraiser',
    avatar: 'images/testimonial-harper.jpg',
    avatarPrompt:
      'Portrait of a nonprofit director at a fundraiser event, warm indoor lighting',
    quote:
      'Guests were blown away by the food presentation. Their team worked seamlessly with our volunteers and AV partner.',
    dateLabel: 'May 2023'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How far in advance should we book Elevate Catering?',
    answer:
      'We recommend booking 3–6 months in advance for weddings and large events, and at least 4 weeks for smaller celebrations. For short-notice events, contact us and we’ll do our best to accommodate.'
  },
  {
    question: 'Can you accommodate dietary restrictions and allergies?',
    answer:
      'Yes. We regularly design menus around vegetarian, vegan, gluten-free, dairy-free, and other dietary needs. We also take food allergies seriously and can create separate prep workflows as needed.'
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We primarily serve the greater metro area and surrounding regions. For destination or out-of-area events, travel fees may apply. Share your venue details and we’ll confirm availability.'
  },
  {
    question: 'Do you offer fully custom menus?',
    answer:
      'Absolutely. While our packages provide a helpful starting point, most of our events involve custom menus shaped around your tastes, theme, and seasonality.'
  },
  {
    question: 'Is staffing and rentals included?',
    answer:
      'Our proposals can include service team, chefs, bartenders, and essential rentals such as tableware and linens. We can also coordinate specialty rentals through our partner network.'
  }
];

const BLOG_POSTS = [
  {
    slug: 'designing-a-tasting-menu-wedding',
    title: 'Designing a Tasting Menu Wedding Your Guests Will Remember',
    category: 'Event Planning',
    hero: 'images/blog-tasting-menu-wedding.jpg',
    heroAlt: 'Wedding table set with multiple tasting plates and wine pairings',
    heroPrompt:
      'Wide shot of an elegant wedding table with tasting menu plates and wine glasses, golden hour lighting',
    excerpt:
      'How to turn your wedding dinner into a multi-course journey that tells your story—with pacing, portioning, and pairings that keep guests delighted.',
    author: 'Chef Lina Moretti',
    readTime: '7 min read',
    date: 'August 12, 2024',
    body: [
      'A tasting menu wedding invites your guests into a curated culinary journey, where each course reveals a different part of your story.',
      'Start by choosing 3–6 courses that each have a purpose: a playful opener, a comforting nod to family, a bold main, and a surprising palate cleanser.',
      'Pacing is everything. We recommend 15–20 minutes between courses, with beverage pairings that support rather than overpower the food.'
    ],
    relatedSlugs: ['how-many-bites', 'seasonal-menu-autumn']
  },
  {
    slug: 'how-many-bites',
    title: 'How Many Bites Do Your Guests Actually Need?',
    category: 'Catering Tips',
    hero: 'images/blog-canape-bites.jpg',
    heroAlt: 'Tray of assorted canapés being passed at a reception',
    heroPrompt:
      'Close-up of a server holding a tray of modern canapés at a reception, shallow depth of field',
    excerpt:
      'Passed canapés can set the tone for the entire evening. Here’s how to calculate portions that feel generous without overwhelming guests.',
    author: 'Event Director Maya Cole',
    readTime: '5 min read',
    date: 'July 3, 2024',
    body: [
      'Canapés are your first edible impression. Too few, and guests arrive at dinner starving. Too many, and they are full before the main event.',
      'As a baseline, plan for 6–8 bites per guest for a one-hour reception, adjusting up if your reception replaces a full meal.',
      'Balance lighter, crisp bites with one or two richer options so guests can enjoy variety without feeling weighed down.'
    ],
    relatedSlugs: ['designing-a-tasting-menu-wedding']
  },
  {
    slug: 'chef-table-at-home',
    title: 'Creating a Chef’s Table Experience at Home',
    category: 'Recipes',
    hero: 'images/blog-chef-table.jpg',
    heroAlt: 'Chef plating dishes in a home kitchen for a private dinner',
    heroPrompt:
      'Chef plating gourmet dishes in a cozy home kitchen, overhead lighting, candid moment',
    excerpt:
      'Transform your dining room into an intimate chef’s table with smart prep, pacing, and plating that feel restaurant-level.',
    author: 'Chef Tomas Rivera',
    readTime: '6 min read',
    date: 'May 19, 2024',
    body: [
      'A chef’s table is less about complicated techniques and more about intention: how you pace, present, and narrate each dish.',
      'Prep 80% of your mise en place before guests arrive, saving only the last-minute searing and finishing touches for the live experience.',
      'Plate in odd numbers, play with height and negative space, and don’t underestimate the power of a warm plate.'
    ],
    relatedSlugs: ['how-many-bites']
  },
  {
    slug: 'seasonal-menu-autumn',
    title: 'Building a Seasonal Autumn Menu That Feels Cozy Not Heavy',
    category: 'Seasonal',
    hero: 'images/blog-autumn-menu.jpg',
    heroAlt: 'Autumn table with seasonal dishes and warm colors',
    heroPrompt:
      'Autumn-inspired dinner table with seasonal dishes, pumpkins, and warm candlelight',
    excerpt:
      'Leaning into fall flavors doesn’t have to mean overwhelming richness. Here’s how we keep autumn menus vibrant and balanced.',
    author: 'Chef Lina Moretti',
    readTime: '4 min read',
    date: 'September 29, 2024',
    body: [
      'Autumn ingredients bring natural warmth: squash, mushrooms, apples, and spices that invite comfort.',
      'Anchor your menu with one rich centerpiece, like braised short rib, and surround it with bright, acid-forward sides.',
      'Use garnishes—like pickled elements or citrus zests—to keep each plate lifted and layered.'
    ],
    relatedSlugs: ['designing-a-tasting-menu-wedding']
  }
];

function selectElement(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    throw new Error(`Element not found for selector: ${selector}`);
  }
  return el;
}

function selectAllElements(selector) {
  return Array.from(document.querySelectorAll(selector));
}

/* SEO / Helmet-like utilities */

function updateSeo(route, overrides) {
  const config = {
    ...(SEO_CONFIG[route] || SEO_CONFIG[ROUTES.HOME]),
    ...(overrides || {})
  };

  document.title = config.title;

  const descriptionTag =
    document.querySelector('meta[name="description"]') ||
    createMetaTag('description');
  descriptionTag.setAttribute('content', config.description);

  const canonicalTag =
    document.querySelector('link[rel="canonical"]') ||
    createCanonicalLink();
  canonicalTag.setAttribute('href', config.canonical);
}

function createMetaTag(name) {
  const tag = document.createElement('meta');
  tag.setAttribute('name', name);
  document.head.appendChild(tag);
  return tag;
}

function createCanonicalLink() {
  const link = document.createElement('link');
  link.setAttribute('rel', 'canonical');
  document.head.appendChild(link);
  return link;
}

/* Navigation & Smooth Scroll */

function initNavigation() {
  const navToggle = selectElement('.site-header__nav-toggle');
  const navList = selectElement('.site-header__nav-list');
  const navLinks = selectAllElements('.site-header__nav-link');

  navToggle.addEventListener('click', () => {
    const isOpen = navList.dataset.open === 'true';
    navList.dataset.open = String(!isOpen);
    navToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  navLinks.forEach((link) => {
    const scrollTarget = link.getAttribute('data-scroll-target');
    const navRoute = link.getAttribute('data-nav-link');

    if (scrollTarget) {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        handleScrollLink(scrollTarget);
        navList.dataset.open = 'false';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    } else if (navRoute === 'blog') {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/blog');
        navList.dataset.open = 'false';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    } else if (navRoute === 'home') {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/');
        navList.dataset.open = 'false';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

function handleScrollLink(selector) {
  try {
    const target = document.querySelector(selector);
    if (!target) {
      return;
    }
    const rect = target.getBoundingClientRect();
    const offsetY = window.scrollY + rect.top - 80; // account for header
    window.scrollTo({ top: offsetY, behavior: 'smooth' });
  } catch (error) {
    console.error('Smooth scroll error:', error);
  }
}

/* Menu Packages */

function renderMenuPackages() {
  const container = selectElement('.menu-packages');
  const template = selectElement('#template-menu-package');

  MENU_PACKAGES.forEach((pkg) => {
    const clone = template.content.cloneNode(true);
    const tierEl = clone.querySelector('.menu-packages__tier');
    const nameEl = clone.querySelector('.menu-packages__name');
    const priceEl = clone.querySelector('.menu-packages__price');
    const featuresList = clone.querySelector('.menu-packages__features');
    const buttonEl = clone.querySelector('.menu-packages__button');

    nameEl.textContent = pkg.name;
    priceEl.textContent = `${pkg.price}`;
    tierEl.setAttribute('data-package-id', pkg.id);
    tierEl.setAttribute('aria-label', `${pkg.name} catering package`);

    pkg.features.forEach((feature) => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    buttonEl.addEventListener('click', () => {
      handleChoosePackage(pkg);
    });

    container.appendChild(clone);
  });
}

function handleChoosePackage(pkg) {
  try {
    const contactSection = document.querySelector('#contact');
    if (!contactSection) {
      return;
    }
    const messageInput = document.querySelector('#message');
    if (messageInput) {
      const existing = messageInput.value.trim();
      const prefix = existing ? `${existing}\n\n` : '';
      messageInput.value =
        `${prefix}I am interested in the ${pkg.name} package (${pkg.price}). Please share availability and options.`;
    }
    handleScrollLink('#contact');
  } catch (error) {
    console.error('Choose package error:', error);
  }
}

/* Gallery */

function renderGallery() {
  const container = selectElement('.gallery-grid');
  const template = selectElement('#template-gallery-item');

  GALLERY_ITEMS.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const image = clone.querySelector('.gallery-grid__image');
    const caption = clone.querySelector('.gallery-grid__caption');

    image.src = item.src;
    image.alt = item.alt;
    image.dataset.aiPrompt = item.prompt;
    caption.textContent = item.caption;

    container.appendChild(clone);
  });
}

/* Testimonials Carousel */

function initTestimonialsCarousel() {
  const track = selectElement('.testimonials-carousel__track');
  const template = selectElement('#template-testimonial-slide');
  const dotsContainer = selectElement('.testimonials-carousel__dots');
  const prevButton = selectElement('.testimonials-carousel__control--prev');
  const nextButton = selectElement('.testimonials-carousel__control--next');

  TESTIMONIALS.forEach((testimonial, index) => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('.testimonial');
    const avatar = clone.querySelector('.testimonial__avatar');
    const nameEl = clone.querySelector('.testimonial__name');
    const eventEl = clone.querySelector('.testimonial__event');
    const quoteEl = clone.querySelector('.testimonial__quote');

    avatar.src = testimonial.avatar;
    avatar.alt = `${testimonial.name}, ${testimonial.eventType}`;
    avatar.dataset.aiPrompt = testimonial.avatarPrompt;
    nameEl.textContent = testimonial.name;
    eventEl.textContent = testimonial.eventType;
    quoteEl.textContent = testimonial.quote;

    article.setAttribute('role', 'group');
    article.setAttribute('aria-label', `${testimonial.name} – ${testimonial.eventType}`);
    article.dataset.index = String(index);

    track.appendChild(clone);

    const dot = document.createElement('button');
    dot.className = 'testimonials-carousel__dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show testimonial ${index + 1}`);
    dot.dataset.index = String(index);
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const slides = selectAllElements('.testimonial');
  const dots = selectAllElements('.testimonials-carousel__dot');

  function updateCarousel(index) {
    if (slides.length === 0) return;

    const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
    currentIndex = clampedIndex;
    const offset = -clampedIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('testimonials-carousel__dot--active', i === clampedIndex);
    });
  }

  prevButton.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index || 0);
      updateCarousel(index);
    });
  });

  updateCarousel(0);
}

/* FAQ Accordion */

function initFaqAccordion() {
  const accordion = selectElement('.accordion');
  const template = selectElement('#template-faq-item');

  FAQ_ITEMS.forEach((item) => {
    const clone = template.content.cloneNode(true);
    const header = clone.querySelector('.accordion__header');
    const question = clone.querySelector('.accordion__question');
    const panel = clone.querySelector('.accordion__panel');
    const icon = clone.querySelector('.accordion__icon');

    question.textContent = item.question;
    panel.querySelector('.accordion__answer').textContent = item.answer;

    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
      icon.textContent = isExpanded ? '+' : '−';
    });

    accordion.appendChild(clone);
  });
}

/* Contact Form */

function initContactForm() {
  const form = document.querySelector('#contact-form');
  const successMessage = document.querySelector('#contact-success');

  if (!form || !successMessage) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessage.textContent = '';
    clearFormErrors(form);

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const errors = validateContactForm(values);

    if (Object.keys(errors).length > 0) {
      displayFormErrors(form, errors);
      return;
    }

    successMessage.textContent =
      'Thank you for reaching out. Our team will follow up within one business day.';
    form.reset();
  });
}

function validateContactForm(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  if (!values.email || !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please share a few details about your event.';
  }

  if (values.guestCount && Number(values.guestCount) < 1) {
    errors.guestCount = 'Guest count must be at least 1.';
  }

  return errors;
}

function clearFormErrors(form) {
  const errorEls = form.querySelectorAll('.contact-form__error');
  errorEls.forEach((el) => {
    el.textContent = '';
  });
}

function displayFormErrors(form, errors) {
  Object.entries(errors).forEach(([field, message]) => {
    const errorEl = form.querySelector(`[data-error-for="${field}"]`);
    if (errorEl) {
      errorEl.textContent = message;
    }
  });
}

/* Blog: rendering & routing */

function initBlogListing() {
  const container = document.querySelector('.blog-grid');
  const template = document.querySelector('#template-blog-card');
  const filterButtons = document.querySelectorAll('.blog-filters .button');

  if (!container || !template) return;

  function renderBlogCards(category) {
    container.innerHTML = '';

    const filtered = BLOG_POSTS.filter((post) => {
      if (!category || category === 'all') return true;
      return post.category === category;
    });

    filtered.forEach((post) => {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector('.blog-card');
      const link = clone.querySelector('.blog-card__link');
      const image = clone.querySelector('.blog-card__image');
      const categoryEl = clone.querySelector('.blog-card__category');
      const titleEl = clone.querySelector('.blog-card__title');
      const excerptEl = clone.querySelector('.blog-card__excerpt');
      const metaEl = clone.querySelector('.blog-card__meta');

      image.src = post.hero;
      image.alt = post.heroAlt;
      image.dataset.aiPrompt = post.heroPrompt;
      categoryEl.textContent = post.category;
      titleEl.textContent = post.title;
      excerptEl.textContent = post.excerpt;
      metaEl.textContent = `${post.author} • ${post.readTime} • ${post.date}`;

      // ensure blog card link navigates correctly
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(`/blog/${post.slug}`);
      });

      container.appendChild(clone);
    });
  }

  // wire up filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category || 'all';
      renderBlogCards(category);
      filterButtons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
    });
  });

  // initial render
  renderBlogCards('all');
}

// provide a lightweight navigateTo helper if not defined elsewhere
function navigateTo(path) {
  try {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', path);
    } else {
      window.location.href = path;
    }

    if (path === ROUTES.BLOG_INDEX) updateSeo(ROUTES.BLOG_INDEX);
    else updateSeo(ROUTES.HOME);
  } catch (err) {
    console.error('navigateTo error:', err);
  }
}

/* Statistics Counter Animation */
function initStatisticsCounter() {
  const statItems = document.querySelectorAll('.stat-item');
  if (statItems.length === 0) return;

  let hasAnimated = false;

  const animateValue = (element, start, end, duration, decimals = 0, suffix = '') => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const current = start + (end - start) * easeOutQuart;
      const formattedValue = decimals > 0
        ? current.toFixed(decimals)
        : Math.floor(current).toLocaleString();

      element.textContent = formattedValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          statItems.forEach((item) => {
            const valueElement = item.querySelector('.stat-item__value');
            const target = parseFloat(item.dataset.statTarget);
            const suffix = valueElement.dataset.suffix || '';
            const decimals = parseInt(valueElement.dataset.decimals || '0');

            animateValue(valueElement, 0, target, 2000, decimals, suffix);
          });

          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statisticsSection = document.querySelector('.section-statistics');
  if (statisticsSection) {
    observer.observe(statisticsSection);
  }
}

/* Availability Calendar Widget */
function initAvailabilityCalendar() {
  const calendarWidget = document.querySelector('.calendar-widget');
  if (!calendarWidget) return;

  let currentDate = new Date();
  let selectedDate = null;

  // Simulated availability data (in production, this would come from a backend)
  const getAvailabilityStatus = (date) => {
    const day = date.getDate();
    const month = date.getMonth();

    // Random simulation for demo
    if (day % 10 === 0) return 'booked';
    if (day % 7 === 0) return 'limited';
    return 'available';
  };

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Create calendar header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

    let html = `
      <div class="calendar-header">
        <h4 class="calendar-header__title">${monthNames[month]} ${year}</h4>
        <div class="calendar-header__nav">
          <button class="calendar-nav-btn calendar-nav-btn--prev" aria-label="Previous month">‹</button>
          <button class="calendar-nav-btn calendar-nav-btn--next" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="calendar-grid">
    `;

    // Day headers
    const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    dayNames.forEach(day => {
      html += `<div class="calendar-day-header">${day}</div>`;
    });

    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Empty cells before month starts
    for (let i = 0; i < firstDay; i++) {
      html += '<div class="calendar-day calendar-day--empty"></div>';
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isPast = date < today.setHours(0, 0, 0, 0);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

      const availability = getAvailabilityStatus(date);

      let classes = 'calendar-day';
      if (isPast) classes += ' calendar-day--disabled';
      if (isToday) classes += ' calendar-day--today';
      if (isSelected) classes += ' calendar-day--selected';
      if (!isPast && availability) classes += ` calendar-day--${availability}`;

      const disabled = isPast || availability === 'booked';

      html += `<div class="${classes}" data-date="${date.toISOString()}" ${disabled ? '' : 'role="button" tabindex="0"'}>${day}</div>`;
    }

    html += '</div>';

    calendarWidget.innerHTML = html;

    // Attach event listeners
    const prevBtn = calendarWidget.querySelector('.calendar-nav-btn--prev');
    const nextBtn = calendarWidget.querySelector('.calendar-nav-btn--next');
    const dayButtons = calendarWidget.querySelectorAll('.calendar-day[role="button"]');

    prevBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar();
    });

    dayButtons.forEach(dayBtn => {
      dayBtn.addEventListener('click', () => {
        const dateStr = dayBtn.dataset.date;
        selectedDate = new Date(dateStr);

        // Update event date field
        const eventDateInput = document.querySelector('#event-date');
        if (eventDateInput) {
          const year = selectedDate.getFullYear();
          const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
          const day = String(selectedDate.getDate()).padStart(2, '0');
          eventDateInput.value = `${year}-${month}-${day}`;
        }

        renderCalendar();
      });
    });
  };

  renderCalendar();
}

// Back to Top button

function initBackToTop() {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      button.classList.add('back-to-top--visible');
    } else {
      button.classList.remove('back-to-top--visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// initialize app on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  try {
    updateSeo(ROUTES.HOME);
    initNavigation();
    renderMenuPackages();
    renderGallery();
    initTestimonialsCarousel();
    initFaqAccordion();
    initContactForm();
    initBlogListing();
    initBackToTop();
    initStatisticsCounter();
  } catch (err) {
    console.error('App init error:', err);
  }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
