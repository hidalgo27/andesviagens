<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">

    {!! SEOMeta::generate() !!}
    {!! OpenGraph::generate() !!}
    {{--{!! Twitter::generate() !!}--}}

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{asset("css/app.css")}}">

</head>

<body>

<header class="">
    <div class="header-menu clearfix">
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
                            {{--<div class="d-inline">--}}
                            {{--<a href=""><img src="{{asset('images/icons/whatsapp.png')}}" alt=""></a>--}}
                            {{--</div>--}}
                            {{--<div class="d-inline">--}}
                            {{--<a href=""><img src="{{asset('images/icons/messenger.png')}}" alt=""></a>--}}
                            {{--</div>--}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col mt-12p text-center">
            {{--<p class="h1 text-light">Display 4</p>--}}
            <blockquote class="blockquote text-center">
                <p class="mb-0 h1 text-light">A <strong>BETTER</strong> WAY TO TRAVEL TO PERU</p>
                {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                <footer class=" text-light">$150 average saving | 24/7 local authentic assistance | 100s of testimonials</footer>
            </blockquote>
        </div>
        <div class="mt-5 text-center">
            <div class="d-inline">
                <a href="" class="btn btn-xs btn-success"><img src="{{asset('images/icons/whatsapp.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
            </div>
            <div class="d-inline">
                <a href="" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
            </div>
        </div>
    </div>
    <video autoplay="autoplay" loop="loop" id="video_background" preload="auto" poster="{{asset('images/sliders/slider-1.jpg')}}" muted/>
        <source src="{{asset('media/video6.m4v')}}" type="video/mp4" />
        <source src="{{asset('media/video6.webm')}}" type="video/webm" />
        <source src="{{asset('media/video6.ogv')}}" type="video/ogg" />
        <source src="{{asset('media/video6.mp4')}}" />
        <img alt="video6" src="{{asset('images/sliders/slider-1.jpg')}}" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser" />
    </video/>
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

<nav class="nav nav-pills nav-fill sticky-top nav-viagens navbar-expand-lg d-none d-sm-flex">
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
            <div class="col-7">
                <div class="row">
                    <div class="col">
                        <div class="d-block">
                            <span class="text-secondary align-bottom">PERU EÉRIAS</span>
                            <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                        </div>
                        <h1 class="h3 pt-1">PASSEIOS E VIAGENS</h1>
                        <p class="h6 text-secondary pt-3">100% OPERADORES DE VIAGENS PERUANOS COM ESCRITORIO PRINCIPAL EM CUSCO E SEDES EM LIMA,PUNO E AREQUIPA</p>
                        <p class="pt-3">ANDESVIAGENS é a única agência peruana especializada em viagens para o destino Perú, país herdeiro de uma cultura milenar e considerado um dos lugares mais enigmáticos da América Latina
                            ANDESVIAGENS faz parte do Grupo GOTOPERU.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h4 class="pt-1">Nossa Promesa</h4>
                        <p>Não deixe escapar esta oportunidade de descobrir os encantos de Peru e viver uma aventura inesquecível.</p>
                    </div>
                    <div class="col">
                        <div class="row justify-content-center">
                            <div class="col-5">
                                <img src="{{asset('images/firma-paul.jpg')}}" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="row text-center">
                            <div class="col">
                                <p class="mb-0">PAUL CATANO</p>
                                <small>CEO</small>
                            </div>
                            <div class="col">
                                <p class="mb-0">CEL: 958.198.847</p>
                                <small>paul@gotoperu.org</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-5">

                    <div class="content-video-1 mt-5">
                        <img src="{{asset('images/prom-peru.jpg')}}" alt="video" class="img-fluid">
                        <div class="content-video-btn-1">
                            <a href="https://www.youtube.com/watch?v=RDUGFQ9tE7E&feature=youtu.be"  class="html5lightbox content-vbtn-color-blue" ><i class="fa fa-play-circle"></i></a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>
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
<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PERU EÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">SOMENTE PASSEIOS</h2>

            </div>
        </div>
        <div class="row py-4">
            <div class="col text-center">
                <h5 class="text-secondary d-inline align-bottom h6">Included</h5>
            </div>
        </div>
        <div class="row mt-2 justify-content-center">
            <div class="col-8">
                <div class="row text-center">
                    <div class="col">
                        <img src="{{asset('images/icons/include/assistances.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Assistances</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/breakfast.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">breakfast</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/entrances.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">entrances</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/flight.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">flight</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/hotels.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">hotels</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/tours.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">tours</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/trains.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">trains</small>
                    </div>
                    <div class="col">
                        <img src="{{asset('images/icons/include/transfers.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">transfers</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="card-deck owl-carousel owl-theme">
                <div class="card">
                    {{--<div class="card-header">--}}
                    {{--<h4 class="card-title">City tour em cusco</h4>--}}
                    {{--</div>--}}
                    <img class="card-img-top " src="{{asset('images/packages/AV100.jpg')}}" alt="Card image cap">

                    <div class="card-body text-center">
                        <h4 class="card-title">City tour em cusco</h4>
                        <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> 7 Days</p>
                        <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i> Machu Picchu, Cusco, Calca.</p>
                        {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                    </div>
                    <div class="card-footer text-muted">
                        <div class="row">
                            <div class="col text-left">from</div>
                            <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>2000</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    {{--<div class="card-header">--}}
                    {{--<h4 class="card-title">City tour em cusco</h4>--}}
                    {{--</div>--}}
                    <img class="card-img-top " src="{{asset('images/packages/AV100.jpg')}}" alt="Card image cap">
                    <div class="card-body text-center">
                        <h4 class="card-title">City tour em cusco</h4>
                        <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> 7 Days</p>
                        <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i> Machu Picchu, Cusco, Calca. lorem</p>
                        {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                    </div>
                    <div class="card-footer text-muted">
                        <div class="row">
                            <div class="col text-left">from</div>
                            <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>2000</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    {{--<div class="card-header">--}}
                    {{--<h4 class="card-title">City tour em cusco</h4>--}}
                    {{--</div>--}}
                    <img class="card-img-top " src="{{asset('images/packages/AV100.jpg')}}" alt="Card image cap">

                    <div class="card-body text-center">
                        <h4 class="card-title">City tour em cusco</h4>
                        <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> 7 Days</p>
                        <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i> Machu Picchu, Cusco, Calca.</p>
                        {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                    </div>
                    <div class="card-footer text-muted">
                        <div class="row">
                            <div class="col text-left">from</div>
                            <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>2000</div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    {{--<div class="card-header">--}}
                    {{--<h4 class="card-title">City tour em cusco</h4>--}}
                    {{--</div>--}}
                    <img class="card-img-top " src="{{asset('images/packages/AV100.jpg')}}" alt="Card image cap">

                    <div class="card-body text-center">
                        <h4 class="card-title">City tour em cusco</h4>
                        <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> 7 Days</p>
                        <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i> Machu Picchu, Cusco, Calca.</p>
                        {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                    </div>
                    <div class="card-footer text-muted">
                        <div class="row">
                            <div class="col text-left">from</div>
                            <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>2000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="" class="btn btn-lg btn-primary">All Packages</a>
            </div>
        </div>
    </div>
</section>
<section class="py-5">
    <div class="container">

        <div class="row pb-5 justify-content-center">
            <div class="col-4">
                <img src="{{asset('images/logos/logo-andes-c.png')}}" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row pt-4">
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/group.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/assistance.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/customize.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
                    </div>
                </div>
            </div>
            <div class="w-100 py-4"></div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/location.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/trip.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <img src="{{asset('images/icons/departure.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        One of two columns
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

</script>


</body>
</html>
