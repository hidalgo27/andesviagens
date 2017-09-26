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
                            <h3 class="font-weight-normal text-secondary">Viagem a {{ucwords(strtolower($destinations))}}, uma viagem de ensonho</h3>
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
                <div class="col d-sm-none">
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
                                <h1 class="display-4 text-light"><strong>{{ucwords(strtolower($destinations))}}</strong></h1>
                            </blockquote>
                        </div>
                        <div class="col mt-40vh text-center d-none d-sm-block">
                            {{--<p class="h1 text-light">Display 4</p>--}}
                            <blockquote class="blockquote text-center">
                                <h1 class="display-3 text-light"><strong>{{ucwords(strtolower($destinations))}}</strong></h1>
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
            <div class="carousel-item active" style="background-image: url({{asset('images/destinations/slider/'.str_replace(' ', '-', strtolower($destinations)).'.jpg')}})">
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
                <p class="h2 text-secondary pt-3">Destino: {{ucwords(strtolower($destinations))}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                @foreach($destinos as $destino)
                    <div class="d-block">
                        <span class="text-secondary align-bottom">VIAGEM A {{$destino->nombre}}</span>
                        <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                    </div>
                    <h1 class="h3 pt-1">UMA VIAGEM DE ENSONHO</h1>
                    <div class="comment w-100">@php echo $destino->descripcion @endphp</div>
                @endforeach
            </div>
        </div>
    </div>
</section>

<section class="my-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PACOTES DE VIAGEM <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">Todos os pacotes para {{$destino->nombre}}</h2>

            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="row d-flex my-4">
                    @foreach($paquetes_de as $paquetes_des)
                        @if(isset($paquetes_des->destinos))
                            @foreach($paquete->where('id',$paquetes_des->paquetes->id)->sortBy("duracion") as $paquetes)
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex mb-4">
                                    <div class="card">
                                        {{--<div class="card-header">--}}
                                        {{--<h4 class="card-title">City tour em cusco</h4>--}}
                                        {{--</div>--}}
                                        <a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquetes->titulo)))}}"><img class="card-img-top " src="{{asset('images/packages/'.$paquetes->imagen.'')}}" alt="Card image cap"></a>

                                        <div class="card-body text-center">
                                            <h4 class="card-title"><a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquetes->titulo)))}}" class="text-dark">{{$paquetes->titulo}}</a></h4>
                                            <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> {{$paquetes->duracion}} Dias</p>
                                            <p class="text-left card-text"><i class="fa fa-map-marker text-primary" aria-hidden="true"></i>
                                                @php
                                                    $i = 1;
                                                    $num_des = count($paquete_destinos->where('idpaquetes',$paquetes->id));
                                                @endphp
                                                @foreach($paquete_destinos->where('idpaquetes',$paquetes->id) as $paquete_destino)
                                                    {{ucwords(strtolower($paquete_destino->destinos->nombre))}}@if($i < $num_des),@else.@endif
                                                    @php $i++; @endphp
                                                @endforeach
                                            </p>
                                            {{--<a href="#" class="btn btn-primary">Go somewhere</a>--}}
                                        </div>
                                        <div class="card-footer text-muted">
                                            <div class="row">
                                                <div class="col text-left">Desde</div>
                                                <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>
                                                    @foreach($paquetes->precio_paquetes as $precio)
                                                        @if($precio->estrellas == 2)
                                                            {{$precio->precio}}
                                                        @endif
                                                    @endforeach <small>USD</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endif
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

