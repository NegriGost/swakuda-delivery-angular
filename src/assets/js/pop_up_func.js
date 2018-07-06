 $(window).load(function() {
                new $.popup({                
                    title       : '',
                    content         : '<a href="all_tours_list.html"><img src="img/popup_img.jpg" alt="" class="pop_img"><h3 id="pop_msg"><strong>Bem Vindo AO Swakuda</strong></h3></a><small></small>', 
					html: true,
					autoclose   : true,
					closeOverlay:true,
					closeEsc: true,
					buttons     : false,
                    timeout     : 5000 
                });
            });