@extends('layouts.page.default')

@section('content')

<header>
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-between">
                <div class="col-7 col-sm-4 col-md-4 col-lg-2 header-packages bg-light-t d-none d-sm-block">
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
                    <div class="row">
                        <div class="col text-center">
                            <h3 class="font-weight-normal text-secondary">Viagem a machupicchu, uma viagem de ensonho</h3>
                        </div>
                    </div>
                    <div class="row my-3">
                        <div class="col">
                            <p><span class="text-warning">Em ANDESVIAGENS</span> encontrará as melhores ofertas de viagens ao PERÜ. Somos a agência de viagens online líder do mercado e oferecemos-lhe a maior variedade de ofertas ao Perú para as suas férias: ofertas de última hora, promoções de voo+hotel, <span class="text-warning">pacotes de férias a Machu Picchu</span></p>
                            {{--<blockquote class="blockquote">--}}
                                {{--<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing erat a ante.</p>--}}
                                {{--<footer class="blockquote-footer">Someone<cite title="Source Title">Source Title</cite></footer>--}}
                            {{--</blockquote>--}}
                        </div>
                    </div>
                </div>
                <div class="col-12 d-sm-none">
                    <div class="col-12 col-sm-4 col-md-3 col-lg-3">
                        <div class="row justify-content-center">
                            <div class="mt-2 text-center text-center">
                                @include('page.include.logo-b')
                            </div>
                        </div>
                    </div>
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
                        <div class="col border border-top-0 border-left-0 border-right-0 border-secondary text-right d-none d-sm-inline">
                            <div class="d-inline font-montserrat">
                                <a href="/#contato" class="text-light">Contato</a>
                            </div>
                            <div class="d-inline font-montserrat">
                                {{--<a href="" class="text-light">(813) 454-9707</a>--}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-25vh text-center d-sm-none">
                            {{--<p class="h1 text-light">Display 4</p>--}}
                            <blockquote class="blockquote text-center">
                                <h1 class="display-4 text-light"><strong>Pacotes de Viagem</strong></h1>
                            </blockquote>
                        </div>
                        <div class="col mt-40vh text-center d-none d-sm-block">
                            {{--<p class="h1 text-light">Display 4</p>--}}
                            <blockquote class="blockquote text-center">
                                <h1 class="display-3 text-light"><strong>Pacotes de Viagem</strong></h1>
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
            <div class="carousel-item active" style="background-image: url({{asset('images/sliders/package-1.jpg')}})">
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
                <p class="h2 text-secondary pt-3">PERU FÉRIAS PASSEIOS E VIAGENS</p>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-12 col-md-12 col-lg-7 d-none d-sm-inline">
                <div class="row">
                    <div class="col">
                        <div class="d-block">
                            <span class="text-secondary align-bottom">VIAGEM A MACHUPICCHU</span>
                            <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                        </div>
                        <h1 class="h3 pt-1">UMA VIAGEM DE ENSONHO</h1>
                        <p class="pt-3">É uma cidade Inca construída no topo de uma montanha, com templos, palácios, terraços, canais de água. Mostrando o que uma grande civilização foi capaz de construir com grandes blocos de pedra, sem argamassa ou cimento e com a maior sabedoria.
                        <p>Sua construção, que vive em harmonia com a natureza, representa a fusão da montanha com a cidade em uma única expressão.</p>
                        <p>Por seu importante legado histórico é considerado, desde 1983, como Patrimônio Cultural e Natural da Humanidade.</p>
                        <p>Segundo a pesquisa, Machu Picchu foi construída no século XV pelo Inca Pachacutec.</p>
                        <p>Entre os mais renomados arqueólogos, existem várias teorias que consideram que foi um santuário, uma cidade santa ou um importante centro político, religioso e administrativo.</p>
                    </div>
                </div>
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
            <div class="col mt-5 d-none d-md-block">
                <div class="content-video-1">
                    <img src="{{asset('images/prom-peru-4.jpg')}}" alt="video" class="img-fluid">
                    <div class="content-video-btn-1">
                        <a href="https://www.youtube.com/watch?v=RDUGFQ9tE7E&feature=youtu.be"  class="html5lightbox content-vbtn-color-blue" ><i class="fa fa-play-circle"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="my-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PACOTES DE FÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">TODOS OS PACOTES</h2>

            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row d-flex my-4">
                    @foreach($paquetes->sortBy('duracion') as $paquete)
                    <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex mb-4">
                        <div class="card">
                            {{--<div class="card-header">--}}
                            {{--<h4 class="card-title">City tour em cusco</h4>--}}
                            {{--</div>--}}
                            <a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquete->titulo)))}}"><img class="card-img-top " src="{{asset('images/packages/'.$paquete->imagen.'')}}" alt="Card image cap"></a>

                            <div class="card-body text-center">
                                <h4 class="card-title"><a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquete->titulo)))}}" class="text-dark">{{$paquete->titulo}}</a></h4>
                                <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> {{$paquete->duracion}} Dias</p>
                                <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i>
                                    @php
                                        $i = 1;
                                        $num_des = count($paquete_destinos->where('idpaquetes',$paquete->id));
                                    @endphp
                                    @foreach($paquete_destinos->where('idpaquetes',$paquete->id) as $paquete_destino)
                                            {{ucwords(strtolower($paquete_destino->destinos->nombre))}}@if($i < $num_des),@else.@endif
                                        @php $i++; @endphp
                                    @endforeach
                                </p>
                                {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                            </div>
                            <div class="card-footer text-muted">
                                <div class="row">
                                    <div class="col text-left">desde</div>
                                    <div class="col text-right font-weight-bold text-primary font-montserrat">
                                        @foreach($paquete->precio_paquetes as $precio)
                                            @if($precio->estrellas == 2)
                                                @if($precio->precio > 0)
                                                    <sup>$</sup> {{$precio->precio}} <small>USD</small>
                                                @else
                                                    A Pedido
                                                @endif
                                            @endif
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach

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