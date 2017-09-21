<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">

    <title>Andes</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{asset("css/app.css")}}">

</head>

<body>

<header>
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-between">
                <div class="col-3 header-packages">
                    {{--<div class="row">--}}
                    {{--<div class="col border border-top-0 border-right-0 border-secondary">--}}
                    {{--<div class="d-inline font-montserrat">--}}
                    {{--<a href="" class="text-light">(813) 454-9707</a>--}}
                    {{--</div>--}}
                    {{--<div class="d-inline bg-success">d-inline</div>--}}
                    {{--</div>--}}
                    {{--</div>--}}

                    <div class="row">
                        <div class="col my-4">
                            @include('page.include.logo')
                        </div>
                    </div>
                    {{--<div class="row">--}}
                    {{--<div class="col text-center">--}}
                    {{--<h3 class="font-weight-normal text-secondary">Viagem a machupicchu, uma viagem de ensonho</h3>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="row my-3">--}}
                    {{--<div class="col">--}}
                    {{--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong class="text-warning">Adipisci consectetur</strong> cumque cupiditate distinctio dolor eaque eveniet</p>--}}
                    {{--<blockquote class="blockquote">--}}
                    {{--<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing erat a ante.</p>--}}
                    {{--<footer class="blockquote-footer">Someone<cite title="Source Title">Source Title</cite></footer>--}}
                    {{--</blockquote>--}}
                    {{--</div>--}}
                    {{--</div>--}}
                </div>
                {{--<div class="col-3">--}}
                {{--<div class="row justify-content-center">--}}
                {{--<div class="mt-2">--}}
                {{--<img src="{{asset('images/logos/logo-andes-b.png')}}" alt="" class="img-fluid">--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
                <div class="col-8">
                    <div class="row">
                        <div class="col border border-top-0 border-left-0 border-secondary text-right">
                            <div class="d-inline font-montserrat">
                                <a href="" class="text-light">Register</a>
                            </div>
                            <div class="d-inline font-montserrat">
                                {{--<a href="" class="text-light">(813) 454-9707</a>--}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-40vh text-center">
                            {{--<p class="h1 text-light">Display 4</p>--}}
                            <blockquote class="blockquote text-center">
                                <h1 class="display-3 text-light"><strong>PREGUNTAS FREQUENTES</strong></h1>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {{--<div class="col mt-12p text-center">--}}
        {{--<p class="h1 text-light">Display 4</p>--}}
        {{--<blockquote class="blockquote text-center">--}}
        {{--<p class="mb-0 h1 text-light"><strong>Travel Package:</strong> Machu Picchu Full Day</p>--}}
        {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
        {{--<footer class=" text-light">5 days | from $150</footer>--}}
        {{--</blockquote>--}}
        {{--</div>--}}
        {{--<div class="mt-5 text-center">--}}
        {{--<div class="d-inline">--}}
        {{--<a href="" class="btn btn-xs btn-success"><img src="{{asset('images/icons/whatsapp.png')}}" alt="" width="30"> chatea con nosotros ahora</a>--}}
        {{--</div>--}}
        {{--<div class="d-inline">--}}
        {{--<a href="" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> chatea con nosotros ahora</a>--}}
        {{--</div>--}}
        {{--</div>--}}
    </div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" style="background-image: url({{asset('images/sliders/slider-1.jpg')}})">
            </div>
            <div class="carousel-item" style="background-image: url({{asset('images/sliders/slider-2.jpg')}})">
            </div>
        </div>
    </div>
</header>

<!-- Navigation -->
@include('page.include.menu');

<!-- /. -->
<!-- Page Content -->
<section class="my-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col text-center">
                <p class="h2 text-secondary pt-3">PREGUNTAS FREQUENTES</p>
                {{--<p class="h4"></p>--}}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <blockquote class="blockquote text-center alert-primary py-3">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                {{--<div class="row">--}}
                {{--<div class="col">--}}
                {{--<h4 class="pt-1">Nossa Promesa</h4>--}}
                {{--<p>Não deixe escapar esta oportunidade de descobrir os encantos de Peru e viver uma aventura inesquecível.</p>--}}
                {{--</div>--}}
                {{--<div class="col">--}}
                {{--<div class="row justify-content-center">--}}
                {{--<div class="col-5">--}}
                {{--<img src="{{asset('images/firma-paul.jpg')}}" alt="" class="img-fluid">--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--<div class="row text-center">--}}
                {{--<div class="col">--}}
                {{--<p class="mb-0">PAUL CATANO</p>--}}
                {{--<small>CEO</small>--}}
                {{--</div>--}}
                {{--<div class="col">--}}
                {{--<p class="mb-0">CEL: 958.198.847</p>--}}
                {{--<small>paul@gotoperu.org</small>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
            </div>
            {{--<div class="col mt-5">--}}
            {{--<div class="content-video-1">--}}
            {{--<img src="{{asset('images/prom-peru-4.jpg')}}" alt="video" class="img-fluid">--}}
            {{--<div class="content-video-btn-1">--}}
            {{--<a href="https://www.youtube.com/watch?v=RDUGFQ9tE7E&feature=youtu.be"  class="html5lightbox content-vbtn-color-blue" ><i class="fa fa-play-circle"></i></a>--}}
            {{--</div>--}}
            {{--</div>--}}
            {{--</div>--}}
        </div>
    </div>
</section>

<section class="my-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">1</span>
                <h3>Como prevenir o mal-star causado pela altitude?</h3>
                <p>R: Fato é que não tem como fugir das escadas e das subidas. Então cuide-se principalmente nos 2 primeiros dias! Não abuse dos cigarros e nem das bebidas alcoólicas. Não exagere na alimentação e faça tudo devagar mesmo</p>
            </div>
            <div class="col">
                <img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">
            </div>
        </div>
        <div class="row my-4">
            <div class="col">
                <img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">
            </div>
            <div class="col">
                <span   class="display-1 font-montserrat text-info">2</span>
                <h3>O que fazer se eu estiver passando mal?</h3>
                <p>Como já sabemos pela cultura dos Incas, eles mascavam folhas de Coca (Planta Sagrada). Você pode mascá-la ou beber chá feito das folhas, chamado por ele de Mate de Coca. Você encontrará em bares e restaurantes já prontos. E se quiser fazer em casa, pode comprar as folhas nos Mercados e das senhoras que vendem na rua.</p>
            </div>
        </div>
    </div>
</section>

<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PERU EÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">DESTINOS</h2>

            </div>
        </div>
        <div class="row py-3">
            <div class="col-8">
                <div class="card bg-dark text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card bg-dark text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
                <div class="card bg-dark text-white mt-3">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="" class="btn btn-lg btn-primary">All Destinations</a>
            </div>
        </div>
    </div>
</section>

@include('page.include.footer')

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="{{asset("js/app.js")}}"></script>
<script src="{{asset("js/page/plugins.js")}}"></script>
<script>
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false,
                navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;stroke: #007bff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;stroke: #007bff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
            }
        }
    });
    $('body').scrollspy({ target: '#navbar-example' })
</script>
<!-- Popper -->

<!-- Latest compiled and minified Bootstrap JavaScript -->
{{--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>--}}
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>--}}

</body>
</html>
