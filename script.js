const portfolioSection=document.querySelector(".portfoliosection");

function showHiddenContent(menu) {
    var h3Element = menu.querySelector('h3');
    var h5Element = menu.querySelector('h5');
    
    if (h3Element) {
      h3Element.classList.remove('visually-hidden');
    }

    if (h5Element) {
      h5Element.classList.remove('visually-hidden');
    }
  }

  function hideHiddenContent(menu) {
    var h3Element = menu.querySelector('h3');
    var h5Element = menu.querySelector('h5');
    
    if (h3Element) {
      h3Element.classList.add('visually-hidden');
    }

    if (h5Element) {
      h5Element.classList.add('visually-hidden');
    }
  }

  const buttons=[
    {
      id:1,
      category:"Wszystkie"
    },
    {
      id:2,
      category:"Dom"
    },
    {
      id:3,
      category:"Lokal użytkowy"
    },
    {
      id:4,
      category:"Mieszkanie"
    }
  ]
  const portfolio_item = [
    {
      id: 1,
      title: "Teczowa 50m2",
      category: "Dom",
      img:
        "img1.jpeg",
      desc: ``,
    },
    {
      id: 2,
      title: "Ś. Mikołaja 67 120m2",
      category: "Lokal użytkowy",
      img:
        "img2.jpeg",
      desc: ` `,
    },
    {
      id: 3,
      title: "H. Modrzejewskiej 54m2",
      category: "Mieszkanie",
      img:
      "img3.jpeg",
      desc: ``,
    },
    {
    id: 4,
    title: "Teczowa 50m2",
    category: "Dom",
    img:
      "img1.jpeg",
    desc: ``,
  },
  {
    id: 5,
    title: "Ś. Mikołaja 67 120m2",
    category: "Lokal użytkowy",
    img:
      "img2.jpeg",
    desc: ` `,
  },
  {
    id: 6,
    title: "H. Modrzejewskiej 54m2",
    category: "Mieszkanie",
    img:
    "img3.jpeg",
    desc: ``,
  },
  {
  id: 7,
  title: "Teczowa 50m2",
  category: "Dom",
  img:
    "img1.jpeg",
  desc: ``,
},
{
  id: 8,
  title: "Ś. Mikołaja 67 120m2",
  category: "Lokal użytkowy",
  img:
    "img2.jpeg",
  desc: ` `,
},
{
  id: 9,
  title: "H. Modrzejewskiej 54m2",
  category: "Mieszkanie",
  img:
  "img3.jpeg",
  desc: ``,
},
  ];
  function showButtons(){
    let buttonHTML="";
    buttons.forEach(element => {
      buttonHTML+=`<a type="submit" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover p-2 submitcolor" id="${element.category}">${element.category}</a>`
    });
    document.querySelector(".btnsl").innerHTML=buttonHTML;
  }
  
  function showSomething(input){
    portfolioSection.innerHTML="";
    let HTMLcontent="";
    if(input==="Wszystkie"){
      portfolio_item.forEach(element=>{
        HTMLcontent+=`
        <a href="details.html" class="col menu-item testdiv" onmouseover="showHiddenContent(this)" onmouseout="hideHiddenContent(this)">
        <img class="photo" src="${element.img}" alt="">
        <h3 class="centered visually-hidden">${element.title}</h3>
        <h5 class="centered2 visually-hidden">${element.category}</h5>
      </a>
        `
      });
    }else{
      portfolio_item.forEach(element => {
        if(element.category===input){
          HTMLcontent+=`
          <a href="details.html" class="col menu-item testdiv" onmouseover="showHiddenContent(this)" onmouseout="hideHiddenContent(this)">
          <img class="photo" src="${element.img}" alt="">
          <h3 class="centered visually-hidden">${element.title}</h3>
          <h5 class="centered2 visually-hidden">${element.category}</h5>
        </a>
          `
        }
      });
    }
    
    portfolioSection.innerHTML=HTMLcontent;
  
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Kodunuz buraya gelecek
  const allButtons=document.querySelectorAll(".link-secondary");
  allButtons.forEach(function(button){
    button.addEventListener("click",function(){
      showSomething(button.id)
    })
    })
    document.querySelector("#Wszystkie").click();

});
function submitContact(){
  let submitContact=document.querySelector("#submit-contact")
  let content=submitContact.innerHTML;
  submitContact.addEventListener("click",function(){
      document.querySelector(form).innerHTML+=`
      <p class="mt-3">Submitted successfully!</p>
      `
  })
}