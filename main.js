// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initMatrixRain();
    initTypingEffect();
    initWorkCards();
    initVideoCards();
    initAOS();
});

// Matrix雨效果
function initMatrixRain() {
    const canvas = document.getElementById('matrix-rain');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for(let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// 打字机效果
function initTypingEffect() {
    new Typed('#typed-text', {
        strings: ['UI设计师', '视觉设计师', '创意总监'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
}

// 初始化作品卡片
function initWorkCards() {
    const works = [
        {
            title: '项目1',
            description: '项目描述...',
            image: 'path/to/image1.jpg'
        },
        {
            title: '项目2',
            description: '项目描述...',
            image: 'path/to/image2.jpg'
        }
    ];

    const worksGrid = document.querySelector('.works-grid');
    works.forEach(work => {
        worksGrid.innerHTML += `
            <div class="work-card" data-aos="fade-up">
                <img src="${work.image}" alt="${work.title}">
                <div class="work-info">
                    <h3>${work.title}</h3>
                    <p>${work.description}</p>
                </div>
            </div>
        `;
    });
}

// 初始化视频卡片
function initVideoCards() {
    const videos = [
        {
            title: '视频1',
            videoId: 'YOUR_VIDEO_ID_1'
        },
        {
            title: '视频2',
            videoId: 'YOUR_VIDEO_ID_2'
        }
    ];

    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        videoGrid.innerHTML += `
            <div class="video-item" data-aos="fade-up">
                <iframe
                    src="https://www.youtube.com/embed/${video.videoId}"
                    title="${video.title}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    });
}

// 初始化AOS动画
function initAOS() {
    AOS.init({
        duration: 1000,
        once: true
    });
}Create main.js
