document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-grid button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            if (url) {
                window.location.href = url; // 각 페이지 url로 이동
            }
        });
    });

    const logoutBtn = document.querySelector('.logout-btn');
            logoutBtn.addEventListener('click', () => {
                // 로그아웃 처리 로직
                window.location.href = 'logout.html'; // 로그아웃 페이지 또는 처리 URL
            });
});