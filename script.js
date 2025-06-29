document.addEventListener('DOMContentLoaded', function() {

    // スキルの星評価を動的に生成
    const starContainers = document.querySelectorAll('.stars');
    starContainers.forEach(container => {
        const level = parseInt(container.dataset.level, 10);
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= level) {
                starsHTML += '★';
            } else {
                starsHTML += '☆';
            }
        }
        // コンテナのテキストを上書き
        // container.innerHTML = starsHTML;
        // ※CSSでの実装 (`::after`) を使ったため、このJSは不要になりました。
        //   もしJSで星を制御したい場合は、上のCSSのstars関連を削除し、この部分を有効化してください。
    });


    // スクロール時のフェードインアニメーション
    const fadeInElements = document.querySelectorAll('.fade-in');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // 要素が10%見えたら発火
        });

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // IntersectionObserver非対応ブラウザのためのフォールバック
        fadeInElements.forEach(el => {
            el.classList.add('visible');
        });
    }
});