@extends('layouts.page.default')

@section('content')

<header class="d-none d-lg-block">
    <div class="header-menu clearfix">
        <div class="col">
            <div class="row justify-content-center">
                <div class="col d-none d-sm-inline">
                    <div class="row">
                        <div class="col border border-top-0 border-right-0 border-left-0 border-secondary">
                            <div class="d-inline font-montserrat">
                                <a href="" class="text-light"><i class="fa fa-phone"></i> (11) 3198-1385</a>
                            </div>
                            {{--<div class="d-inline bg-success">d-inline</div>--}}
                        </div>
                    </div>
                </div>
                <div class="col-8 col-sm-4 col-md-5 col-lg-3">
                    <div class="row justify-content-center">
                        <div class="mt-2 text-center text-center">
                            @include('page.include.logo')
                        </div>
                    </div>
                </div>
                {{--<div class="col-8 d-sm-none">--}}
                    {{--<div class="row justify-content-center">--}}
                        {{--<div class="mt-2 text-center text-center">--}}
                            {{--@include('page.include.logo')--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
                <div class="col d-none d-sm-inline">
                    <div class="row">
                        <div class="col border border-top-0 border-left-0 border-right-0 border-secondary text-right">
                            <div class="d-inline font-montserrat">
                                <a href="#contato" class="text-light">Contato</a>
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

        <div class="col mt-20vh text-center">
            {{--<p class="h1 text-light">Display 4</p>--}}
            <blockquote class="blockquote text-center">
                <p class="h1 text-light font-weight-light d-none d-sm-inline"><strong>Agência de viagens</strong> e operador turístico com base em <strong>Cusco</strong></p>
                <p class="h1 text-light font-weight-light d-sm-none"><strong><a href="tel:+1131981385" class="text-white">(11) 3198-1385</a></strong> </p>
                <a href="https://api.whatsapp.com/send?phone=51980385734" class="d-sm-none"><img src="{{asset('images/icons/whatsapp.png')}}" alt=""></a>
                <a href="https://m.me/GOTOPERUcom/" class="d-sm-none"><img src="{{asset('images/icons/messenger.png')}}" alt=""></a>
                {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                {{--<footer class=" text-light">$150 average saving | 24/7 local authentic assistance | 100s of testimonials</footer>--}}
            </blockquote>

            <div class="row justify-content-center">
                <div class="col-2 col-sm-4 col-md-4 col-lg-auto border border-warning rounded p-3 text-center d-none d-sm-inline">
                    <h2 class="text-warning">Machu Picchu & Cusco</h2>
                    <p class="text-white h1">5 <small>Dias</small></p>
                    <p class="text-white h5 font-weight-light">PARCELAMIENTO</p>
                    <p class="text-white h2 text-warning">5 <small>X</small> <span class="text-white"><sup>$</sup>650 USD</span></p>
                </div>
            </div>
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
    <video autoplay="autoplay" loop="loop" id="video_background" preload="auto" poster="{{asset('images/sliders/package-1.jpg')}}" muted/>
    <source src="{{asset('media/video6.mp4')}}" />
    <source src="{{asset('media/video6.m4v')}}" type="video/mp4" />
    <source src="{{asset('media/video6.webm')}}" type="video/webm" />
    <source  src="{{asset('media/video6.ogv')}}" type="video/ogg" />
        <img alt="video6" src="{{asset('images/sliders/package-1.jpg')}}" style="position:absolute;left:0;" width="100%" title="Video playback is not supported by your browser" />
    </video/>

</header>

<header class="d-lg-none">
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-between">
                <div class="col-12 col-sm-5 col-md-5 col-lg-3 header-packages">
                    <div class="row">
                        <div class="col my-4 text-center">
                            @include('page.include.logo')
                        </div>
                    </div>

                    <div class="col mt-5 text-center d-sm-none">
                        {{--<p class="h1 text-light">Display 4</p>--}}
                        <blockquote class="blockquote text-center">
                            <p class="h1 text-light font-weight-light d-none d-sm-inline"><strong>Agência de viagens</strong> e operador turístico com base em <strong>Cusco</strong></p>
                            <p class="h2 text-light font-weight-light d-sm-none"><strong><a href="tel:+1131981385" class="text-white">(11) 3198-1385</a></strong> </p>
                            <a href="https://api.whatsapp.com/send?phone=51980385734" class="d-sm-none"><img src="{{asset('images/icons/whatsapp.png')}}" alt=""></a>
                            <a href="https://m.me/GOTOPERUcom/" class="d-sm-none"><img src="{{asset('images/icons/messenger.png')}}" alt=""></a>
                            {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                            {{--<footer class=" text-light">$150 average saving | 24/7 local authentic assistance | 100s of testimonials</footer>--}}
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
                        <div class="col mt-30vh text-center d-none d-sm-block">
                            {{--<p class="h1 text-light">Display 4</p>--}}

                            <blockquote class="blockquote text-center">
                                <p class="h1 text-light font-weight-light d-none d-sm-inline"><strong>Agência de viagens</strong> e operador turístico com base em <strong>Cusco</strong></p>
                                <p class="h2 text-light font-weight-bold d-none d-sm-block my-4 font-montserrat"><strong><a href="tel:+1131981385" class="text-white"><i class="fa fa-phone"></i> (11) 3198-1385</a></strong> </p>
                            </blockquote>
                            <div class="row justify-content-center">
                                <div class="col-2 col-sm-10 col-md-10 col-lg-3 border border-warning rounded p-3 text-center d-none d-sm-inline">
                                    <h2 class="text-warning">Machu Picchu & Cusco</h2>
                                    <p class="text-white h1">5 <small>Dias</small></p>
                                    <p class="text-white h5 font-weight-light">PARCELAMIENTO</p>
                                    <p class="text-white h2 text-warning">5 <small>X</small> <span class="text-white"><sup>$</sup>650 USD</span></p>
                                </div>
                            </div>
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

@include('page.include.menu')
<!-- /. -->
<!-- Page Content -->
<section class="py-4 bg-light" id="contato">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-12 col-sm-9 col-md-9">
                <div class="mb-4 text-center">
                    <h4>FORMULÁRIO DE CONTATO</h4>
                </div>
            </div>
            <div class="col-12 col-sm-9 col-md-9 bg-white p-3 rounded">
            <form id="d_form">
                {{csrf_field()}}
                <div class="row">
                    <div class="col-12 col-sm border-secondary border-right-0  m-0">

                        <div class="d-block mb-3">
                            <span class="text-secondary align-bottom">Informação pessoal</span>
                            {{--<img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">--}}
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Nome</label>--}}
                                    <input type="text" class="form-control" id="d_name" placeholder="Nome Completo">
                                </div>
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Email</label>--}}
                                    <input type="email" class="form-control" id="d_email" placeholder="Seu Email">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg">
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Data</label>--}}
                                    <input type="text" class="form-control" id="d_date" placeholder="Data Viagem">
                                </div>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg">
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Telefone</label>--}}
                                    <input type="tel" class="form-control" id="d_tel" placeholder="N° de Telefone">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 col-sm-12 col-md-12 col-lg">
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Dias</label>--}}
                                    <input type="number" class="form-control" id="d_duration" placeholder="N° de Dias">
                                </div>
                            </div>
                            <div class="col-6 col-sm-12 col-md-12 col-lg">
                                <div class="form-group">
                                    {{--<label for="inputEmail4" class="col-form-label"><sup class="text-danger">*</sup>Passageiros</label>--}}
                                    <input type="number" class="form-control" id="d_numero" placeholder="N° de Passageiros">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-12 col-sm border-secondary border-right-0 border-left-0 m-0">

                            {{--<h4 class="card-title">Card title</h4>--}}
                            {{--<label class="d-block">Eu Gostaria de visitar</label>--}}
                            <div class="d-block mb-3">
                                <span class="text-secondary align-bottom">Eu Gostaria de visitar</span>
                                {{--<img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">--}}
                            </div>
                            <div class="">
                                <div class="row">
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox"  autocomplete="off" name="destinations[]" value="Machu Picchu"> Machu Picchu
                                        </label>
                                    </div>
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox" autocomplete="off" name="destinations[]" value="Cusco"> Cusco
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox" autocomplete="off" name="destinations[]" value="Lago Titicaca"> Lago titicaca
                                        </label>
                                    </div>
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox" autocomplete="off" name="destinations[]" value="Puno"> Puno
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox" autocomplete="off" name="destinations[]" value="Lima"> Lima
                                        </label>
                                    </div>
                                    <div class="col-6 col-sm-12 col-md-12 col-lg mb-2" data-toggle="buttons">
                                        <label class="btn btn-outline-primary btn-block">
                                            <input type="checkbox" autocomplete="off" name="destinations[]" value="Lineas de Nazca"> Linhas de Nazca
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="input-group">
                                <span class="input-group-addon" id="">Outros</span>
                                <input type="text" class="form-control" id="d_otros" aria-describedby="basic-addon3">
                            </div>

                    </div>
                    {{--<div class="col border-secondary border-left-0 m-0 d-none">--}}

                            {{--<div class="form-group">--}}
                                {{--<div class="d-block mb-3">--}}
                                    {{--<span class="text-secondary align-bottom">Dúvidas?</span>--}}
                                    {{--<img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">--}}
                                {{--</div>--}}
                                {{--<textarea class="form-control" id="d_comment" rows="5" placeholder="Como você imagina uma viagem inesquecivel ao Perú, sugestões especiais, perguntas, comentários"></textarea>--}}
                            {{--</div>--}}
                            {{--<div class="my-3">--}}
                                {{--<button type="submit" class="btn btn-lg btn-block btn-warning">Submit</button>--}}

                                {{--<button class="btn btn-lg btn-block btn-warning" id="d_send" type="button" onclick="design()">Enviar--}}
                                    {{--<i class="fa fa-paper-plane" aria-hidden="true"></i>--}}
                                {{--</button>--}}
                                {{--<ul class="fa-ul pull-right d-none" id="loader2">--}}
                                    {{--<li><i class="fa-li fa fa-spinner fa-spin"></i> <i>Enviando...</i></li>--}}
                                {{--</ul>--}}

                            {{--</div>--}}

                    {{--</div>--}}

                    <div class="alert alert-success alert-dismissible fade d-none" id="d_alert" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Muito obrigados</strong> por seu contato com ANDES VIAGENS,nas proximas 24 houras voce tera uma resposta de nossos agentes de viagens para ajuda-lo com o planejamento de sua viagem. :)
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                    {{--<button type="submit" class="btn btn-lg btn-block btn-warning">Submit</button>--}}

                    <button class="btn btn-lg btn-block btn-warning" id="d_send" type="button" onclick="design()">Enviar
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                    <ul class="fa-ul pull-right d-none" id="loader2">
                        <li><i class="fa-li fa fa-spinner fa-spin"></i> <i>Enviando...</i></li>
                    </ul>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
</section>
<section class="my-5">
    <div class="container">
        <div class="row mb-5">
            <div class="col text-center">
                <p class="h2 text-secondary pt-3">100% OPERADORES DE VIAGENS PERUANOS COM ESCRITORIO PRINCIPAL EM CUSCO E SEDES EM LIMA,PUNO E AREQUIPA</p>
            </div>
        </div>
        <div class="row">
            <div class="col col-sm-12 col-md-12 col-lg-7 d-none d-sm-inline">
                <div class="row">
                    <div class="col">
                        <div class="d-block">
                            <span class="text-secondary align-bottom">PERU EÉRIAS</span>
                            <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                        </div>
                        <h1 class="h3 pt-1">PASSEIOS E VIAGENS</h1>
                        <p class="pt-3 lead">ANDESVIAGENS é a única agência peruana especializada em viagens para o destino Perú, país herdeiro de uma cultura milenar e considerado um dos lugares mais enigmáticos da América Latina
                            ANDESVIAGENS faz parte do Grupo GOTOPERU.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm">
                        <h4 class="pt-1">Nossa Promesa</h4>
                        <p>Não deixe escapar esta oportunidade de descobrir os encantos de Peru e viver uma aventura inesquecível.</p>
                    </div>
                    <div class="col-12 col-sm">
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
                                {{--<p class="mb-0">CEL: 958.198.847</p>--}}
                                <small>paul@gotoperu.com</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col mt-5 d-none d-sm-inline">
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


<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">PERU FÉRIAS <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">PACOTES MAIS VENDIDOS</h2>

            </div>
        </div>
        <div class="row py-4">
            <div class="col text-center">
                <h5 class="text-secondary d-inline align-bottom h6">INCLUSO</h5>
            </div>
        </div>
        <div class="row mt-2 justify-content-center">
            <div class="col-12 col-sm-8 col-md-12 col-lg-8">
                <div class="row text-center">
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/assistances.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Assistências</small>
                    </div>
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/breakfast.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Café da manhã</small>
                    </div>
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/entrances.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Entradas</small>
                    </div>
                    {{--<div class="col-4 col-sm">--}}
                        {{--<img src="{{asset('images/icons/include/flight.png')}}" alt="" class="img-fluid">--}}
                        {{--<small class="d-block text-secondary">Voos</small>--}}
                    {{--</div>--}}
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/hotels.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Hoteis</small>
                    </div>
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/tours.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Tours</small>
                    </div>
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/trains.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Trenes</small>
                    </div>
                    <div class="col-4 col-sm">
                        <img src="{{asset('images/icons/include/transfers.png')}}" alt="" class="img-fluid">
                        <small class="d-block text-secondary">Traslados</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="card-deck owl-carousel owl-theme">
                @foreach($paquetes as $paquete)
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
                            <div class="col text-left">Desde</div>
                            <div class="col text-right font-weight-bold text-primary font-montserrat"><sup>$</sup>
                                @foreach($paquete->precio_paquetes as $precio)
                                    @if($precio->estrellas == 2)
                                        {{$precio->precio}}
                                    @endif
                                @endforeach <small>USD</small>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="{{route('package_show_path')}}" class="btn btn-lg btn-primary">Todos os Pacotes</a>
            </div>
        </div>
    </div>
</section>
<section class="py-5">
    <div class="container">

        <div class="row pb-5 justify-content-center">
            <div class="col-12 col-sm-8 col-md-8 col-lg-4">
                <img src="{{asset('images/logos/logo-andes-c.png')}}" alt="" class="img-fluid">
            </div>
        </div>

        <div class="row pt-4">
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/group.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Grupos pequenos e passeios privados
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/assistance.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Moramos no perú, porém oferecemos assistencia 24/7
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/customize.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Escolha de programas prontos para comprar ou personalizar suas férias
                    </div>
                </div>
            </div>

            {{--<div class="w-100 py-4"></div>--}}
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/location.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Custos menores, somos uma agencia local
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/trip.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Excelentes coméntarios na tripadvisor
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-4 col-md-6 col-lg-4">
                        <img src="{{asset('images/icons/departure.png')}}" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col">
                        Temos passeios todos os dias do ano
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    @push('scripts')
        <script>
            //form
            function design(){
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('[name="_token"]').val()
                    }
                });

                $("#d_send").attr("disabled", true);

                var filter=/^[A-Za-z][A-Za-z0-9_.]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;


                var s_destinations = document.getElementsByName('destinations[]');
                var $destinations = "";
                for (var i = 0, l = s_destinations.length; i < l; i++) {
                    if (s_destinations[i].checked) {
                        $destinations += s_destinations[i].value+' , ';
                    }
                }
                s_destinations = $destinations.substring(0,$destinations.length-3);

//                alert(s_destinations);

                var s_name = $('#d_name').val();
                var s_email = $('#d_email').val();
                var s_date = $('#d_date').val();
                var s_tel = $('#d_tel').val();
                var s_duration = $('#d_duration').val();
                var s_number = $('#d_numero').val();
                var s_other = $('#d_otros').val();


//                var s_comment = $('#d_comment').val();


                if (filter.test(s_email)){
                    sendMail = "true";
                } else{
                    $('#d_email').css("border-bottom", "2px solid #FF0000");
                    sendMail = "false";
                }
                if (s_name.length == 0 ){
                    $('#d_name').css("border-bottom", "2px solid #FF0000");
                    var sendMail = "false";
                }

                if(sendMail == "true"){
                    var datos = {

                        "txt_destinations" : s_destinations,
                        "txt_other" : s_other,

                        "txt_name" : s_name,
                        "txt_email" : s_email,
                        "txt_date" : s_date,
                        "txt_tel" : s_tel,
                        "txt_duration" : s_duration,
                        "txt_number" : s_number

                    };
                    $.ajax({
                        data:  datos,
                        url:   "{{route('contact_path')}}",
                        type:  'post',

                        beforeSend: function () {

                            $('#d_send').removeClass('show');
                            $("#d_send").addClass('d-none');

                            $("#loader2").removeClass('d-none');
                            $("#loader2").addClass('show');
                        },
                        success:  function (response) {
                            $('#d_form')[0].reset();
                            $('#d_send').removeClass('d-none');
                            $('#d_send').addClass('show');
                            $("#loader2").removeClass('show');
                            $("#loader2").addClass('d-none');
                            $('#d_alert').removeClass('d-none');
                            $("#d_alert").addClass('show');
                            $("#d_alert b").html(response);
                            $("#d_alert").fadeIn('slow');
                            $("#d_send").removeAttr("disabled");
                        }
                    });
                } else{
                    $("#d_send").removeAttr("disabled");
                }
            }

            $('#d_date').datepicker({
                dateFormat: 'yy-mm-dd',
                changeMonth: true,
                changeYear: true,
            });
        </script>
    @endpush

@stop
