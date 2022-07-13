
// protfolio item filter
const filterContainer=document.querySelector(".protfolio-filter"),
      filterBtns=filterContainer.children,
     totaFilterBtn=filterBtns.length,
     protfolioItems=document.querySelectorAll(".portfolio-item");
     totalprotfolioItems=protfolioItems.length;
    //  console.log(totalprotfolioItems);
      for(let i=0;i<totaFilterBtn;i++){
         filterBtns[i].addEventListener("click",function(){
            filterContainer.querySelector(".active").classList.remove("active");
             this.classList.add("active");
             const filterValue=this.getAttribute("data-filter");
            //  console.log(filterValue)
             for(let k=0;k<totalprotfolioItems;k++){
                if(filterValue==="all"){
                    protfolioItems[k].classList.add("show");
                 }
                 else{
                    if(filterValue === protfolioItems[k].getAttribute("data-category")){
                        protfolioItems[k].classList.remove("hide");
                        protfolioItems[k].classList.add("show");
                     }
                     else{
                        protfolioItems[k].classList.add("hide");
                        protfolioItems[k].classList.remove("show");
                     }

                 }
             }
         })

      }


    //   protfoliolightbox
    const lightbox=document.querySelector(".lightbox"),
          lightboxImg=lightbox.querySelector(".lightbox-img"),
          lightboxclose=lightbox.querySelector(".lightbox-close");
          lightboxtext=lightbox.querySelector(".caption-text"),
          lightboxcounter=lightbox.querySelector(".caption-counter");
    let itemIndex=0;
    for(let i=0;i<totalprotfolioItems;i++){
        protfolioItems[i].addEventListener("click",function(){
            itemIndex=i;
            changeItem();
            togglelightbox();

        })

    }
    function nextItem(){
        if(itemIndex===totalprotfolioItems-1){
            itemIndex=0;
        }
        else{
            itemIndex++;
        }   
        changeItem()
    }
    function prevItem(){
        if(itemIndex===0){
            itemIndex=totalprotfolioItems-1;
        }
        else{
            itemIndex--;
        } 
        changeItem()

    }
    function  togglelightbox(){
        lightbox.classList.toggle("open");
        
    }
    function changeItem(){
     imgSrc=protfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
     lightboxImg.src=imgSrc;
     lightboxtext.innerHTML=protfolioItems[itemIndex].querySelector("h4").innerHTML;
     lightboxcounter.innerHTML=(itemIndex+1) + " of " + totalprotfolioItems;
    }
    //close lightbox
    lightbox.addEventListener("click",function(event){
        if(event.target===lightboxclose || event.target===lightbox){
            togglelightbox()
        }
    })
    // Sside Navbar
    const nav=document.querySelector(".nav"),
          navlist=nav.querySelectorAll("li"),
          totalnavlist=navlist.length,
          allsection=document.querySelectorAll(".section")
          totalsection=allsection.length;
          for(let i=0;i<totalnavlist;i++){
              const a=navlist[i].querySelector("a");
              a.addEventListener("click",function(){
                //   remov back section
                removebacksection();
                  for(let j=0;j<totalnavlist;j++){
                      if(navlist[j].querySelector("a").classList.contains("active")){
                        //   add back section
                        addbacksection(j);
                        
                      }
                    navlist[j].querySelector("a").classList.remove("active");
                  }
                this.classList.add("active");  
                showsection(this);

                if(window.innerWidth < 1200){
                    asideSectionTogglerBtn();
                }
              })
          }
     function addbacksection(num){
            allsection[num].classList.add("back-section");
          }
     function removebacksection(){
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("back-section");
                                       } 
                                 }
    function showsection(element){
        // remove class active from all section
             for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("active");
                                            }
               const href= element.getAttribute("href").split("#");
              target=href[1];
               document.querySelector("#"+target).classList.add("active");           
                               }
// updateNav
     function updateNav(element){
        for(let i=0;i<totalnavlist;i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target= element.getAttribute("href").split("#")[1];
            if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
     }
    }
    document.querySelector(".hire-me").addEventListener("click",function(){
       const sectionIndex=this.getAttribute("date-section-index");
        showsection(this);
        updateNav(this);
        removebacksection();
        addbacksection(sectionIndex);
    });


// nav-toggler
     const navtogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside"); 
        navtogglerBtn.addEventListener("click",asideSectionTogglerBtn) 
        function  asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navtogglerBtn.classList.toggle("open");
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.toggle("open");
        }
      }   

