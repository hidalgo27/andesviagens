@extends('layouts.page.default')

@section('content')

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
                        <div class="col my-4 text-center">
                            @include('page.include.logo-b')
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
                <div class="col">
                    <div class="row">
                        <div class="col border border-top-0 border-left-0 border-secondary text-right">
                            <div class="d-inline font-montserrat">
                                <a href="/#contato" class="text-light">Contato</a>
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
                                <h1 class="display-3 text-light"><strong>A Empresa</strong></h1>
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
            <div class="carousel-item active" style="background-image: url({{asset('images/about.jpg')}})">
            </div>
            {{--<div class="carousel-item" style="background-image: url({{asset('images/sliders/slider-2.jpg')}})">--}}
            {{--</div>--}}
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
                    <p class="mb-0">Em ANDESVIAGENS cremos na excelência, segurança, a atenção personalizada e a qualidade dos serviços é o nosso compromisso para com nossos turistas. Por isso nós, nos esforçamos em satisfazer as necessidades dos nossos clientes ao máximo.</p>
                    {{--<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
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
                    <p class="align-middle">Não deixe fugir esta oportunidade de descobrir os encantos de Perú e viver uma aventura inesquecível.</p>
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
                    <h3 class="text-primary">MISSÃO</h3>
                    <p>Oferecer aos nossos clientes os melhores recursos Peruanos para uma aventura inesquecível.</p>
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
                <h3>Andes Viagens foi fundada com a finalidade de fazer um sonho pessoal:</h3>
                <p>“Prover inesquecíveis e diferentes experiências para sua viagem ao Peru, fornecendo um serviço de 1º classe para toda a comunidade internacional. E com isso, gerar novas oportunidades de emprego local na área de turismo no Peru.”</p>
            </div>
        </div>
        <div class="row no-gutters align-items-center bg-light">
            <div class="col">
                <div class="col p-5">
                    <p class="lead font-weight-normal">Ajudar a nosos passageiros a escolher a viagem perfeita á terra dos Incas, com a finalidade de viver a vida dos estrangeiros, desde os Andes até o Amazonas, sairemos da nossa rutina para assegurar uma experiência de viagem diferente, todo o que voce imaginou.</p>
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
                    <p class="lead">“Andes Viagens” foi fundada para realizar um sonho pessoal: "Proporcionar experiência de primeira classe pela comunidade internacional, e gerando oportunidades de emprego a nível local". É extremamente gratificante empregar e premiar pessoas que estremam esforço, entusiasmo e compromisso de compartilhar o melhor do Peru e da América do Sul com o resto do mundo. “Andes Viagens” tornou-se uma família para todos nós. A melhor coisa de trabalhar em Andes Viagens é que isso me obriga a estar permanentemente conectado com o mundo da arte, cultura, arqueologia, geografia, conservação da vida selvagem, e cozinha. Por esta razão, isso me ajuda a entender mais do mundo das viagens e formular novos métodos que garantem memorável experiências de viagem de nossos clientes. E maravilhoso interagir com pessoas incríveis de todo o mundo diariamente, já que me ensina mais de sua cultura.</p>
                </div>
            </div>

        </div>
        <div class="row my-4">
            <div class="col">
                <div class="card text-white">
                    <img class="card-img-top" src="http://andesviagens.com/img/about/about-o.jpg" alt="Card image cap">
                    <div class="card-body text-center bg-dark">
                        <p class="card-text"><span class="h4">PAUL CATANO</span> <small class="d-block">Diretor & Fundador</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card bg-light">
                    <img class="card-img-top" src="http://andesviagens.com/img/about/about-u.jpg" alt="Card image cap">
                    <div class="card-body text-center">
                        <p class="card-text"><span class="h4">MARTIN CATANO</span> <small class="d-block">Diretor Geral</small></p>
                    </div>
                </div>
            </div>
        </div>
        {{--<div class="row box-more py-5">--}}
        {{--<div class="col">--}}
        {{--sdsdsd--}}
        {{--</div>--}}
        {{--</div>--}}


    </div>
</section>

@stop