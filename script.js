    function CambiarArticulo(){
    let par1 = document.getElementById("p1");
    let par2 = document.getElementById("p2");
    let par3 = document.getElementById("p3");
    let par4 = document.getElementById("p4");
    let par5 = document.getElementById("p5");
    let hom = document.getElementById("home")

    document.querySelector(".dia1").addEventListener("click", ()=> {
        par1.classList.remove("d-none");
        par2.classList.add("d-none");
        par3.classList.add("d-none");
        par4.classList.add("d-none");
        par5.classList.add("d-none"); 
        hom.classList.add("d-none");
     }
     )
     document.querySelector(".dia2").addEventListener("click", ()=> {
         par1.classList.add("d-none");
         par2.classList.remove("d-none");
         par3.classList.add("d-none");
         par4.classList.add("d-none");
         par5.classList.add("d-none"); 
         hom.classList.add("d-none");
      }
      )
     document.querySelector(".dia3").addEventListener("click", ()=> {
         par1.classList.add("d-none");
         par2.classList.add("d-none");
         par3.classList.remove("d-none");
         par4.classList.add("d-none");
         par5.classList.add("d-none");
         hom.classList.add("d-none");
      }
      ) 
     document.querySelector(".dia4").addEventListener("click", ()=> {
         par1.classList.add("d-none");
         par2.classList.add("d-none");
         par3.classList.add("d-none");
         par4.classList.remove("d-none");
         par5.classList.add("d-none");
         hom.classList.add("d-none");
      }
      )
     document.querySelector(".dia5").addEventListener("click", ()=> {
         par1.classList.add("d-none");
         par2.classList.add("d-none");
         par3.classList.add("d-none");
         par4.classList.add("d-none");
         par5.classList.remove("d-none"); 
         hom.classList.add("d-none");
      }
      )
         document.querySelector(".navbar-brand").addEventListener("click", ()=> {
             par1.classList.add("d-none");
             par2.classList.add("d-none");
             par3.classList.add("d-none");
             par4.classList.add("d-none");
             par5.classList.add("d-none"); 
             hom.classList.remove("d-none");
         }
         )
    }
window.onload = function(){
    CambiarArticulo();
}