const body = document.querySelector('body'),
    shell = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");

// 点击toggle元素时触发事件
toggle.addEventListener("click", () => {
    // 切换shell元素的close类
    shell.classList.toggle("close");
})
// 点击searchBtn元素时触发事件
searchBtn.addEventListener("click", () => {
    // 移除shell元素的close类
    shell.classList.remove("close");
})
// 点击modeSwitch元素时触发事件
modeSwitch.addEventListener("click", () => {
    // 切换body元素的dark类
    body.classList.toggle("dark");
    // 如果body元素包含dark类
    if (body.classList.contains("dark")) {
        modeText.innerText = "白日模式";
    } else {
        modeText.innerText = "夜间模式";
    }
});

const changeFavicon = link => {
    let $favicon = document.querySelector('link[rel="icon"]');
    // If a <link rel="icon"> element already exists,
    // change its href to the given link.
    if ($favicon !== null) {
        $favicon.href = link;
        // Otherwise, create a new element and append it to <head>.
    } else {
        $favicon = document.createElement("link");
        $favicon.rel = "icon";
        $favicon.href = link;
        document.head.appendChild($favicon);
    }
};

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '喔唷，崩溃啦';
        changeFavicon('./index-res/images/quit.png');
    }
    else {
        document.title = '咦，又好了';
        setTimeout(() => { document.title = 'pigeonの小站' }, 1000);
    }
})