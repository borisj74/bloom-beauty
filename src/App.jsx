import React, { useState, useEffect } from 'react';

const beautyProducts = {
  skincare: [
    { id: 1, name: 'Hydra Glow Serum', brand: 'Botanica', price: 68, image: '💧', concerns: ['dryness', 'dullness'], skinTypes: ['dry', 'normal'], description: 'A lightweight hyaluronic acid serum that delivers deep hydration for a dewy, radiant complexion.', ingredients: 'Hyaluronic Acid, Vitamin B5, Aloe Vera', rating: 4.8 },
    { id: 2, name: 'Clarity Cleanser', brand: 'Pure Skin', price: 42, image: '🫧', concerns: ['acne', 'oiliness'], skinTypes: ['oily', 'combination'], description: 'Gentle foaming cleanser with salicylic acid to unclog pores without stripping skin.', ingredients: 'Salicylic Acid, Tea Tree, Green Tea', rating: 4.6 },
    { id: 3, name: 'Radiance Night Cream', brand: 'Luxe Beauty', price: 89, image: '🌙', concerns: ['aging', 'dullness'], skinTypes: ['dry', 'normal', 'combination'], description: 'Rich overnight treatment with retinol and peptides for smoother, firmer skin by morning.', ingredients: 'Retinol, Peptides, Shea Butter', rating: 4.9 },
    { id: 4, name: 'Calm & Balance Toner', brand: 'Gentle Touch', price: 38, image: '🍃', concerns: ['sensitivity', 'redness'], skinTypes: ['sensitive', 'dry'], description: 'Alcohol-free toner with centella asiatica to soothe and strengthen the skin barrier.', ingredients: 'Centella Asiatica, Chamomile, Oat Extract', rating: 4.7 },
    { id: 5, name: 'Vitamin C Brightening Essence', brand: 'Glow Lab', price: 56, image: '✨', concerns: ['dullness', 'dark spots'], skinTypes: ['all'], description: 'Potent vitamin C formula that fades dark spots and evens skin tone.', ingredients: 'Vitamin C, Niacinamide, Licorice Root', rating: 4.8 },
    { id: 6, name: 'Oil Control Moisturizer', brand: 'Matte Perfect', price: 45, image: '🌿', concerns: ['oiliness', 'acne'], skinTypes: ['oily', 'combination'], description: 'Lightweight gel moisturizer that hydrates while controlling excess sebum.', ingredients: 'Niacinamide, Zinc, Willow Bark', rating: 4.5 },
  ],
  haircare: [
    { id: 7, name: 'Silk Repair Mask', brand: 'Hair Haven', price: 52, image: '💆', concerns: ['damage', 'dryness'], hairTypes: ['dry', 'damaged'], description: 'Intensive weekly treatment that repairs and strengthens damaged hair.', ingredients: 'Keratin, Argan Oil, Silk Proteins', rating: 4.9 },
    { id: 8, name: 'Volume Boost Shampoo', brand: 'Lift & Volume', price: 34, image: '🧴', concerns: ['flatness', 'thinning'], hairTypes: ['fine', 'thin'], description: 'Weightless formula that adds body and bounce to fine, limp hair.', ingredients: 'Biotin, Rice Protein, Bamboo Extract', rating: 4.6 },
    { id: 9, name: 'Frizz Control Serum', brand: 'Smooth Operator', price: 48, image: '💫', concerns: ['frizz', 'dryness'], hairTypes: ['curly', 'wavy', 'coarse'], description: 'Anti-humidity serum that tames frizz and adds brilliant shine.', ingredients: 'Argan Oil, Vitamin E, Silk Amino Acids', rating: 4.7 },
    { id: 10, name: 'Scalp Detox Treatment', brand: 'Root Renewal', price: 44, image: '🌱', concerns: ['oiliness', 'flakes'], hairTypes: ['oily', 'normal'], description: 'Purifying treatment that removes buildup and rebalances the scalp.', ingredients: 'Charcoal, Tea Tree, Peppermint', rating: 4.5 },
    { id: 11, name: 'Color Protect Conditioner', brand: 'Chromatic Care', price: 38, image: '🎨', concerns: ['color fading', 'dryness'], hairTypes: ['color-treated'], description: 'UV-protective conditioner that locks in color and prevents fading.', ingredients: 'UV Filters, Quinoa Protein, Jojoba Oil', rating: 4.8 },
    { id: 12, name: 'Growth Stimulating Oil', brand: 'Flourish', price: 62, image: '🌺', concerns: ['thinning', 'slow growth'], hairTypes: ['all'], description: 'Nourishing scalp oil that promotes healthy hair growth and thickness.', ingredients: 'Rosemary, Castor Oil, Biotin', rating: 4.7 },
  ]
};

const quizQuestions = {
  skincare: [
    { id: 1, question: 'How would you describe your skin type?', options: [
      { label: 'Dry - often feels tight', value: 'dry' },
      { label: 'Oily - shiny by midday', value: 'oily' },
      { label: 'Combination - oily T-zone, dry cheeks', value: 'combination' },
      { label: 'Normal - balanced and comfortable', value: 'normal' },
      { label: 'Sensitive - easily irritated', value: 'sensitive' }
    ]},
    { id: 2, question: 'What is your primary skin concern?', options: [
      { label: 'Dryness & dehydration', value: 'dryness' },
      { label: 'Acne & breakouts', value: 'acne' },
      { label: 'Signs of aging', value: 'aging' },
      { label: 'Dullness & uneven tone', value: 'dullness' },
      { label: 'Sensitivity & redness', value: 'sensitivity' }
    ]},
    { id: 3, question: 'Any secondary concerns?', options: [
      { label: 'Dark spots & hyperpigmentation', value: 'dark spots' },
      { label: 'Excess oiliness', value: 'oiliness' },
      { label: 'Redness & irritation', value: 'redness' },
      { label: 'Large pores', value: 'pores' },
      { label: 'None', value: 'none' }
    ]}
  ],
  haircare: [
    { id: 1, question: 'What is your hair type?', options: [
      { label: 'Fine & thin', value: 'fine' },
      { label: 'Thick & coarse', value: 'coarse' },
      { label: 'Curly or wavy', value: 'curly' },
      { label: 'Color-treated', value: 'color-treated' },
      { label: 'Normal', value: 'normal' }
    ]},
    { id: 2, question: 'What is your main hair concern?', options: [
      { label: 'Dryness & damage', value: 'damage' },
      { label: 'Frizz & flyaways', value: 'frizz' },
      { label: 'Lack of volume', value: 'flatness' },
      { label: 'Hair thinning', value: 'thinning' },
      { label: 'Oily scalp', value: 'oiliness' }
    ]},
    { id: 3, question: 'How often do you heat style?', options: [
      { label: 'Daily', value: 'damage' },
      { label: 'Few times a week', value: 'damage' },
      { label: 'Occasionally', value: 'dryness' },
      { label: 'Never', value: 'none' }
    ]}
  ]
};

