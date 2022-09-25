// JavaScript source code
var password = "RD3R88";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Wrong Password, Try Again')

        return false;
    }
    if (document.getElementById('pass1').value == password) {
        alert('Correct Password, Click OK');
    }
};

function myFunction() {
    
    var copyText = document.getElementById("myInput");

 
    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    
    navigator.clipboard.writeText(copyText.value);

    
    alert("USDT (TRC20) Wallet Address Copied");
}


const items = [
    {
        number: 1,
        info:"Air Jordan 1 Retro High 'Off-white - UNC' Off-White",
        shippingFee:"20.00",
        reservePrice:"3,200.99",
        Total : "3,220.99"

    },
    {
        number: 2,
        info: "Air Jordan 1 Retro High 'Off-white - UNC' Off-White",
        shippingFee: "20.00",
        reservePrice: "4,822.99",
        Total: "4,842.99"

    },
    {
        number: 3,
        info: "Air Jordan Nike X Off-White",
        shippingFee: "20.00",
        reservePrice: "9,000.99",
        Total: "9,020.99"

    },
    {
        number: 4,
        info: "Air Jordan Nike X Off-White",
        shippingFee: "20.00",
        reservePrice: "10,200.99",
        Total: "10,220.99"

    },
    {
        number: 5,
        info: "Airo Stroller",
        shippingFee: "20.00",
        reservePrice: "461.99",
        Total: "481.99"

    },
    {
        number: 6,
        info: "Anthelion Helicopter Tour",
        shippingFee: "0.00",
        reservePrice: "3,299.99",
        Total: "3,299.99"

    },
    {
        number: 7,
        info: "Berman Harold #466 NFT",
        shippingFee: "0.00",
        reservePrice: "380.99",
        Total: "380.99"

    },
    {
        number: 8,
        info: "Bennett Winch Leather Weekender Brown",
        shippingFee: "20.00",
        reservePrice: "1,690.99",
        Total: "1,710.99"

    },
    {
        number: 9,
        info: "Black Holy Bible",
        shippingFee: "20.00",
        reservePrice: "39.99",
        Total: "59.99"

    },
    {
        number: 10,
        info: "Black Plain Versace's Medusa Biggie Dress",
        shippingFee: "20.00",
        reservePrice: "1,620.99",
        Total: "1,640.99"

    },
    {
        number: 11,
        info: "Butterfly Stool",
        shippingFee: "20.00",
        reservePrice: "6.99",
        Total: "26.99"

    },
    {
        number: 12,
        info: "Canon EOS 5D Mark IV DSLR Camera",
        shippingFee: "20.00",
        reservePrice: "833.99",
        Total: "853.99"

    },
    {
        number: 13,
        info: "Cat-woman Bodysuit Black",
        shippingFee: "20.00",
        reservePrice: "190.99",
        Total: "210.99"
    },
    {
        number: 14,
        info: "Cazal 8037 001 Sunglasses",
        shippingFee: "20.00",
        reservePrice: "200.99",
        Total: "220.99"

    },
    {
        number: 15,
        info: "Chevrolet Camaro SS 2017",
        shippingFee: "400.00",
        reservePrice: "29,000.99",
        Total: "29,400.99"

    },
    {
        number: 16,
        info: "Folding Portable Barbecue Charcoal Grill",
        shippingFee: "20.00",
        reservePrice: "55.99",
        Total: "75.99"

    },
    {
        number: 17,
        info: "Gucci Bloom Eau De Parfum Spray",
        shippingFee: "20.00",
        reservePrice: "99.99",
        Total: "119.99"

    },
    {
        number: 18,
        info: "Gucci Marmont Mini Bucket Bag",
        shippingFee: "20.00",
        reservePrice: "700.99",
        Total: "720.99"

    },
      {
        number: 19,
        info: "Berman Harold #466 NFT",
        shippingFee: "0.00",
        reservePrice: "380.99",
        Total: "380.99"

    },
    {
        number: 20,
        info: "HP Spectre x360",
        shippingFee: "20.00",
        reservePrice: "1,330.99",
        Total: "1,350.99"

    },
    {
        number: 21,
        info: "Knights of Degen #343 NFT",
        shippingFee: "0.00",
        reservePrice: "300.99",
        Total: "300.99"

    },
    {
        number: 22,
        info: "La Prairie Skin Caviar Luxe Cream",
        shippingFee: "20.00",
        reservePrice: "178.99",
        Total: "198.99"

    },
    {
        number: 23,
        info: "Lawn Mower - All Wheel Drive",
        shippingFee: "20.00",
        reservePrice: "820.99",
        Total: "840.99"

    },
    {
        number: 24,
        info: "Liston Boxing Gloves",
        shippingFee: "20.00",
        reservePrice: "4,800.99",
        Total: "4,820.99"

    },
    {
        number: 25,
        info: "Macbook Pro 15' (2015)",
        shippingFee: "20.00",
        reservePrice: "300.99",
        Total: "320.99"

    },
    {
        number: 26,
        info: "Meissen Four Elements Vases",
        shippingFee: "400.00",
        reservePrice: "92,050.99",
        Total: "92,450.99"

    },
    {
        number: 27,
        info: "Nissan Murano S AWD 2016",
        shippingFee: "400.00",
        reservePrice: "14,999.99",
        Total: "15,399.99"

    },
    {
        number: 28,
        info: "Prada Trolley",
        shippingFee: "20.00",
        reservePrice: "2,767.99",
        Total: "2,787.99"

    },
    {
        number: 29,
        info: "Pyramid of Giza Replica",
        shippingFee: "20.00",
        reservePrice: "60.99",
        Total: "80.99"

    },
    {
        number: 30,
        info: "Sony PlayStation VR Bundle",
        shippingFee: "20.00",
        reservePrice: "600.99",
        Total: "620.99"

    }


    //keep adding the items here following this format, seperating each data set by a COMMA

];

let infoDiv = document.getElementById('info-div');
let costDiv = document.getElementById('cost-div');
let reserveDiv = document.getElementById('reserve-div');
let totalDiv = document.getElementById('total-div');


const fetchData =()=>{
    
    
    const itemNumber = document.getElementById('item-number');
    
    //looping around the array of objects
    items.forEach(element => { 
        if (itemNumber.value == element.number){  //checking if the number typed is the same as the item number
            console.log (element.info);
            infoDiv.innerHTML=(element.info);
            costDiv.innerHTML=`US$${element.shippingFee}`;
            reserveDiv.innerHTML=`US$${element.reservePrice}`;
            totalDiv.innerHTML=`US$${element.Total}`;
            //pushing it to html
        }
    });
    
}

const fetchButton = document.getElementById('fetch-button');  //getting the button from html


// clicking the button triggers the fetchData function

fetchButton.addEventListener('click',(items)=>{
    fetchData();
});


//NOW THAT'S HOW TO WRITE PROFESSIONAL CODE, YO 😎



