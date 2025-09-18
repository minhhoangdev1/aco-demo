// page-main.js - Complete page with slider and tabs
export default async function decorate(block) {
  // Create main page container
  const pageContainer = document.createElement('div');
  pageContainer.className = 'page-main-container';

  // ===== SLIDER SECTION =====
  const sliderSection = document.createElement('section');
  sliderSection.className = 'slider-section';

  // Slider data
  const slides = [
    {
      type: 'ensure-promo',
      desktopImage: 'https://ensure.abbottvietnam.com.vn/media/wysiwyg/KV_-_NGANG_1_.png',
      mobileImage: 'https://ensure.abbottvietnam.com.vn/media/wysiwyg/KV_-_1x1_1_.png',
      alt: 'Ensure Gold - Chương trình khuyến mại',
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '#products',
    },
    {
      type: 'ensure-promo',
      desktopImage: 'https://ensure.abbottvietnam.com.vn/media/wysiwyg/KV_-_NGANG_1_.png',
      mobileImage: 'https://ensure.abbottvietnam.com.vn/media/wysiwyg/KV_-_1x1_1_.png',
      alt: 'Ensure Gold - Chương trình khuyến mại',
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '#products',
    },
  ];

  // Create slider structure
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'ensure-slider-container';

  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'slider-wrapper';

  // Create slides
  slides.forEach((slideData, index) => {
    const slide = document.createElement('div');
    slide.className = `slide slide-${slideData.type}`;

    if (slideData.desktopImage && slideData.mobileImage) {
      slide.innerHTML = `
        <picture>
          <source media="(min-width: 768px)" srcset="${slideData.desktopImage}">
          <source media="(max-width: 767px)" srcset="${slideData.mobileImage}">
          <img src="${slideData.desktopImage}" alt="${slideData.alt}" loading="lazy" />
        </picture>
        ${slideData.buttonText ? `<a href="${slideData.buttonLink}" class="cta-button">${slideData.buttonText}</a>` : ''}
      `;
    } else {
      slide.innerHTML = `
        <h2>${slideData.title}</h2>
        <p>${slideData.description}</p>
        <a href="${slideData.buttonLink}" class="cta-button">${slideData.buttonText}</a>
      `;
    }

    sliderWrapper.appendChild(slide);
  });

  // Create navigation
  const navPrev = document.createElement('button');
  navPrev.className = 'nav-button nav-prev';
  navPrev.innerHTML = '‹';
  navPrev.setAttribute('aria-label', 'Previous slide');

  const navNext = document.createElement('button');
  navNext.className = 'nav-button nav-next';
  navNext.innerHTML = '›';
  navNext.setAttribute('aria-label', 'Next slide');

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'slider-dots';

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = `dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dotsContainer.appendChild(dot);
  });

  // Assemble slider
  sliderContainer.appendChild(sliderWrapper);
  sliderContainer.appendChild(navPrev);
  sliderContainer.appendChild(navNext);
  sliderContainer.appendChild(dotsContainer);
  sliderSection.appendChild(sliderContainer);

  // ===== TABS SECTION =====
  const tabsSection = document.createElement('section');
  tabsSection.className = 'tabs-section';
  tabsSection.id = 'products';

  // Product tabs data
  const tabsData = [
    {
      id: 'all-products',
      title: 'Tất cả sản phẩm',
      active: true,
      products: [
        {
          id: 1,
          name: '[Tặng túi du lịch] Combo 12 chai Ensure Gold 237ml',
          price: '768.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-237ml-hu-ng-v-t-gao-2.jpg',
          badge: 'HƯƠNG VANI 237ML',
          giftText: 'Giao hàng miễn phí',
          description: 'Combo 12 chai Ensure Gold hương vani với túi du lịch cao cấp',
        },
        {
          id: 2,
          name: '[Tặng túi trống gấp gọn] Ensure Gold hương vani 800g',
          price: '960.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-hu-ng-vani-2022.jpg',
          badge: 'HƯƠNG VANI 800G',
          giftText: 'Giao hàng miễn phí',
          description: 'Ensure Gold 800g kèm túi trống gấp gọn tiện lợi',
        },
        {
          id: 3,
          name: '[Tặng máy xay cầm tay] Combo 2 lon Ensure Gold hương vani ít ngọt',
          price: '1.920.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-it-ngot-2022.jpg',
          badge: 'HƯƠNG VANI ÍT NGỌT 800G',
          giftText: 'Giao hàng miễn phí',
          description: 'Combo 2 lon Ensure Gold ít ngọt kèm máy xay cầm tay',
        },
        {
          id: 4,
          name: '[Tặng gối cao su non] Ensure Gold hương vani 800g',
          price: '960.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-hu-ng-vani-2022.jpg',
          badge: 'HƯƠNG VANI 800G',
          giftText: 'Giao hàng miễn phí',
          description: 'Ensure Gold 800g kèm gối cao su non chất lượng',
        },
      ],
    },
    {
      id: 'voucher',
      title: 'Voucher độc quyền [16-23/09]',
      active: false,
      products: [
        {
          id: 5,
          name: 'Ensure Gold 800g - Voucher đặc biệt',
          price: '850.000 đ',
          originalPrice: '960.000 đ',
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-hu-ng-vani-2022.jpg',
          badge: 'VOUCHER ĐẶC BIỆT',
          giftText: 'Tiết kiệm 110.000đ',
          description: 'Ưu đãi đặc biệt chỉ từ 16-23/09',
        },
        {
          id: 6,
          name: 'Combo Ensure Gold - Voucher combo',
          price: '1.650.000 đ',
          originalPrice: '1.920.000 đ',
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-it-ngot-2022.jpg',
          badge: 'COMBO VOUCHER',
          giftText: 'Tiết kiệm 270.000đ',
          description: 'Combo tiết kiệm với voucher độc quyền',
        },
      ],
    },
    {
      id: 'powder',
      title: 'Ensure Gold dạng bột',
      active: false,
      products: [
        {
          id: 7,
          name: 'Ensure Gold 400g - Hương Vani',
          price: '485.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-400g-hu-ng-vani-2022.jpg',
          badge: 'HƯƠNG VANI 400G',
          giftText: 'Giao hàng miễn phí',
          description: 'Sữa bột Ensure Gold hương vani thơm ngon',
        },
        {
          id: 8,
          name: 'Ensure Gold 800g - Hương Vani',
          price: '960.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-hu-ng-vani-2022.jpg',
          badge: 'HƯƠNG VANI 800G',
          giftText: 'Giao hàng miễn phí',
          description: 'Sữa bột Ensure Gold 800g tiết kiệm',
        },
      ],
    },
    {
      id: 'low-sugar',
      title: 'Ensure Gold dạng bột ít ngọt',
      active: false,
      products: [
        {
          id: 9,
          name: 'Ensure Gold ít ngọt 800g',
          price: '960.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-800g-it-ngot-2022.jpg',
          badge: 'ÍT NGỌT 800G',
          giftText: 'Giao hàng miễn phí',
          description: 'Ensure Gold ít ngọt phù hợp người tiểu đường',
        },
      ],
    },
    {
      id: 'liquid',
      title: 'Ensure Gold dạng nước',
      active: false,
      products: [
        {
          id: 10,
          name: 'Ensure Gold 237ml - Thùng 12 chai',
          price: '768.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-gold-237ml-hu-ng-v-t-gao-2.jpg',
          badge: 'DẠNG NƯỚC 237ML',
          giftText: 'Giao hàng miễn phí',
          description: 'Thùng 12 chai Ensure Gold tiện lợi',
        },
      ],
    },
    {
      id: 'specialty',
      title: 'Sản phẩm dinh dưỡng chuyên biệt',
      active: false,
      products: [
        {
          id: 11,
          name: 'Ensure Plus Advance 220ml',
          price: '42.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/e/n/ensure-plus-advance-220ml-vani.jpg',
          badge: 'CHUYÊN BIỆT 220ML',
          giftText: 'Giao hàng miễn phí',
          description: 'Dinh dưỡng chuyên biệt cho người gầy yếu',
        },
        {
          id: 12,
          name: 'Prosure 380g',
          price: '650.000 đ',
          originalPrice: null,
          image: 'https://ensure.abbottvietnam.com.vn/media/catalog/product/cache/1/thumbnail/300x300/9df78eab33525d08d6e5fb8d27136e95/p/r/prosure-380g-vani.jpg',
          badge: 'PROSURE 380G',
          giftText: 'Giao hàng miễn phí',
          description: 'Dinh dưỡng chuyên biệt cho bệnh nhân ung thư',
        },
      ],
    },
  ];

  // Create tabs container
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'product-tabs-container';

  // Section title
  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'section-title';
  sectionTitle.innerHTML = 'SẢN PHẨM';
  tabsContainer.appendChild(sectionTitle);

  // Tabs navigation
  const tabsNav = document.createElement('div');
  tabsNav.className = 'tabs-nav';

  tabsData.forEach((tab, index) => {
    const tabButton = document.createElement('button');
    tabButton.className = `tab-button ${tab.active ? 'active' : ''}`;
    tabButton.textContent = tab.title;
    tabButton.dataset.tabId = tab.id;
    tabsNav.appendChild(tabButton);
  });

  tabsContainer.appendChild(tabsNav);

  // Tabs content
  const tabsContent = document.createElement('div');
  tabsContent.className = 'tabs-content';

  tabsData.forEach((tab, index) => {
    const tabPanel = document.createElement('div');
    tabPanel.className = `tab-panel ${tab.active ? 'active' : ''}`;
    tabPanel.dataset.tabId = tab.id;

    // Banner
    const banner = document.createElement('div');
    banner.className = 'tab-banner';
    banner.innerHTML = `
      <div class="banner-content">
        <div class="roses-left">🌹🌹🌹</div>
        <div class="banner-text">
          <span class="top-badge">TOP</span>
          <h3>SẢN PHẨM BÁN CHẠY</h3>
        </div>
        <div class="roses-right">🌹🌹🌹</div>
      </div>
    `;

    // Products grid
    const productsGrid = document.createElement('div');
    productsGrid.className = 'products-grid';

    tab.products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';

      productCard.innerHTML = `
        <div class="product-image">
          <div class="product-badge">${product.badge}</div>
          <div class="delivery-badge">
            <span class="delivery-icon">🚚</span>
            <span>${product.giftText}</span>
          </div>
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
        </div>
        <div class="product-info">
          <h4 class="product-name">${product.name}</h4>
          <div class="product-price">
            <span class="current-price">${product.price}</span>
            ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
          </div>
          <div class="product-actions">
            <button class="btn-buy">Mua ngay</button>
            <button class="btn-wishlist" aria-label="Thêm vào yêu thích">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      productsGrid.appendChild(productCard);
    });

    tabPanel.appendChild(banner);
    tabPanel.appendChild(productsGrid);
    tabsContent.appendChild(tabPanel);
  });

  tabsContainer.appendChild(tabsContent);
  tabsSection.appendChild(tabsContainer);

  // ===== ASSEMBLE PAGE =====
  pageContainer.appendChild(sliderSection);
  pageContainer.appendChild(tabsSection);

  // ===== FUNCTIONALITY =====

  // Slider functionality
  let currentSlideIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  function updateSlider() {
    const translateX = -currentSlideIndex * 100;
    sliderWrapper.style.transform = `translateX(${translateX}%)`;

    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlideIndex);
    });
  }

  function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlider();
  }

  function previousSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    currentSlideIndex = index;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // Slider event listeners
  navNext.addEventListener('click', nextSlide);
  navPrev.addEventListener('click', previousSlide);

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
      const index = Array.from(dotsContainer.children).indexOf(e.target);
      goToSlide(index);
    }
  });

  // Touch support for slider
  let touchStartX = 0;
  let touchEndX = 0;

  sliderContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    stopAutoSlide();
  }, { passive: true });

  sliderContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    startAutoSlide();
  }, { passive: true });

  // Tabs functionality
  function switchTab(tabId) {
    const tabButtons = tabsContainer.querySelectorAll('.tab-button');
    tabButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.tabId === tabId);
    });

    const tabPanels = tabsContainer.querySelectorAll('.tab-panel');
    tabPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.tabId === tabId);
    });
  }

  // Tabs event listeners
  tabsNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-button')) {
      switchTab(e.target.dataset.tabId);
    }
  });

  // Product actions
  pageContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-buy')) {
      e.preventDefault();
      const button = e.target;
      const productCard = button.closest('.product-card');
      const productName = productCard.querySelector('.product-name').textContent;

      button.textContent = 'Đã thêm!';
      button.style.background = '#28a745';

      setTimeout(() => {
        button.textContent = 'Mua ngay';
        button.style.background = '';
      }, 2000);

      console.log(`Added to cart: ${productName}`);
    }

    if (e.target.closest('.btn-wishlist')) {
      e.preventDefault();
      const button = e.target.closest('.btn-wishlist');
      button.classList.toggle('active');

      const path = button.querySelector('svg path');
      if (button.classList.contains('active')) {
        path.style.fill = '#ff6b35';
      } else {
        path.style.fill = 'none';
      }
    }
  });

  // Smooth scroll for CTA buttons
  pageContainer.addEventListener('click', (e) => {
    if (e.target.getAttribute('href') === '#products') {
      e.preventDefault();
      tabsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Handle image loading
  function handleImageLoading() {
    const images = pageContainer.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });

      if (img.complete) {
        img.classList.add('loaded');
      }
    });
  }

  // Intersection Observer for slider auto-play
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAutoSlide();
      } else {
        stopAutoSlide();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(sliderContainer);

  // Initialize
  updateSlider();
  handleImageLoading();
  startAutoSlide();

  // Replace block content
  block.innerHTML = '';
  block.appendChild(pageContainer);

  // Load CSS
  if (!document.querySelector('link[href*="page-main.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './blocks/page-main/page-main.css';
    document.head.appendChild(link);
  }

  // Cleanup function
  return () => {
    stopAutoSlide();
    observer.disconnect();
  };
}
