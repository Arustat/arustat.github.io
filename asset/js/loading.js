function redirect(url){
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;


    iframe.onload = function(){
        window.location.href = url;
    };

    document.body.appendChild(iframe);
}

window.onload = function(){
    setTimeout(function() {
        redirect('home.html');
    }, 2000);
};