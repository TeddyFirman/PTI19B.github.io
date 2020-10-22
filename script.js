// When document is loaded
document.addEventListener("DOMContentLoaded", function()
{
    // Header Search bar
    // Loop thru each link for search
    document.querySelectorAll(".nav-link").forEach(link => 
    {
        // When each link is clicked
        link.onclick = function() 
        {
            // for all bars that exists, hide
            document.querySelectorAll(".search-bar").forEach(bar => 
            {
                bar.style.display = "none";
            });

            // Display the bar we want
            document.querySelector(`#${this.dataset.page}`).style.display = "flex";
        };
    });

    // Header Settings menu
    document.addEventListener("click", event => 
    {
        const element = event.target;

        // If the element's touched is the button of settings menu
        if (element.dataset.hide === "settings-menu")
        {

            // Hide all the menus
            document.querySelectorAll(`.${element.dataset.hide}`).forEach( hd => 
            {
                hd.style.display = "none";
            });

            // Get the id menu we want to show
            const elementMenu = document.querySelector(`#${element.dataset.menu}`);
            
            // If it's hiden, make it visible 
            if (elementMenu.style.display === "none")
            {
                elementMenu.style.display = "block";
            }
            else
            {
                elementMenu.style.display = "none";
            }
        }

        // Show popup box
        else if (element.dataset.popup === "currency-box" || element.dataset.popup === "language-box")
        {
            document.querySelector(`#${element.dataset.popup}`).style.display = "block";
            document.querySelector('body').style.overflow = "hidden";

            // Hide the settings menu
            document.querySelectorAll(".settings-menu").forEach( menu => 
            {
                menu.style.display = "none";
            });

            // After animation is done
            document.querySelector('.pop-up-currency').addEventListener('animationend', () => 
            {
                document.querySelector(".pop-up__scroll").style.display = "block";
            })

            document.querySelector('.pop-up-language').addEventListener('animationend', () => 
            {
                document.querySelector(".scroll-language").style.display = "block";
            })

            

            document.querySelectorAll(".exit-popup-box").forEach( close => {
                close.onclick = () => 
                {
                    document.querySelector(`#${element.dataset.popup}`).style.display = "none";
                    document.querySelector(".pop-up__scroll").style.display = "none";
                    document.querySelector('body').style.overflowY = "scroll";
                }
            })
        }
        
        // Hide everything
        else
        {   
            // Hide all the settings menu
            document.querySelectorAll(".settings-menu").forEach( menu => 
            {
                menu.style.display = "none";
            });
            //document.querySelector("#currency-box").style.display = "none";
        };
    });

    // Section - Future trips
    // Loop thru each link for search
    document.querySelectorAll(".future-trips__links-link").forEach(destiny => 
        {
            // When each link is clicked
            destiny.onclick = function(eve) 
            {
                var rem = document.querySelector(".future-trips__links-link-active");
                rem.classList.remove("future-trips__links-link-active");
                eve.target.classList.add("future-trips__links-link-active");
    
            };
        });
    

});