document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});



////////////////////////////


function animateCounter() {
    const counters = document.querySelectorAll('.counter');
    const duration = 15000; 

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target')); 
        const increment = target / (duration / 16); 
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target.toLocaleString() + (counter.getAttribute('data-target') === '200000' || counter.getAttribute('data-target') === '300000' ? '+' : '');
            } else {
                counter.textContent = Math.ceil(current).toLocaleString() + (counter.getAttribute('data-target') === '20000000' || counter.getAttribute('data-target') === '30000' ? '+' : '');
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
}


window.addEventListener('load', animateCounter);


///////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
  
        const filter = button.getAttribute('data-filter');
  
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || filter === category) {
            item.classList.remove('hidden');
            setTimeout(() => item.classList.add('show'), 50);
          } else {
            item.classList.remove('show');
            item.classList.add('hidden');
          }
        });
      });
    });
  
    // Show all items initially
    galleryItems.forEach(item => {
      item.classList.remove('hidden');
      setTimeout(() => item.classList.add('show'), 50);
    });
  });



  /////////////////////////////////////////////

function getSlidesPerView() {
  return window.innerWidth <= 760 ? 1 : 2; // 1 اسلاید برای موبایل، 2 اسلاید برای دسکتاپ
}

const swiper = new Swiper('.swiper', {
  slidesPerView: getSlidesPerView(), // تنظیم اولیه تعداد اسلایدها
  direction: 'horizontal', // همیشه افقی
  rtl: true, // راست به چپ برای زبان فارسی
  spaceBetween: 5, // فاصله بین اسلایدها (اختیاری، می‌تونی تغییرش بدی)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 1700, // هر 2 ثانیه اسلاید عوض می‌شه
    disableOnInteraction: false, // اتوپلی با تعامل کاربر متوقف نمی‌شه
  },
  on: {
    resize: function () {
      swiper.params.slidesPerView = getSlidesPerView(); // تغییر تعداد اسلایدها موقع تغییر سایز
      swiper.update(); // به‌روزرسانی Swiper بعد از تغییر
    },
  },
});


/////////////////////////


   const items = document.querySelectorAll('.all-cart6 > div');
        let currentIndex = 0;

        function showNextItem() {
            if (currentIndex < items.length) {
                items[currentIndex].style.opacity = '1';
                items[currentIndex].style.transform = 'translate(0)';
                currentIndex++;
                if (currentIndex < items.length) {
                    setTimeout(showNextItem, 800); // تاخیر 0.6 ثانیه بین هر آیتم
                }
            }
        }

        window.onload = showNextItem;

   //////////////////////////////////////

document.querySelectorAll('.card').forEach(card => {
card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      const rotateX = (mouseY / rect.height) * 30; // چرخش عمودی
      const rotateY = -(mouseX / rect.width) * 30; // چرخش افقی

 card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

     card.addEventListener('mouseleave', () => {
     card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });


        ///////////////////////////////////

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const upNav = document.querySelector('.up-nav');
    const navDown = document.querySelector('.nav-down');

    if (scrollPosition >= 100) {
        upNav.style.display = 'none';
        upNav.style.zIndex = 10000;

        navDown.style.backgroundColor = '#000';
    } else {
        upNav.style.display = 'flex';
        upNav.style.zIndex = 10000;
        navDown.style.backgroundColor = 'transparent';
    }
});