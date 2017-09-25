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
                            <h1 class="h1 text-light font-weight-light"><strong>Todos os destinos</strong></h1>
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
                                <h1 class="display-3 text-light"><strong>TODOS OS DESTINOS</strong></h1>
                            </blockquote>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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
@include('page.include.menu')

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
            </div>
        </div>
    </div>
</section>

<section class="my-5">
    <div class="container">

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
