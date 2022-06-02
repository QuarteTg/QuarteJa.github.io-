var navigationItems = [
    {
        name: "Домашня сторінка",
        href: "#",
        icon: "fas fa-home",
    },
    {
        name: "Статті",
        href: "./articles",
        icon: "fas fa-smile-wink",
    },
]


function CreateItem(item) {
    var i = document.createElement("i");
    i.className = item.icon;

    var icon = document.createElement("span");
    icon.className = "icon";
    icon.appendChild(i);

    var title = document.createElement("span");
    title.className = "title";
    title.title = item.name;
    title.innerHTML = item.name;

    var a = document.createElement("a");
    a.href = item.href;
    a.appendChild(icon);
    a.appendChild(title);

    var li = document.createElement("li");
    if (item.onclick) { li.addEventListener("click", item.onclick) };
    li.appendChild(a);

    var navigation = document.querySelector(".navigationContainer .navigation ul");
    navigation.appendChild(li);
}


navigationItems.forEach(function(item) {
    CreateItem(item);
});

document.getElementsByClassName("toggle")[0].click();