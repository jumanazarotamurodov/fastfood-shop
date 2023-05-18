const text = document.querySelectorAll(".p")
const h = document.querySelector(".h1")
const text2 = document.querySelectorAll(".p1")
const button = document.querySelector(".breakfast")
const form = document.querySelector("form")
const input = document.querySelector(".textInput")
const button2 = document.querySelector(".button")
let bar = document.querySelector(".bar")
let stray = document.querySelector(".box3")

let data = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: " $15.99",
        img: "./images/item-1.jpeg",
        desc: " I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: " $13.99",
        img: "./images/item-2.jpeg",
        desc: " vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: " $6.99",
        img: "./images/item-3.jpeg",
        desc: " ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: " $20.99",
        img: "./images/item-4.jpeg",
        desc: " Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, ",
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: " $22.99",
        img: "./images/item-5.jpeg",
        desc: " franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up ",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: " $18.99",
        img: "./images/item-6.jpeg",
        desc: " Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: " $8.99",
        img: "./images/item-7.jpeg",
        desc: " carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: " $12.99",
        img: "./images/item-8.jpeg",
        desc: " on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  ",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: " $16.99",
        img: "./images/item-9.jpeg",
        desc: " skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
];
text.forEach(item => {
    item.addEventListener("click", () => {
        let ui = ""
        h.textContent = item.textContent
        button.className = item.textContent
        const hText = h.textContent
        data.map(iten => {
            if (hText == iten.category) {
                return (
                    ui += `
            
                <div id="bar">
                    <img src="${iten.img}" alt="">
                    <h2>${iten.title}</h2>
                    <p>${iten.category}</p>
                    <h3>${iten.price}</h3>
                    <h4>${iten.desc}</h4>
                </div>
            `
                )
            }

        })
        stray.innerHTML = ui



    })


})

text2.forEach(item => {
    item.addEventListener("click", () => {
        let ui = ""
        button.className = item.textContent
        h.textContent = item.textContent
        let hText = button.className
        data.map(iten => {
            if (hText == iten.category) {
                return (
                    ui += `
            
                <div id="bar">
                    <img src="${iten.img}" alt="">
                    <h2>${iten.title}</h2>
                    <p>${iten.category}</p>
                    <h3>${iten.price}</h3>
                    <h4>${iten.desc}</h4>
                </div>
            `
                )
            }

        })
        stray.innerHTML = ui
    })
})

form.addEventListener("submit", () => {
    let ui = ""
    button.className = input.value
    h.textContent = input.value
    let hText = input.value
    data.map(iten => {
        if (hText == iten.category) {
            return (
                ui += `
        
            <div id="bar">
                <img src="${iten.img}" alt="">
                <h2>${iten.title}</h2>
                <p>${iten.category}</p>
                <h3>${iten.price}</h3>
                <h4>${iten.desc}</h4>
            </div>
        `
            )
        }

    })
    stray.innerHTML = ui
})


//Buyurtma berish

const ism = document.querySelector(".name")
const lastname = document.querySelector(".lastname")
const manzil = document.querySelector(".manzil")
const raqam = document.querySelector(".raqam")
const nom = document.querySelector(".nom")
const code = document.querySelector(".name")
const izoh = document.querySelector(".izoh")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
    const id = 6276920626
    const botTokin = "5952381257:AAE1N0mZ3vqKq7SUBRDg_qBC3A9rdLIdWLM"
    const ismValue = ism.value
    const lastnameValue = lastname.value
    const manzilValue = manzil.value
    const raqamValue = raqam.value
    const nomValue = nom.value
    const codeValue = code.value
    const izohValue = izoh.value

    let message =
        "Ismi:" + ismValue + "\nFamilyasi:" + lastnameValue + "\nManzil:" + manzilValue + "\nUy raqami:" + raqamValue + "\nBuyurtma:" + nomValue + "\nCodi:" + codeValue + "\nIzohi:" + izohValue;
 
        fetch("https://api.telegram.org/bot" + botTokin + "/sendMessage",{
            method:"POST",
            body:JSON.stringify({
                "chat_id": id,
                "text": message
            }),
            headers:{
                "Content-Type": "application/json",
                "cache-control": "no-cache"
            }
        }).then(res => res.json())
        .then(data => console.log(data))
})