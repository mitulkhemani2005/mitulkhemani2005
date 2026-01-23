<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --accent: #ec4899;
    --accent-light: #f472b6;
    --dark-bg: #0f172a;
    --darker-bg: #020617;
    --card-bg: #1e293b;
    --border-color: #334155;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --text-tertiary: #94a3b8;
    --success: #10b981;
    --warning: #f59e0b;
  }

  body {
    background: linear-gradient(135deg, var(--darker-bg) 0%, #1a1f35 50%, var(--dark-bg) 100%);
    color: var(--text-primary);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes float-reverse {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(20px); }
  }

  @keyframes glow {
    0%, 100% { text-shadow: 0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.3); }
    50% { text-shadow: 0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(99, 102, 241, 0.5); }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }

  @keyframes rotateBorder {
    0% { border-color: var(--primary); }
    25% { border-color: var(--accent); }
    50% { border-color: var(--primary); }
    75% { border-color: var(--accent); }
    100% { border-color: var(--primary); }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    animation: fadeIn 0.8s ease-in;
  }

  .header {
    text-align: center;
    padding: 80px 20px 40px;
    animation: slideInDown 0.8s ease-out;
  }

  .header-name {
    font-size: 4rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 15px;
    animation: glow 3s ease-in-out infinite;
    letter-spacing: -2px;
  }

  .header-title {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-weight: 600;
    animation: slideInDown 0.8s ease-out 0.1s both;
  }

  .header-subtitle {
    font-size: 1.1rem;
    color: var(--text-tertiary);
    max-width: 700px;
    margin: 0 auto 30px;
    line-height: 1.6;
    animation: slideInUp 0.8s ease-out 0.2s both;
  }

  .divider {
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent);
    margin: 30px 0;
    animation: slideInDown 0.8s ease-out 0.3s both;
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 40px 0;
    flex-wrap: wrap;
    animation: slideInUp 0.8s ease-out 0.4s both;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
    border: 2px solid transparent;
    cursor: pointer;
  }

  .social-link:hover {
    transform: translateY(-12px) scale(1.15) rotate(10deg);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.6);
    border-color: var(--accent);
    animation: pulse 1s ease-in-out infinite;
  }

  .section {
    margin: 60px 0;
    animation: slideInUp 0.8s ease-out both;
  }

  .section:nth-child(2) { animation-delay: 0.1s; }
  .section:nth-child(3) { animation-delay: 0.2s; }
  .section:nth-child(4) { animation-delay: 0.3s; }
  .section:nth-child(5) { animation-delay: 0.4s; }

  .section-title {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 30px;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 15px;
    animation: slideInDown 0.6s ease-out;
  }

  .section-title::before {
    content: '';
    width: 4px;
    height: 32px;
    background: linear-gradient(180deg, var(--primary), var(--accent));
    border-radius: 2px;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.6);
    animation: float 2s ease-in-out infinite;
  }

  .card {
    background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.5));
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 30px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    animation: slideInUp 0.6s ease-out;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.2);
    background: linear-gradient(135deg, rgba(30, 41, 59, 1), rgba(30, 41, 59, 0.8));
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .about-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 20px;
    animation: slideInUp 0.6s ease-out;
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .stat-card {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    padding: 30px;
    border-radius: 16px;
    text-align: center;
    color: white;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  .stat-card:hover {
    transform: scale(1.08) translateY(-8px);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.5);
  }

  .stat-number {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 10px;
    animation: pulse 2s ease-in-out infinite;
    letter-spacing: -1px;
  }

  .stat-label {
    font-size: 0.95rem;
    opacity: 0.95;
    font-weight: 500;
  }

  .badge {
    display: inline-block;
    background: rgba(99, 102, 241, 0.15);
    border: 1.5px solid var(--primary);
    color: var(--primary);
    padding: 10px 18px;
    border-radius: 25px;
    font-size: 0.9rem;
    margin-right: 10px;
    margin-bottom: 12px;
    transition: all 0.3s ease;
    animation: slideInUp 0.6s ease-out;
    cursor: pointer;
    font-weight: 500;
    backdrop-filter: blur(10px);
  }

  .badge:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-6px) scale(1.05);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.5);
    border-color: var(--accent);
  }

  .tech-category {
    margin-bottom: 28px;
  }

  .tech-category-title {
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.05rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tech-category-title::before {
    content: '';
    width: 3px;
    height: 3px;
    background: var(--accent);
    border-radius: 50%;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .github-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .github-stat-card {
    background: var(--card-bg);
    border: 1.5px solid var(--border-color);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    animation: slideInUp 0.6s ease-out;
  }

  .github-stat-card:hover {
    border-color: var(--primary);
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(99, 102, 241, 0.2);
  }

  .github-stat-card img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
  }

  .contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }

  .contact-item {
    background: var(--card-bg);
    border: 1.5px solid var(--border-color);
    border-radius: 16px;
    padding: 25px;
    transition: all 0.3s ease;
    animation: slideInUp 0.6s ease-out;
    cursor: pointer;
  }

  .contact-item:hover {
    border-color: var(--accent);
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.1));
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(236, 72, 153, 0.2);
  }

  .contact-label {
    color: var(--text-tertiary);
    font-size: 0.85rem;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .contact-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-primary);
    word-break: break-all;
  }

  .cta-section {
    text-align: center;
    padding: 60px 30px;
    margin: 80px 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.1));
    border: 1.5px solid var(--border-color);
    border-radius: 20px;
    animation: slideInUp 0.8s ease-out;
  }

  .cta-button {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    color: white;
    padding: 18px 50px;
    border-radius: 35px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
    border: 2px solid transparent;
    cursor: pointer;
    margin-top: 20px;
    letter-spacing: 0.5px;
  }

  .cta-button:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.6);
    border-color: var(--accent-light);
  }

  .footer {
    text-align: center;
    padding: 40px 0;
    border-top: 1px solid var(--border-color);
    color: var(--text-tertiary);
    margin-top: 80px;
    animation: slideInUp 0.8s ease-out;
  }

  .highlight {
    color: var(--accent);
    font-weight: 700;
  }

  .feature-list {
    list-style: none;
    margin-bottom: 20px;
  }

  .feature-list li {
    padding: 12px 0;
    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
    animation: slideInUp 0.6s ease-out;
    transition: all 0.3s ease;
  }

  .feature-list li:hover {
    padding-left: 10px;
    color: var(--primary);
  }

  .feature-list li::before {
    content: '✦ ';
    color: var(--accent);
    font-weight: bold;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    .header-name {
      font-size: 2.8rem;
    }

    .header-title {
      font-size: 1.4rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    .social-links {
      gap: 12px;
    }

    .stat-card {
      padding: 20px;
    }

    .stat-number {
      font-size: 2rem;
    }

    .stats {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="container">

<!-- HEADER SECTION -->
<div class="header">
  <h1 class="header-name">Mitul Khemani</h1>
  <p class="header-title">Data Science & Machine Learning Engineer</p>
  <p class="header-subtitle">🚀 Building intelligent solutions with AI | Transforming data into insights | Problem solver passionate about innovation</p>
</div>

<div class="divider"></div>

<!-- SOCIAL LINKS -->
<div class="social-links">
  <a href="https://github.com/mitulkhemani2005" class="social-link" title="GitHub">💻</a>
  <a href="https://www.linkedin.com/in/mitul-khemani/" class="social-link" title="LinkedIn">💼</a>
  <a href="https://mitul-khemani.vercel.app/" class="social-link" title="Portfolio">🌐</a>
  <a href="mailto:khemanimitul@gmail.com" class="social-link" title="Email">📧</a>
</div>

<!-- ABOUT ME SECTION -->
<div class="section">
  <h2 class="section-title">About Me</h2>
  <div class="card">
    <p class="about-text">
      I'm passionate about leveraging <span class="highlight">data</span> and <span class="highlight">AI</span> to solve real-world problems. With a strong foundation in mathematics, statistics, and software engineering, I specialize in building end-to-end ML pipelines and deploying scalable AI solutions.
    </p>
    <p class="about-text">
      Committed to continuous learning and staying at the forefront of machine learning and generative AI innovations. My approach combines theoretical rigor with practical problem-solving, ensuring solutions are both robust and production-ready.
    </p>
  </div>
</div>

<!-- QUICK STATS SECTION -->
<div class="section">
  <h2 class="section-title">Quick Stats</h2>
  <div class="stats">
    <div class="stat-card">
      <div class="stat-number">5+</div>
      <div class="stat-label">Years of Experience</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">50+</div>
      <div class="stat-label">ML Models Deployed</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">100%</div>
      <div class="stat-label">Passion & Dedication</div>
    </div>
  </div>
</div>

<!-- GITHUB STATS SECTION -->
<div class="section">
  <h2 class="section-title">GitHub Statistics</h2>
  <div class="github-stats">
    <div class="github-stat-card">
      <img src="https://github-readme-stats.vercel.app/api?username=mitulkhemani2005&show_icons=true&theme=tokyonight" alt="GitHub Stats"/>
    </div>
    <div class="github-stat-card">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mitulkhemani2005&layout=compact&theme=tokyonight" alt="Top Languages"/>
    </div>
  </div>
</div>

<!-- TECH STACK SECTION -->
<div class="section">
  <h2 class="section-title">Tech Stack</h2>
  
  <div class="card">
    <div class="tech-category">
      <div class="tech-category-title">Core Languages</div>
      <div class="tech-badges">
        <span class="badge">Python</span>
        <span class="badge">SQL</span>
        <span class="badge">R</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Data Science & ML</div>
      <div class="tech-badges">
        <span class="badge">Scikit-learn</span>
        <span class="badge">XGBoost</span>
        <span class="badge">TensorFlow</span>
        <span class="badge">PyTorch</span>
        <span class="badge">Pandas</span>
        <span class="badge">NumPy</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Deep Learning & NLP</div>
      <div class="tech-badges">
        <span class="badge">Hugging Face</span>
        <span class="badge">BERT</span>
        <span class="badge">Transformers</span>
        <span class="badge">NLTK</span>
        <span class="badge">spaCy</span>
        <span class="badge">Keras</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Computer Vision</div>
      <div class="tech-badges">
        <span class="badge">OpenCV</span>
        <span class="badge">YOLO</span>
        <span class="badge">Pillow</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Generative AI</div>
      <div class="tech-badges">
        <span class="badge">LLMs</span>
        <span class="badge">Prompt Engineering</span>
        <span class="badge">Fine-tuning</span>
        <span class="badge">RAG</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Databases</div>
      <div class="tech-badges">
        <span class="badge">PostgreSQL</span>
        <span class="badge">MySQL</span>
        <span class="badge">MongoDB</span>
        <span class="badge">Firebase</span>
        <span class="badge">BigQuery</span>
        <span class="badge">Snowflake</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Cloud & DevOps</div>
      <div class="tech-badges">
        <span class="badge">AWS</span>
        <span class="badge">Google Cloud</span>
        <span class="badge">Vercel</span>
      </div>
    </div>

    <div class="tech-category">
      <div class="tech-category-title">Tools & Frameworks</div>
      <div class="tech-badges">
        <span class="badge">Jupyter</span>
        <span class="badge">Google Colab</span>
        <span class="badge">Git</span>
        <span class="badge">VS Code</span>
        <span class="badge">Tableau</span>
        <span class="badge">Plotly</span>
        <span class="badge">Dash</span>
        <span class="badge">Flask</span>
        <span class="badge">FastAPI</span>
        <span class="badge">React</span>
      </div>
    </div>
  </div>
</div>

<!-- WHAT I DO SECTION -->
<div class="section">
  <h2 class="section-title">What I Do</h2>
  <div class="card">
    <ul class="feature-list">
      <li><strong>Data Analysis & Visualization</strong> - Extract insights from raw data, identify trends, and communicate findings through compelling visualizations</li>
      <li><strong>Machine Learning</strong> - Design, train, and optimize models for classification, regression, and predictive analytics</li>
      <li><strong>Deep Learning</strong> - Build neural networks for computer vision, NLP, and sequential data analysis</li>
      <li><strong>Generative AI</strong> - Develop applications leveraging LLMs, prompt engineering, and AI-powered automation</li>
      <li><strong>Database Design</strong> - Architect efficient SQL solutions and optimize queries for performance</li>
    </ul>
  </div>
</div>

<!-- CONTACT SECTION -->
<div class="section">
  <h2 class="section-title">Get In Touch</h2>
  <div class="contact-info">
    <div class="contact-item">
      <div class="contact-label">Email</div>
      <div class="contact-value">khemanimitul@gmail.com</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Phone</div>
      <div class="contact-value">+91 7470924433</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Location</div>
      <div class="contact-value">India</div>
    </div>
  </div>
</div>

<!-- CTA SECTION -->
<div class="cta-section">
  <h2 class="section-title" style="justify-content: center;">Let's Build Something Amazing Together</h2>
  <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 1.05rem;">Ready to discuss a project or explore opportunities?</p>
  <a href="mailto:khemanimitul@gmail.com" class="cta-button">Get in Touch Now</a>
</div>

<!-- FOOTER -->
<div class="footer">
  <p>✨ Crafted with passion and AI | © 2024-2026 Mitul Khemani</p>
  <p style="margin-top: 15px; font-size: 0.9rem;"><a href="https://github.com/mitulkhemani2005" style="color: var(--primary); text-decoration: none;">GitHub</a> • <a href="https://www.linkedin.com/in/mitul-khemani/" style="color: var(--primary); text-decoration: none;">LinkedIn</a> • <a href="https://mitul-khemani.vercel.app/" style="color: var(--primary); text-decoration: none;">Portfolio</a></p>
</div>

</div>
