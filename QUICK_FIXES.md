# Quick Fixes Guide

## 🔴 Critical Fixes (Do These First)

### Fix 1: Contact Form Selector Mismatch

**File:** `index.js`  
**Line:** 544

**Change:**
```javascript
// BEFORE
const form = document.querySelector('#contact-form');

// AFTER
const form = document.querySelector('#contact');
```

---

### Fix 2: Add Name Field to Contact Form

**File:** `index.html`  
**Line:** 327 (after email field)

**Add:**
```html
<div class="contact-form__field">
  <label for="name" class="contact-form__label">Name</label>
  <input type="text" id="name" name="name" class="contact-form__input" required autocomplete="name" />
  <p class="contact-form__error" data-error-for="name"></p>
</div>
```

---

### Fix 3: Fix HTML Structure - Wrap Contact Section

**File:** `index.html`  
**Lines:** 325-381

**Replace:**
```html
    </div>
    <form class="contact-form" id="contact">
      <!-- form content -->
    </form>
    </div>

    <aside class="section-contact__map">
      <!-- map content -->
    </aside>
    </div>
    </section>
    </div>
```

**With:**
```html
    </div>

    <!-- Contact Section -->
    <section id="contact" class="section section-contact section-padding" aria-labelledby="contact-heading">
      <div class="container-custom">
        <header class="section__header section__header--center">
          <h2 id="contact-heading" class="section__title">Get In Touch</h2>
          <p class="section__subtitle">
            Ready to plan your perfect event? Let's discuss your vision.
          </p>
        </header>

        <form class="contact-form" id="contact-form">
          <!-- form content -->
        </form>

        <aside class="section-contact__map" aria-label="Location map">
          <!-- map content -->
        </aside>
      </div>
    </section>
    </div>
```

**Then update JavaScript selector:**
```javascript
// Keep as #contact-form (since we changed HTML)
const form = document.querySelector('#contact-form');
```

---

### Fix 4: Fix WhatsApp Typo

**File:** `index.html`  
**Line:** 376

**Change:**
```html
<!-- BEFORE -->
<p class="section-contact__detail"><strong>Wahstapp:</strong> 123456</p>

<!-- AFTER -->
<p class="section-contact__detail"><strong>WhatsApp:</strong> 123456</p>
```

---

### Fix 5: Add Lightbox HTML Structure

**File:** `index.html`  
**Location:** Before closing `</body>` tag (around line 553)

**Add:**
```html
  <!-- Gallery Lightbox -->
  <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="lightbox-caption">
    <div class="lightbox__content">
      <button class="lightbox__close" type="button" aria-label="Close lightbox">×</button>
      <img class="lightbox__image" src="" alt="" />
      <p class="lightbox__caption" id="lightbox-caption"></p>
    </div>
  </div>
```

**Add CSS for lightbox:**
```css
/* Add to style.css */

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
}

.lightbox[aria-hidden="false"] {
  opacity: 1;
  pointer-events: auto;
}

.lightbox__content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox__image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.lightbox__close {
  position: absolute;
  top: -2.5rem;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--transition-fast);
}

.lightbox__close:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox__caption {
  margin-top: 1rem;
  color: #fff;
  text-align: center;
}
```

---

### Fix 6: Update Contact Form ID Reference

**File:** `index.html`  
**Line:** 326

**Change:**
```html
<!-- BEFORE -->
<form class="contact-form" id="contact">

<!-- AFTER -->
<form class="contact-form" id="contact-form">
```

**And update scroll target:**
```html
<!-- Update all links that scroll to contact -->
<a href="/#contact" data-scroll-target="#contact" ...>
```

---

## ✅ Testing Checklist

After making these fixes, test:

- [ ] Contact form submits successfully
- [ ] Form validation works for all fields
- [ ] Smooth scroll to contact section works
- [ ] Gallery images open in lightbox
- [ ] Mobile navigation works
- [ ] No console errors
- [ ] All links work correctly

---

## 🚀 Next Steps

1. Fix all critical issues above
2. Test thoroughly
3. Review `PROJECT_ANALYSIS.md` for additional improvements
4. Consider implementing form submission backend
5. Add error handling throughout

