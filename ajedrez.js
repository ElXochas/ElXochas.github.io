
function hacerJugada() {
   let input = document.querySelector('#Input').value
   console.log(input)
   switch (input) {
      case "peon_b1_a6":
         let peonb1 = document.querySelector('#peonb1');
            let Blank1 = document.querySelector('#blank1')
            let peonClon = document.querySelector('#peonB1').cloneNode(true)
            let docFrag = document.createDocumentFragment()
            docFrag.appendChild(peonClon)
            Blank1.appendChild(docFrag)
            peonb1.classList.add('hide')
            let I = document.querySelector('#peonB1')
            I.classList.add('hide')
         break;
   
      default:
         break;
   }
}