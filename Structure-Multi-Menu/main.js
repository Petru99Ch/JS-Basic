let menuItems = [ 
    {
        title: "Team",
        menu: [
            {
                title:"CEO: John Smith",
                
            },
            {
                title:"DEV: John Doe",
                
            }
        ]
    },
    {
        title: "Services",
        icon:`<i class="fa-brands fa-servicestack"></i>`,
        menu: [
            {
                title:"Web & App Developement",
                icon:`<i class="fa-brands fa-servicestack"></i>`
            },
            {
                title:"App testing",
                icon:`<i class="fa-brands fa-servicestack"></i>`
            },
            {
                title:"Web Design",
                icon:`<i class="fa-brands fa-servicestack"></i>`
            },

        ]
    },
    {
        title: "Reviews"
    },
    {
        title: "Order",
        url:"/order"
    },
    {
        title: "Contacts"
    }

]

const renderMenu = function(parentElement, items) {
    let html =`<ul>`
   //HW: refactor this code so it renders the icon where is an icon 
    for(let i = 0 ; i<items.length; i++ ){
        html += `<li>
            ${items[i].icon ?? ""} 
            <a href="${items[i].url ?? "#"}" onclick = "renderSubMenu(${i}, ${items[i].menu != undefined})"> ${items[i].title}</a>
        
        </li>`
    }
    html += `</ul>`
    parentElement.innerHTML += html

}

const renderSubMenu = function(index, render) {
    if(render){
       let li =  document.querySelector(`li:nth-child(${index+1})`)
       if(!menuItems[index].open){
        renderMenu(li, menuItems[index].menu)
        menuItems[index].open = true
       } else {
        menu.innerHTML =''
        renderMenu(menu, menuItems)
        menuItems[index].open =false
       }
       
    }
}

renderMenu(menu, menuItems)