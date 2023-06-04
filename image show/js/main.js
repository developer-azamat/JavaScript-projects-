const tabsParent = document.querySelector(".tabheader__items")
const tabs = document.querySelectorAll(".tabheader__item")
const tabcontent = document.querySelectorAll(".tabcontent")

function hideTabs(){
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    });
    tabcontent.forEach((item)=>{
        item.classList.add("hide")
    })
}
hideTabs()



showTabs()

function showTabs(a=0){
    tabs[a].classList.add("tabheader__item_active")
    tabcontent[a].classList.remove("hide", "fade")
    tabcontent[a].classList.add("show", "fade")
}

tabsParent.addEventListener("click", (e)=>{
    const target = e.target
    if (target.classList.contains("tabheader__item")){
        tabs.forEach((item, index)=>{
            if (item == target){
                hideTabs()
                showTabs(index)
            }
        })
    }
})
