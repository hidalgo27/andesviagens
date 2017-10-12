@extends('layouts.page.default')

@section('content')

<header>
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-center">
                <div class="col d-none d-sm-inline">
                    <div class="row">
                        <div class="col border border-top-0 border-right-0 border-left-0 border-secondary">
                            <div class="d-inline font-montserrat">
                                <a href="" class="text-light"><i class="fa fa-phone"></i> (11) 4349-6191</a>
                            </div>
                            {{--<div class="d-inline bg-success">d-inline</div>--}}
                        </div>
                    </div>
                </div>
                <div class="col-11 col-sm-4 col-md-5 col-lg-3">
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


        <div class="col mt-25vh text-center d-none d-sm-block">
            {{--<p class="h1 text-light">Display 4</p>--}}
            @foreach($paquete as $paquetes)
                <blockquote class="blockquote text-center">
                    <p class="mb-0 display-4 text-light my-3 font-weight-normal text-capitalize"><strong>Pacote de Viagem:</strong> {{strtolower($paquetes->titulo)}}</p>
                    {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                    <footer class=" text-warning h1 font-montserrat font-weight-normal">{{$paquetes->duracion}} dias | de
                        @foreach($paquetes->precio_paquetes as $precio)
                            @if($precio->estrellas == 2)
                                <sup>$</sup>{{$precio->precio}}
                            @endif
                        @endforeach
                    </footer>
                </blockquote>
            @endforeach
        </div>

        <div class="col text-center my-5 d-sm-none">
            {{--<p class="h1 text-light">Display 4</p>--}}
            @foreach($paquete as $paquetes)
            <blockquote class="blockquote text-center">
                <p class="mb-0 h1 text-light my-3 font-weight-normal text-capitalize"><strong>Pacote de Viagem:</strong> {{strtolower($paquetes->titulo)}}</p>
                {{--<footer class="blockquote-footer text-light">Someone famous in <cite title="Source Title">Source Title</cite></footer>--}}
                <footer class=" text-warning h2 font-montserrat font-weight-normal">{{$paquetes->duracion}} dias | de
                    @foreach($paquetes->precio_paquetes as $precio)
                        @if($precio->estrellas == 2)
                            <sup>$</sup>{{$precio->precio}}
                        @endif
                    @endforeach
                </footer>
            </blockquote>
            @endforeach
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
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" style="background-image: url({{asset('images/packages/slider/'.$paquetes->codigo.'-1.jpg')}})">
            </div>
            <div class="carousel-item" style="background-image: url({{asset('images/packages/slider/'.$paquetes->codigo.'-2.jpg')}})">
            </div>
        </div>
    </div>
</header>

<!-- Navigation -->
@include('page.include.menu')

<!-- /. -->
<!-- Page Content -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-8">

                <div class="row">
                    <div class="col">
                        <div class="d-block">
                            <span class="text-secondary align-bottom">Pacotes de Viagem</span>
                            <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                        </div>
                        <h1 class="h3 pt-1">{{$paquetes->titulo}}</h1>
                    </div>
                </div>

                <div class="row my-4 d-sm-block d-md-block d-lg-none">
                    <div class="col">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="d-block text-left">
                                    <span class="text-primary h4 font-weight-bold align-bottom">{{$paquetes->duracion}} Dias</span>
                                    <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                                </div>
                                {{--<p class="text-primary h4 font-weight-bold">10 Day</p>--}}
                                <p class="h3 text-secondary"></p>
                                <p class="h1 font-montserrat py-2"><small class="text-secondary h5">desde </small>
                                    @foreach($paquetes->precio_paquetes as $precio)
                                        @if($precio->estrellas == 2)
                                            <sup>$</sup>{{$precio->precio}}
                                        @endif
                                    @endforeach
                                    <small>USD</small></p>
                                <a href="#book-now" class="btn btn-warning btn-block btn-lg btn-info">Consulte</a>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row position-relative">
                    <div class="col">
                        <ul id="navbar-example" class="nav nav-pills nav-fill sticky-top bg-light mt-3 d-none d-sm-flex">
                            <li class="nav-item">
                                <a class="nav-link" href="#Overview">Visão geral</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Itinerary">Roteiro</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Optionals">Opçoes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#Prices">Preços</a>
                            </li>

                        </ul>
                        <div data-spy="scroll" data-target="#navbar-example" data-offset="200" class="scrollspy-example">
                            <div id="Overview" class="pt-4 d-none d-sm-block">
                                <h3 class="h3 py-2">Visão geral</h3>
                                <div class="col my-4">
                                    <div class="row">
                                        <div class="col-3 text-center align-items-center  card-deck border bg-light m-0">
                                            <div class="card">
                                                <h3>
                                                    <i class="fa fa-map-marker"></i>
                                                    Rota
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col border box-route-ininerary">
                                            @foreach($paquetes->itinerario->sortBy('dia') as $itinerario)
                                            <p>
                                                <strong>Dia {{$itinerario->dia}}: </strong> {{ucwords(strtolower($itinerario->titulo))}}
                                            </p>
                                            @endforeach

                                        </div>
                                    </div>

                                    <div class="row mt-5">
                                        <div class="col">
                                            <h4>Incluso:</h4>
                                            @php echo $paquetes->incluye; @endphp
                                        </div>
                                        <div class="col">
                                            <h4>Não Incluso:</h4>
                                            @php echo $paquetes->noincluye; @endphp
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Itinerary" class="d-none d-sm-block">
                                <h3 class="h3 py-5">Roteiro</h3>
                                @php
                                    $i = 1;
                                    $num_des = count($paquetes->itinerario);
                                @endphp
                                @foreach($paquetes->itinerario->sortBy('dia') as $itinerario)
                                    <div class="timeline @php if($i == $num_des) echo 'timeline-f' @endphp">
                                        <div class="timeline-title">
                                            <span class="rounded-circle bg-info text-white py-4 font-weight-bold">DIA {{$itinerario->dia}}</span>
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
                                                            <p class="location-name">{{ucwords(strtolower($itinerario->titulo))}} <i class="fa fa-map-marker icon-marker"></i></p>
                                                            <div class="description">
                                                                @php echo $itinerario->descripcion @endphp
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
                                    @php $i++; @endphp
                                @endforeach

                            </div>


                            <div id="Itinerary" class="d-sm-none">
                                <h3 class="h3 pt-5">Roteiro</h3>
                                @foreach($paquetes->itinerario->sortBy('dia') as $itinerario)
                                    <div class="d-block timeline-title mt-5">
                                        <span class="rounded-circle bg-info text-white py-4 font-weight-bold">DIA {{$itinerario->dia}}</span>
                                    </div>
                                    <div class="d-block bg-light p-3 mt-2">
                                        <h5 class="location-name">{{ucwords(strtolower($itinerario->titulo))}} <i class="fa fa-map-marker icon-marker"></i></h5>
                                        @php echo $itinerario->descripcion @endphp
                                    </div>
                                @endforeach

                            </div>


                            <div id="Optionals" class="pt-4">
                                <h3 class="h3 py-2">Opçoes</h3>
                                @php echo $paquetes->opcional; @endphp

                            </div>
                            <div id="Prices" class="pt-4">
                                <h3 class="h3 pt-2">Preços</h3>
                                <div class="card my-4">
                                    <p class="card-header">Preco por pessoa tendo em conta acomodacao quarto duplo</p>
                                    <div class="card-body p-0">
                                        <table class="table table-responsive m-0">
                                            <thead class="thead-inverse">
                                            <tr>
                                                <th>2 Estrelas</th>
                                                <th>3 Estrelas</th>
                                                <th>4 Estrelas</th>
                                                <th>5 Estrelas</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>

                                                @foreach($paquetes->precio_paquetes->sortBy('estrellas') as $precio)
                                                    @if($precio->precio > 0)
                                                        <td>
                                                            <sup>$</sup>{{$precio->precio}}
                                                        </td>
                                                        @else
                                                        <td>
                                                            A pedido
                                                        </td>
                                                    @endif
                                                @endforeach

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
            <div class="col d-none d-sm-none d-md-none d-lg-inline">
                <div class="sticky-top">
                    <div class="card">
                        <div class="card-body text-center">
                            <div class="d-block text-left">
                                <span class="text-primary h4 font-weight-bold align-bottom">{{$paquetes->duracion}} Dias</span>
                                <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid mb-1" width="100">
                            </div>
                            {{--<p class="text-primary h4 font-weight-bold">10 Day</p>--}}
                            <p class="h3 text-secondary"></p>
                            <p class="h1 font-montserrat pt-2 m-0"><small class="text-secondary h5">
                                </small>
                                @foreach($paquetes->precio_paquetes as $precio)
                                    @if($precio->estrellas == 2)
                                        <span class="text-info">10X</span><sup>$</sup>{{$precio->precio/10}}
                                    @endif
                                @endforeach
                                <small>USD</small></p>
                            <p class="text-secondary h3 m-0">semjuros</p>
                            <a href="#book-now" class="btn btn-warning btn-block btn-lg btn-info mt-3">Consulte</a>

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
                            <h4 class="card-title">Destinos</h4>
                            <div class="box-route-ininerary p-0">
                                @foreach($paquete_destinos->where('idpaquetes',$paquetes->id) as $paquete_destino)
                                    <p class="font-weight-bold text-secondary"><i class="fa fa-check"></i> {{ucwords(strtolower($paquete_destino->destinos->nombre))}}</p>
                                @endforeach
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 bg-light" id="book-now">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-sm-9 col-md-9 col-lg-8 text-center">
                <span class="text-secondary font-weight-bold">PACOTE</span>
                <h2 class="text-primary font-weight-bold">{{$paquetes->titulo}} {{$paquetes->duracion}} DIAS</h2>
                {{--<h5 class="text-secondary">{{$paquetes->duracion}} Days</h5>--}}
                <hr>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-sm-9 col-md-9 col-lg-8">
                <form id="d_form" role="form">
                    {{csrf_field()}}
                    <h3 class="text-secondary mt-4">Acomodação</h3>

                    <div class="row">
                        <div class="col-6 col-sm" data-toggle="buttons">
                            <label class="btn btn-outline-primary btn-block">
                                <input type="checkbox" autocomplete="off" name="accommodation[]" value="Econômico"> Econômico
                                <div class="d-block text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </label>
                        </div>
                        <div class="col-6 col-sm" data-toggle="buttons">
                            <label class="btn btn-outline-primary btn-block">
                                <input type="checkbox" autocomplete="off" name="accommodation[]" value="Turista"> Turista
                                <div class="d-block text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </label>
                        </div>
                        <div class="col-6 col-sm" data-toggle="buttons">
                            <label class="btn btn-outline-primary btn-block">
                                <input type="checkbox" autocomplete="off" name="accommodation[]" value="Superior"> Superior
                                <div class="d-block text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </label>
                        </div>
                        <div class="col-6 col-sm" data-toggle="buttons">
                            <label class="btn btn-outline-primary btn-block">
                                <input type="checkbox" autocomplete="off" name="accommodation[]" value="Luxo"> Luxo
                                <div class="d-block text-warning">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </label>
                        </div>
                    </div>

                    <h3 class="text-secondary mt-4">Numero de Passageiros</h3>

                    <div class="row no-gutters" data-toggle="buttons">
                        <label class="btn col btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="1" checked> 1 <i class="fa fa-male"></i>
                        </label>
                        <label class="btn col mx-2 btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="2"> 2 <i class="fa fa-male"></i>
                        </label>
                        <label class="btn col btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="3"> 3 <i class="fa fa-male"></i>
                        </label>
                        <label class="btn col mx-2 btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="4"> 4 <i class="fa fa-male"></i>
                        </label>
                        <label class="btn col btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="5+"> 5+ <i class="fa fa-male"></i>
                        </label>
                        <label class="btn col ml-2 btn-outline-primary">
                            <input type="radio" name="number" class="number" autocomplete="off" value="Undecided"><small>Indeciso</small>
                        </label>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h3 class="text-secondary mt-4">Data de Viagem</h3>
                            <input type="text" class="form-control" id="d_date" placeholder="Fecha de Viaje">
                            <input type="hidden" id="d_package" value="{{$paquetes->codigo}}: {{$paquetes->titulo}} {{$paquetes->duracion}} DAYS">
                        </div>
                        <div class="col">
                            <h3 class="text-secondary mt-4">Telefone</h3>
                            <input type="tel" class="form-control" id="d_tel" placeholder="Digite seu numero">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h3 class="text-secondary mt-4">Nome</h3>
                            <input type="text" class="form-control" id="d_name" placeholder="Nome completo">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h3 class="text-secondary mt-4">Email</h3>
                            <input type="email" class="form-control" id="d_email" placeholder="Digite seu email">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <h3 class="text-secondary mt-4">Dúvidas?</h3>
                            <textarea class="form-control" id="d_comment" rows="3" placeholder="Como você imagina uma viagem inesquecivel ao Perú, sugestões especiais, perguntas, comentários"></textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col my-3">

                            <button class="btn btn-success btn-block btn-lg btn-next" id="d_send" type="button" onclick="inquire()">Enviar
                                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            </button>
                            <ul class="fa-ul pull-right d-none" id="loader2">
                                <li><i class="fa-li fa fa-spinner fa-spin"></i> <i>Enviando...</i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="alert alert-success alert-dismissible fade d-none" id="d_alert" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <strong>Muito obrigados</strong> por seu contato com ANDES VIAGENS,nas proximas 24 houras voce tera uma resposta de nossos agentes de viagens para ajuda-lo com o planejamento de sua viagem. :)
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
@push('scripts')
    <script>
        function inquire(){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('[name="_token"]').val()
                }
            });

            $("#d_send").attr("disabled", true);

            var filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;



            var s_accommodation = document.getElementsByName('accommodation[]');
            var $accommodation = "";
            for (var i = 0, l = s_accommodation.length; i < l; i++) {
                if (s_accommodation[i].checked) {
                    $accommodation += s_accommodation[i].value+' , ';
                }
            }
            s_accommodation = $accommodation.substring(0,$accommodation.length-3);


            var s_number = $(".number:checked").val();

            var s_date = $('#d_date').val();
            var s_tel = $('#d_tel').val();
            var s_name = $('#d_name').val();
            var s_email = $('#d_email').val();
            var s_package = $('#d_package').val();


            var s_comment = $('#d_comment').val();


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

                    "txt_accommodation" : s_accommodation,
                    "txt_number" : s_number,

                    "txt_date" : s_date,
                    "txt_tel" : s_tel,
                    "txt_name" : s_name,
                    "txt_email" : s_email,
                    "txt_package" : s_package,
                    "txt_comment" : s_comment,

                };
                $.ajax({
                    data:  datos,
                    url:   "{{route('inquire_path')}}",
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