document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. MASTER PRODUCT CATALOG ARCHIVE
     ========================================================================== */
  const PRODUCTS = [
    {
      id: 1,
      title: "Horizon Titanium Chronograph",
      kicker: "Precision Horology",
      category: "timepieces",
      priceUSD: 2499,
      rating: 4.9,
      reviewsCount: 38,
      stock: 4,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      description: "CNC-milled from aerospace Grade 5 titanium with a double-domed anti-reflective sapphire crystal, column-wheel automatic chronograph caliber, and water resistance to 100m.",
      variants: ["Obsidian Black", "Raw Brushed Titanium", "Champagne Gold"],
      specs: {
        "Movement": "Caliber A-88 Automatic Chronograph",
        "Power Reserve": "68 Hours",
        "Case Diameter": "40.5 mm",
        "Crystal": "Double-domed Sapphire with AR Coating"
      }
    },
    {
      id: 2,
      title: "Resonance Studio Monitor",
      kicker: "Acoustic Sculpture",
      category: "acoustics",
      priceUSD: 1890,
      rating: 5.0,
      reviewsCount: 42,
      stock: 7,
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted from solid walnut and brushed brass, housing custom beryllium dome tweeters and carbon-fiber subwoofers tuned for uncompromised mastering clarity.",
      variants: ["Walnut & Brass", "Smoked Ash & Nickel", "Matte Ceramic Black"],
      specs: {
        "Frequency Response": "32Hz – 28kHz (±2dB)",
        "Amplification": "120W Class-D Dual Bi-Amp",
        "Connectivity": "Lossless AirPlay 2, Bluetooth 5.3, Balanced XLR",
        "Weight": "6.2 kg"
      }
    },
    {
      id: 3,
      title: "Tuscan Vachetta Weekender",
      kicker: "Fine Leatherware",
      category: "leather",
      priceUSD: 1999,
      rating: 4.8,
      reviewsCount: 29,
      stock: 3,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
      description: "Tanned naturally over 60 days in Florence with chestnut tannins. Features solid brass Swiss hardware, Japanese RiRi zips, and an unlined suede interior.",
      variants: ["Cognac Patina", "Espresso Brown", "Midnight Onyx"],
      specs: {
        "Material": "Full-grain Tuscan Vachetta Hide",
        "Hardware": "Hand-turned Solid Brass",
        "Capacity": "42 Liters (Cabin Approved)",
        "Origin": "Florence, Italy"
      }
    },
    {
      id: 4,
      title: "Aura Reference Wireless Headphones",
      kicker: "Precision Audio",
      category: "acoustics",
      priceUSD: 1450,
      rating: 4.9,
      reviewsCount: 56,
      stock: 12,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      description: "Engineered with 40mm planar magnetic transducers and supple lambskin ear cushions for an immersive soundstage with ultra-low distortion.",
      variants: ["Silver & Ivory Lambskin", "Space Black", "Rose Gold & Taupe"],
      specs: {
        "Transducer": "40mm Planar Magnetic",
        "Battery Life": "38 Hours Active Listening",
        "Codec Support": "LDAC, aptX Adaptive, AAC",
        "Weight": "290g"
      }
    },
    {
      id: 5,
      title: "Monochrome Automatic Dress Watch",
      kicker: "Horology",
      category: "timepieces",
      priceUSD: 1899,
      rating: 4.7,
      reviewsCount: 23,
      stock: 5,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
      description: "Ultra-slim 7.8mm stainless steel architecture with a Bauhaus-inspired exhibition caseback and genuine Horween Shell Cordovan strap.",
      variants: ["Brushed Steel", "PVD Gunmetal", "Rose Gold Bezel"],
      specs: {
        "Case Thickness": "7.8 mm",
        "Movement": "Swiss Automatic ETA 2892-A2",
        "Dial": "Sunburst Silver Guilloché",
        "Strap": "Horween Shell Cordovan"
      }
    },
    {
      id: 6,
      title: "Architectural Portfolio Case",
      kicker: "Fine Leatherware",
      category: "leather",
      priceUSD: 1299,
      rating: 4.9,
      reviewsCount: 19,
      stock: 8,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      description: "Rigid structure briefcase crafted for 16-inch laptops, document portfolios, and fountain pens with hidden magnetic security latches.",
      variants: ["Saddle Tan", "Obsidian Black", "Olive Moss"],
      specs: {
        "Compatibility": "Up to 16\" MacBook Pro",
        "Internal Pockets": "4 Organizer Sleeves + Pen Slot",
        "Lining": "Italian Micro-suede",
        "Lock": "Magnetic Biometric Snap"
      }
    },
    {
      id: 7,
      title: "Monolith Stoneware Desk Lamp",
      kicker: "Sculptural Objects",
      category: "objects",
      priceUSD: 899,
      rating: 5.0,
      reviewsCount: 15,
      stock: 6,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
      description: "Hand-thrown coarse volcanic stoneware with an integrated touch-dimmable warm LED filament bulb delivering ambient architectural glow.",
      variants: ["Volcanic Basalt", "Sandstone Terra", "Glazed Chalk"],
      specs: {
        "Light Source": "Dimmable 2200K Warm LED Filament",
        "Control": "Brass Capacitive Touch Stem",
        "Dimensions": "32cm H × 18cm W",
        "Weight": "4.1 kg"
      }
    },

    {
      id: 10,
      title: "Silk-Cashmere Thermal Knit",
      kicker: "Haute Apparel",
      category: "apparel",
      priceUSD: 799,
      rating: 4.7,
      reviewsCount: 27,
      stock: 14,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
      description: "Spun from 70% Mulberry silk and 30% fine cashmere. Delivers a featherweight tactile softness with exceptional thermal regulation.",
      variants: ["Alabaster White", "Oatmeal", "Onyx Black"],
      specs: {
        "Composition": "70% Mulberry Silk, 30% Cashmere",
        "Gauge": "18-Gauge Ultra-Fine Knit",
        "Care": "Dry Clean or Cold Hand Wash"
      }
    }
  ];

  /* ==========================================================================
     2. CURRENCY ENGINE (Indian Rupees ₹ Exclusively)
     ========================================================================== */
  function formatPrice(amount) {
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  }

  /* ==========================================================================
     3. APP STATE & STORAGE
     ========================================================================== */
  let cart = JSON.parse(localStorage.getItem("aura_cart") || "[]");
  let wishlist = JSON.parse(localStorage.getItem("aura_wishlist") || "[]");
  let appliedDiscount = 0;
  let discountCode = "";

  function saveState() {
    localStorage.setItem("aura_cart", JSON.stringify(cart));
    localStorage.setItem("aura_wishlist", JSON.stringify(wishlist));
    updateCartUI();
    updateWishlistUI();
  }

  /* ==========================================================================
     4. CINEMATIC SCROLL ANIMATION ENGINE (Exact Verbatim Math & Properties)
     ========================================================================== */
  const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
  const smoothstep = (e0, e1, v) => {
    const x = clamp((v - e0) / (e1 - e0));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, t) => a + (b - a) * t;
  const segmentInOut = (s, a, b, c, d) => {
    const enter = smoothstep(a, b, s);
    const exit = smoothstep(c, d, s);
    return { enter, exit, active: enter * (1 - exit) };
  };

  const cinemaSection = document.querySelector(".cinema-scroll");
  function getScrollDistance() {
    if (!cinemaSection) return window.scrollY;
    return clamp(-cinemaSection.getBoundingClientRect().top, 0, cinemaSection.offsetHeight - window.innerHeight);
  }

  let targetScroll = 0;
  let smoothScroll = 0;
  let initialized = false;
  let rafPending = false;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function update() {
    rafPending = false;
    targetScroll = getScrollDistance();
    if (!initialized || reduceMotion.matches) {
      smoothScroll = targetScroll;
      initialized = true;
    } else {
      smoothScroll = lerp(smoothScroll, targetScroll, 0.14);
    }
    if (Math.abs(smoothScroll - targetScroll) < 0.08) smoothScroll = targetScroll;

    mouseX = lerp(mouseX, targetMouseX, 0.12);
    mouseY = lerp(mouseY, targetMouseY, 0.12);

    const frame2 = segmentInOut(smoothScroll, 400, 750, 1150, 1400);
    const frame3 = segmentInOut(smoothScroll, 1250, 1500, 1850, 2050);
    const progress = clamp(smoothScroll / 2100);
    const introExit = smoothstep(60, 500, smoothScroll);
    const sightsEnterRaw = smoothstep(1800, 2300, smoothScroll);
    const sightsEnter = Math.pow(sightsEnterRaw, 1.25);
    const sightsControlsEnter = smoothstep(2050, 2350, smoothScroll);
    const blurActive = clamp(frame2.active + frame3.active);
    const frame2Opacity = frame2.active * (1 - frame3.enter);
    const splitDrift = Math.pow(frame2.enter, 1.5);
    const panel2Opacity = frame2.active * (1 - frame2.exit);
    const panel3Opacity = frame3.active * (1 - frame3.exit);
    const backScale = 0.76 + progress * 0.2 + frame2.enter * 0.18 + frame3.enter * 0.16;
    const sharedHeroY = progress * -74;
    const sharedHeroScale = progress * 0.23;
    const sightsScreenTop = Math.min(220, Math.max(112, window.innerHeight * 0.19)) - 50;
    const sightsParentTop = window.innerHeight - (window.innerHeight - sightsScreenTop) / backScale;

    const root = document.documentElement.style;

    root.setProperty("--mx", (reduceMotion.matches ? 0 : mouseX).toFixed(4));
    root.setProperty("--my", (reduceMotion.matches ? 0 : mouseY).toFixed(4));

    root.setProperty("--back-opacity", (1 - frame2.active * 0.06).toFixed(4));
    root.setProperty("--back-x", `${(mouseX * -12).toFixed(2)}px`);
    root.setProperty("--back-y", `${(mouseY * -4).toFixed(2)}px`);
    root.setProperty("--back-scale", backScale.toFixed(4));
    root.setProperty("--four-y", `${(10 + progress * 10).toFixed(2)}vh`);
    root.setProperty("--four-scale", (0.78 + progress * 0.16).toFixed(4));
    root.setProperty("--bazaar-y", `${(20 - progress * 8).toFixed(2)}vh`);
    root.setProperty("--blur-px", `${(blurActive * 14).toFixed(2)}px`);
    root.setProperty("--back-brightness", (1 - blurActive * 0.255).toFixed(4));
    root.setProperty("--bazaar-blur-px", `${(frame2.active * 14).toFixed(2)}px`);
    root.setProperty("--bazaar-brightness", (1 - frame2.active * 0.255 - frame3.active * 0.06).toFixed(4));
    root.setProperty("--bazaar-saturation", (1 + frame3.active * 0.18).toFixed(4));
    root.setProperty("--shade-opacity", "1");
    root.setProperty("--shade-z", frame2.active > 0.02 ? "2" : "0");
    root.setProperty("--shade-top-alpha", (blurActive * 0.465).toFixed(4));
    root.setProperty("--shade-mid-alpha", (blurActive * 0.42).toFixed(4));
    root.setProperty("--shade-bottom-alpha", (blurActive * 0.51).toFixed(4));

    root.setProperty("--title-y", `${(introExit * -210).toFixed(2)}px`);
    root.setProperty("--title-scale", (1 - introExit * 0.08).toFixed(4));
    root.setProperty("--title-opacity", (1 - introExit).toFixed(4));

    root.setProperty("--bridge-x", `calc(-50% + ${(mouseX * 18).toFixed(2)}px)`);
    root.setProperty("--bridge-y", `${(mouseY * 8 + sharedHeroY - frame2.exit * 760).toFixed(2)}px`);
    root.setProperty("--bridge-bottom", `${(5 - frame2.enter * 13).toFixed(2)}vh`);
    root.setProperty("--bridge-width", `${(67.2 + frame2.enter * 37.8).toFixed(2)}vw`);
    root.setProperty("--bridge-scale", (1.02 + sharedHeroScale + frame2.exit * 0.46).toFixed(4));

    root.setProperty("--split-left-x", `calc(-50% + ${(-splitDrift * 46).toFixed(2)}vw + ${(mouseX * 22).toFixed(2)}px)`);
    root.setProperty("--split-left-y", `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(2)}px`);
    root.setProperty("--split-left-scale", (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));
    root.setProperty("--split-right-x", `calc(-50% + ${(splitDrift * 46).toFixed(2)}vw + ${(mouseX * 22).toFixed(2)}px)`);
    root.setProperty("--split-right-y", `${(mouseY * 10 + sharedHeroY - splitDrift * 180).toFixed(2)}px`);
    root.setProperty("--split-right-scale", (1 + sharedHeroScale + frame2.enter * 0.74).toFixed(4));

    root.setProperty("--frame2-opacity", frame2Opacity.toFixed(4));
    root.setProperty("--frame2-x", `calc(-50% + ${(mouseX * 10).toFixed(2)}px)`);
    root.setProperty("--frame2-y", `calc(-50% + ${(mouseY * 8 - frame2.exit * 150).toFixed(2)}px)`);
    root.setProperty("--frame2-scale", (1.06 + frame2.enter * 0.08 + frame2.exit * 0.08).toFixed(4));

    root.setProperty("--intro-copy-y", `${(introExit * 90).toFixed(2)}px`);
    root.setProperty("--intro-copy-opacity", (1 - introExit).toFixed(4));
    root.setProperty("--panel2-opacity", panel2Opacity.toFixed(4));
    root.setProperty("--panel2-y", `calc(-50% + ${(-frame2.exit * 86 + (1 - frame2.enter) * 58).toFixed(2)}px)`);
    root.setProperty("--panel3-opacity", panel3Opacity.toFixed(4));
    root.setProperty("--panel3-y", `calc(-50% + ${(-frame3.exit * 86 + (1 - frame3.enter) * 58).toFixed(2)}px)`);

    root.setProperty("--sights-opacity", sightsEnter.toFixed(4));
    root.setProperty("--sights-controls-opacity", sightsControlsEnter.toFixed(4));
    const sightsControls = document.querySelector(".sights-controls");
    if (sightsControls) {
      sightsControls.classList.toggle("is-ready", sightsControlsEnter > 0.9);
    }
    root.setProperty("--sights-visibility", sightsEnter > 0.01 ? "visible" : "hidden");
    root.setProperty("--sights-y", "0px");
    root.setProperty("--sights-enter-x", `${((1 - sightsEnter) * 100).toFixed(2)}vw`);
    root.setProperty("--sights-scale", (1 / backScale).toFixed(4));
    root.setProperty("--sights-top", `${sightsParentTop.toFixed(2)}px`);
    root.setProperty("--sights-screen-top", `${sightsScreenTop.toFixed(2)}px`);

    // Scroll-driven horizontal card translation: scrolling down drives horizontal movement across all 10 products
    const sightsProgress = smoothstep(1500, 2400, smoothScroll);
    if (sightsTrack && sightCards.length) {
      const cardWidth = sightCards[0].offsetWidth || 340;
      const gap = 20;
      const container = sightsTrack.closest(".sights-slider") || document.body;
      const visibleWidth = container.clientWidth || window.innerWidth;
      const totalTrackWidth = (cardWidth + gap) * sightCards.length - gap;
      const maxShift = Math.max(0, totalTrackWidth - visibleWidth);
      const scrollShift = -(sightsProgress * maxShift);
      document.documentElement.style.setProperty("--sights-shift", `${scrollShift.toFixed(2)}px`);
    }

    if (
      Math.abs(smoothScroll - targetScroll) > 0.08 ||
      Math.abs(mouseX - targetMouseX) > 0.001 ||
      Math.abs(mouseY - targetMouseY) > 0.001
    ) {
      requestTick();
    }
  }

  function requestTick() {
    if (!rafPending) {
      rafPending = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", () => {
    updateSightSlider();
    requestTick();
  });
  window.addEventListener(
    "pointermove",
    (e) => {
      targetMouseX = e.clientX / window.innerWidth - 0.5;
      targetMouseY = e.clientY / window.innerHeight - 0.5;
      requestTick();
    },
    { passive: true }
  );

  /* ==========================================================================
     5. DEDUPLICATED LUXURY SIGHTS SLIDER (Single Unique Set)
     ========================================================================== */
  const sightsTrack = document.querySelector(".sights-track");
  const sightPrevBtn = document.querySelector(".sight-prev");
  const sightNextBtn = document.querySelector(".sight-next");
  let sightCards = [];
  let activeSight = 0;

  function setupSightSlider() {
    if (!sightsTrack) return;
    sightCards = Array.from(sightsTrack.querySelectorAll(".sight-card"));
    if (!sightCards.length) return;

    sightCards.forEach((card, idx) => {
      card.dataset.sightIndex = String(idx);

      // Add to Bag direct button
      const addBtn = card.querySelector(".btn-sight-add");
      if (addBtn) {
        addBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const pid = Number(addBtn.dataset.addId || card.dataset.productId);
          if (pid) addToCart(pid, 1);
        });
      }

      // Quick View direct button
      const viewBtn = card.querySelector(".btn-sight-view");
      if (viewBtn) {
        viewBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const pid = Number(viewBtn.dataset.viewId || card.dataset.productId);
          if (pid) openProductModal(pid);
        });
      }

      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-sight-add") || e.target.closest(".btn-sight-view")) return;
        selectSightCard(card);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectSightCard(card);
        }
      });
    });

    activeSight = 0;
    updateSightSlider();
  }

  function updateSightSlider() {
    if (!sightCards.length || !sightsTrack) return;
    const cardWidth = sightCards[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(sightsTrack).columnGap || getComputedStyle(sightsTrack).gap || "20");
    const container = sightsTrack.closest(".sights-slider") || document.body;
    const visibleWidth = container.clientWidth;
    const totalTrackWidth = (cardWidth + gap) * sightCards.length - gap;
    const maxShift = Math.max(0, totalTrackWidth - visibleWidth);

    const targetShift = -Math.min(activeSight * (cardWidth + gap), maxShift);
    document.documentElement.style.setProperty("--sights-shift", `${targetShift}px`);

    sightCards.forEach((c, i) => {
      c.classList.toggle("is-active", i === activeSight);
    });

    if (sightPrevBtn) {
      sightPrevBtn.style.opacity = activeSight === 0 ? "0.35" : "1";
      sightPrevBtn.style.pointerEvents = activeSight === 0 ? "none" : "auto";
    }
    if (sightNextBtn) {
      const isAtEnd = targetShift <= -maxShift + 2;
      sightNextBtn.style.opacity = (activeSight >= sightCards.length - 1 || isAtEnd) ? "0.35" : "1";
      sightNextBtn.style.pointerEvents = (activeSight >= sightCards.length - 1 || isAtEnd) ? "none" : "auto";
    }
  }

  function moveSightSlider(dir) {
    const maxIdx = Math.max(0, sightCards.length - 1);
    activeSight = clamp(activeSight + dir, 0, maxIdx);
    updateSightSlider();
  }

  function selectSightCard(card) {
    const idx = Number(card.dataset.sightIndex);
    if (Number.isFinite(idx)) {
      activeSight = idx;
      updateSightSlider();
      const pid = Number(card.dataset.productId);
      if (pid) openProductModal(pid);
    }
  }

  if (sightPrevBtn) sightPrevBtn.addEventListener("click", () => moveSightSlider(-1));
  if (sightNextBtn) sightNextBtn.addEventListener("click", () => moveSightSlider(1));

  /* ==========================================================================
     6. BESPOKE ATELIER CONFIGURATOR STUDIO
     ========================================================================== */
  const configTotalVal = document.getElementById("configTotalVal");
  const configBadge = document.getElementById("configBadge");
  const configPreviewImg = document.getElementById("configPreviewImg");
  const configStageWrapper = document.querySelector(".config-stage-wrapper");
  const engravingInput = document.getElementById("engravingInput");
  const monogramPreviewText = document.getElementById("monogramPreviewText");
  const commissionBespokeBtn = document.getElementById("commissionBespokeBtn");

  const HORIZON_BASE_WATCH_IMG = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80";

  const WATCH_CASE_ASSETS = {
    titanium: {
      image: HORIZON_BASE_WATCH_IMG,
      filterClass: "watch-filter-titanium"
    },
    gold: {
      image: HORIZON_BASE_WATCH_IMG,
      filterClass: "watch-filter-gold"
    },
    ceramic: {
      image: HORIZON_BASE_WATCH_IMG,
      filterClass: "watch-filter-ceramic"
    }
  };

  let bespokeConfig = {
    case: { val: "titanium", name: "Grade 5 Aerospace Titanium", price: 2499 },
    dial: { val: "sunburst", name: "Sunburst Obsidian", price: 0 },
    strap: { val: "vachetta", name: "Tuscan Vachetta Leather", price: 0 },
    engraving: "A • W"
  };

  function updateBespokeSummary() {
    const totalUSD = (bespokeConfig.case.price || 0) + (bespokeConfig.dial.price || 0) + (bespokeConfig.strap.price || 0);
    if (configTotalVal) configTotalVal.textContent = formatPrice(totalUSD);
    if (configBadge) {
      configBadge.textContent = `${bespokeConfig.case.name.toUpperCase()} • ${bespokeConfig.dial.name.toUpperCase()}`;
    }

    // Dynamic Image & Color Tone Switch
    const caseKey = bespokeConfig.case.val || "titanium";
    const asset = WATCH_CASE_ASSETS[caseKey] || WATCH_CASE_ASSETS.titanium;

    if (configStageWrapper) {
      configStageWrapper.setAttribute("data-case", caseKey);
    }

    if (configPreviewImg) {
      configPreviewImg.classList.add("is-changing");
      setTimeout(() => {
        configPreviewImg.src = asset.image;
        configPreviewImg.className = `config-preview-image ${asset.filterClass}`;
        configPreviewImg.classList.remove("is-changing");
      }, 120);
    }
  }

  document.querySelectorAll(".config-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const type = chip.dataset.optType;
      chip.parentElement.querySelectorAll(".config-chip").forEach((c) => c.classList.remove("is-selected"));
      chip.classList.add("is-selected");

      if (type === "case") {
        bespokeConfig.case = {
          val: chip.dataset.val || "titanium",
          name: chip.dataset.name,
          price: Number(chip.dataset.price) || 2499
        };
      } else if (type === "dial") {
        bespokeConfig.dial = {
          val: chip.dataset.val || "sunburst",
          name: chip.dataset.name,
          price: Number(chip.dataset.price) || 0
        };
      } else if (type === "strap") {
        bespokeConfig.strap = {
          val: chip.dataset.val || "vachetta",
          name: chip.dataset.name,
          price: Number(chip.dataset.price) || 0
        };
      }

      updateBespokeSummary();
    });
  });

  if (engravingInput && monogramPreviewText) {
    engravingInput.addEventListener("input", (e) => {
      const val = e.target.value.trim() || "A • W";
      bespokeConfig.engraving = val;
      monogramPreviewText.textContent = val;
    });
  }

  if (commissionBespokeBtn) {
    commissionBespokeBtn.addEventListener("click", () => {
      const totalUSD = (bespokeConfig.case.price || 0) + (bespokeConfig.dial.price || 0) + (bespokeConfig.strap.price || 0);
      const bespokeTitle = `Bespoke Horizon (${bespokeConfig.case.name}, ${bespokeConfig.dial.name})`;
      const asset = WATCH_CASE_ASSETS[bespokeConfig.case.val] || WATCH_CASE_ASSETS.titanium;
      const bespokeItem = {
        id: 999,
        title: bespokeTitle,
        priceUSD: totalUSD,
        qty: 1,
        variant: `Engraved: [${bespokeConfig.engraving}] • Strap: ${bespokeConfig.strap.name}`,
        image: asset.image
      };

      cart.push(bespokeItem);
      saveState();
      showToast("✦ Bespoke Commission Added to Acquisition Bag!");
      openCartDrawer();
    });
  }

  /* ==========================================================================
     7. CATALOG ARCHIVE, FILTER & SEARCH
     ========================================================================== */
  const productGrid = document.getElementById("productGrid");
  const catFilterBtns = Array.from(document.querySelectorAll(".cat-filter-btn"));
  const catalogSearchInput = document.getElementById("catalogSearchInput");
  const catalogSortSelect = document.getElementById("catalogSortSelect");
  const catalogEmptyState = document.getElementById("catalogEmptyState");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "featured";

  function renderCatalog() {
    if (!productGrid) return;

    let filtered = PRODUCTS.filter((p) => {
      const matchCat = currentCategory === "all" || p.category === currentCategory;
      const query = currentSearch.toLowerCase().trim();
      const matchSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.kicker.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });

    if (currentSort === "price-asc") {
      filtered.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (currentSort === "price-desc") {
      filtered.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (currentSort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    }

    if (filtered.length === 0) {
      productGrid.style.display = "none";
      if (catalogEmptyState) catalogEmptyState.style.display = "block";
      return;
    }

    productGrid.style.display = "grid";
    if (catalogEmptyState) catalogEmptyState.style.display = "none";

    productGrid.innerHTML = filtered
      .map((p) => {
        const isWishlisted = wishlist.includes(p.id);
        return `
        <article class="product-card" data-product-id="${p.id}">
          <div class="card-media">
            <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy" />
            <span class="card-badge-top">${p.stock <= 5 ? `Only ${p.stock} Left` : "Atelier Edition"}</span>
            <button class="btn-card-wishlist ${isWishlisted ? "is-active" : ""}" data-wishlist-id="${p.id}" aria-label="Add to wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? "#ff4b4b" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <div class="card-hover-actions">
              <button class="btn-quick-view" data-quick-id="${p.id}">Quick View</button>
              <button class="btn-quick-add" data-add-id="${p.id}" aria-label="Add to cart">+</button>
            </div>
          </div>
          <div class="card-body">
            <span class="card-kicker">${p.kicker}</span>
            <h3 class="card-title">${p.title}</h3>
            <p class="card-desc">${p.description}</p>
            <div class="card-footer">
              <span class="card-price">${formatPrice(p.priceUSD)}</span>
              <span class="card-rating">★ ${p.rating} (${p.reviewsCount})</span>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    attachCardListeners();
  }

  function attachCardListeners() {
    document.querySelectorAll(".btn-quick-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProductModal(Number(btn.dataset.quickId));
      });
    });

    document.querySelectorAll(".btn-quick-add").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(Number(btn.dataset.addId), 1);
      });
    });

    document.querySelectorAll(".btn-card-wishlist").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWishlist(Number(btn.dataset.wishlistId));
      });
    });

    document.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => {
        openProductModal(Number(card.dataset.productId));
      });
    });
  }

  catFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      catFilterBtns.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      currentCategory = btn.dataset.category;
      renderCatalog();
    });
  });

  if (catalogSearchInput) {
    catalogSearchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderCatalog();
    });
  }

  if (catalogSortSelect) {
    catalogSortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      currentCategory = "all";
      currentSearch = "";
      if (catalogSearchInput) catalogSearchInput.value = "";
      catFilterBtns[0]?.click();
      renderCatalog();
    });
  }

  /* ==========================================================================
     8. CART MANAGEMENT & DRAWER
     ========================================================================== */
  const cartDrawer = document.getElementById("cartDrawer");
  const cartTriggerBtn = document.getElementById("cartTriggerBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartCountEl = document.getElementById("cartCount");
  const cartDrawerCountEl = document.getElementById("cartDrawerCount");
  const cartItemsContainer = document.getElementById("cartItemsContainer");
  const cartSubtotalEl = document.getElementById("cartSubtotal");
  const cartDiscountEl = document.getElementById("cartDiscount");
  const discountRow = document.getElementById("discountRow");
  const cartShippingEl = document.getElementById("cartShipping");
  const cartTotalEl = document.getElementById("cartTotal");
  const shippingProgressBar = document.getElementById("shippingProgressBar");
  const shippingTrackerLabel = document.getElementById("shippingTrackerLabel");
  const promoCodeInput = document.getElementById("promoCodeInput");
  const applyPromoBtn = document.getElementById("applyPromoBtn");
  const promoMessage = document.getElementById("promoMessage");
  const proceedCheckoutBtn = document.getElementById("proceedCheckoutBtn");

  function addToCart(productId, qty = 1, variant = null) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const chosenVariant = variant || product.variants[0];
    const existing = cart.find((item) => item.id === productId && item.variant === chosenVariant);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        id: productId,
        title: product.title,
        priceUSD: product.priceUSD,
        image: product.image,
        qty: qty,
        variant: chosenVariant
      });
    }

    saveState();
    triggerBadgeBounce(cartCountEl);
    showToast(`Added "${product.title}" to acquisition bag`);
    openCartDrawer();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveState();
  }

  function updateItemQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      removeFromCart(index);
    } else {
      saveState();
    }
  }

  function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCountEl) cartCountEl.textContent = String(totalCount);
    if (cartDrawerCountEl) cartDrawerCountEl.textContent = String(totalCount);

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-bag-ring">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          <h3 class="empty-state-title">Your Atelier Bag is Empty</h3>
          <p class="empty-state-sub">Explore our numbered horology, acoustic sculptures, and bespoke handcrafted commissions.</p>
          <a href="#catalog" class="btn btn-primary empty-explore-btn" id="cartExploreBtn">
            <span>Discover Archive Pieces</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      `;
      if (proceedCheckoutBtn) proceedCheckoutBtn.disabled = true;

      document.getElementById("cartExploreBtn")?.addEventListener("click", () => {
        closeCartDrawer();
      });
    } else {
      if (proceedCheckoutBtn) proceedCheckoutBtn.disabled = false;
      cartItemsContainer.innerHTML = cart
        .map((item, idx) => `
        <div class="cart-item-card">
          <div class="cart-item-media">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
          </div>
          <div class="cart-item-info">
            <div class="cart-item-header">
              <h4 class="cart-item-title">${item.title}</h4>
              <button class="cart-del-btn" data-cart-remove="${idx}" aria-label="Remove item">✕</button>
            </div>
            ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ""}
            <div class="cart-item-footer">
              <div class="cart-qty-ctrl">
                <button class="cart-qty-btn" data-cart-minus="${idx}">−</button>
                <span class="cart-qty-val">${item.qty}</span>
                <button class="cart-qty-btn" data-cart-plus="${idx}">+</button>
              </div>
              <span class="cart-item-price">${formatPrice(item.priceUSD * item.qty)}</span>
            </div>
          </div>
        </div>
      `)
        .join("");

      cartItemsContainer.querySelectorAll("[data-cart-minus]").forEach((b) => {
        b.addEventListener("click", () => updateItemQty(Number(b.dataset.cartMinus), -1));
      });
      cartItemsContainer.querySelectorAll("[data-cart-plus]").forEach((b) => {
        b.addEventListener("click", () => updateItemQty(Number(b.dataset.cartPlus), 1));
      });
      cartItemsContainer.querySelectorAll("[data-cart-remove]").forEach((b) => {
        b.addEventListener("click", () => removeFromCart(Number(b.dataset.cartRemove)));
      });
    }

    const subtotalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);
    let discountUSD = appliedDiscount > 0 ? (discountCode === "GUILD100" ? 100 : subtotalUSD * (appliedDiscount / 100)) : 0;
    const totalUSD = Math.max(0, subtotalUSD - discountUSD);

    if (cartSubtotalEl) cartSubtotalEl.textContent = formatPrice(subtotalUSD);
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalUSD);

    if (discountRow && cartDiscountEl) {
      if (discountUSD > 0) {
        discountRow.style.display = "flex";
        cartDiscountEl.textContent = `-${formatPrice(discountUSD)}`;
      } else {
        discountRow.style.display = "none";
      }
    }

    if (shippingProgressBar && shippingTrackerLabel) {
      if (subtotalUSD >= 999) {
        shippingProgressBar.style.width = "100%";
        shippingTrackerLabel.textContent = "✓ Complimentary Armored Courier Unlocked";
        if (cartShippingEl) cartShippingEl.textContent = "Free";
      } else {
        const remaining = 999 - subtotalUSD;
        const pct = Math.min(100, (subtotalUSD / 999) * 100);
        shippingProgressBar.style.width = `${pct}%`;
        shippingTrackerLabel.textContent = `Add ${formatPrice(remaining)} more for Free Courier Delivery`;
        if (cartShippingEl) cartShippingEl.textContent = subtotalUSD > 0 ? formatPrice(99) : "Free";
      }
    }
  }

  function openCartDrawer() {
    cartDrawer?.classList.add("is-open");
    cartDrawer?.setAttribute("aria-hidden", "false");
  }

  function closeCartDrawer() {
    cartDrawer?.classList.remove("is-open");
    cartDrawer?.setAttribute("aria-hidden", "true");
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener("click", openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  if (cartDrawer) {
    cartDrawer.addEventListener("click", (e) => {
      if (e.target === cartDrawer) closeCartDrawer();
    });
  }

  if (applyPromoBtn && promoCodeInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (code === "AURA10") {
        appliedDiscount = 10;
        discountCode = "AURA10";
        showPromoMsg("✓ 10% Prix Winner Discount Applied", "success");
        saveState();
      } else if (code === "GUILD100") {
        appliedDiscount = 100;
        discountCode = "GUILD100";
        showPromoMsg("✓ $100 VIP Guild Voucher Applied", "success");
        saveState();
      } else {
        showPromoMsg("Invalid code. Try 'AURA10' or 'GUILD100'", "error");
      }
    });
  }

  function showPromoMsg(msg, type) {
    if (promoMessage) {
      promoMessage.textContent = msg;
      promoMessage.className = `promo-message ${type}`;
      promoMessage.style.display = "block";
    }
  }

  /* ==========================================================================
     9. WISHLIST MANAGEMENT & DRAWER
     ========================================================================== */
  const wishlistDrawer = document.getElementById("wishlistDrawer");
  const wishlistTriggerBtn = document.getElementById("wishlistTriggerBtn");
  const closeWishlistBtn = document.getElementById("closeWishlistBtn");
  const wishlistCountEl = document.getElementById("wishlistCount");
  const wishlistDrawerCountEl = document.getElementById("wishlistDrawerCount");
  const wishlistItemsContainer = document.getElementById("wishlistItemsContainer");

  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const product = PRODUCTS.find((p) => p.id === productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed "${product?.title || "Item"}" from wishlist`);
    } else {
      wishlist.push(productId);
      showToast(`Saved "${product?.title || "Item"}" to wishlist`);
    }
    saveState();
    renderCatalog();
  }

  function updateWishlistUI() {
    if (wishlistCountEl) wishlistCountEl.textContent = String(wishlist.length);
    if (wishlistDrawerCountEl) wishlistDrawerCountEl.textContent = String(wishlist.length);

    if (!wishlistItemsContainer) return;

    if (wishlist.length === 0) {
      wishlistItemsContainer.innerHTML = `
        <div class="wishlist-empty-state">
          <div class="empty-heart-ring">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <h3 class="empty-state-title">Your Curated Wishlist is Empty</h3>
          <p class="empty-state-sub">Tap the heart icon on any horological masterpiece or atelier artifact to preserve it in your private collection.</p>
          <a href="#catalog" class="btn btn-primary empty-explore-btn" id="wishlistExploreBtn">
            <span>Explore Archive Catalog</span>
            <span class="btn-arrow">→</span>
          </a>
        </div>
      `;

      document.getElementById("wishlistExploreBtn")?.addEventListener("click", () => {
        wishlistDrawer?.classList.remove("is-open");
        wishlistDrawer?.setAttribute("aria-hidden", "true");
      });
    } else {
      const itemsHtml = wishlist
        .map((id) => {
          const p = PRODUCTS.find((item) => item.id === id);
          if (!p) return "";
          return `
          <div class="wishlist-card">
            <div class="wishlist-card-media">
              <img src="${p.image}" alt="${p.title}" class="wishlist-card-img" />
            </div>
            <div class="wishlist-card-info">
              <div class="wishlist-card-header">
                <div>
                  <span class="wishlist-kicker">${p.kicker}</span>
                  <h4 class="wishlist-title">${p.title}</h4>
                </div>
                <button class="wishlist-del-btn" data-wish-del="${p.id}" aria-label="Remove item">✕</button>
              </div>
              <div class="wishlist-price-row">
                <span class="wishlist-price">${formatPrice(p.priceUSD)}</span>
                <span class="wishlist-stock-tag">✦ In Stock (${p.stock || 4} left)</span>
              </div>
              <div class="wishlist-card-actions">
                <button class="btn btn-primary wishlist-move-btn" data-move-cart="${p.id}">
                  <span>Move to Acquisition Bag</span>
                  <span class="btn-arrow">✦</span>
                </button>
              </div>
            </div>
          </div>
        `;
        })
        .join("");

      wishlistItemsContainer.innerHTML = `
        <div class="wishlist-items-list">${itemsHtml}</div>
        <div class="wishlist-footer-actions">
          <button class="btn btn-primary wishlist-move-all-btn" id="wishlistMoveAllBtn">
            <span>Move All Items to Bag</span>
            <span class="btn-arrow">→</span>
          </button>
          <button class="wishlist-clear-link" id="wishlistClearBtn">Clear Entire Wishlist</button>
        </div>
      `;

      wishlistItemsContainer.querySelectorAll("[data-move-cart]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = Number(btn.dataset.moveCart);
          addToCart(id, 1);
          toggleWishlist(id);
        });
      });

      wishlistItemsContainer.querySelectorAll("[data-wish-del]").forEach((btn) => {
        btn.addEventListener("click", () => toggleWishlist(Number(btn.dataset.wishDel)));
      });

      document.getElementById("wishlistMoveAllBtn")?.addEventListener("click", () => {
        const idsToMove = [...wishlist];
        idsToMove.forEach((id) => addToCart(id, 1));
        wishlist = [];
        saveState();
        showToast("✦ All Wishlist items moved to Acquisition Bag!");
        wishlistDrawer?.classList.remove("is-open");
        wishlistDrawer?.setAttribute("aria-hidden", "true");
        openCartDrawer();
      });

      document.getElementById("wishlistClearBtn")?.addEventListener("click", () => {
        wishlist = [];
        saveState();
        showToast("Wishlist cleared");
      });
    }
  }

  if (wishlistTriggerBtn) {
    wishlistTriggerBtn.addEventListener("click", () => {
      wishlistDrawer?.classList.add("is-open");
      wishlistDrawer?.setAttribute("aria-hidden", "false");
    });
  }
  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener("click", () => {
      wishlistDrawer?.classList.remove("is-open");
      wishlistDrawer?.setAttribute("aria-hidden", "true");
    });
  }

  /* ==========================================================================
     MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const closeMobileNavBtn = document.getElementById("closeMobileNavBtn");

  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileNavDrawer.classList.add("is-open");
      mobileNavDrawer.setAttribute("aria-hidden", "false");
    });
  }

  if (closeMobileNavBtn && mobileNavDrawer) {
    closeMobileNavBtn.addEventListener("click", () => {
      mobileNavDrawer.classList.remove("is-open");
      mobileNavDrawer.setAttribute("aria-hidden", "true");
    });
  }

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavDrawer?.classList.remove("is-open");
      mobileNavDrawer?.setAttribute("aria-hidden", "true");
    });
  });

  /* ==========================================================================
     10. PRODUCT QUICK VIEW MODAL WITH ZOOM
     ========================================================================== */
  const productModal = document.getElementById("productModal");
  const modalProductContent = document.getElementById("modalProductContent");
  const closeProductModalBtn = document.getElementById("closeProductModalBtn");

  function openProductModal(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product || !modalProductContent || !productModal) return;

    let selectedVariant = product.variants[0];
    let selectedQty = 1;

    modalProductContent.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-gallery">
          <div class="modal-gallery-badge">${product.stock <= 5 ? `✦ ONLY ${product.stock} LEFT` : "✦ ATELIER EDITION"}</div>
          <img src="${product.image}" alt="${product.title}" class="modal-gallery-img" />
        </div>
        <div class="modal-product-details">
          <div>
            <span class="modal-kicker">${product.kicker}</span>
            <h2 class="modal-title">${product.title}</h2>
          </div>
          
          <div class="modal-price-rating">
            <span class="modal-price">${formatPrice(product.priceUSD)}</span>
            <span class="modal-rating">★ ${product.rating} <span class="review-sub">(${product.reviewsCount} verified reviews)</span></span>
          </div>

          <p class="modal-desc">${product.description}</p>
          
          <div class="variant-picker">
            <span class="variant-label">Select Edition / Finish:</span>
            <div class="variant-options">
              ${product.variants
                .map((v, i) => `<button class="variant-chip ${i === 0 ? "is-selected" : ""}" data-vname="${v}">${v}</button>`)
                .join("")}
            </div>
          </div>

          <div class="modal-specs">
            ${Object.entries(product.specs || {})
              .map(([key, val]) => `<div><span>${key}</span><strong>${val}</strong></div>`)
              .join("")}
          </div>

          <div class="modal-actions-row">
            <div class="modal-qty-stepper">
              <button class="modal-qty-btn" id="modalQtyMinus" aria-label="Decrease quantity">−</button>
              <span class="modal-qty-val" id="modalQtyVal">1</span>
              <button class="modal-qty-btn" id="modalQtyPlus" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary modal-buy-btn" id="modalAddToCartBtn">
              <span>Add To Acquisition Bag</span>
              <span class="btn-arrow">→</span>
            </button>
            <button class="icon-btn modal-wishlist-trigger" id="modalWishlistBtn" aria-label="Toggle wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="${wishlist.includes(product.id) ? "#ff4b4b" : "none"}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    // Quantity buttons
    const qtyVal = modalProductContent.querySelector("#modalQtyVal");
    modalProductContent.querySelector("#modalQtyMinus")?.addEventListener("click", () => {
      if (selectedQty > 1) {
        selectedQty--;
        if (qtyVal) qtyVal.textContent = selectedQty;
      }
    });
    modalProductContent.querySelector("#modalQtyPlus")?.addEventListener("click", () => {
      if (selectedQty < (product.stock || 10)) {
        selectedQty++;
        if (qtyVal) qtyVal.textContent = selectedQty;
      }
    });

    modalProductContent.querySelectorAll(".variant-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        modalProductContent.querySelectorAll(".variant-chip").forEach((c) => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        selectedVariant = chip.dataset.vname;
      });
    });

    const modalAddBtn = document.getElementById("modalAddToCartBtn");
    if (modalAddBtn) {
      modalAddBtn.addEventListener("click", () => {
        addToCart(product.id, selectedQty, selectedVariant);
        closeProductModal();
      });
    }

    const modalWishBtn = document.getElementById("modalWishlistBtn");
    if (modalWishBtn) {
      modalWishBtn.addEventListener("click", () => {
        toggleWishlist(product.id);
        const isW = wishlist.includes(product.id);
        modalWishBtn.querySelector("svg").setAttribute("fill", isW ? "#ff4b4b" : "none");
      });
    }

    const modalGallery = modalProductContent.querySelector(".modal-gallery");
    const modalGalleryImg = modalProductContent.querySelector(".modal-gallery-img");
    if (modalGallery && modalGalleryImg) {
      modalGallery.addEventListener("mousemove", (e) => {
        const rect = modalGallery.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        modalGalleryImg.style.transformOrigin = `${x}% ${y}%`;
      });
      modalGallery.addEventListener("mouseleave", () => {
        modalGalleryImg.style.transformOrigin = "center center";
      });
    }

    productModal.classList.add("is-open");
    productModal.setAttribute("aria-hidden", "false");
  }

  function closeProductModal() {
    productModal?.classList.remove("is-open");
    productModal?.setAttribute("aria-hidden", "true");
  }

  if (closeProductModalBtn) closeProductModalBtn.addEventListener("click", closeProductModal);
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  /* ==========================================================================
     11. CHECKOUT MODAL & HOLOGRAPHIC CERTIFICATE
     ========================================================================== */
  const checkoutModal = document.getElementById("checkoutModal");
  const closeCheckoutModalBtn = document.getElementById("closeCheckoutModalBtn");
  const cancelCheckoutBtn = document.getElementById("cancelCheckoutBtn");
  const checkoutStep1 = document.getElementById("checkoutStep1");
  const checkoutStep2 = document.getElementById("checkoutStep2");
  const checkoutStep3 = document.getElementById("checkoutStep3");
  const stepIndicator1 = document.getElementById("stepIndicator1");
  const stepIndicator2 = document.getElementById("stepIndicator2");
  const stepIndicator3 = document.getElementById("stepIndicator3");
  const backToStep1Btn = document.getElementById("backToStep1Btn");
  const checkoutFinalAmount = document.getElementById("checkoutFinalAmount");
  const holographicCertificateCard = document.getElementById("holographicCertificateCard");
  const finishCheckoutBtn = document.getElementById("finishCheckoutBtn");

  let customerDetails = {};

  if (proceedCheckoutBtn) {
    proceedCheckoutBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      closeCartDrawer();
      openCheckoutModal();
    });
  }

  function openCheckoutModal() {
    if (!checkoutModal) return;
    showCheckoutStep(1);
    checkoutModal.classList.add("is-open");
    checkoutModal.setAttribute("aria-hidden", "false");
  }

  function closeCheckoutModal() {
    checkoutModal?.classList.remove("is-open");
    checkoutModal?.setAttribute("aria-hidden", "true");
  }

  if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener("click", closeCheckoutModal);
  if (cancelCheckoutBtn) {
    cancelCheckoutBtn.addEventListener("click", () => {
      closeCheckoutModal();
      openCartDrawer();
    });
  }

  function showCheckoutStep(step) {
    if (checkoutStep1) checkoutStep1.style.display = step === 1 ? "block" : "none";
    if (checkoutStep2) checkoutStep2.style.display = step === 2 ? "block" : "none";
    if (checkoutStep3) checkoutStep3.style.display = step === 3 ? "block" : "none";

    stepIndicator1?.classList.toggle("is-active", step >= 1);
    stepIndicator2?.classList.toggle("is-active", step >= 2);
    stepIndicator3?.classList.toggle("is-active", step >= 3);

    if (step === 2 && checkoutFinalAmount) {
      const subtotalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);
      let discountUSD = appliedDiscount > 0 ? (discountCode === "GUILD100" ? 100 : subtotalUSD * (appliedDiscount / 100)) : 0;
      checkoutFinalAmount.textContent = formatPrice(Math.max(0, subtotalUSD - discountUSD));
    }
  }

  if (checkoutStep1) {
    checkoutStep1.addEventListener("submit", (e) => {
      e.preventDefault();
      customerDetails = {
        name: `${document.getElementById("cFirstName").value} ${document.getElementById("cLastName").value}`,
        email: document.getElementById("cEmail").value,
        address: document.getElementById("cAddress").value,
        city: document.getElementById("cCity").value,
        country: document.getElementById("cCountry").value
      };
      showCheckoutStep(2);
    });
  }

  if (backToStep1Btn) {
    backToStep1Btn.addEventListener("click", () => showCheckoutStep(1));
  }

  if (checkoutStep2) {
    checkoutStep2.addEventListener("submit", (e) => {
      e.preventDefault();
      const confirmBtn = document.getElementById("confirmPaymentBtn");
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = "<span>Cryptographic Ledger Verification...</span>";
      }

      setTimeout(() => {
        if (confirmBtn) confirmBtn.disabled = false;
        completeOrder();
      }, 1400);
    });
  }

  function completeOrder() {
    const orderId = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
    const subtotalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);
    let discountUSD = appliedDiscount > 0 ? (discountCode === "GUILD100" ? 100 : subtotalUSD * (appliedDiscount / 100)) : 0;
    const finalUSD = Math.max(0, subtotalUSD - discountUSD);

    if (holographicCertificateCard) {
      holographicCertificateCard.innerHTML = `
        <div class="cert-header">
          <div>
            <div style="font-size: 10px; color: var(--accent-gold); text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em;">Certificate of Authenticity</div>
            <div class="cert-id">${orderId}</div>
          </div>
          <div class="cert-qr">[NFC CRYPTO-SEAL REGISTERED]</div>
        </div>
        <div class="cert-owner-details">
          <div><strong>Beneficiary / Collector:</strong> ${customerDetails.name}</div>
          <div><strong>Destination Vault:</strong> ${customerDetails.address}, ${customerDetails.city}, ${customerDetails.country}</div>
          <div><strong>Electronic Ledger Dispatch:</strong> ${customerDetails.email}</div>
          <div style="margin-top: 14px; padding-top: 10px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; font-weight: 700; color: var(--accent-gold-light);">
            <span>Acquisition Total:</span>
            <span>${formatPrice(finalUSD)}</span>
          </div>
        </div>
      `;
    }

    cart = [];
    appliedDiscount = 0;
    discountCode = "";
    saveState();
    showCheckoutStep(3);
  }

  if (finishCheckoutBtn) {
    finishCheckoutBtn.addEventListener("click", () => {
      closeCheckoutModal();
      window.location.hash = "#cinema";
    });
  }

  /* ==========================================================================
     13. COLLECTOR ACCOUNT VAULT & REVIEW SYSTEM
     ========================================================================== */
  const accountModal = document.getElementById("accountModal");
  const closeAccountModalBtn = document.getElementById("closeAccountModalBtn");
  const accountTabBtns = Array.from(document.querySelectorAll(".account-tab-btn"));
  const tabCertificates = document.getElementById("tabCertificates");
  const tabLedger = document.getElementById("tabLedger");
  const tabSecurity = document.getElementById("tabSecurity");

  if (closeAccountModalBtn) {
    closeAccountModalBtn.addEventListener("click", () => {
      accountModal?.classList.remove("is-open");
      accountModal?.setAttribute("aria-hidden", "true");
    });
  }

  accountTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      accountTabBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const tab = btn.dataset.tab;

      if (tabCertificates) tabCertificates.style.display = tab === "certificates" ? "block" : "none";
      if (tabLedger) tabLedger.style.display = tab === "ledger" ? "block" : "none";
      if (tabSecurity) tabSecurity.style.display = tab === "security" ? "block" : "none";
    });
  });

  const reviewModal = document.getElementById("reviewModal");
  const openReviewModalBtn = document.getElementById("openReviewModalBtn");
  const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
  const cancelReviewBtn = document.getElementById("cancelReviewBtn");
  const reviewSubmissionForm = document.getElementById("reviewSubmissionForm");
  const reviewsGrid = document.getElementById("reviewsGrid");
  const starPicks = Array.from(document.querySelectorAll(".star-pick"));
  let chosenRating = 5;

  if (openReviewModalBtn) {
    openReviewModalBtn.addEventListener("click", () => {
      reviewModal?.classList.add("is-open");
      reviewModal?.setAttribute("aria-hidden", "false");
    });
  }
  if (closeReviewModalBtn) {
    closeReviewModalBtn.addEventListener("click", () => {
      reviewModal?.classList.remove("is-open");
      reviewModal?.setAttribute("aria-hidden", "true");
    });
  }
  if (cancelReviewBtn) {
    cancelReviewBtn.addEventListener("click", () => {
      reviewModal?.classList.remove("is-open");
      reviewModal?.setAttribute("aria-hidden", "true");
    });
  }

  starPicks.forEach((star) => {
    star.addEventListener("click", () => {
      chosenRating = Number(star.dataset.star);
      starPicks.forEach((s) => {
        const val = Number(s.dataset.star);
        s.classList.toggle("is-active", val <= chosenRating);
      });
    });
  });

  if (reviewSubmissionForm && reviewsGrid) {
    reviewSubmissionForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("revAuthor").value.trim();
      const location = document.getElementById("revLocation").value.trim();
      const quote = document.getElementById("revQuote").value.trim();

      if (!author || !quote) return;

      const stars = "★".repeat(chosenRating) + "☆".repeat(5 - chosenRating);
      const newCard = document.createElement("article");
      newCard.className = "review-card";
      newCard.innerHTML = `
        <div class="review-stars">${stars}</div>
        <p class="review-quote">"${quote}"</p>
        <div class="review-author">
          <div class="author-avatar" style="background: rgba(212,175,55,0.2); border: 1px solid var(--accent-gold); color: var(--accent-gold); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 16px;">
            ${author.charAt(0).toUpperCase()}
          </div>
          <div>
            <span class="author-name">${author}</span>
            <span class="author-location">${location} • Verified Owner</span>
          </div>
        </div>
      `;

      reviewsGrid.prepend(newCard);
      reviewModal?.classList.remove("is-open");
      reviewModal?.setAttribute("aria-hidden", "true");
      reviewSubmissionForm.reset();
      showToast("✦ Collector Review Published Successfully!");
    });
  }

  /* ==========================================================================
     14. ATMOSPHERIC SOUND SYNTHESIZER
     ========================================================================== */
  const audioToggle = document.getElementById("audioToggle");
  let audioCtx = null;
  let masterGain = null;
  let isPlaying = false;

  function initAtmosphereAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);

      const chord = [146.83, 220.0, 277.18, 329.63, 369.99];
      chord.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const filter = audioCtx.createBiquadFilter();
        const gain = audioCtx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450 + idx * 100, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.025 / (idx + 1), audioCtx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
  }

  if (audioToggle) {
    audioToggle.addEventListener("click", () => {
      if (!isPlaying) {
        initAtmosphereAudio();
        masterGain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 1.5);
        isPlaying = true;
        audioToggle.classList.add("is-playing");
        audioToggle.querySelector(".audio-label").textContent = "Mute Soundscape";
        showToast("Atelier ambient soundscape active");
      } else {
        if (masterGain && audioCtx) {
          masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        }
        isPlaying = false;
        audioToggle.classList.remove("is-playing");
        audioToggle.querySelector(".audio-label").textContent = "Atelier Soundscape";
      }
    });
  }

  /* ==========================================================================
     15. TOAST NOTIFICATIONS & BADGE BOUNCE
     ========================================================================== */
  const toastContainer = document.getElementById("toastContainer");

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span style="color: var(--accent-gold);">✦</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  function triggerBadgeBounce(badgeEl) {
    if (!badgeEl) return;
    badgeEl.classList.remove("bounce");
    void badgeEl.offsetWidth;
    badgeEl.classList.add("bounce");
    setTimeout(() => badgeEl.classList.remove("bounce"), 300);
  }

  // VIP Newsletter Form
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterReward = document.getElementById("newsletterReward");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (newsletterReward) newsletterReward.style.display = "inline-flex";
      showToast("Access Granted! Code GUILD100 unlocked.");
    });
  }

  // Global ESC Key Dismiss
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
      wishlistDrawer?.classList.remove("is-open");
      wishlistDrawer?.setAttribute("aria-hidden", "true");
      mobileNavDrawer?.classList.remove("is-open");
      mobileNavDrawer?.setAttribute("aria-hidden", "true");
      closeProductModal();
      closeCheckoutModal();
      accountModal?.classList.remove("is-open");
      accountModal?.setAttribute("aria-hidden", "true");
      reviewModal?.classList.remove("is-open");
      reviewModal?.setAttribute("aria-hidden", "true");
      const nfcModal = document.getElementById("nfcModal");
      nfcModal?.classList.remove("is-open");
      nfcModal?.setAttribute("aria-hidden", "true");
    }
  });

  /* ==========================================================================
     NFC AUTHENTICATION & MULTI-CATEGORY STORYTELLING
     ========================================================================== */
  const vaultTriggerBtn = document.getElementById("vaultTriggerBtn");
  if (vaultTriggerBtn && accountModal) {
    vaultTriggerBtn.addEventListener("click", () => {
      accountModal.classList.add("is-open");
      accountModal.setAttribute("aria-hidden", "false");
    });
  }

  // Explore Audio CTA Button
  const exploreAudioBtn = document.getElementById("exploreAudioBtn");
  if (exploreAudioBtn) {
    exploreAudioBtn.addEventListener("click", (e) => {
      e.preventDefault();
      catFilterBtns.forEach((b) => {
        const isAudio = b.dataset.category === "acoustics";
        b.classList.toggle("is-active", isAudio);
        b.setAttribute("aria-selected", isAudio ? "true" : "false");
      });
      currentCategory = "acoustics";
      renderCatalog();
      document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Bespoke Category Inquiries
  document.querySelectorAll(".bespoke-nav-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      if (!pill.classList.contains("is-active")) {
        showToast(`✦ Atelier Inquiry: ${pill.textContent.trim()} — Contacting Concierge`);
      }
    });
  });

  // Cinematic NFC Verification Sequence
  const nfcModal = document.getElementById("nfcModal");
  const closeNfcModalBtn = document.getElementById("closeNfcModalBtn");
  const closeNfcCertBtn = document.getElementById("closeNfcCertBtn");
  const nfcScanContainer = document.getElementById("nfcScanContainer");
  const nfcResultCard = document.getElementById("nfcResultCard");
  const nfcMainStatus = document.getElementById("nfcMainStatus");
  const nfcSubStatus = document.getElementById("nfcSubStatus");
  const nfcLiveHash = document.getElementById("nfcLiveHash");
  const nfcCertId = document.getElementById("nfcCertId");
  const nfcCertTitle = document.getElementById("nfcCertTitle");
  const nfcCertDesc = document.getElementById("nfcCertDesc");
  const nfcStep1 = document.getElementById("nfcStep1");
  const nfcStep2 = document.getElementById("nfcStep2");
  const nfcStep3 = document.getElementById("nfcStep3");
  const nfcStep4 = document.getElementById("nfcStep4");

  const CERT_DATA_MAP = {
    horizon: {
      id: "AURA-ZH-99482",
      title: "Horizon Titanium Chronograph",
      desc: "CNC-milled Grade 5 Titanium • Serial No. #001/500 • Cryptographically anchored to the AURA Vault Ledger."
    },
    resonance: {
      id: "AURA-ZH-88123",
      title: "Resonance Studio Monitor",
      desc: "Solid American Walnut chassis & Beryllium Dome • Calibrated to Swiss mastering studio acoustic standards."
    },
    vachetta: {
      id: "AURA-FL-77419",
      title: "Tuscan Vachetta Weekender",
      desc: "Naturally vegetable-tanned full-grain hide • Hand-stitched with solid Swiss brass hardware by Florence Guild."
    }
  };

  function startNfcVerification(certKey) {
    if (!nfcModal) return;
    const data = CERT_DATA_MAP[certKey] || CERT_DATA_MAP.horizon;
    
    // Reset modal UI
    if (nfcScanContainer) nfcScanContainer.style.display = "flex";
    if (nfcResultCard) nfcResultCard.style.display = "none";
    [nfcStep1, nfcStep2, nfcStep3, nfcStep4].forEach((s, idx) => {
      if (s) s.classList.toggle("is-active", idx === 0);
    });

    if (nfcMainStatus) nfcMainStatus.textContent = "AUTHENTICATING...";
    if (nfcSubStatus) nfcSubStatus.textContent = "Scanning physical embedded NFC micro-chip & querying cryptographic hash with Zurich vault nodes.";
    if (nfcCertId) nfcCertId.textContent = data.id;
    if (nfcCertTitle) nfcCertTitle.textContent = data.title;
    if (nfcCertDesc) nfcCertDesc.textContent = data.desc;

    nfcModal.classList.add("is-open");
    nfcModal.setAttribute("aria-hidden", "false");

    // Dynamic hash animation
    let hashInterval = setInterval(() => {
      if (nfcLiveHash) {
        nfcLiveHash.textContent = `0x${Math.random().toString(16).substring(2, 10).toUpperCase()}...${Math.random().toString(16).substring(2, 6).toUpperCase()}`;
      }
    }, 100);

    // Step 2: Identity Found (600ms)
    setTimeout(() => {
      if (nfcStep2) nfcStep2.classList.add("is-active");
      if (nfcMainStatus) nfcMainStatus.textContent = "IDENTITY FOUND";
      if (nfcSubStatus) nfcSubStatus.textContent = `Physical NFC chip matched. Ledger Record: ${data.id}`;
    }, 600);

    // Step 3: Edition Verified (1200ms)
    setTimeout(() => {
      if (nfcStep3) nfcStep3.classList.add("is-active");
      if (nfcMainStatus) nfcMainStatus.textContent = "EDITION VERIFIED";
      if (nfcSubStatus) nfcSubStatus.textContent = "Provenance verified on Swiss & Tuscan distributed atelier nodes.";
    }, 1200);

    // Step 4: Certificate Sealed (1800ms)
    setTimeout(() => {
      clearInterval(hashInterval);
      if (nfcStep4) nfcStep4.classList.add("is-active");
      if (nfcLiveHash) nfcLiveHash.textContent = `0x8F9A2B4C99E10F [SEAL VALID]`;
      if (nfcMainStatus) nfcMainStatus.textContent = "CERTIFICATE SEALED ✦";
      if (nfcSubStatus) nfcSubStatus.textContent = "Official cryptographic digital certificate unlocked.";

      setTimeout(() => {
        if (nfcScanContainer) nfcScanContainer.style.display = "none";
        if (nfcResultCard) nfcResultCard.style.display = "block";
      }, 500);
    }, 1800);
  }

  document.querySelectorAll(".btn-view-cert").forEach((btn) => {
    btn.addEventListener("click", () => {
      startNfcVerification(btn.dataset.cert);
    });
  });

  if (closeNfcModalBtn) {
    closeNfcModalBtn.addEventListener("click", () => {
      nfcModal?.classList.remove("is-open");
      nfcModal?.setAttribute("aria-hidden", "true");
    });
  }

  if (closeNfcCertBtn) {
    closeNfcCertBtn.addEventListener("click", () => {
      nfcModal?.classList.remove("is-open");
      nfcModal?.setAttribute("aria-hidden", "true");
    });
  }

  if (nfcModal) {
    nfcModal.addEventListener("click", (e) => {
      if (e.target === nfcModal) {
        nfcModal.classList.remove("is-open");
        nfcModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  /* ==========================================================================
     INITIALIZATION CALLS
     ========================================================================== */
  setupSightSlider();
  renderCatalog();
  updateBespokeSummary();
  updateCartUI();
  updateWishlistUI();
  requestTick();
});
