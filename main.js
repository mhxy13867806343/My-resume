// 导航按钮水波纹效果
function addNavRipple() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      btn.classList.add('ripple-animate');
      setTimeout(() => btn.classList.remove('ripple-animate'), 420);
    });
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addNavRipple);
} else {
  addNavRipple();
}