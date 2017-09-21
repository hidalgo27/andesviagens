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
                                <h1 class="display-3 text-light"><strong>About</strong></h1>
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
                <p class="h2 text-secondary pt-3">VOCÊ TERÁ A EXPERIÊNCIA DE UM PERUANO</p>
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
        {{--<div class="row">--}}
        {{--<div class="col">--}}
        {{--<h3 class="text-secondary d-inline align-bottom h6">PERU EÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>--}}
        {{--<h2 class="h3 pt-1">Packages</h2>--}}

        {{--</div>--}}
        {{--</div>--}}
        <div class="row no-gutters align-items-center bg-light">
            <div class="col">
                <div class="col">
                    <h3 class="align-middle">NOSSO COMPROMISSO</h3>
                    <p class="align-middle">Não deixe escapar esta oportunidade de descobrir os encantos de Peru e viver uma aventura inesquecível.</p>
                </div>
            </div>

            <div class="col-md-auto">
                <img src="http://andesviagens.com/img/about/about12.jpg" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row w-100 no-gutters align-items-center bg-light">
            <div class="col-md-auto">
                <img src="http://andesviagens.com/img/about/about28.jpg" alt="" class="img-fluid">
            </div>


            <div class="col-md-auto">
                <img src="http://andesviagens.com/img/about/about6.jpg" alt="" class="img-fluid">
            </div>

            <div class="col">
                <div class="border-0 p-2 text-center">
                    <h3 class="text-primary">MISSION</h3>
                    <p>POWER Dar aos nossos clientes com os melhores recursos peruanos para uma aventura inesquecível no Perú!</p>
                </div>
            </div>
        </div>
        <div class="row w-100 no-gutters align-items-center bg-dark">
            <div class="col-md-auto">
                <img src="http://andesviagens.com/img/about/about-l.jpg" alt="" class="img-fluid">
            </div>
            <div class="col text-white text-center">
                <div class="row justify-content-center">
                    <div class="col-6 my-3">
                        <img src="http://viagens.nu/images/logos/logo-andes.png" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <p>A filosofia da Andes Viagens é criada de um princípio muito simples:“Fazer todas as coisas certas, tanto para nossos passageiros, nossa equipe, como para os lugares em que passarmos.”</p>
                </div>
            </div>
        </div>
        <div class="row bg-warning no-gutters">
            <div class="col p-5 text-center">
                <h3>Andes Viagens foi fundada com o objetivo de realizar um sonho pessoal:</h3>
                <p>“Prover inesquecíveis e diferentes experiências para sua viagem ao Peru, fornecendo um serviço de 1º classe para toda a comunidade internacional. E com isso, gerar novas oportunidades de emprego local na área de turismo no Peru.”</p>
            </div>
        </div>
        <div class="row no-gutters align-items-center bg-light">
            <div class="col">
                <div class="col p-5">
                    <p class="lead font-weight-normal">Helping our travelers choose the perfect trip to the land of the Incas, to providing them with the most authentic life-changing adventure possible, from the Andes to the Amazon we will go out of our way to ensure a travel experience unlike anything they’ve ever imagined.</p>
                </div>
            </div>

            <div class="col-md-auto">
                <img src="http://andesviagens.com/img/about/about-j.jpg" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row no-gutters">
            <img src="http://andesviagens.com/img/about/about-n.jpg" alt="" class="img-fluid">
        </div>

        <div class="row bg-dark no-gutters align-items-center py-5">

            <div class="col text-white text-justify">
                <div class="row justify-content-center">
                    <div class="col-3 mb-4">
                        <img src="http://viagens.nu/images/logos/logo-andes-b.png" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <p class="lead">“Andes Viagens” foi fundada para realizar um sonho pessoal: "Proporcionar experiência de primeira classe pela comunidade internacional, e gerando oportunidades de emprego a nível local". É extremamente gratificante empregar e premiar pessoas que estremam esforço, entusiasmo e compromisso de compartilhar o melhor do Peru e da América do Sul com o resto do mundo. “Andes Viagens” tornou-se uma família para todos nós. A melhor coisa de trabalhar em Andes Viagens é que isso me obriga a estar permanentemente conectado com o mundo da arte, cultura, arqueologia, geografia, conservação da vida selvagem, e cozinha. Por esta razão, isso me ajuda a entender mais do mundo das viagens e formular novos métodos que garantam memorável experiências de viagem de nossos clientes. E maravilhoso interagir com pessoas incríveis de todo o mundo diariamente, já que me ensina mais de sua cultura.</p>
                </div>
            </div>

        </div>
        <div class="row my-4">
            <div class="col">
                <div class="card text-white">
                    <img class="card-img-top" src="http://andesviagens.com/img/about/about-o.jpg" alt="Card image cap">
                    <div class="card-body text-center bg-dark">
                        <p class="card-text"><span class="h4">PAUL CATANO</span> <small class="d-block">Director & Founder</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card bg-light">
                    <img class="card-img-top" src="http://andesviagens.com/img/about/about-u.jpg" alt="Card image cap">
                    <div class="card-body text-center">
                        <p class="card-text"><span class="h4">MARTIN CATANO</span> <small class="d-block">General Manager</small></p>
                    </div>
                </div>
            </div>
        </div>
        {{--<div class="row box-more py-5">--}}
        {{--<div class="col">--}}
        {{--sdsdsd--}}
        {{--</div>--}}
        {{--</div>--}}


        <p class="totop">
            <a href="#top">Back to top</a>
        </p>
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
