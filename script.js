const pathName = window.location.pathname; // 'pathname' is case-sensitive
const pageName = pathName.split("/").pop();

const profileDiv1 = document.querySelector('.dashboard');

if (pageName === "index.html") {
    document.querySelector(".dashboard").classList.add("active");
    profileDiv1.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv3 = document.querySelector('.profile');

if (pageName === "profile.html") {
    document.querySelector(".profile").classList.add("practive");
    profileDiv3.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv = document.querySelector('.leader');

if (pageName === "leaderboard.html") {
    document.querySelector(".leader").classList.add("ldactive");
    profileDiv.classList.add('hide-before'); // Add class to hide ::befores
}

const profileDiv4 = document.querySelector('.order');

if (pageName === "order.html") {
    document.querySelector(".order").classList.add("oactive");
    profileDiv4.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv5 = document.querySelector('.product');

if (pageName === "product.html") {
    document.querySelector(".product").classList.add("pactive");
    profileDiv5.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv6 = document.querySelector('.sales');

if (pageName === "sales.html") {
    document.querySelector(".sales").classList.add("saactive");
    profileDiv6.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv7 = document.querySelector('.msg');

if (pageName === "msg.html") {
    document.querySelector(".msg").classList.add("mactive");
    profileDiv7.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv8 = document.querySelector('.setting');

if (pageName === "setting.html") {
    document.querySelector(".setting").classList.add("sactive");
    profileDiv8.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv9 = document.querySelector('.fav');

if (pageName === "fav.html") {
    document.querySelector(".fav").classList.add("factive");
    profileDiv9.classList.add('hide-before'); // Add class to hide ::before
}


const profileDiv10 = document.querySelector('.history');

if (pageName === "history.html") {
    document.querySelector(".history").classList.add("hactive");
    profileDiv10.classList.add('hide-before'); // Add class to hide ::before
}

const profileDiv11 = document.querySelector('.log');

if (pageName === "log.html") {
    document.querySelector(".log").classList.add("lactive");
    profileDiv11.classList.add('hide-before'); // Add class to hide ::before
}
