/* ==========================================================================
   TrynixTech — "Client Stories" Testimonials Section Controller
   High-performance tab switching with smooth cross-fade animation.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('testimonials');
  if (!section) return;

  const tabButtons = section.querySelectorAll('.story-tab-item');
  const prevBtn = section.querySelector('.stories-prev-btn');
  const nextBtn = section.querySelector('.stories-next-btn');

  const quoteWrap = section.querySelector('.story-quote-wrap');
  const quoteText = section.querySelector('.story-quote-text');
  const avatarImg = section.querySelector('.story-avatar-img');
  const authorName = section.querySelector('.story-author-name');
  const authorRole = section.querySelector('.story-author-role');

  // Client stories dataset using actual TrynixTech clients and quotes
  const storiesData = [
    {
      company: 'LUXURY PRESENCE',
      quote: "I've worked with the TrynixTech team on several projects and they're one of the best UI/UX designers and front-end developers I know. They are meticulous in attention to detail and have a true passion for creating beautiful user interfaces.",
      name: 'Malte Kramer',
      role: 'Founder & CEO · USA',
      avatar: 'assets/images/team/team3.png'
    },
    {
      company: 'GLOQR',
      quote: "TrynixTech completely revamped our website with a stunning new architecture. The fresh layout and modern aesthetics perfectly capture our brand's vision. Delivered under budget with zero downtime and improved user conversion.",
      name: 'Anil Mandekar',
      role: 'CEO · Gloqr, India',
      avatar: 'assets/images/testimonial/t1.png'
    },
    {
      company: 'URVISATECH',
      quote: "TrynixTech transformed our slow, clunky site into a fast, responsive app. Razorpay and multi-gateway integrations work flawlessly — customers love the checkout flow with ongoing support!",
      name: 'Vijay Chandole',
      role: 'CEO · URVISATECH, India',
      avatar: 'assets/images/testimonial/t2.png'
    },
    {
      company: 'TEJAS CANDID',
      quote: "TrynixTech delivered exactly what I envisioned. From crafting a beautiful UI/UX design to robust development and comprehensive SEO management, they handled our entire digital presence flawlessly. A truly end-to-end solution!",
      name: 'Amira Nasri',
      role: 'Owner · Tejas Candid',
      avatar: 'assets/images/team/team1.png'
    },
    {
      company: 'ZENVUE',
      quote: "Working with TrynixTech was a dream. They transformed our vision into a calm, elegant brand that speaks directly to our audience. The branding and UI design elevated the whole product with countless compliments since launch.",
      name: 'Sarah Lin',
      role: 'Founder · Zenvue',
      avatar: 'assets/images/team/team2.png'
    }
  ];

  let activeIndex = 0;
  let isAnimating = false;

  function renderStory(index) {
    if (isAnimating) return;
    isAnimating = true;

    const data = storiesData[index];
    if (!data) return;

    // Update active tab button
    tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });

    // Fade out
    quoteWrap.classList.add('story-fade-out');

    setTimeout(() => {
      quoteText.textContent = data.quote;
      avatarImg.src = data.avatar;
      avatarImg.alt = data.name;
      authorName.textContent = data.name;
      authorRole.textContent = data.role;

      quoteWrap.classList.remove('story-fade-out');
      quoteWrap.classList.add('story-fade-in');

      setTimeout(() => {
        quoteWrap.classList.remove('story-fade-in');
        isAnimating = false;
      }, 250);
    }, 200);
  }

  // Click on tabs
  tabButtons.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeIndex === idx) return;
      activeIndex = idx;
      renderStory(activeIndex);
    });
  });

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + storiesData.length) % storiesData.length;
      renderStory(activeIndex);
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % storiesData.length;
      renderStory(activeIndex);
    });
  }

  // Keyboard navigation
  section.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      activeIndex = (activeIndex + 1) % storiesData.length;
      renderStory(activeIndex);
    } else if (e.key === 'ArrowLeft') {
      activeIndex = (activeIndex - 1 + storiesData.length) % storiesData.length;
      renderStory(activeIndex);
    }
  });
});