export default function BeautyApp() {
  const [currentView, setCurrentView] = useState('home');
  const [quizType, setQuizType] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [hydrationLevel, setHydrationLevel] = useState(72);
  const [animateIn, setAnimateIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [addProductPanelOpen, setAddProductPanelOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  });
  const [orderComplete, setOrderComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 2500);
  };

  const startQuiz = (type) => {
    setQuizType(type);
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentView('quiz');
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions[quizType].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      generateRecommendations(newAnswers);
    }
  };

  const generateRecommendations = (userAnswers) => {
    const products = beautyProducts[quizType];
    const skinType = userAnswers[0];
    const concerns = userAnswers.slice(1).filter(a => a !== 'none');
    
    const scored = products.map(product => {
      let score = 0;
      if (quizType === 'skincare') {
        if (product.skinTypes.includes(skinType) || product.skinTypes.includes('all')) score += 3;
        concerns.forEach(concern => {
          if (product.concerns.includes(concern)) score += 2;
        });
      } else {
        if (product.hairTypes?.includes(skinType) || product.hairTypes?.includes('all')) score += 3;
        concerns.forEach(concern => {
          if (product.concerns.includes(concern)) score += 2;
        });
      }
      return { ...product, score };
    });

    const sorted = scored.sort((a, b) => b.score - a.score).slice(0, 4);
    setRecommendations(sorted);
    setCurrentView('results');
  };

  const openProductPanel = (product) => {
    setSelectedProduct(product);
    setPanelOpen(true);
  };

  const closePanel = () => {
    setPanelOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    closePanel();
    setAddProductPanelOpen(false);
    showToast(`${product.name} added to routine!`);
    setCurrentView('checkout');
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    showToast('Product removed from routine');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handlePaymentInput = (field, value) => {
    let formattedValue = value;
    
    if (field === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').slice(0, 16);
      formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    }
    if (field === 'expiry') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
      }
    }
    if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }
    
    setPaymentInfo({ ...paymentInfo, [field]: formattedValue });
  };

  const isPaymentValid = () => {
    return (
      paymentInfo.cardNumber.replace(/\s/g, '').length >= 15 &&
      paymentInfo.cardName.length > 2 &&
      paymentInfo.expiry.length === 5 &&
      paymentInfo.cvv.length >= 3 &&
      paymentInfo.email.includes('@') &&
      paymentInfo.address.length > 5 &&
      paymentInfo.city.length > 2 &&
      paymentInfo.zip.length >= 4
    );
  };

  const processPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
    }, 2000);
  };

  const startNewOrder = () => {
    setCart([]);
    setPaymentInfo({
      cardNumber: '',
      cardName: '',
      expiry: '',
      cvv: '',
      email: '',
      address: '',
      city: '',
      zip: ''
    });
    setOrderComplete(false);
    setCurrentView('home');
  };

  const allProducts = [...beautyProducts.skincare, ...beautyProducts.haircare];
  const filteredProducts = activeFilter === 'all' 
    ? allProducts 
    : beautyProducts[activeFilter] || [];

  const availableProductsToAdd = allProducts.filter(
    product => !cart.some(item => item.id === product.id)
  );

  return (
    <div style={styles.container}>
      {/* Animated Background */}
      <div style={styles.backgroundGradient}>
        <div style={styles.blob1}></div>
        <div style={styles.blob2}></div>
        <div style={styles.blob3}></div>
      </div>

      {/* Toast Notification */}
      <div style={{...styles.toast, opacity: toast.show ? 1 : 0, transform: toast.show ? 'translateY(0)' : 'translateY(-20px)'}}>
        <span style={styles.toastIcon}>✓</span>
        {toast.message}
      </div>

      {/* Main Content */}
      <div style={{...styles.content, opacity: animateIn ? 1 : 0, transform: animateIn ? 'translateY(0)' : 'translateY(20px)'}}>
        
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            {currentView !== 'home' && (
              <button style={styles.backButton} onClick={() => {
                if (currentView === 'payment') {
                  setCurrentView('checkout');
                } else if (currentView === 'checkout') {
                  setCurrentView('home');
                } else {
                  setCurrentView('home');
                }
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            )}
            <span style={styles.logoIcon}>🌿</span>
            <h1 style={styles.logo}>Bloom</h1>
          </div>
          <button style={styles.cartButton} onClick={() => setCurrentView('checkout')}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cart.length > 0 && (
              <span style={styles.cartBadge}>{getCartItemCount()}</span>
            )}
          </button>
        </header>

        {/* Home View */}
        {currentView === 'home' && (
          <div style={styles.homeContainer}>
            {/* Hero Section */}
            <div style={styles.heroSection}>
              <h2 style={styles.heroTitle}>Discover Your Perfect Beauty Routine</h2>
              <p style={styles.heroSubtitle}>Personalized recommendations based on your unique needs</p>
            </div>

            {/* Hydration Card - Inspired by uploaded image */}
            <div style={styles.hydrationCard}>
              <div style={styles.hydrationHeader}>
                <h3 style={styles.hydrationTitle}>Hydration Level</h3>
                <span style={styles.hydrationBadge}>+10% above avg</span>
              </div>
              <div style={styles.hydrationValue}>
                <span style={styles.hydrationNumber}>{hydrationLevel}%</span>
                <span style={styles.hydrationLabel}>average skin moisture</span>
              </div>
              <div style={styles.chartContainer}>
                <svg viewBox="0 0 300 80" style={styles.chart}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4a7c59" />
                      <stop offset="100%" stopColor="#90c67c" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 60 Q 30 40, 60 50 T 120 35 T 180 45 T 240 25 T 300 40"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={styles.chartLine}
                  />
                  <circle cx="240" cy="25" r="6" fill="#2d5a3d" style={styles.chartDot} />
                </svg>
                <div style={styles.chartDates}>
                  {['08', '09', '10', '11', '12', '13', '14'].map((day, i) => (
                    <span key={day} style={{...styles.chartDate, fontWeight: i === 4 ? '600' : '400', color: i === 4 ? '#2d5a3d' : '#6b7c6e'}}>
                      {day}<br/><span style={styles.chartMonth}>Oct</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quiz Options */}
            <div style={styles.quizOptions}>
              <h3 style={styles.sectionTitle}>Take Your Assessment</h3>
              <div style={styles.quizCards}>
                <button style={styles.quizCard} onClick={() => startQuiz('skincare')}>
                  <div style={styles.quizCardIcon}>✨</div>
                  <div style={styles.quizCardContent}>
                    <h4 style={styles.quizCardTitle}>Skincare Quiz</h4>
                    <p style={styles.quizCardDesc}>Find your perfect routine</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.quizCardArrow}>
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
                <button style={styles.quizCard} onClick={() => startQuiz('haircare')}>
                  <div style={styles.quizCardIcon}>💆</div>
                  <div style={styles.quizCardContent}>
                    <h4 style={styles.quizCardTitle}>Haircare Quiz</h4>
                    <p style={styles.quizCardDesc}>Unlock healthy hair</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={styles.quizCardArrow}>
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Browse Products */}
            <div style={styles.browseSection}>
              <div style={styles.browseSectionHeader}>
                <h3 style={styles.sectionTitle}>Browse Products</h3>
                <div style={styles.filterTabs}>
                  {['all', 'skincare', 'haircare'].map(filter => (
                    <button 
                      key={filter}
                      style={{...styles.filterTab, ...(activeFilter === filter ? styles.filterTabActive : {})}}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div style={styles.productGrid}>
                {filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    style={{...styles.productCard, animationDelay: `${index * 0.1}s`}}
                    onClick={() => openProductPanel(product)}
                  >
                    <div style={styles.productImageContainer}>
                      <span style={styles.productEmoji}>{product.image}</span>
                    </div>
                    <div style={styles.productInfo}>
                      <span style={styles.productBrand}>{product.brand}</span>
                      <h4 style={styles.productName}>{product.name}</h4>
                      <div style={styles.productMeta}>
                        <span style={styles.productPrice}>${product.price}</span>
                        <span style={styles.productRating}>★ {product.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div style={styles.shareCard}>
              <div style={styles.shareContent}>
                <h4 style={styles.shareTitle}>Share your beauty results</h4>
                <p style={styles.shareSubtitle}>And explore other users' glowing transformations</p>
              </div>
              <div style={styles.shareAvatars}>
                <div style={styles.avatarStack}>
                  <div style={{...styles.avatar, backgroundColor: '#e8d4b8'}}>👩</div>
                  <div style={{...styles.avatar, backgroundColor: '#d4e8d4', marginLeft: '-10px'}}>👩‍🦰</div>
                  <div style={{...styles.avatar, backgroundColor: '#d4d4e8', marginLeft: '-10px'}}>👱‍♀️</div>
                </div>
                <span style={styles.shareCount}>Shared by 2.5k users</span>
              </div>
              <button style={styles.shareButton}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Quiz View */}
        {currentView === 'quiz' && (
          <div style={styles.quizContainer}>
            <div style={styles.progressContainer}>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${((currentQuestion + 1) / quizQuestions[quizType].length) * 100}%`}}></div>
              </div>
              <span style={styles.progressText}>Question {currentQuestion + 1} of {quizQuestions[quizType].length}</span>
            </div>
            
            <div style={styles.questionCard}>
              <div style={styles.questionIcon}>
                {quizType === 'skincare' ? '✨' : '💆'}
              </div>
              <h2 style={styles.questionText}>{quizQuestions[quizType][currentQuestion].question}</h2>
              <div style={styles.optionsContainer}>
                {quizQuestions[quizType][currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    style={styles.optionButton}
                    onClick={() => handleAnswer(option.value)}
                  >
                    <span style={styles.optionLabel}>{option.label}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results View */}
        {currentView === 'results' && (
          <div style={styles.resultsContainer}>
            <div style={styles.resultsHeader}>
              <div style={styles.resultsIcon}>🎉</div>
              <h2 style={styles.resultsTitle}>Your Personalized Picks</h2>
              <p style={styles.resultsSubtitle}>Based on your unique {quizType} profile</p>
            </div>
            
            <div style={styles.recommendationGrid}>
              {recommendations.map((product, index) => (
                <div 
                  key={product.id}
                  style={{...styles.recommendationCard, animationDelay: `${index * 0.15}s`}}
                  onClick={() => openProductPanel(product)}
                >
                  {index === 0 && <div style={styles.topPickBadge}>Top Pick</div>}
                  <div style={styles.recProductImage}>
                    <span style={styles.recProductEmoji}>{product.image}</span>
                  </div>
                  <div style={styles.recProductInfo}>
                    <span style={styles.recProductBrand}>{product.brand}</span>
                    <h4 style={styles.recProductName}>{product.name}</h4>
                    <p style={styles.recProductDesc}>{product.description.slice(0, 60)}...</p>
                    <div style={styles.recProductMeta}>
                      <span style={styles.recProductPrice}>${product.price}</span>
                      <span style={styles.recProductRating}>★ {product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button style={styles.retakeButton} onClick={() => setCurrentView('home')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
              </svg>
              Retake Quiz
            </button>
          </div>
        )}

        {/* Checkout View */}
        {currentView === 'checkout' && (
          <div style={styles.checkoutContainer}>
            <div style={styles.checkoutHeader}>
              <h2 style={styles.checkoutTitle}>Your Routine</h2>
              <p style={styles.checkoutSubtitle}>{cart.length} {cart.length === 1 ? 'product' : 'products'} in your beauty routine</p>
            </div>

            {cart.length === 0 ? (
              <div style={styles.emptyCart}>
                <div style={styles.emptyCartIcon}>🛍️</div>
                <h3 style={styles.emptyCartTitle}>Your routine is empty</h3>
                <p style={styles.emptyCartText}>Take our quiz or browse products to build your personalized beauty routine</p>
                <button style={styles.startShoppingButton} onClick={() => setCurrentView('home')}>
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div style={styles.cartItems}>
                  {cart.map((item, index) => (
                    <div key={item.id} style={{...styles.cartItem, animationDelay: `${index * 0.1}s`}}>
                      <div style={styles.cartItemImage}>
                        <span style={styles.cartItemEmoji}>{item.image}</span>
                      </div>
                      <div style={styles.cartItemDetails}>
                        <span style={styles.cartItemBrand}>{item.brand}</span>
                        <h4 style={styles.cartItemName}>{item.name}</h4>
                        <span style={styles.cartItemPrice}>${item.price}</span>
                      </div>
                      <div style={styles.cartItemActions}>
                        <div style={styles.quantityControl}>
                          <button 
                            style={styles.quantityButton}
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14"/>
                            </svg>
                          </button>
                          <span style={styles.quantityValue}>{item.quantity}</span>
                          <button 
                            style={styles.quantityButton}
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 5v14M5 12h14"/>
                            </svg>
                          </button>
                        </div>
                        <button 
                          style={styles.removeButton}
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add More Products Button */}
                <button 
                  style={styles.addMoreButton}
                  onClick={() => setAddProductPanelOpen(true)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                  Add More Products
                </button>

                {/* Order Summary */}
                <div style={styles.orderSummary}>
                  <h3 style={styles.summaryTitle}>Order Summary</h3>
                  <div style={styles.summaryRow}>
                    <span>Subtotal ({getCartItemCount()} items)</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                  </div>
                  <div style={styles.summaryRow}>
                    <span>Shipping</span>
                    <span style={styles.freeShipping}>FREE</span>
                  </div>
                  <div style={styles.summaryRow}>
                    <span>Estimated Tax</span>
                    <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                  </div>
                  <div style={styles.summaryDivider}></div>
                  <div style={styles.summaryTotal}>
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button style={styles.checkoutButton} onClick={() => setCurrentView('payment')}>
                  Proceed to Checkout
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {/* Continue Shopping */}
                <button style={styles.continueShoppingButton} onClick={() => setCurrentView('home')}>
                  Continue Shopping
                </button>
              </>
            )}
          </div>
        )}

        {/* Payment View */}
        {currentView === 'payment' && (
          <div style={styles.paymentContainer}>
            {!orderComplete ? (
              <>
                <div style={styles.paymentHeader}>
                  <h2 style={styles.paymentTitle}>Checkout</h2>
                  <p style={styles.paymentSubtitle}>Complete your order securely</p>
                </div>

                {/* Order Items Summary */}
                <div style={styles.paymentOrderSummary}>
                  <h3 style={styles.paymentSectionTitle}>Order Items</h3>
                  <div style={styles.paymentItems}>
                    {cart.map(item => (
                      <div key={item.id} style={styles.paymentItem}>
                        <span style={styles.paymentItemEmoji}>{item.image}</span>
                        <div style={styles.paymentItemInfo}>
                          <span style={styles.paymentItemName}>{item.name}</span>
                          <span style={styles.paymentItemQty}>Qty: {item.quantity}</span>
                        </div>
                        <span style={styles.paymentItemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div style={styles.paymentTotalRow}>
                    <span>Total</span>
                    <span style={styles.paymentTotalValue}>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                {/* Contact Information */}
                <div style={styles.paymentSection}>
                  <h3 style={styles.paymentSectionTitle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    Contact Information
                  </h3>
                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>Email Address</label>
                    <input
                      type="email"
                      style={styles.textInput}
                      placeholder="your@email.com"
                      value={paymentInfo.email}
                      onChange={(e) => handlePaymentInput('email', e.target.value)}
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div style={styles.paymentSection}>
                  <h3 style={styles.paymentSectionTitle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    Shipping Address
                  </h3>
                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>Street Address</label>
                    <input
                      type="text"
                      style={styles.textInput}
                      placeholder="123 Beauty Lane"
                      value={paymentInfo.address}
                      onChange={(e) => handlePaymentInput('address', e.target.value)}
                    />
                  </div>
                  <div style={styles.inputRow}>
                    <div style={{...styles.inputGroup, flex: 2}}>
                      <label style={styles.inputLabel}>City</label>
                      <input
                        type="text"
                        style={styles.textInput}
                        placeholder="City"
                        value={paymentInfo.city}
                        onChange={(e) => handlePaymentInput('city', e.target.value)}
                      />
                    </div>
                    <div style={{...styles.inputGroup, flex: 1}}>
                      <label style={styles.inputLabel}>ZIP Code</label>
                      <input
                        type="text"
                        style={styles.textInput}
                        placeholder="12345"
                        value={paymentInfo.zip}
                        onChange={(e) => handlePaymentInput('zip', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div style={styles.paymentSection}>
                  <h3 style={styles.paymentSectionTitle}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    Payment Method
                  </h3>
                  
                  <div style={styles.cardPreview}>
                    <div style={styles.cardPreviewTop}>
                      <div style={styles.cardChip}></div>
                      <div style={styles.cardType}>
                        {paymentInfo.cardNumber.startsWith('4') ? '💳 Visa' : 
                         paymentInfo.cardNumber.startsWith('5') ? '💳 Mastercard' : 
                         paymentInfo.cardNumber.startsWith('3') ? '💳 Amex' : '💳 Card'}
                      </div>
                    </div>
                    <div style={styles.cardNumber}>
                      {paymentInfo.cardNumber || '•••• •••• •••• ••••'}
                    </div>
                    <div style={styles.cardPreviewBottom}>
                      <div style={styles.cardHolder}>{paymentInfo.cardName || 'YOUR NAME'}</div>
                      <div style={styles.cardExpiry}>{paymentInfo.expiry || 'MM/YY'}</div>
                    </div>
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>Card Number</label>
                    <input
                      type="text"
                      style={styles.textInput}
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => handlePaymentInput('cardNumber', e.target.value)}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.inputLabel}>Cardholder Name</label>
                    <input
                      type="text"
                      style={styles.textInput}
                      placeholder="John Doe"
                      value={paymentInfo.cardName}
                      onChange={(e) => handlePaymentInput('cardName', e.target.value)}
                    />
                  </div>
                  <div style={styles.inputRow}>
                    <div style={{...styles.inputGroup, flex: 1}}>
                      <label style={styles.inputLabel}>Expiry Date</label>
                      <input
                        type="text"
                        style={styles.textInput}
                        placeholder="MM/YY"
                        value={paymentInfo.expiry}
                        onChange={(e) => handlePaymentInput('expiry', e.target.value)}
                      />
                    </div>
                    <div style={{...styles.inputGroup, flex: 1}}>
                      <label style={styles.inputLabel}>CVV</label>
                      <input
                        type="text"
                        style={styles.textInput}
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) => handlePaymentInput('cvv', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Secure Badge */}
                <div style={styles.secureBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span>Your payment information is encrypted and secure</span>
                </div>

                {/* Place Order Button */}
                <button 
                  style={{
                    ...styles.placeOrderButton,
                    opacity: isPaymentValid() ? 1 : 0.5,
                    cursor: isPaymentValid() ? 'pointer' : 'not-allowed'
                  }}
                  onClick={processPayment}
                  disabled={!isPaymentValid() || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div style={styles.spinner}></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Place Order - ${(getCartTotal() * 1.08).toFixed(2)}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

                {/* Back to Cart */}
                <button style={styles.backToCartButton} onClick={() => setCurrentView('checkout')}>
                  ← Back to Cart
                </button>
              </>
            ) : (
              /* Order Confirmation */
              <div style={styles.confirmationContainer}>
                <div style={styles.confirmationIcon}>🎉</div>
                <div style={styles.confirmationCheckmark}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2d5a3d" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h2 style={styles.confirmationTitle}>Order Confirmed!</h2>
                <p style={styles.confirmationSubtitle}>Thank you for your purchase</p>
                
                <div style={styles.confirmationDetails}>
                  <div style={styles.confirmationRow}>
                    <span>Order Number</span>
                    <span style={styles.confirmationValue}>#BLM{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div style={styles.confirmationRow}>
                    <span>Email Confirmation</span>
                    <span style={styles.confirmationValue}>{paymentInfo.email}</span>
                  </div>
                  <div style={styles.confirmationRow}>
                    <span>Estimated Delivery</span>
                    <span style={styles.confirmationValue}>3-5 Business Days</span>
                  </div>
                  <div style={styles.confirmationDivider}></div>
                  <div style={styles.confirmationRow}>
                    <span>Total Charged</span>
                    <span style={styles.confirmationTotal}>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>

                <div style={styles.confirmationItems}>
                  <h4 style={styles.confirmationItemsTitle}>Items Ordered</h4>
                  {cart.map(item => (
                    <div key={item.id} style={styles.confirmationItem}>
                      <span style={styles.confirmationItemEmoji}>{item.image}</span>
                      <span style={styles.confirmationItemName}>{item.name} × {item.quantity}</span>
                    </div>
                  ))}
                </div>

                <button style={styles.continueShoppingButtonLarge} onClick={startNewOrder}>
                  Continue Shopping
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Detail Panel */}
      <div style={{...styles.panelOverlay, opacity: panelOpen ? 1 : 0, pointerEvents: panelOpen ? 'auto' : 'none'}} onClick={closePanel}></div>
      <div style={{...styles.productPanel, transform: panelOpen ? 'translateY(0)' : 'translateY(100%)'}}>
        {selectedProduct && (
          <>
            <div style={styles.panelHandle}></div>
            <button style={styles.panelClose} onClick={closePanel}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div style={styles.panelContent}>
              <div style={styles.panelProductImage}>
                <span style={styles.panelEmoji}>{selectedProduct.image}</span>
              </div>
              <div style={styles.panelProductHeader}>
                <span style={styles.panelBrand}>{selectedProduct.brand}</span>
                <h2 style={styles.panelProductName}>{selectedProduct.name}</h2>
                <span style={styles.panelPriceUnderName}>${selectedProduct.price}</span>
                <div style={styles.panelRatingRow}>
                  <span style={styles.panelRating}>★ {selectedProduct.rating}</span>
                  <span style={styles.panelReviews}>2,341 reviews</span>
                </div>
              </div>
              <p style={styles.panelDescription}>{selectedProduct.description}</p>
              <div style={styles.panelIngredients}>
                <h4 style={styles.panelSectionTitle}>Key Ingredients</h4>
                <p style={styles.panelIngredientsList}>{selectedProduct.ingredients}</p>
              </div>
              <div style={styles.panelConcerns}>
                <h4 style={styles.panelSectionTitle}>Best For</h4>
                <div style={styles.concernTags}>
                  {selectedProduct.concerns.map(concern => (
                    <span key={concern} style={styles.concernTag}>{concern}</span>
                  ))}
                </div>
              </div>
              <div style={styles.panelFooter}>
                <button style={styles.addToCartButtonFull} onClick={() => addToCart(selectedProduct)}>
                  Add to Routine
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add Product Panel */}
      <div style={{...styles.panelOverlay, opacity: addProductPanelOpen ? 1 : 0, pointerEvents: addProductPanelOpen ? 'auto' : 'none'}} onClick={() => setAddProductPanelOpen(false)}></div>
      <div style={{...styles.addProductPanel, transform: addProductPanelOpen ? 'translateY(0)' : 'translateY(100%)'}}>
        <div style={styles.panelHandle}></div>
        <button style={styles.panelClose} onClick={() => setAddProductPanelOpen(false)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div style={styles.addProductPanelContent}>
          <h3 style={styles.addProductTitle}>Add Products</h3>
          <p style={styles.addProductSubtitle}>Browse and add more products to your routine</p>
          
          <div style={styles.addProductList}>
            {availableProductsToAdd.length === 0 ? (
              <div style={styles.allProductsAdded}>
                <span style={styles.allProductsIcon}>✨</span>
                <p>You've added all available products!</p>
              </div>
            ) : (
              availableProductsToAdd.map((product) => (
                <div key={product.id} style={styles.addProductItem}>
                  <div style={styles.addProductItemImage}>
                    <span style={styles.addProductItemEmoji}>{product.image}</span>
                  </div>
                  <div style={styles.addProductItemInfo}>
                    <span style={styles.addProductItemBrand}>{product.brand}</span>
                    <h4 style={styles.addProductItemName}>{product.name}</h4>
                    <span style={styles.addProductItemPrice}>${product.price}</span>
                  </div>
                  <button 
                    style={styles.addProductItemButton}
                    onClick={() => addToCart(product)}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }

        @keyframes drawLine {
          from { stroke-dashoffset: 500; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes popIn {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Outfit', sans-serif",
  },
  backgroundGradient: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #f0f7e9 0%, #e8f5e0 25%, #f5f9f0 50%, #e0f0d8 75%, #f8faf5 100%)',
    zIndex: 0,
  },
  blob1: {
    position: 'absolute',
    top: '-20%',
    left: '-10%',
    width: '60%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(144, 198, 124, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 20s ease-in-out infinite',
  },
  blob2: {
    position: 'absolute',
    bottom: '-30%',
    right: '-20%',
    width: '70%',
    height: '70%',
    background: 'radial-gradient(circle, rgba(232, 212, 184, 0.4) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 25s ease-in-out infinite reverse',
  },
  blob3: {
    position: 'absolute',
    top: '40%',
    right: '10%',
    width: '40%',
    height: '40%',
    background: 'radial-gradient(circle, rgba(180, 210, 160, 0.25) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 18s ease-in-out infinite',
  },
  toast: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '500',
    zIndex: 200,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 20px rgba(45, 90, 61, 0.3)',
    transition: 'all 0.3s ease',
  },
  toastIcon: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '480px',
    margin: '0 auto',
    padding: '20px',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
    paddingBottom: '100px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logo: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '32px',
    fontWeight: '600',
    color: '#2d5a3d',
    letterSpacing: '-0.5px',
  },
  backButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2d5a3d',
    boxShadow: '0 2px 8px rgba(45, 90, 61, 0.1)',
    transition: 'all 0.3s ease',
    marginRight: '8px',
  },
  cartButton: {
    position: 'relative',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2d5a3d',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.1)',
    transition: 'all 0.3s ease',
  },
  cartBadge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #d4a853, #c49a47)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  heroSection: {
    textAlign: 'center',
    padding: '20px 0',
  },
  heroTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a3d24',
    lineHeight: '1.2',
    marginBottom: '12px',
  },
  heroSubtitle: {
    fontSize: '15px',
    color: '#5a7d5f',
    fontWeight: '400',
  },
  hydrationCard: {
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
  },
  hydrationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  hydrationTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a3d24',
  },
  hydrationBadge: {
    fontSize: '12px',
    color: '#4a7c59',
    background: 'rgba(144, 198, 124, 0.2)',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: '500',
  },
  hydrationValue: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
    marginBottom: '20px',
  },
  hydrationNumber: {
    fontSize: '36px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  hydrationLabel: {
    fontSize: '13px',
    color: '#6b7c6e',
  },
  chartContainer: {
    position: 'relative',
  },
  chart: {
    width: '100%',
    height: '80px',
  },
  chartLine: {
    strokeDasharray: '500',
    animation: 'drawLine 2s ease-out forwards',
  },
  chartDot: {
    animation: 'popIn 0.5s ease-out 1.8s both',
  },
  chartDates: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '12px',
  },
  chartDate: {
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '1.3',
  },
  chartMonth: {
    fontSize: '11px',
    color: '#8fa893',
  },
  quizOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '22px',
    fontWeight: '600',
    color: '#1a3d24',
  },
  quizCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  quizCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
  },
  quizCardIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #e8f5e0 0%, #d4e8d4 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
  quizCardContent: {
    flex: 1,
    textAlign: 'left',
  },
  quizCardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '4px',
  },
  quizCardDesc: {
    fontSize: '13px',
    color: '#6b7c6e',
  },
  quizCardArrow: {
    color: '#90c67c',
  },
  browseSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  browseSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },
  filterTabs: {
    display: 'flex',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.6)',
    padding: '4px',
    borderRadius: '12px',
  },
  filterTab: {
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '500',
    border: 'none',
    background: 'transparent',
    color: '#6b7c6e',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  filterTabActive: {
    background: '#2d5a3d',
    color: '#fff',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  productCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
    border: '1px solid rgba(144, 198, 124, 0.15)',
    animation: 'fadeInUp 0.5s ease forwards',
  },
  productImageContainer: {
    height: '120px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productEmoji: {
    fontSize: '48px',
  },
  productInfo: {
    padding: '16px',
  },
  productBrand: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#90c67c',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  productName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a3d24',
    margin: '4px 0 8px',
    lineHeight: '1.3',
  },
  productMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  productRating: {
    fontSize: '12px',
    color: '#d4a853',
    fontWeight: '500',
  },
  shareCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    flexWrap: 'wrap',
  },
  shareContent: {
    flex: 1,
    minWidth: '150px',
  },
  shareTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '4px',
  },
  shareSubtitle: {
    fontSize: '13px',
    color: '#6b7c6e',
  },
  shareAvatars: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatarStack: {
    display: 'flex',
  },
  avatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    border: '2px solid #fff',
  },
  shareCount: {
    fontSize: '12px',
    color: '#6b7c6e',
  },
  shareButton: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#1a3d24',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'all 0.3s ease',
  },
  quizContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: '20px',
  },
  progressContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  progressBar: {
    height: '6px',
    background: 'rgba(144, 198, 124, 0.2)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #4a7c59, #90c67c)',
    borderRadius: '3px',
    transition: 'width 0.5s ease',
  },
  progressText: {
    fontSize: '13px',
    color: '#6b7c6e',
    textAlign: 'center',
  },
  questionCard: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: '32px 24px',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    animation: 'fadeInUp 0.5s ease forwards',
  },
  questionIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  questionText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '24px',
    lineHeight: '1.3',
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  optionButton: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    background: 'rgba(248, 250, 245, 0.8)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '14px',
    color: '#1a3d24',
    textAlign: 'left',
  },
  optionLabel: {
    flex: 1,
  },
  resultsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: '20px',
  },
  resultsHeader: {
    textAlign: 'center',
    animation: 'fadeInUp 0.5s ease forwards',
  },
  resultsIcon: {
    fontSize: '48px',
    marginBottom: '12px',
  },
  resultsTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  resultsSubtitle: {
    fontSize: '14px',
    color: '#6b7c6e',
  },
  recommendationGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  recommendationCard: {
    position: 'relative',
    display: 'flex',
    gap: '16px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    cursor: 'pointer',
    animation: 'fadeInUp 0.5s ease forwards',
    transition: 'all 0.3s ease',
  },
  topPickBadge: {
    position: 'absolute',
    top: '-8px',
    right: '16px',
    background: 'linear-gradient(135deg, #d4a853, #c49a47)',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '600',
    padding: '6px 12px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  recProductImage: {
    width: '80px',
    height: '80px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  recProductEmoji: {
    fontSize: '36px',
  },
  recProductInfo: {
    flex: 1,
  },
  recProductBrand: {
    fontSize: '11px',
    fontWeight: '500',
    color: '#90c67c',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  recProductName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a3d24',
    margin: '4px 0',
  },
  recProductDesc: {
    fontSize: '12px',
    color: '#6b7c6e',
    lineHeight: '1.4',
    marginBottom: '8px',
  },
  recProductMeta: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  recProductPrice: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  recProductRating: {
    fontSize: '12px',
    color: '#d4a853',
    fontWeight: '500',
  },
  retakeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 28px',
    background: 'transparent',
    border: '2px solid #2d5a3d',
    borderRadius: '12px',
    color: '#2d5a3d',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '0 auto',
  },
  // Checkout Styles
  checkoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  checkoutHeader: {
    textAlign: 'center',
    marginBottom: '8px',
  },
  checkoutTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  checkoutSubtitle: {
    fontSize: '14px',
    color: '#6b7c6e',
  },
  emptyCart: {
    textAlign: 'center',
    padding: '60px 20px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
  },
  emptyCartIcon: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  emptyCartTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  emptyCartText: {
    fontSize: '14px',
    color: '#6b7c6e',
    marginBottom: '24px',
    maxWidth: '280px',
    margin: '0 auto 24px',
    lineHeight: '1.5',
  },
  startShoppingButton: {
    padding: '14px 32px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cartItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
    border: '1px solid rgba(144, 198, 124, 0.15)',
    animation: 'slideIn 0.4s ease forwards',
  },
  cartItemImage: {
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cartItemEmoji: {
    fontSize: '32px',
  },
  cartItemDetails: {
    flex: 1,
    minWidth: 0,
  },
  cartItemBrand: {
    fontSize: '10px',
    fontWeight: '500',
    color: '#90c67c',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cartItemName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a3d24',
    margin: '4px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cartItemPrice: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  cartItemActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(248, 250, 245, 0.8)',
    borderRadius: '10px',
    padding: '4px',
  },
  quantityButton: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: 'none',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2d5a3d',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 3px rgba(45, 90, 61, 0.1)',
  },
  quantityValue: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1a3d24',
    minWidth: '24px',
    textAlign: 'center',
  },
  removeButton: {
    padding: '8px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#c97c7c',
    transition: 'all 0.2s ease',
    borderRadius: '8px',
  },
  addMoreButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '16px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    border: '2px dashed rgba(144, 198, 124, 0.4)',
    borderRadius: '16px',
    color: '#4a7c59',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  orderSummary: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
  },
  summaryTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '16px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    color: '#6b7c6e',
    marginBottom: '12px',
  },
  freeShipping: {
    color: '#4a7c59',
    fontWeight: '600',
  },
  summaryDivider: {
    height: '1px',
    background: 'rgba(144, 198, 124, 0.2)',
    margin: '16px 0',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a3d24',
  },
  checkoutButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '18px 24px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(45, 90, 61, 0.3)',
  },
  continueShoppingButton: {
    display: 'block',
    width: '100%',
    padding: '14px',
    background: 'transparent',
    border: 'none',
    color: '#4a7c59',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
  },
  // Panel Styles
  panelOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(26, 61, 36, 0.3)',
    backdropFilter: 'blur(4px)',
    zIndex: 100,
    transition: 'opacity 0.3s ease',
  },
  productPanel: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    borderRadius: '24px 24px 0 0',
    maxHeight: '85vh',
    overflow: 'auto',
    zIndex: 101,
    transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
    boxShadow: '0 -8px 40px rgba(45, 90, 61, 0.15)',
  },
  addProductPanel: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    borderRadius: '24px 24px 0 0',
    maxHeight: '70vh',
    overflow: 'auto',
    zIndex: 101,
    transition: 'transform 0.4s cubic-bezier(0.32, 0.72, 0, 1)',
    boxShadow: '0 -8px 40px rgba(45, 90, 61, 0.15)',
  },
  panelHandle: {
    width: '40px',
    height: '4px',
    background: '#d4e8d4',
    borderRadius: '2px',
    margin: '12px auto',
  },
  panelClose: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(144, 198, 124, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2d5a3d',
    transition: 'all 0.3s ease',
  },
  panelContent: {
    padding: '8px 24px 32px',
  },
  panelProductImage: {
    width: '120px',
    height: '120px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
  },
  panelEmoji: {
    fontSize: '64px',
  },
  panelProductHeader: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  panelBrand: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#90c67c',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  panelProductName: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '600',
    color: '#1a3d24',
    margin: '8px 0',
  },
  panelPriceUnderName: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2d5a3d',
    display: 'block',
    marginBottom: '12px',
  },
  panelRatingRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    alignItems: 'center',
  },
  panelRating: {
    fontSize: '14px',
    color: '#d4a853',
    fontWeight: '600',
  },
  panelReviews: {
    fontSize: '13px',
    color: '#6b7c6e',
  },
  panelDescription: {
    fontSize: '15px',
    color: '#4a6b4f',
    lineHeight: '1.6',
    marginBottom: '24px',
    textAlign: 'center',
  },
  panelIngredients: {
    marginBottom: '20px',
    padding: '16px',
    background: 'rgba(232, 245, 224, 0.5)',
    borderRadius: '12px',
  },
  panelSectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d5a3d',
    marginBottom: '8px',
  },
  panelIngredientsList: {
    fontSize: '13px',
    color: '#4a6b4f',
    lineHeight: '1.5',
  },
  panelConcerns: {
    marginBottom: '24px',
  },
  concernTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  concernTag: {
    padding: '8px 14px',
    background: 'rgba(144, 198, 124, 0.15)',
    borderRadius: '20px',
    fontSize: '12px',
    color: '#2d5a3d',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  panelFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(144, 198, 124, 0.2)',
  },
  panelPrice: {
    display: 'flex',
    flexDirection: 'column',
  },
  priceLabel: {
    fontSize: '11px',
    color: '#6b7c6e',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  priceValue: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a3d24',
  },
  addToCartButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '16px 24px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(45, 90, 61, 0.3)',
  },
  addToCartButtonFull: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '18px 24px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(45, 90, 61, 0.3)',
  },
  // Add Product Panel Content
  addProductPanelContent: {
    padding: '8px 24px 32px',
  },
  addProductTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  addProductSubtitle: {
    fontSize: '14px',
    color: '#6b7c6e',
    marginBottom: '20px',
  },
  addProductList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxHeight: '400px',
    overflow: 'auto',
  },
  addProductItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: 'rgba(248, 250, 245, 0.8)',
    borderRadius: '12px',
    border: '1px solid rgba(144, 198, 124, 0.15)',
  },
  addProductItemImage: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  addProductItemEmoji: {
    fontSize: '24px',
  },
  addProductItemInfo: {
    flex: 1,
    minWidth: 0,
  },
  addProductItemBrand: {
    fontSize: '10px',
    fontWeight: '500',
    color: '#90c67c',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  addProductItemName: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#1a3d24',
    margin: '2px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  addProductItemPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  addProductItemButton: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#fff',
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  allProductsAdded: {
    textAlign: 'center',
    padding: '40px 20px',
    color: '#6b7c6e',
  },
  allProductsIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '12px',
  },
  // Payment View Styles
  paymentContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  paymentHeader: {
    textAlign: 'center',
    marginBottom: '8px',
  },
  paymentTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  paymentSubtitle: {
    fontSize: '14px',
    color: '#6b7c6e',
  },
  paymentOrderSummary: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
    border: '1px solid rgba(144, 198, 124, 0.15)',
  },
  paymentSectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  paymentItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px',
  },
  paymentItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  paymentItemEmoji: {
    fontSize: '24px',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #f5f9f0 0%, #e8f5e0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentItemInfo: {
    flex: 1,
  },
  paymentItemName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1a3d24',
    display: 'block',
  },
  paymentItemQty: {
    fontSize: '12px',
    color: '#6b7c6e',
  },
  paymentItemPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d5a3d',
  },
  paymentTotalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid rgba(144, 198, 124, 0.2)',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a3d24',
  },
  paymentTotalValue: {
    color: '#2d5a3d',
    fontSize: '18px',
  },
  paymentSection: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
    border: '1px solid rgba(144, 198, 124, 0.15)',
  },
  inputGroup: {
    marginBottom: '16px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '500',
    color: '#4a6b4f',
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  textInput: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '1px solid rgba(144, 198, 124, 0.3)',
    borderRadius: '12px',
    background: 'rgba(248, 250, 245, 0.8)',
    color: '#1a3d24',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  inputRow: {
    display: 'flex',
    gap: '12px',
  },
  cardPreview: {
    background: 'linear-gradient(135deg, #2d5a3d 0%, #1a3d24 100%)',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '20px',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  cardPreviewTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '24px',
  },
  cardChip: {
    width: '40px',
    height: '28px',
    background: 'linear-gradient(135deg, #d4a853, #c49a47)',
    borderRadius: '6px',
  },
  cardType: {
    fontSize: '14px',
    fontWeight: '500',
    opacity: 0.9,
  },
  cardNumber: {
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '2px',
    marginBottom: '20px',
    fontFamily: 'monospace',
  },
  cardPreviewBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardHolder: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.8,
  },
  cardExpiry: {
    fontSize: '12px',
    letterSpacing: '1px',
    opacity: 0.8,
  },
  secureBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px',
    background: 'rgba(144, 198, 124, 0.1)',
    borderRadius: '10px',
    fontSize: '13px',
    color: '#4a7c59',
  },
  placeOrderButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '18px 24px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(45, 90, 61, 0.3)',
  },
  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#fff',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  backToCartButton: {
    display: 'block',
    width: '100%',
    padding: '14px',
    background: 'transparent',
    border: 'none',
    color: '#4a7c59',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
  },
  // Order Confirmation Styles
  confirmationContainer: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  confirmationIcon: {
    fontSize: '64px',
    marginBottom: '16px',
  },
  confirmationCheckmark: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  confirmationTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '32px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '8px',
  },
  confirmationSubtitle: {
    fontSize: '16px',
    color: '#6b7c6e',
    marginBottom: '32px',
  },
  confirmationDetails: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 24px rgba(45, 90, 61, 0.08)',
    border: '1px solid rgba(144, 198, 124, 0.2)',
    textAlign: 'left',
  },
  confirmationRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '14px',
    color: '#6b7c6e',
  },
  confirmationValue: {
    fontWeight: '600',
    color: '#1a3d24',
  },
  confirmationDivider: {
    height: '1px',
    background: 'rgba(144, 198, 124, 0.2)',
    margin: '16px 0',
  },
  confirmationTotal: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2d5a3d',
  },
  confirmationItems: {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 2px 12px rgba(45, 90, 61, 0.06)',
    border: '1px solid rgba(144, 198, 124, 0.15)',
  },
  confirmationItemsTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a3d24',
    marginBottom: '16px',
    textAlign: 'left',
  },
  confirmationItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 0',
    borderBottom: '1px solid rgba(144, 198, 124, 0.1)',
  },
  confirmationItemEmoji: {
    fontSize: '20px',
  },
  confirmationItemName: {
    fontSize: '14px',
    color: '#4a6b4f',
  },
  continueShoppingButtonLarge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '18px 24px',
    background: 'linear-gradient(135deg, #2d5a3d 0%, #3d7a52 100%)',
    border: 'none',
    borderRadius: '14px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(45, 90, 61, 0.3)',
  },
};
