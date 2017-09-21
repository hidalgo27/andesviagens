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
                <div class="card text-white clearfix">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu-2.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Machu Picchu</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                        <a href="{{route('destinations_show', 'machupicchu')}}" class="btn btn-success">View More</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/lima.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Lima</h4>
                        <p class="card-text">This is a wider card with supporting...</p>
                        <a href="{{route('destinations_show', 'lima')}}" class="btn btn-success btn-info btn-sm">View More</a>
                    </div>
                </div>
                <div class="card text-white mt-3">
                    <img class="card-img" src="{{asset('images/destinations/home/titicaca.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Puno</h4>
                        <p class="card-text">This is a wider card with supporting...</p>
                        <a href="{{route('destinations_show', 'titicaca')}}" class="btn btn-success btn-info btn-sm">View More</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="{{route('destinations_show_path')}}" class="btn btn-lg btn-primary">All Destinations</a>
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
        @foreach($paquetes_r as $paquete)
            <div class="row box-more py-5">
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <img src="{{asset('images/packages/'.$paquete->imagen.'')}}" alt="" class="img-fluid">
                        </div>
                        <div class="col-6 mt-4 border border-top-0 border-left-0 border-bottom-0">
                            <h4 class="card-title text-capitalize">{{strtolower($paquete->titulo)}}</h4>
                            <p class="text-left"><i class="fa fa-clock-o text-primary" aria-hidden="true"></i> {{strtolower($paquete->duracion)}} Days</p>
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
                            <p class="">@php echo $paquete->descripcion @endphp</p>
                        </div>
                        <div class="col text-center py-5 align-items-center card-deck">
                            <div class="card border-0">
                                <span class="text-secondary align-self-center h3">from</span>
                                <p class="h1 font-montserrat font-weight-bold">
                                    @foreach($paquete->precio_paquetes as $precio)
                                        @if($precio->estrellas == 2)
                                            <sup>$</sup>{{$precio->precio}}
                                        @endif
                                    @endforeach
                                </p>
                                <a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquete->titulo)))}}" class="btn btn-primary btn-lg btn mt-3">View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
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
                    <a href="https://api.whatsapp.com/send?phone=51980385734" target="_blank" class="btn btn-xs btn-success"><img src="{{asset('images/icons/whatsapp.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
                    <a href="https://m.me/GOTOPERUcom/" target="_blank" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> chatea con nosotros ahora</a>
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
    <p class="totop">
        <a href="https://api.whatsapp.com/send?phone=51980385734" target="_blank"><img src="{{asset('images/icons/whatsapp-c.png')}}" alt="" width="40" class="d-block"></a>
        <a href="https://m.me/GOTOPERUcom/" target="_blank"><img src="{{asset('images/icons/messenger-c.png')}}" alt="" width="40" class="d-block my-3"></a>
        <a href="#top" class="top">
            <img src="{{asset('images/icons/circle-arrow.png')}}" alt="" width="40">
        </a>
    </p>
</footer>
