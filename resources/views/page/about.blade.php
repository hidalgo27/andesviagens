@extends('layouts.page.default')

@section('content')

<header>
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-between">
                <div class="col-12 col-sm-5 col-md-5 col-lg-3 header-packages">
                    <div class="row">
                        <div class="col my-4 text-center">
                            @include('page.include.logo')
                        </div>
                    </div>

                    <div class="col mt-25vh text-center d-sm-none">
                        {{--<p class="h1 text-light">Display 4</p>--}}
                        <blockquote class="blockquote text-center">
                            <h1 class="h1 text-light font-weight-light"><strong>A Empresa</strong></h1>
                        </blockquote>
                    </div>

                </div>
                <div class="col">
                    <div class="row">
                        <div class="col border border-top-0 border-left-0 border-right-0 border-secondary text-right d-none d-sm-block">
                            <div class="d-inline font-montserrat">
                                <a href="/#contato" class="text-light">Contato</a>
                            </div>
                            <div class="d-inline font-montserrat">
                                {{--<a href="" class="text-light">(813) 454-9707</a>--}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-40vh text-center d-none d-sm-block">
                            {{--<p class="h1 text-light">Display 4</p>--}}
                            <blockquote class="blockquote text-center">
                                <h1 class="display-3 text-light"><strong>A Empresa</strong></h1>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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
@include('page.include.menu')

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

            </div>

        </div>
    </div>
</section>

<section class="my-5">
    <div class="container">

        <div class="row no-gutters align-items-center bg-light">

                <div class="col-12 col-md p-4">
                    <h3 class="align-middle">NOSSO COMPROMISSO</h3>
                    <p class="align-middle">Não deixe fugir esta oportunidade de descobrir os encantos de Perú e viver uma aventura inesquecível.</p>
                </div>


            <div class="col-12 col-md-auto d-sm-none d-md-none d-lg-inline">
                <img src="{{asset('images/about/about12.jpg')}}" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row w-100 no-gutters align-items-center bg-light">
            <div class="col-12 col-md-auto d-none d-sm-inline">
                <img src="{{asset('images/about/about28.jpg')}}" alt="" class="img-fluid d-sm-none d-md-none d-lg-inline">
            </div>


            <div class="col-12 col-md-auto">
                <img src="{{asset('images/about/about6.jpg')}}" alt="" class="img-fluid">
            </div>

            <div class="col-12 col-md">
                <div class="border-0 p-2 text-center">
                    <h3 class="text-primary">MISSÃO</h3>
                    <p>Oferecer aos nossos clientes os melhores recursos Peruanos para uma aventura inesquecível.</p>
                </div>
            </div>
        </div>
        <div class="row w-100 no-gutters align-items-center bg-dark">
            <div class="col-12 col-md-auto">
                <img src="{{asset('images/about/about-l.jpg')}}" alt="" class="img-fluid">
            </div>
            <div class="col text-white text-center">
                <div class="row justify-content-center">
                    <div class="col-12 my-3">
                        <img src="{{asset('images/logos/logo-andes-b.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-12">
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

            <div class="col-12 col-md-auto">
                <img src="{{asset('images/about/about-j.jpg')}}" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row no-gutters">
            <div class="col">
                <img src="{{asset('images/about/about-n.jpg')}}" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row bg-dark no-gutters align-items-center py-5">

            <div class="col text-white text-justify">
                <div class="row justify-content-center">
                    <div class="col-3 mb-4">
                        <img src="{{asset('images/logos/logo-andes-b.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <p class="lead">“Andes Viagens” foi fundada para realizar um sonho pessoal: "Proporcionar experiência de primeira classe pela comunidade internacional, e gerando oportunidades de emprego a nível local". É extremamente gratificante empregar e premiar pessoas que estremam esforço, entusiasmo e compromisso de compartilhar o melhor do Peru e da América do Sul com o resto do mundo. “Andes Viagens” tornou-se uma família para todos nós. A melhor coisa de trabalhar em Andes Viagens é que isso me obriga a estar permanentemente conectado com o mundo da arte, cultura, arqueologia, geografia, conservação da vida selvagem, e cozinha. Por esta razão, isso me ajuda a entender mais do mundo das viagens e formular novos métodos que garantem memorável experiências de viagem de nossos clientes. E maravilhoso interagir com pessoas incríveis de todo o mundo diariamente, já que me ensina mais de sua cultura.</p>
                </div>
            </div>

        </div>
        <div class="row my-4">
            <div class="col-12 col-sm my-3">
                <div class="card text-white">
                    <img class="card-img-top" src="{{asset('images/about/about-o.jpg')}}" alt="Card image cap">
                    <div class="card-body text-center bg-dark">
                        <p class="card-text"><span class="h4">PAUL CATANO</span> <small class="d-block">Diretor & Fundador</small></p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm my-3">
                <div class="card bg-light">
                    <img class="card-img-top" src="{{asset('images/about/about-u.jpg')}}" alt="Card image cap">
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