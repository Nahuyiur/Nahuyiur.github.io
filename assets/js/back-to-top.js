document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('back-to-top');
    var scrollTarget = document.querySelector('body.homepage-entered section') || document.querySelector('section');

    function getScrollTop() {
        if (document.body.classList.contains('homepage-entered') && scrollTarget) {
            return scrollTarget.scrollTop;
        }
        return window.pageYOffset;
    }

    function scrollToTop() {
        if (document.body.classList.contains('homepage-entered') && scrollTarget) {
            scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateButton() {
        if (getScrollTop() > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateButton);
    if (scrollTarget) {
        scrollTarget.addEventListener('scroll', updateButton);
    }

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
});
