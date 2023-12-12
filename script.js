const wrapper =document.querySelector('.sliderWrapper');
const menuItem = document.querySelectorAll('.menuItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chooseProduct = products[0]

  const CurrentproductImg = document.querySelector('.productImg');
  const CurrentproductTitle = document.querySelector('.productTitle');
  const CurrentproductPrice = document.querySelector('.productPrice');
  const Currentproductcolor = document.querySelectorAll('.color');
  const Currentproductsize = document.querySelectorAll('.size');
  
menuItem.forEach((item,index)=>{
  item.addEventListener('click',()=>{
  wrapper.style.transform =`translateX(${-100 * index}vw)`

  chooseProduct = products[index]

  CurrentproductTitle.textContent = chooseProduct.title
  CurrentproductPrice.textContent = '$'+ chooseProduct.price
  CurrentproductImg.src = chooseProduct.colors[0].img
  
  Currentproductcolor.forEach((color,index)=>{
color.style.backgroundColor = chooseProduct.colors[index].code
  })
  })
})


Currentproductcolor.forEach((color,index)=>{
color.addEventListener('click',()=>{
    CurrentproductImg.src = chooseProduct.colors[index].img
})
})

Currentproductsize.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        Currentproductsize.forEach((size)=>{
            size.style.backgroundColor='white'
            size.style.color ='black'
        })
        size.style.backgroundColor='black'
        size.style.color ='white'
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

