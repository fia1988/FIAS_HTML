// navigation.js

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");
    const navClose = document.querySelector("#navClose"); // ×ボタン


    // ナビゲーションを開く関数
    function openNavigation() {
        navMenu.classList.add("open");
        overlay.style.display = "block"; // オーバーレイを表示
        navToggle.style.display = "none"; // ハンバーガーアイコンを非表示
    }

    // ナビゲーションを閉じる関数
    function closeNavigation() {
        navMenu.classList.remove("open");
        overlay.style.display = "none"; // オーバーレイを非表示
        navToggle.style.display = "block"; // ハンバーガーアイコンを表示
    }

    navToggle.addEventListener("click", function (event) {
        if (navMenu.classList.contains("open")) {
            closeNavigation();
        } else {
            openNavigation();
        }
    });

    
    overlay.addEventListener("click", closeNavigation);

    // ドキュメント全体にクリックイベントリスナーを追加
    document.addEventListener("click", function (event) {
        // ナビゲーションを開いている場合、クリックされた要素がナビゲーションメニュー内またはハンバーガーアイコンの要素でない場合、ナビゲーションを閉じる
        if (navMenu.classList.contains("open") && !navMenu.contains(event.target) && event.target !== navToggle) {
            closeNavigation();
        }
    });

// ×ボタンをクリックした際の処理
navClose.addEventListener("click", function () {
    closeNavigation();
});

});
