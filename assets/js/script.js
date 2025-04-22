///////////////////////////////
// One page Smooth Scrolling
///////////////////////////////
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});



// $(document).ready(function() {

//     // static navigationbar
//     var changeStyle = $('#navigation-bar');

//     function scroll() {
//         if ($(window).scrollTop() > 640) {
//             changeStyle.addClass('navbar-fixed-top');
//             changeStyle.addClass('one-page-nav');
//         } else {
//             changeStyle.removeClass('navbar-fixed-top');
//             changeStyle.removeClass('one-page-nav');
//         }
//     }

//     document.onscroll = scroll;

//     $('.testimonial-owl').owlCarousel({
//         items: 1
//     });

//     $('.add-owl').owlCarousel({
//         items: 4,
//         nav: true,
//         navText: false,
//         dots: false,
//         loop: true
//     });

//     $('.twitter-owl').owlCarousel({
//         items: 1,
//         nav: true,
//         navText: false,
//         dots: false,
//         loop: true
//     });
    
//         const phoneNumber = "541130023321"; // Reemplaza con tu número de WhatsApp
//         const whatsappButton = document.getElementById("whatsapp-button");
    
//         whatsappButton.href = `https://wa.me/${phoneNumber}`;
 

// });

document.getElementById("whatsapp-button").addEventListener("click", function (e) {
    e.preventDefault();

    const productos = [
      { nombre: "Conejo Masiso Negro", id: "producto1" },
      { nombre: "Conejo Masiso Blanco", id: "producto2" },
      { nombre: "Huevo N° 8", id: "producto3" },
      { nombre: "Huevo N° 12", id: "producto4" },
      { nombre: "Huevo N° 18 (1)", id: "producto5" },
      { nombre: "Huevo N° 18 (2)", id: "producto6" },
    ];

    let mensaje = "¡Hola! Quisiera hacer un pedido con los siguientes productos:%0A";

    let hayProductos = false;

    productos.forEach(p => {
      const cantidad = parseInt(document.getElementById(p.id).value);
      if (cantidad > 0) {
        mensaje += `- ${p.nombre}: ${cantidad} unidad(es)%0A`;
        hayProductos = true;
      }
    });

    if (!hayProductos) {
      alert("Por favor seleccioná al menos un producto.");
      return;
    }

    const telefono = "541130023321"; // Reemplazá con tu número de WhatsApp con código de país sin "+" (Ej: +54 351... → 54351...)
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    window.open(url, "_blank");
  });
