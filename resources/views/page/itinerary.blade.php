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
                <div class="col-4">
                    <div class="row">
                        <div class="col border border-top-0 border-right-0 border-secondary">
                            <div class="d-inline font-montserrat">
                                <a href="" class="text-light">(813) 454-9707</a>
                            </div>
                            {{--<div class="d-inline bg-success">d-inline</div>--}}
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row justify-content-center">
                        <div class="mt-2">
                            <img src="{{asset('images/logos/logo-andes-b.png')}}" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-4">
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
                </div>
            </div>
        </div>

        <div class="col mt-12p text-center">
            {{--<p class="h1 text-light">Display 4</p>--}}
            <blockquote class="blockquote text-center">
                <p class="mb-0 h1 text-light"><strong>Travel Package:</strong> Machu Picchu Full Day</p>
                {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                <footer class=" text-light">5 days | from $150</footer>
            </blockquote>
        </div>
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
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top nav-viagens d-sm-none">
    <div class="container">
        <a class="navbar-brand" href="#"><img src="{{asset('images/logos/logo-andes.png')}}" width="180" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pacotes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Destino</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">A empresa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Depoimentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dicas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<nav class="nav nav-pills nav-fill  nav-viagens navbar-expand-lg d-none d-sm-flex">
    {{--<a class="nav-item nav-link active" href="#">Active</a>--}}
    <a class="nav-item nav-link text-light" href="#">PACOTES</a>
    <a class="nav-item nav-link text-light" href="#">DESTINO</a>
    <a class="nav-item nav-link text-light" href="#">A EMPRESA</a>
    <a class="nav-item nav-link text-light" href="#">DICAS</a>
    <a class="nav-item nav-link text-light" href="#">CONTATO</a>
    {{--<a class="nav-item nav-link disabled" href="#">Disabled</a>--}}
</nav>

<!-- /. -->
<!-- Page Content -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-8">

                <div class="row">
                    <div class="col">
                        <div class="d-block">
                            <span class="text-secondary align-bottom">Travel Packages</span>
                            <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                        </div>
                        <h1 class="h3 pt-1">MACHU PICCHU FULL DAY</h1>
                    </div>
                </div>


                <div class="row position-relative">
                    <div class="col">
                        <ul id="navbar-example" class="nav nav-pills nav-fill sticky-top bg-light mt-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#Overview">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Itinerary">Itinerary</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Optionals">Optionals</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Prices">Prices</a>
                            </li>

                        </ul>
                        <div data-spy="scroll" data-target="#navbar-example" data-offset="200" class="scrollspy-example">
                            <div id="Overview" class="pt-4">
                                <h3 class="h3 py-2">Overview</h3>
                                <div class="col my-4">
                                    <div class="row">
                                        <div class="col-3 text-center align-items-center  card-deck border bg-light m-0">
                                            <div class="card">
                                                <h3>
                                                    <i class="fa fa-map-marker"></i>
                                                    Route
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col border box-route-ininerary">
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>
                                            <p>
                                                <strong>Day 1: </strong> Arrival in lima
                                            </p>

                                        </div>
                                    </div>

                                    <div class="row mt-5">
                                        <div class="col">
                                            <h4>Included:</h4>
                                            <ul>
                                                <li>Guia Local</li>
                                                <li>Transporte</li>
                                                <li>Embarque e desembarque no hotel</li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <h4>Not Included:</h4>
                                            <ul>
                                                <li>Almoço $16 usd</li>
                                                <li>axas de entrada $22 usd</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Itinerary" class="">
                                <h3 class="h3 py-5">Itinerary</h3>
                                <div class="timeline">
                                    <div class="timeline-title">
                                        <span class="rounded-circle bg-info text-white py-4 font-weight-bold">DAY 1</span>
                                    </div>
                                    {{--<div class="col bg-dark">--}}
                                        {{--sdsdskl--}}
                                    {{--</div>--}}
                                    <div class="col">
                                        {{--<div class="col">--}}
                                            {{--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum error esse eveniet, inventore maxime, modi nam nisi nulla saepe vitae voluptatem voluptatum! Corporis deserunt eos fugiat numquam quidem voluptas?--}}
                                        {{--</div>--}}
                                        <div class="timeline-content position-relative">
                                            <div class="row">
                                                <div class="timeline-point">
                                                    <i class="fa fa-circle-o"></i>
                                                </div>
                                                <div class="timeline-custom-col content-col ">
                                                    <div class="timeline-location-block">
                                                        <p class="location-name">Machu picchu <i class="fa fa-map-marker icon-marker"></i></p>
                                                        <div class="description">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, esse iste, magnam maiores nobis non odio porro qui repudiandae similique voluptatem. Architecto, blanditiis earum maiores ratione repellat voluptate voluptates!
                                                        </div>
                                                    </div>
                                                    {{--<div class="timeline-custom-col">--}}
                                                        {{--<div class="timeline-image-block">--}}
                                                            {{--<img src="http://wp.swlabs.co/exploore/wp-content/uploads/2016/05/london.png" alt="">--}}
                                                        {{--</div>--}}
                                                    {{--</div>--}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline">
                                    <div class="timeline-title">
                                        <span class="rounded-circle bg-info text-white py-4 font-weight-bold">DAY 1</span>
                                    </div>
                                    {{--<div class="col bg-dark">--}}
                                    {{--sdsdskl--}}
                                    {{--</div>--}}
                                    <div class="col">
                                        {{--<div class="col">--}}
                                        {{--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum error esse eveniet, inventore maxime, modi nam nisi nulla saepe vitae voluptatem voluptatum! Corporis deserunt eos fugiat numquam quidem voluptas?--}}
                                        {{--</div>--}}
                                        <div class="timeline-content position-relative">
                                            <div class="row">
                                                <div class="timeline-point">
                                                    <i class="fa fa-circle-o"></i>
                                                </div>
                                                <div class="timeline-custom-col content-col ">
                                                    <div class="timeline-location-block">
                                                        <p class="location-name">Machu picchu <i class="fa fa-map-marker icon-marker"></i></p>
                                                        <div class="description">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, esse iste, magnam maiores nobis non odio porro qui repudiandae similique voluptatem. Architecto, blanditiis earum maiores ratione repellat voluptate voluptates!
                                                        </div>
                                                    </div>
                                                    {{--<div class="timeline-custom-col">--}}
                                                    {{--<div class="timeline-image-block">--}}
                                                    {{--<img src="http://wp.swlabs.co/exploore/wp-content/uploads/2016/05/london.png" alt="">--}}
                                                    {{--</div>--}}
                                                    {{--</div>--}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="timeline timeline-f">
                                    <div class="timeline-title">
                                        <span class="rounded-circle bg-info text-white py-4 font-weight-bold">DAY 1</span>
                                    </div>
                                    {{--<div class="col bg-dark">--}}
                                    {{--sdsdskl--}}
                                    {{--</div>--}}
                                    <div class="col">
                                        {{--<div class="col">--}}
                                        {{--Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum error esse eveniet, inventore maxime, modi nam nisi nulla saepe vitae voluptatem voluptatum! Corporis deserunt eos fugiat numquam quidem voluptas?--}}
                                        {{--</div>--}}
                                        <div class="timeline-content position-relative">
                                            <div class="row">
                                                <div class="timeline-point">
                                                    <i class="fa fa-circle-o"></i>
                                                </div>
                                                <div class="timeline-custom-col content-col ">
                                                    <div class="timeline-location-block">
                                                        <p class="location-name">Machu picchu <i class="fa fa-map-marker icon-marker"></i></p>
                                                        <div class="description">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad, esse iste, magnam maiores nobis non odio porro qui repudiandae similique voluptatem. Architecto, blanditiis earum maiores ratione repellat voluptate voluptates!
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi, at atque, cupiditate dicta dolore ea earum ex illo ipsam iste nam nostrum, porro qui quis repellat tempora vero voluptatem?
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque, cumque enim, facere in ipsa libero minus praesentium quaerat quidem quo repellendus sit totam, ut vitae! Fugiat quos repudiandae sint!
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores earum hic libero officiis, velit voluptates! Animi consequatur culpa fugiat libero neque nihil placeat porro, possimus quisquam voluptas. Rem, unde?
                                                        </div>
                                                    </div>
                                                    {{--<div class="timeline-custom-col">--}}
                                                    {{--<div class="timeline-image-block">--}}
                                                    {{--<img src="http://wp.swlabs.co/exploore/wp-content/uploads/2016/05/london.png" alt="">--}}
                                                    {{--</div>--}}
                                                    {{--</div>--}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="Optionals" class="pt-4">
                                <h3 class="h3 py-2">Optionals</h3>
                                <ul>
                                    <li>dsjhdshdg</li>
                                </ul>

                            </div>
                            <div id="Prices" class="pt-4">
                                <h3 class="h3 pt-2">Prices</h3>
                                <div class="card my-4">
                                    <p class="card-header">Preco por pessoa tendo em conta acomodacao quarto duplo</p>
                                    <div class="card-body p-0">
                                        <table class="table table-responsive m-0">
                                            <thead class="thead-inverse">
                                            <tr>
                                                <th>2 Estrellas</th>
                                                <th>3 Estrellas</th>
                                                <th>4 Estrellas</th>
                                                <th>5 Estrellas</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>$123</td>
                                                <td>$123</td>
                                                <td>$345</td>
                                                <td>$3545</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="col">
                <div class="sticky-top">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="d-block text-left">
                                <span class="text-primary h4 font-weight-bold align-bottom">10 Days</span>
                                <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                            </div>
                            {{--<p class="text-primary h4 font-weight-bold">10 Day</p>--}}
                            <p class="h3 text-secondary"></p>
                            <p class="h1 font-montserrat py-2"><small class="text-secondary h5">from </small><sup>$</sup>5000 <small>USD</small></p>
                            <a href="" class="btn btn-warning btn-block btn-lg btn-info">BOOK NOW</a>

                        </div>
                    </div>

                    <div class="card bg-light my-4">
                        {{--<img class="card-img-top" src="..." alt="Card image cap">--}}
                        <div class="content-video-1 card-img-top">
                            <img src="{{asset('images/prom-peru-4.jpg')}}" alt="video" class="img-fluid">
                            <div class="content-video-btn-1">
                                <a href="https://www.youtube.com/watch?v=RDUGFQ9tE7E&feature=youtu.be"  class="html5lightbox content-vbtn-color-blue" ><i class="fa fa-play-circle"></i></a>
                            </div>
                        </div>
                        {{--<img src="{{asset('images/prom-peru-4.jpg')}}" alt="video" class="img-fluid card-img-top" >--}}
                        <div class="card-body">
                            <h4 class="card-title">Destinations</h4>
                            <div class="box-route-ininerary p-0">
                                <p class="font-weight-bold text-secondary"><i class="fa fa-check"></i> Lima</p>
                                <p class="font-weight-bold text-secondary"><i class="fa fa-check"></i> Lima</p>
                                <p class="font-weight-bold text-secondary"><i class="fa fa-check"></i> Lima</p>
                                <p class="font-weight-bold text-secondary"><i class="fa fa-check"></i> Lima</p>
                            </div>
                        </div>
                    </div>

                </div>
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

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PERU EÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">Packages</h2>

            </div>
        </div>
        <div class="row box-more py-5">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <img src="https://cdn.goodlayers.com/traveltour/wp-content/uploads/2016/06/shutterstock_254090041-600x700.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-6 mt-4 border border-top-0 border-left-0 border-bottom-0">
                        <h4 class="card-title">City tour em cusco</h4>
                        <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> 7 Days</p>
                        <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i> Machu Picchu, Cusco, Calca.</p>
                        <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus omnis temporibus totam vel? Blanditiis dolorem, dolores ex, excepturi incidunt molestias nesciunt nisi optio possimus praesentium quaerat sint velit voluptas.</p>
                    </div>
                    <div class="col text-center py-5 align-items-center card-deck">
                        <div class="card border-0">
                            <span class="text-secondary align-self-center h3">from</span>
                            <p class="h1 font-montserrat font-weight-bold">$5000</p>
                            <a href="" class="btn btn-primary btn-lg btn mt-3">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {{--<div class="row box-more py-5">--}}
        {{--<div class="col">--}}
        {{--sdsdsd--}}
        {{--</div>--}}
        {{--</div>--}}
        <div class="row">
            <div class="col text-center">
                <a href="#" class="btn btn-info text-center" id="loadMore">View More <i class="fa fa-chevron-down d-block" aria-hidden="true"></i></a>
            </div>
        </div>

        <p class="totop">
            <a href="#top">Back to top</a>
        </p>
    </div>
</section>


<div class="container-parallax">
    <section>
        <div class="image" data-type="background" data-speed="2"></div>
        <div class="stuff" data-type="content">
            <div class="row justify-content-center">
                <div class="col-3">
                    <img src="{{asset('images/logos/logo-andes.png')}}" alt="" class="img-fluid">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col">
                    <h5 class="font-weight-light text-light">CONFIANZA</h5>
                    {{--<h3>Andes Viagens</h3>--}}
                    <p class="py-3 lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto autem consequuntur culpa enim est harum id illo impedit ipsa iste, minima molestiae mollitia pariatur quasi quis vitae voluptate! Tenetur!</p>
                    <a href="" class="btn btn-xs btn-success"><img src="{{asset('images/icons/whatsapp.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
                    <a href="" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
                </div>
            </div>
        </div>
    </section>

</div>

{{--<section class="bg-light">--}}
{{--<div class="container">--}}
{{--<div class="row">--}}
{{--<div class="col">--}}
{{--sdsd--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--</section>--}}
{{--<video id="sdsd" class="video-js vjs-default-skin" width="640px" height="267px"--}}
{{--controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'--}}
{{--data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>--}}
{{--<source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />--}}
{{--<source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />--}}
{{--</video>--}}

<!-- Footer -->
<footer class="py-5 bg-dark">
    <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
    </div>
    <!-- /.container -->
</footer>

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
