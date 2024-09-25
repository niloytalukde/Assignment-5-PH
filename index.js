const donate1=document.getElementById('donate1');
donate1.addEventListener('click',function(){
  
    const donateBd=parseFloat(document.getElementById('donate-bd').innerText);
   const donateNoakhali =parseFloat(document.getElementById('noakhali').innerText);
   const donateNd=parseFloat(document.getElementById('donate-nd').value);
   
   if (donateNd <= 0 || isNaN(donateNd) ){
    alert('Enter a  positive number')
    return
      }
      const modal = document.getElementById('my_modal_1');
  modal.showModal(); 
   
   const total =(donateNd+donateNoakhali);
   const remaning =donateBd-total

   document.getElementById('donate-bd').innerText = remaning;
   document.getElementById('noakhali').innerText = total;


// history 
   const historyItem =document.createElement("div");
   historyItem.className ='bg-white p-5 text-xl shadow-lg mt-10 font-bold'
   historyItem.innerHTML=`
   <p>${donateNd} BDT Donate for Noakhali,Bangladesh</p>
   <p>${new Date().toLocaleDateString ()} </p>
   
   `
   const historyList = document.getElementById('history-classlist');
   historyList.insertBefore( historyItem,historyList.firstChild)
   document.getElementById('history-classlist').classList.add('hidden')

})

// feni-donation 
const donate2=document.getElementById('feni');
donate2.addEventListener('click',function(){
  console.log('feni')
    const donateBd=parseFloat(document.getElementById('donate-bd').innerText);
   const donatefeni =parseFloat(document.getElementById('feni-donate').innerText);
   const donateFd=parseFloat(document.getElementById('donate2').value);

   if (donateFd<= 0 || isNaN(donateFd) ){
    alert('Enter a  positive number')
    return
      }
      const modal = document.getElementById('my_modal_1');
      modal.showModal();

   const total =(donatefeni+donateFd);
   console.log(total)
   const remaning =donateBd-total

   document.getElementById('donate-bd').innerText = remaning;
   document.getElementById('feni-donate').innerText = total;

  //  feni donation 

  const historyItem =document.createElement("div");
   historyItem.className ='bg-white p-5 text-xl shadow-lg mt-10 font-bold'
   historyItem.innerHTML=`
   <p>${donateFd} BDT Donate for Feni,Bangladesh</p>
  <p>${new Date().toLocaleDateString ()} </p>
   `


   const historyList = document.getElementById('history-classlist');
   historyList.insertBefore( historyItem,historyList.firstChild)

})

// quota donate 
const donate3=document.getElementById('donate3');
donate3.addEventListener('click',function(){

 
 
    const donateBd=parseFloat(document.getElementById('donate-bd').innerText);
   const donatequata =parseFloat(document.getElementById('quata').innerText);
   const donateQ=parseFloat(document.getElementById('donate-quta').value);


  if (donateQ <= 0 || isNaN(donateQ)) {
  alert('Enter a positive number');
    return;
}

const modal = document.getElementById('my_modal_1');
modal.showModal();
   
   const total =(donatequata+donateQ);
   console.log(total)
   const remaning =donateBd-total

   document.getElementById('donate-bd').innerText = remaning;
   document.getElementById('quata').innerText = total;

  //  Quata donate 

  const historyItem =document.createElement("div");
   historyItem.className ='bg-white p-5 text-xl shadow-lg mt-10 font-bold'
   historyItem.innerHTML=`
   <p>${donateQ} BDT Donate for Quata Protest,Bangladesh</p>
   <p>${new Date().toLocaleDateString ()} </p>
   
   `
   const historyList = document.getElementById('history-classlist');
   historyList.insertBefore( historyItem,historyList.firstChild)


})


// open in new html page 
const blog =document.getElementById('blog');
blog.addEventListener('click',function(){
    window.open('./home.html')
})



// history button click 

const history = document.getElementById('history-name');

history.addEventListener('click', function() {
  history.classList.add("bg-[#B4F461]", "px-4", "py-1", "text-lg", "font-semibold", "rounded-lg");
  history.append()
  
  document.getElementById('donation').classList.remove("bg-[#B4F461]", "px-4", "py-1", "text-lg", "font-semibold", "rounded-lg")
  document.getElementById('history-classlist').classList.remove('hidden')
  document.getElementById('main-section').classList.add('hidden')
});
// donation button click
const donation =document.getElementById('donation');
donation.addEventListener('click',function(){
donation.classList.add("bg-[#B4F461]", "px-4", "py-1", "text-lg", "font-semibold", "rounded-lg");
donation.append()
document.getElementById('history-name').classList.remove("bg-[#B4F461]", "px-4", "py-1", "text-lg", "font-semibold", "rounded-lg")
document.getElementById('history-classlist').classList.add('hidden')
document.getElementById('main-section').classList.remove('hidden')
})






