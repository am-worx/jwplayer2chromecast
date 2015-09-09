function showLogin(first)
{
	
	if (document.location.href.indexOf("http://") === 0)
	{
		document.location.href = document.location.href.replace(/^http:/, "https:");
		return;
	}
	
	var login_form = $("#form_login");

	if(first)
		target = "/protected/status"+ "?ts=" + (new Date()).getTime();
	else
		target = login_form.attr('action');
	
	$.post(target, 
		$("#form_login").serialize(), 
		function(data) {
			if (data == "ok"){
                if(location.pathname == "/"){
                    location.reload(true);
                }else{
                    var tempHash = location.hash;
                    var href = location.origin + location.pathname + location.search
                    href = href.replace(/[\&\?]logged/,"");
                    var tail = "logged";

                    if(href.search(/\?/)>-1){
                        href = href.replace(/\&$/,"") + "&" ;
                    }else{
                        href = href + "?";
                    }

                    href += tail + tempHash;
                    location = href;
                }

				return;
                //location.reload(true);
                //getLogginMenu2();
			}else{
				var action=data.replace(/[\s\S]*<form[\s\S]*id="form_login"[\s\S]*action="([^"]*)"[\s\S]*/,"$1");
				
				if(action.indexOf('http')!==0 || action.indexOf('"')!==-1 || action.indexOf("'")!==-1)
					 action='';

				if(action.length==0){
					document.location.href='/expired';
				}else{
					
					if (!first)
						document.getElementById("incorrect_text").style.display = "block";
					
					$('#form_login').attr('action',action);
					//$("#account_menu_login_link").addClass("active");
                    $('.action-header-sign-in').next('.dropdown-menu').show();

				}

			}   

			hideLoginLoading();
		}
	);

	return false;
}
function showLoginLoading()
{
	$("#login_processs_img").show();
}

function hideLoginLoading()
{
	$("#login_processs_img").hide();
}

function closeLogin()
{
	$('.action-header-sign-in').next('.dropdown-menu').hide();
}

function closeWelcome()
{
	try{
		document.getElementById("mem_welcome_div").style.display = "none";
	}
	catch(e) {}
}

/*function showLoggedInfoText(html)
{
	try{
		document.getElementById("mem_welcome_div").style.display = "block";
		document.getElementById("logged_info_text").innerHTML = html;
		setTimeout("closeWelcome()", 5000);
	}
	catch(e) {}
}*/

/*function setAccountInfoText(html)
{
	document.getElementById("account_info_text").innerHTML = html;
}*/

function showStatus()
{
	closeWelcome();
	document.getElementById("account_block_container").style.display = "block";
    //document.getElementById("account_info_text").setAttribute("onmouseout","hideStatus();");
	$("#logged_status").addClass("hover_state"); 
	if (typeof(t) === 'undefined' || t === null)
		t = setTimeout("hideStatus()", 5000);
}

function addHover_stateClass(){
	//$("#logged_status").addClass("hover_state");
	$("#logged_status").addClass("hover_state2");
}

function hideStatus()
{
	//document.getElementById("logged_status").setAttribute("class", "account_menu_link");
	document.getElementById("account_block_container").style.display = "none";
	$("#logged_status").removeClass("hover_state");
}

function removeHover_stateClass(){
	//$("#logged_status").removeClass("hover_state");
	$("#logged_status").removeClass("hover_state2");
}

function getLogginMenu()
{
	//alert(document.location.href);
	//alert(document.referrer);
	//alert(document.location.href.indexOf("https") === 0);
	//alert(document.referrer == document.location.href.replace("https:", "http:"));
//	if (document.location.href.indexOf("/player/") > 0)
//		user_info_url = "https://origin.ieeetv.ieee.org:9443/playerUserInfo" + "?ts=" + (new Date()).getTime();
//	else
		user_info_url = "/userInfo" + "?v=2&ts=" + (new Date()).getTime();
	
		$.ajax({
			url: user_info_url, 
			type: "GET",
			data: ({
			}),
			dataType: "json",
			success: function(data){

				if (data && data.is_logged == false)
				{
					$.ajax({
						url: "/protected/status"+ "?ts=" + (new Date()).getTime(), 
						type: "POST",  
						data: ({
						}),
						success: function(data){
							if (data == "ok")
							{
								//alert("getLogginMenu_reload");
								//reloadPlayerLocation();
	
								$.get("/protected/status"+ "?ts=" + (new Date()).getTime(),
								function(data2) {
									getLogginMenu2();
								});
								return;
							}
							else
							{
								getLogginMenu2();
							}
						}
					});
				}
			},
			complete: function(data) {
				getLogginMenu2();
			}
		});
	
}

function getLogginMenu2()
{
//	if (document.location.href.indexOf("/player/") > 0)
//		user_info_url = "/playerUserInfo" + "?result_type=html&ts=" + (new Date()).getTime();
//	else
		user_info_url = "/userInfo" + "?v=2&result_type=html&ts=" + (new Date()).getTime();
	
	$.ajax({
		url: user_info_url, 
		type: "GET",
		data: ({
		}),
		success: function(data){
			$("#loggin_block").html(data);
			closeLogin();

	        $(document).ready(function(){
	            $(window).trigger('updateOndemand');
	        });
			if (document.location.href.indexOf("https") === 0 && document.referrer == document.location.href.replace("https:", "http:").replace(/#.*/gi, ""))
				showLogin(true);
		},
		complete: function(data) {
		}
	});
}

function logout(){
    $.ajax({
        url:"/member-logout?"+(new Date()).getTime(),
        method:"POST",
        data:{}
    }).done(function(data){
        if(document.location.search != "" && document.location.search.search(/[\?\&]logged/i) > -1){
            document.location.search = document.location.search.replace(/[\?\&]logged/i,'');
        }else{
            document.location.reload(true);
        }
    });
}