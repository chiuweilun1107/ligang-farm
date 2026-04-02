import './style.css'

document.querySelector('#app').innerHTML = `
<!-- ===== NAVBAR ===== -->
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-20">
      <a href="#" class="nav-logo text-white font-bold text-lg sm:text-xl tracking-wide transition-colors">
        <svg class="inline w-5 h-5 mr-1 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V8M12 8C12 8 8 4 8 2M12 8C12 8 16 4 16 2M7 12c-3 1-5 3-5 5M17 12c3 1 5 3 5 5M9 16c-1 2-1 4 0 6M15 16c1 2 1 4 0 6"/></svg> 里港共享農園
      </a>
      <div class="hidden lg:flex items-center gap-6 xl:gap-8">
        <a href="#about" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">關於農園</a>
        <a href="#layout" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">園區導覽</a>
        <a href="#plans" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">服務方案</a>
        <a href="#activities" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">體驗活動</a>
        <a href="#gallery" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">農園風光</a>
        <a href="#location" class="nav-link text-white/85 hover:text-white text-sm font-medium transition-colors">交通位置</a>
        <a href="#contact" class="bg-white/95 text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-white hover:shadow-lg transition-all">預約參觀</a>
      </div>
      <button id="menu-toggle" class="lg:hidden text-white p-2" aria-label="開啟選單">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
    <div id="mobile-menu" class="mobile-menu lg:hidden bg-white rounded-b-xl shadow-lg">
      <div class="px-4 py-3 space-y-2">
        <a href="#about" class="block py-2 text-text font-medium">關於農園</a>
        <a href="#layout" class="block py-2 text-text font-medium">園區導覽</a>
        <a href="#plans" class="block py-2 text-text font-medium">服務方案</a>
        <a href="#activities" class="block py-2 text-text font-medium">體驗活動</a>
        <a href="#gallery" class="block py-2 text-text font-medium">農園風光</a>
        <a href="#location" class="block py-2 text-text font-medium">交通位置</a>
        <a href="#contact" class="block py-2 text-primary font-semibold">預約參觀</a>
      </div>
    </div>
  </div>
</nav>

<!-- ===== HERO ===== -->
<section class="hero-bg min-h-screen flex items-center justify-center relative">
  <div class="hero-deco-left"></div>
  <div class="hero-deco-right"></div>
  <div class="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
    <p class="hero-subtitle text-sm sm:text-base font-medium mb-5 sm:mb-6 tracking-widest opacity-80 uppercase">Ligang Shared Farm</p>
    <h1 class="text-5xl sm:text-6xl md:text-8xl font-black mb-5 sm:mb-7 leading-[1.1] tracking-tight">
      高雄人的<br class="sm:hidden">後花園
    </h1>
    <p class="text-lg sm:text-xl md:text-2xl font-light mb-10 sm:mb-12 opacity-85 leading-relaxed max-w-2xl mx-auto">
      距離高雄市區只要 30 分鐘<br class="sm:hidden">，屬於你的一片田
    </p>
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center mb-16 sm:mb-20">
      <a href="#plans" class="btn-cta bg-white text-primary font-bold px-10 py-4 rounded-full text-base sm:text-lg hover:bg-cream hover:shadow-xl transition-all">了解方案</a>
      <a href="#contact" class="btn-outline-white px-10 py-4 text-base sm:text-lg">預約參觀</a>
    </div>
    <div class="hero-stats flex justify-center gap-8 sm:gap-16 flex-wrap">
      <div class="text-center">
        <div class="text-3xl sm:text-5xl font-black tracking-tight">2000</div>
        <div class="text-xs sm:text-sm opacity-70 mt-1.5 font-medium">坪農園面積</div>
      </div>
      <div class="text-center">
        <div class="text-3xl sm:text-5xl font-black tracking-tight">30</div>
        <div class="text-xs sm:text-sm opacity-70 mt-1.5 font-medium">分鐘到高雄</div>
      </div>
      <div class="text-center">
        <div class="text-3xl sm:text-5xl font-black tracking-tight">80+</div>
        <div class="text-xs sm:text-sm opacity-70 mt-1.5 font-medium">可租田塊</div>
      </div>
      <div class="text-center">
        <div class="text-3xl sm:text-5xl font-black tracking-tight">100</div>
        <div class="text-xs sm:text-sm opacity-70 mt-1.5 font-medium">棵認養果樹</div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
    <a href="#about" class="text-white opacity-50 hover:opacity-90 transition-opacity">
      <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </a>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about" class="py-20 sm:py-28 lg:py-32 bg-cream">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">About Us</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">讓都市人也能擁有自己的田</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        我們將位於屏東里港的 7 分農地，轉型為結合食農教育、親子體驗、友善農業的都市農業共享平台。
        在這裡，每個家庭都能擁有自己的一塊田，親手種下希望，收穫幸福。
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-6 sm:gap-8">
      <div class="fade-in fade-in-delay-1 feature-card bg-white rounded-2xl p-7 sm:p-9 text-center shadow-sm">
        <div class="feature-icon"><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M12 22V12M12 12C12 12 8 6 8 3M12 12C12 12 16 6 16 3M8 15c-2.5 1-4.5 3-4.5 5M16 15c2.5 1 4.5 3 4.5 5"/></svg></div>
        <h3 class="text-lg sm:text-xl font-bold text-text mb-3">食農教育</h3>
        <p class="text-text-light text-sm sm:text-base leading-relaxed">
          從播種到採收，親身體驗農作的每個環節。認識有機農業、學習堆肥製作，讓孩子在土地上找到最好的自然課堂。
        </p>
      </div>
      <div class="fade-in fade-in-delay-2 feature-card bg-white rounded-2xl p-7 sm:p-9 text-center shadow-sm">
        <div class="feature-icon"><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><circle cx="9" cy="4" r="2"/><circle cx="15" cy="6" r="1.5"/><path d="M9 8c-2 0-4 2-4 4v2h3l1 8h2l1-8h2v-2c0-2-1-3-3-3"/><path d="M15 9.5c-1 0-2 1-2 2v1.5h1.5l.5 5h1.5l.5-5H19v-1.5c0-1-.8-2-2-2"/></svg></div>
        <h3 class="text-lg sm:text-xl font-bold text-text mb-3">親子體驗</h3>
        <p class="text-text-light text-sm sm:text-base leading-relaxed">
          遠離都市喧囂，帶孩子來當一日小農夫。採果、種菜、烤地瓜，創造最珍貴的親子回憶，讓泥土成為最好的玩具。
        </p>
      </div>
      <div class="fade-in fade-in-delay-3 feature-card bg-white rounded-2xl p-7 sm:p-9 text-center shadow-sm">
        <div class="feature-icon"><svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M7 11c-1.5 0-3 1-3 3s1.5 3 3 3M17 11c1.5 0 3 1 3 3s-1.5 3-3 3M12 4v4M12 8l-3 3M12 8l3 3M8 21h8M10 17v4M14 17v4"/><circle cx="12" cy="3" r="1.5"/></svg></div>
        <h3 class="text-lg sm:text-xl font-bold text-text mb-3">共享農業</h3>
        <p class="text-text-light text-sm sm:text-base leading-relaxed">
          會員自己種植、自己採收，我們提供土地、水源、農具與專業指導。低門檻、低風險，輕鬆實現你的田園夢。
        </p>
      </div>
    </div>
    <div class="fade-in mt-14 sm:mt-20 bg-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-sm border border-primary/5">
      <div class="grid md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <div>
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-bold text-text mb-5">為什麼選擇里港？</h3>
          <ul class="space-y-4 text-text-light text-sm sm:text-base">
            <li class="flex items-start gap-3">
              <span class="check-icon check-icon-primary mt-0.5">&#x2713;</span>
              <span><strong class="text-text">距離高雄市區只要 30 分鐘</strong> — 國道十號下交流道即達，週末隨時出發</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="check-icon check-icon-primary mt-0.5">&#x2713;</span>
              <span><strong class="text-text">完整 2000 坪平坦農地</strong> — 地勢平坦、規劃完善的優質農地</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="check-icon check-icon-primary mt-0.5">&#x2713;</span>
              <span><strong class="text-text">100 坪合法農舍</strong> — 現成建物可作為服務中心與休息空間</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="check-icon check-icon-primary mt-0.5">&#x2713;</span>
              <span><strong class="text-text">里港在地風情</strong> — 享受農村慢活氛圍，品嚐在地美食</span>
            </li>
          </ul>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-sm h-full min-h-[250px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14683.5!2d120.49!3d22.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1a7b0c7f27e1%3A0x0!2z6YeM5riv6YSJ!5e0!3m2!1szh-TW!2stw!4v1" class="w-full h-full min-h-[250px] border-0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ===== FARM LAYOUT ===== -->
<section id="layout" class="py-20 sm:py-28 lg:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">Farm Layout</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">園區導覽</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
        2000 坪農園精心劃分為五大功能區，滿足種田、採果、休閒、教育等多元需求
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      <div class="fade-in fade-in-delay-1 feature-card bg-cream rounded-2xl p-6 sm:p-7 border border-primary/8">
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 7h4a2 2 0 0 1 0 4H9V7zM9 11v6"/></svg></div>
          <div>
            <h3 class="font-bold text-text text-sm sm:text-base">入口接待與停車區</h3>
            <span class="text-primary text-xs sm:text-sm font-semibold">200 - 300 坪</span>
          </div>
        </div>
        <p class="text-text-light text-xs sm:text-sm leading-relaxed">
          訪客停車場、報到接待處、農具與設備存放空間。進入農園的第一站，提供完善的停車與接待服務。
        </p>
      </div>
      <div class="fade-in fade-in-delay-2 feature-card bg-cream rounded-2xl p-6 sm:p-7 border-2 border-primary/25 sm:col-span-2 lg:col-span-1 relative">
        <div class="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">核心區域</div>
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0"><svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M6 21V12l6-8 6 8v9M10 21v-4h4v4"/></svg></div>
          <div>
            <h3 class="font-bold text-text text-sm sm:text-base">假日農夫區</h3>
            <span class="text-primary text-xs sm:text-sm font-semibold">900 坪</span>
          </div>
        </div>
        <p class="text-text-light text-xs sm:text-sm leading-relaxed">
          農園的心臟地帶！分割為 <strong>80 - 90 塊小農地</strong>（每塊 10 坪）供會員租用。
          配備完善步道、滴灌水管系統、堆肥區與農具共享區，讓你輕鬆當假日農夫。
        </p>
      </div>
      <div class="fade-in fade-in-delay-3 feature-card bg-cream rounded-2xl p-6 sm:p-7 border border-primary/8">
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22V14M12 14c-3-1-5-4-5-7a5 5 0 0 1 10 0c0 3-2 6-5 7z"/><path d="M9 4c0 0-2-1-4 1M15 4c0 0 2-1 4 1"/></svg></div>
          <div>
            <h3 class="font-bold text-text text-sm sm:text-base">果樹認養區</h3>
            <span class="text-primary text-xs sm:text-sm font-semibold">500 坪</span>
          </div>
        </div>
        <p class="text-text-light text-xs sm:text-sm leading-relaxed">
          約 100 棵果樹等你認養！品種包含檸檬、百香果、芒果、蓮霧等在地好管理品種，四季都有果實可採收。
        </p>
      </div>
      <div class="fade-in fade-in-delay-1 feature-card bg-cream rounded-2xl p-6 sm:p-7 border border-primary/8">
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 21h16M6 21V10l6-7 6 7v11"/><path d="M9.5 21v-5a2.5 2.5 0 0 1 5 0v5"/></svg></div>
          <div>
            <h3 class="font-bold text-text text-sm sm:text-base">活動體驗區</h3>
            <span class="text-primary text-xs sm:text-sm font-semibold">250 - 300 坪</span>
          </div>
        </div>
        <p class="text-text-light text-xs sm:text-sm leading-relaxed">
          專為 DIY 體驗、假日烤肉、親子農夫課程打造的活動場域。遮雨棚設計，晴雨皆可舉辦活動。
        </p>
      </div>
      <div class="fade-in fade-in-delay-2 feature-card bg-cream rounded-2xl p-6 sm:p-7 border border-primary/8">
        <div class="flex items-center gap-3 sm:gap-4 mb-4">
          <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><svg class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M5 21V11l7-6 7 6v10"/><path d="M14 3l4 2v3"/><circle cx="12" cy="15" r="2"/><path d="M12 13V9M8 15H6M18 15h-2M9 11l-2-2M15 11l2-2"/></svg></div>
          <div>
            <h3 class="font-bold text-text text-sm sm:text-base">農舍 + 太陽能</h3>
            <span class="text-primary text-xs sm:text-sm font-semibold">100 坪農舍</span>
          </div>
        </div>
        <p class="text-text-light text-xs sm:text-sm leading-relaxed">
          100 坪合法農舍作為服務中心與休憩空間，屋頂裝設 25-30kW 太陽能板，綠能加值、永續經營。
        </p>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ===== PLANS ===== -->
<section id="plans" class="py-20 sm:py-28 lg:py-32 bg-cream">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">Plans & Pricing</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">服務方案</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
        不論是想小試身手的新手，還是全家一起耕種的農夫家庭，都有適合你的方案
      </p>
    </div>

    <!-- 假日農夫方案 -->
    <h3 class="fade-in text-xl sm:text-2xl font-bold text-text mb-8 sm:mb-10 flex items-center gap-3">
      <span class="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center"><svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 21h18M6 21V12l6-8 6 8v9"/></svg></span> 假日農夫租田方案
    </h3>
    <div class="grid md:grid-cols-3 gap-5 sm:gap-7 mb-16 sm:mb-20">
      <div class="fade-in fade-in-delay-1 plan-card bg-white rounded-3xl p-6 sm:p-7 lg:p-9 shadow-sm text-center border border-primary/5">
        <div class="text-primary font-semibold text-xs tracking-wider uppercase mb-3">入門體驗</div>
        <h4 class="text-xl sm:text-2xl font-bold text-text mb-1">體驗田</h4>
        <div class="text-text-light text-sm mb-5">5 坪</div>
        <div class="plan-price mb-1">3,500<span class="text-base font-medium" style="-webkit-text-fill-color: var(--color-text-light)">元</span></div>
        <div class="text-text-light text-xs sm:text-sm mb-7">/年</div>
        <ul class="text-left space-y-3 text-text-light text-xs sm:text-sm mb-8">
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 5 坪專屬田地</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 基本種子提供</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 農具免費使用</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 灌溉水源</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 種植 & 採收教學</li>
        </ul>
        <a href="#contact" class="block w-full text-center bg-primary/8 text-primary font-semibold py-3 sm:py-3.5 rounded-full text-sm hover:bg-primary hover:text-white transition-all">了解更多</a>
      </div>
      <div class="fade-in fade-in-delay-2 plan-card bg-white rounded-3xl p-6 sm:p-7 lg:p-9 shadow-lg text-center border-2 border-primary relative">
        <div class="plan-badge">最受歡迎</div>
        <div class="text-primary font-semibold text-xs tracking-wider uppercase mb-3 mt-3">標準推薦</div>
        <h4 class="text-xl sm:text-2xl font-bold text-text mb-1">標準田</h4>
        <div class="text-text-light text-sm mb-5">10 坪</div>
        <div class="plan-price mb-1">6,000<span class="text-base font-medium" style="-webkit-text-fill-color: var(--color-text-light)">元起</span></div>
        <div class="text-text-light text-xs sm:text-sm mb-7">/年</div>
        <ul class="text-left space-y-3 text-text-light text-xs sm:text-sm mb-8">
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 10 坪專屬田地</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 基本種子提供</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 農具免費使用</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 灌溉水源</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 種植 & 採收教學</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 田區步道通行</li>
        </ul>
        <a href="#contact" class="btn-primary block w-full text-center py-3 sm:py-3.5 text-sm btn-cta">立即報名</a>
      </div>
      <div class="fade-in fade-in-delay-3 plan-card bg-white rounded-3xl p-6 sm:p-7 lg:p-9 shadow-sm text-center border border-primary/5">
        <div class="text-primary font-semibold text-xs tracking-wider uppercase mb-3">闔家同樂</div>
        <h4 class="text-xl sm:text-2xl font-bold text-text mb-1">家庭田</h4>
        <div class="text-text-light text-sm mb-5">20 坪</div>
        <div class="plan-price mb-1">15,000<span class="text-base font-medium" style="-webkit-text-fill-color: var(--color-text-light)">元</span></div>
        <div class="text-text-light text-xs sm:text-sm mb-7">/年</div>
        <ul class="text-left space-y-3 text-text-light text-xs sm:text-sm mb-8">
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 20 坪專屬田地</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 基本種子提供</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 農具免費使用</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 灌溉水源</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 種植 & 採收教學</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 優先選位權</li>
        </ul>
        <a href="#contact" class="block w-full text-center bg-primary/8 text-primary font-semibold py-3 sm:py-3.5 rounded-full text-sm hover:bg-primary hover:text-white transition-all">了解更多</a>
      </div>
    </div>

    <!-- 果樹認養方案 -->
    <h3 class="fade-in text-xl sm:text-2xl font-bold text-text mb-8 sm:mb-10 flex items-center gap-3">
      <span class="w-10 h-10 bg-earth/10 rounded-xl flex items-center justify-center"><svg class="w-5 h-5 text-earth" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22V14M12 14c-3-1-5-4-5-7a5 5 0 0 1 10 0c0 3-2 6-5 7z"/></svg></span> 果樹認養方案
    </h3>
    <div class="grid md:grid-cols-2 gap-5 sm:gap-7">
      <div class="fade-in fade-in-delay-1 plan-card bg-white rounded-3xl p-6 sm:p-7 lg:p-9 shadow-sm border border-primary/5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
          <div>
            <h4 class="text-lg sm:text-xl font-bold text-text">純認養方案</h4>
            <p class="text-text-light text-xs sm:text-sm mt-1">認養一棵專屬果樹</p>
          </div>
          <div class="text-2xl sm:text-3xl font-black text-primary whitespace-nowrap">3,000-6,000<span class="text-xs sm:text-sm font-medium text-text-light">元/年</span></div>
        </div>
        <ul class="space-y-3 text-text-light text-xs sm:text-sm">
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 認養專屬果樹一棵</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 掛名認養牌</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 果實採收寄送</li>
          <li class="check-item"><span class="check-icon check-icon-primary">&#x2713;</span> 品種：檸檬 / 百香果 / 芒果 / 蓮霧</li>
        </ul>
      </div>
      <div class="fade-in fade-in-delay-2 plan-card bg-white rounded-3xl p-6 sm:p-7 lg:p-9 shadow-sm border-2 border-earth/20">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
          <div>
            <h4 class="text-lg sm:text-xl font-bold text-text">認養 + 體驗方案</h4>
            <p class="text-text-light text-xs sm:text-sm mt-1">認養果樹 + 親自採收體驗</p>
          </div>
          <div class="text-2xl sm:text-3xl font-black text-earth whitespace-nowrap">8,000-10,000<span class="text-xs sm:text-sm font-medium text-text-light">元/年</span></div>
        </div>
        <ul class="space-y-3 text-text-light text-xs sm:text-sm">
          <li class="check-item"><span class="check-icon check-icon-earth">&#x2713;</span> 純認養方案所有權益</li>
          <li class="check-item"><span class="check-icon check-icon-earth">&#x2713;</span> 親自到場採收體驗</li>
          <li class="check-item"><span class="check-icon check-icon-earth">&#x2713;</span> 節慶採果活動優先參加</li>
          <li class="check-item"><span class="check-icon check-icon-earth">&#x2713;</span> 農場 DIY 活動免費參與</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<!-- ===== ACTIVITIES ===== -->
<section id="activities" class="py-20 sm:py-28 lg:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">Activities</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">體驗活動</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
        從一日農夫體驗到季節限定採果節，豐富活動讓每次到訪都有新驚喜
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
      <div class="fade-in fade-in-delay-1 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center"><svg class="w-16 h-16 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="5" r="2.5"/><path d="M8 10h8M12 10v7M9 17l-2 4M15 17l2 4M7 13c-2 0-3 1-3 2M17 13c2 0 3 1 3 2"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">假日農夫體驗日</h4>
            <span class="bg-primary/8 text-primary text-xs font-bold px-3 py-1.5 rounded-full">200元/人</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            種菜、採收、烤地瓜、農場導覽，一次體驗完整的農夫生活。適合首次造訪的朋友，體驗後可加入會員。
          </p>
        </div>
      </div>
      <div class="fade-in fade-in-delay-2 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-earth/20 via-earth/10 to-earth/5 flex items-center justify-center"><svg class="w-16 h-16 text-earth/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22V14M12 14c-3-1-5-4-5-7a5 5 0 0 1 10 0c0 3-2 6-5 7z"/><path d="M9 4c0 0-2-1-4 1M15 4c0 0 2-1 4 1"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">季節採果節</h4>
            <span class="bg-earth/8 text-earth text-xs font-bold px-3 py-1.5 rounded-full">依季節</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            芒果節、檸檬節、百香果節... 依季節舉辦限定採果活動，現採現吃，感受最新鮮的產地滋味。
          </p>
        </div>
      </div>
      <div class="fade-in fade-in-delay-3 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-sky-200/40 via-sky-100/30 to-sky-50/20 flex items-center justify-center"><svg class="w-16 h-16 text-sky-300/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="9" cy="5" r="2"/><circle cx="16" cy="7" r="1.5"/><path d="M6 10h6v3l1 8H8l1-8H6zM14 11h4v2l.5 5h-3l.5-5"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">親子農夫營</h4>
            <span class="bg-sky-100 text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full">半日/全日</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            專為親子設計的農場體驗營，讓孩子化身小農夫，在泥土中學習、在自然中成長，創造最棒的假日回憶。
          </p>
        </div>
      </div>
      <div class="fade-in fade-in-delay-1 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-warm-dark/40 via-warm/30 to-warm/20 flex items-center justify-center"><svg class="w-16 h-16 text-warm-dark/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2c0 4-6 6-6 12a6 6 0 0 0 12 0c0-6-6-8-6-12z"/><path d="M12 18a2 2 0 0 1-2-2c0-2 2-3 2-5 0 2 2 3 2 5a2 2 0 0 1-2 2z"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">假日烤肉＋採菜</h4>
            <span class="bg-warm-dark/15 text-earth text-xs font-bold px-3 py-1.5 rounded-full">假日限定</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            到自己的田裡現採新鮮蔬果，直接在活動區烤肉享用。從產地到餐桌零距離，最新鮮的戶外饗宴。
          </p>
        </div>
      </div>
      <div class="fade-in fade-in-delay-2 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-primary-light/20 via-primary/10 to-primary/5 flex items-center justify-center"><svg class="w-16 h-16 text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h6"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">食農教育課程</h4>
            <span class="bg-primary/8 text-primary text-xs font-bold px-3 py-1.5 rounded-full">常態開課</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            有機農業知識、堆肥製作、季節蔬果種植技巧... 由專業農友帶領，學習友善土地的耕作方式。
          </p>
        </div>
      </div>
      <div class="fade-in fade-in-delay-3 activity-card bg-cream rounded-2xl overflow-hidden shadow-sm">
        <div class="activity-hero h-40 sm:h-48 bg-gradient-to-br from-primary-dark/20 via-primary-dark/10 to-primary-dark/5 flex items-center justify-center"><svg class="w-16 h-16 text-primary-dark/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="4" y="4" width="16" height="17" rx="2"/><path d="M9 21V8M15 21V8M4 8h16M8 12h2M14 12h2M8 16h2M14 16h2"/></svg></div>
        <div class="p-5 sm:p-7">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-bold text-text text-sm sm:text-base">企業團建方案</h4>
            <span class="bg-primary-dark/8 text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full">客製報價</span>
          </div>
          <p class="text-text-light text-xs sm:text-sm leading-relaxed">
            帶團隊走出辦公室，在農場中凝聚向心力。客製化團建活動，結合農作體驗與團隊挑戰，打造難忘的企業活動。
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== GALLERY ===== -->
<section id="gallery" class="py-20 sm:py-28 lg:py-32 bg-cream">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">Gallery</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">農園風光</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
        四季更迭，每一次造訪都有不同的美麗風景等著你
      </p>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
      <div class="gallery-item gallery-sunrise col-span-2 row-span-2 !aspect-square">
        <svg class="w-16 h-16 text-earth/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <div class="gallery-label">農園晨光</div>
      </div>
      <div class="gallery-item gallery-veggie">
        <svg class="w-10 h-10 text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22V12M8 6c0 3 2 6 4 6s4-3 4-6-2-4-4-4-4 1-4 4z"/></svg>
        <div class="gallery-label">有機蔬果</div>
      </div>
      <div class="gallery-item gallery-lemon">
        <svg class="w-10 h-10 text-yellow-600/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><ellipse cx="12" cy="12" rx="6" ry="8"/><path d="M12 4c2 2 2 6 0 8M10 6c0 2 1 4 2 5"/></svg>
        <div class="gallery-label">檸檬園區</div>
      </div>
      <div class="gallery-item gallery-family">
        <svg class="w-10 h-10 text-sky-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="9" cy="5" r="2"/><circle cx="16" cy="7" r="1.5"/><path d="M6 10h6v3l1 8H8l1-8H6zM14 11h4v2l.5 5h-3l.5-5"/></svg>
        <div class="gallery-label">親子時光</div>
      </div>
      <div class="gallery-item gallery-mango">
        <svg class="w-10 h-10 text-orange-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22V14M12 14c-3-1-5-4-5-7a5 5 0 0 1 10 0c0 3-2 6-5 7z"/></svg>
        <div class="gallery-label">芒果豐收</div>
      </div>
      <div class="gallery-item gallery-field col-span-2">
        <svg class="w-14 h-14 text-primary/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M3 21h18M5 21V13l7-9 7 9v8M10 21v-4h4v4"/></svg>
        <div class="gallery-label">假日農夫區全景</div>
      </div>
      <div class="gallery-item gallery-house">
        <svg class="w-10 h-10 text-warm-dark/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M3 21h18M5 21V11l7-6 7 6v10"/><rect x="9" y="14" width="6" height="7"/></svg>
        <div class="gallery-label">農舍服務中心</div>
      </div>
      <div class="gallery-item gallery-bbq">
        <svg class="w-10 h-10 text-red-400/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 2c0 4-6 6-6 12a6 6 0 0 0 12 0c0-6-6-8-6-12z"/></svg>
        <div class="gallery-label">假日烤肉趣</div>
      </div>
    </div>
    <p class="text-center text-text-light text-xs sm:text-sm mt-8 sm:mt-10 opacity-70">
      * 以上為示意呈現，實際農園照片即將上線
    </p>
  </div>
</section>

<div class="section-divider"></div>

<!-- ===== LOCATION ===== -->
<section id="location" class="py-20 sm:py-28 lg:py-32 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="fade-in text-center mb-14 sm:mb-20">
      <span class="section-label">Location</span>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mt-4 mb-5 sm:mb-6 leading-tight">交通位置</h2>
      <p class="text-text-light text-base sm:text-lg max-w-2xl mx-auto">
        位於屏東縣里港鄉，從高雄市區出發只要 30 分鐘
      </p>
    </div>
    <div class="grid lg:grid-cols-2 gap-7 sm:gap-10">
      <div class="fade-in rounded-3xl overflow-hidden h-72 sm:h-96 lg:h-auto shadow-sm">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14683.5!2d120.49!3d22.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1a7b0c7f27e1%3A0x0!2z6YeM5riv6YSJ!5e0!3m2!1szh-TW!2stw!4v1" class="w-full h-full min-h-[288px] border-0 rounded-3xl" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="fade-in space-y-5 sm:space-y-6">
        <div class="bg-cream rounded-2xl p-6 sm:p-7">
          <h4 class="font-bold text-text flex items-center gap-3 mb-4 text-sm sm:text-base">
            <span class="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 17h14M7 17V9l2-4h6l2 4v8M7 13h10"/><circle cx="8.5" cy="17" r="1.5"/><circle cx="15.5" cy="17" r="1.5"/></svg></span> 自行開車
          </h4>
          <ul class="space-y-2.5 text-text-light text-xs sm:text-sm">
            <li class="flex items-start gap-2.5"><span class="text-primary mt-0.5 font-bold">&#x2192;</span> 國道十號往里港方向</li>
            <li class="flex items-start gap-2.5"><span class="text-primary mt-0.5 font-bold">&#x2192;</span> 里港端交流道下</li>
            <li class="flex items-start gap-2.5"><span class="text-primary mt-0.5 font-bold">&#x2192;</span> 沿西隆路行駛約 5 分鐘即達</li>
            <li class="flex items-start gap-2.5"><span class="text-primary mt-0.5 font-bold">&#x2192;</span> 農園備有寬敞免費停車場</li>
          </ul>
        </div>
        <div class="bg-cream rounded-2xl p-6 sm:p-7">
          <h4 class="font-bold text-text flex items-center gap-3 mb-4 text-sm sm:text-base">
            <span class="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span> 各地車程參考
          </h4>
          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div class="bg-white rounded-xl p-3.5 sm:p-4 text-center shadow-sm">
              <div class="text-2xl sm:text-3xl font-black text-primary">30<span class="text-xs sm:text-sm font-medium text-text-light">分</span></div>
              <div class="text-text-light text-xs mt-1">高雄市區</div>
            </div>
            <div class="bg-white rounded-xl p-3.5 sm:p-4 text-center shadow-sm">
              <div class="text-2xl sm:text-3xl font-black text-primary">20<span class="text-xs sm:text-sm font-medium text-text-light">分</span></div>
              <div class="text-text-light text-xs mt-1">屏東市區</div>
            </div>
            <div class="bg-white rounded-xl p-3.5 sm:p-4 text-center shadow-sm">
              <div class="text-2xl sm:text-3xl font-black text-primary">40<span class="text-xs sm:text-sm font-medium text-text-light">分</span></div>
              <div class="text-text-light text-xs mt-1">鳳山區</div>
            </div>
            <div class="bg-white rounded-xl p-3.5 sm:p-4 text-center shadow-sm">
              <div class="text-2xl sm:text-3xl font-black text-primary">25<span class="text-xs sm:text-sm font-medium text-text-light">分</span></div>
              <div class="text-text-light text-xs mt-1">楠梓/左營</div>
            </div>
          </div>
        </div>
        <div class="bg-primary/5 rounded-2xl p-5 sm:p-6 border border-primary/10">
          <p class="text-text text-xs sm:text-sm">
            <strong>小提醒：</strong>來里港別忘了品嚐在地知名的里港豬腳，為農場之旅加分！
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONTACT / CTA ===== -->
<section id="contact" class="cta-section py-20 sm:py-28 lg:py-32">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="fade-in text-center mb-12 sm:mb-14">
      <p class="text-white/60 text-sm font-medium tracking-widest uppercase mb-4">Reserve Now</p>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">名額有限，歡迎預約參觀</h2>
      <p class="text-white/75 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        第一批會員招募中！親臨農場，實地感受你未來的田，讓我們為你規劃最適合的方案。
      </p>
    </div>
    <div class="fade-in cta-form-card p-7 sm:p-9 lg:p-12">
      <form id="contact-form" class="space-y-5 sm:space-y-6">
        <div class="grid sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label class="block text-text font-semibold text-xs sm:text-sm mb-2">姓名 *</label>
            <input type="text" required class="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm sm:text-base bg-cream/50" placeholder="您的姓名">
          </div>
          <div>
            <label class="block text-text font-semibold text-xs sm:text-sm mb-2">電話 *</label>
            <input type="tel" required class="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm sm:text-base bg-cream/50" placeholder="0912-345-678">
          </div>
        </div>
        <div>
          <label class="block text-text font-semibold text-xs sm:text-sm mb-2">Email</label>
          <input type="email" class="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm sm:text-base bg-cream/50" placeholder="your@email.com">
        </div>
        <div>
          <label class="block text-text font-semibold text-xs sm:text-sm mb-2">感興趣的方案</label>
          <select class="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm sm:text-base bg-cream/50">
            <option value="">請選擇</option>
            <option value="trial">體驗田（5坪）</option>
            <option value="standard">標準田（10坪）</option>
            <option value="family">家庭田（20坪）</option>
            <option value="tree-basic">果樹認養（純認養）</option>
            <option value="tree-exp">果樹認養（認養+體驗）</option>
            <option value="activity">體驗活動</option>
            <option value="corporate">企業團建</option>
            <option value="other">其他 / 先參觀看看</option>
          </select>
        </div>
        <div>
          <label class="block text-text font-semibold text-xs sm:text-sm mb-2">留言</label>
          <textarea rows="3" class="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none text-sm sm:text-base bg-cream/50" placeholder="想告訴我們的話..."></textarea>
        </div>
        <button type="submit" class="btn-primary w-full py-3.5 sm:py-4 text-base sm:text-lg btn-cta">
          送出預約
        </button>
      </form>
    </div>
    <div class="fade-in mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
      <a href="#" class="social-link">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook
      </a>
      <a href="#" class="social-link">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> Instagram
      </a>
      <a href="#" class="social-link">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg> Line 農夫群
      </a>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer-main text-white/70 py-12 sm:py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="text-white font-bold text-lg sm:text-xl mb-4"><svg class="inline w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V8M12 8C12 8 8 4 8 2M12 8C12 8 16 4 16 2M7 12c-3 1-5 3-5 5M17 12c3 1 5 3 5 5"/></svg> 里港共享農園</div>
        <p class="text-sm leading-relaxed mb-4">高雄人的後花園<br>讓都市人也能擁有自己的田</p>
        <p class="text-xs opacity-60">屏東縣里港鄉西隆路</p>
      </div>
      <div>
        <h5 class="text-white font-semibold mb-4 text-sm">快速連結</h5>
        <ul class="space-y-2.5 text-sm">
          <li><a href="#about" class="footer-link">關於農園</a></li>
          <li><a href="#layout" class="footer-link">園區導覽</a></li>
          <li><a href="#plans" class="footer-link">服務方案</a></li>
          <li><a href="#activities" class="footer-link">體驗活動</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-white font-semibold mb-4 text-sm">更多資訊</h5>
        <ul class="space-y-2.5 text-sm">
          <li><a href="#gallery" class="footer-link">農園風光</a></li>
          <li><a href="#location" class="footer-link">交通位置</a></li>
          <li><a href="#contact" class="footer-link">預約參觀</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-white font-semibold mb-4 text-sm">聯絡資訊</h5>
        <ul class="space-y-2.5 text-sm">
          <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg> 屏東縣里港鄉西隆路</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> 待確認</li>
          <li class="flex items-center gap-2"><svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg> 待確認</li>
        </ul>
      </div>
    </div>
    <div class="footer-divider border-t pt-8 text-center text-xs opacity-60">
      <p>&copy; 2026 里港共享農園 All Rights Reserved.</p>
    </div>
  </div>
</footer>
`

// ===== SCRIPTS =====

// Navbar scroll effect
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
  navbar.classList.toggle('nav-scrolled', window.scrollY > 50)
})

// Mobile menu
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
})
// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'))
})

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

// Contact form (placeholder)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault()
  alert('感謝您的預約！我們會盡快與您聯繫。')
})
