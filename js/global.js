
    // Vue 实例
    new Vue({
        el: '#app',
        mounted() {
          // 星空粒子背景
          const canvas = document.getElementById('particles-bg');
          const ctx = canvas.getContext('2d');
          let stars = [];
          const STAR_COUNT = window.innerWidth < 600 ? 120 : 220;
          function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }
          window.addEventListener('resize', resize);
          resize();
          function randomStar() {
            return {
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              r: Math.random() * 0.8 + 0.4,
              alpha: Math.random() * 0.5 + 0.5,
              dx: (Math.random() - 0.5) * 0.4, // 速度略提升
              dy: (Math.random() - 0.5) * 0.4,
              twinkle: Math.random() * Math.PI * 2
            };
          }
          function initStars() {
            stars = Array.from({length: STAR_COUNT}, randomStar);
          }
          initStars();
          function draw() {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.fillStyle = '#222'; // 深色夜空
            ctx.globalAlpha = 1;
            ctx.fillRect(0,0,canvas.width,canvas.height);
            ctx.restore();
            for(let i=0;i<stars.length;i++){
              let s = stars[i];
              // 闪烁效果
              let twinkle = (Math.sin(Date.now()/700 + s.twinkle) + 1) / 2 * 0.5 + 0.5;
              ctx.save();
              ctx.beginPath();
              ctx.arc(s.x, s.y, s.r * (0.9 + twinkle*0.8), 0, Math.PI*2);
              ctx.globalAlpha = s.alpha * (0.7 + twinkle*0.6);
              ctx.fillStyle = '#fff';
              ctx.shadowColor = '#fff';
              ctx.shadowBlur = 4;
              ctx.fill();
              ctx.restore();
            }
          }
          function update() {
            for(let i=0;i<stars.length;i++){
              let s = stars[i];
              s.x += s.dx;
              s.y += s.dy;
              // 超出边界则反向
              if(s.x<0||s.x>canvas.width) s.dx*=-1;
              if(s.y<0||s.y>canvas.height) s.dy*=-1;
            }
          }
          function animate() {
            update();
            draw();
            requestAnimationFrame(animate);
          }
          animate();
          window.addEventListener('resize', animate);
        }
      });