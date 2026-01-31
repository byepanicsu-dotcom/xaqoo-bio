// script.js - чистый код
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Часы
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const timeElement = document.getElementById('currentTime');
        if (timeElement) {
            timeElement.textContent = timeString;
        }
    }
    
    // 2. Анимация появления ссылок (каскад)
    const links = document.querySelectorAll('.link-card');
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        link.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * (index + 1)); // Задержка для каждого следующего элемента
    });

    // 3. Микровзаимодействия (нажатие)
    const dynamicLinks = document.querySelectorAll('.link-card.dynamic');
    dynamicLinks.forEach(link => {
        link.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        link.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1) translateY(-4px)';
        });
        
        // Сброс стилей при уходе курсора (возврат к CSS hover)
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Инициализация
    updateTime();
    setInterval(updateTime, 1000);
});
