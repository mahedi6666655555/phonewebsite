const loadPhones = async (fotvalue) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${fotvalue}`
    const res = await fetch(url)
    const data = await res.json()
    displayphones(data.data)
    
  }
  
    let displayphones = (phones) => {
    let phonescontainer = document.getElementById("phone-container")
    phonescontainer.textContent=""

    phones.forEach((phone) => {
      
      const phonediv = document.createElement("div")
      phonediv.classList.add("col")
      phonediv.innerHTML = `
          

      <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="${phone.image}" alt="Shoes" class="w-full " /></figure>
  <div class="card-body">
    <h2 class="card-title ">${phone.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

          `;
      phonescontainer.appendChild(phonediv);
    });
  };

  document.getElementById("btn").addEventListener("click",function(){
let forinput=document.getElementById("search")
let fotvalue=forinput.value

loadPhones(fotvalue)

  })


  document.getElementById("btn3").addEventListener("click",function(){

    let get=document.getElementById("inputfiled")
    let forvalue=get.value
    
    let get2=document.getElementById("text")
    let forinner=get2.innerText

    let total=forvalue+forinner

    get2.innerText=total

  })
  
  loadPhones()