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
                <div class="co">
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
                                <h1 class="display-3 text-light"><strong>TODOS OS DESTINOS</strong></h1>
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
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" style="background-image: url({{asset('images/destinations/slider-1.jpg')}})">
            </div>
            <div class="carousel-item" style="background-image: url({{asset('images/destinations/slider-2.jpg')}})">
            </div>
            <div class="carousel-item" style="background-image: url({{asset('images/destinations/slider-3.jpg')}})">
            </div>
            <div class="carousel-item" style="background-image: url({{asset('images/destinations/slider-4.jpg')}})">
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
                <p class="h2 text-secondary pt-3">TODOS OS DESTINOS</p>
                {{--<p class="h4"></p>--}}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <blockquote class="blockquote text-center alert-primary py-3">
                    <p class="mb-0">Entre nossos roteiros estão: Machu Picchu, Maravilha do Mundo, Cusco, capital do império Inca; As linhas de Nazca, um mistério a ser desvendado; Paracas, o encanto da vida marinha, Lago Titicaca, o lago das ilhas flutuantes; Manu, o paraíso da biodiversidade; Lima, imponentes construções coloniais, Arequipa, a famosa cidade branca.</p>
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
        <div class="row">
            <div class="col">
                <div class="card-columns">

                    @foreach($destinos->sortBy('nombre')->where('estado', 1) as $destino)

                        <div class="card mb-4">
                            <a href="{{route('destinations_show', str_replace(' ', '-', strtolower($destino->nombre)))}}"><img class="card-img-top img-fluid" src="{{asset('images/destinations/thumbnails/'.str_replace(' ', '-', strtolower($destino->nombre)).'.jpg')}}" alt="Card image cap"></a>
                            <div class="card-body">
                                <h4 class="card-title">{{ucwords(strtolower($destino->nombre))}}</h4>
{{--                                @php echo substr($destino->descripcion, 0,150); @endphp--}}
                                <a href="{{route('destinations_show', str_replace(' ', '-', strtolower($destino->nombre)))}}" class="btn btn-primary btn-link float-right">Ler mais <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
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
