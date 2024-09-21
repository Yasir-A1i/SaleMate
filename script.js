const pathName = window.location.pathname; // 'pathname' is case-sensitive
const pageName = pathName.split("/").pop();
if(pageName === "index.html"){
    document.querySelector(".dashboard").classList.add("active");
}
if(pageName === "profile.html"){
    document.querySelector(".profile").classList.add("practive");
}
if(pageName === "leaderboard.html"){
    document.querySelector(".leader").classList.add("ldactive");
}
if(pageName === "order.html"){
    document.querySelector(".order").classList.add("oactive");
}
if(pageName === "product.html"){
    document.querySelector(".product").classList.add("pactive");
}
if(pageName === "sales.html"){
    document.querySelector(".sales").classList.add("saactive");
}
if(pageName === "msg.html"){
    document.querySelector(".msg").classList.add("mactive");
}
if(pageName === "setting.html"){
    document.querySelector(".setting").classList.add("sactive");
}
if(pageName === "fav.html"){
    document.querySelector(".fav").classList.add("factive");
}

if(pageName === "history.html"){
    document.querySelector(".history").classList.add("hactive");
}
if(pageName === "log.html"){
    document.querySelector(".log").classList.add("lactive");
}
