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

<!-- /. -->
<!-- Page Content -->

@yield('content')

<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">VISITE O PERÚ<img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">PRINCIPAIS DESTINOS</h2>

            </div>
        </div>
        <div class="row py-3">
            <div class="col-8">
                <div class="card text-white clearfix">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu-2.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Machu Picchu</h4>
                        {{--<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>--}}
                        {{--<p class="card-text">Last updated 3 mins ago</p>--}}
                        <a href="{{route('destinations_show', 'machu-picchu')}}" class="btn btn-success">Ver Pacotes</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/lima.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Lima</h4>
                        {{--<p class="card-text">This is a wider card with supporting...</p>--}}
                        <a href="{{route('destinations_show', 'lima')}}" class="btn btn-success btn-info btn-sm">Ver Pacotes</a>
                    </div>
                </div>
                <div class="card text-white mt-3">
                    <img class="card-img" src="{{asset('images/destinations/home/titicaca.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Puno</h4>
                        {{--<p class="card-text">This is a wider card with supporting...</p>--}}
                        <a href="{{route('destinations_show', 'puno-e-o-lago-titicaca')}}" class="btn btn-success btn-info btn-sm">Ver Pacotes</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="{{route('destinations_show_path')}}" class="btn btn-lg btn-primary">Todos os Destinos</a>
            </div>
        </div>
    </div>
</section>

<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">EÉRIAS NO PERÚ <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">TODOS OS PACOTES</h2>

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
                                <span class="text-secondary align-self-center h3">Desde</span>
                                <p class="h1 font-montserrat font-weight-bold">
                                    @foreach($paquete->precio_paquetes as $precio)
                                        @if($precio->estrellas == 2)
                                            <sup>$</sup>{{$precio->precio}}
                                        @endif
                                    @endforeach
                                </p>
                                <a href="{{route('home_show_path', str_replace(' ','-',strtolower($paquete->titulo)))}}" class="btn btn-primary btn-lg btn mt-3">Ver Detalhes</a>
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
                <a href="#" class="btn btn-info text-center" id="loadMore">Ver Mais <i class="fa fa-chevron-down d-block" aria-hidden="true"></i></a>
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
                    <h5 class="font-weight-light text-light">CONFIANÇA</h5>
                    {{--<h3>Andes Viagens</h3>--}}
                    <p class="py-3 lead">Agência de viagens com grande experiência no campo do turismo. Dispomos de um grupo de profissionais qualificados e com serviços de primeira qualidade, que se encarregarão para que sua estadia em nosso país seja de seu completo agrado.</p>
                    <a href="https://api.whatsapp.com/send?phone=51992051190" target="_blank" class="btn btn-xs btn-success"><img src="{{asset('images/icons/whatsapp.png')}}" alt="" width="30"> Fale com nós agora</a>
                    <a href="https://m.me/GOTOPERUcom/" target="_blank" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> Fale com nós agora</a>
                </div>
            </div>
        </div>
    </section>

</div>



<!-- Footer -->
<footer class="py-5 bg-dark">
    <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; GotoPeru 2017</p>
    </div>
    <!-- /.container -->
    <p class="totop">
        <a href="https://api.whatsapp.com/send?phone=51992051190" target="_blank"><img src="{{asset('images/icons/whatsapp-c.png')}}" alt="" width="40" class="d-block"></a>
        <a href="https://m.me/GOTOPERUcom/" target="_blank"><img src="{{asset('images/icons/messenger-c.png')}}" alt="" width="40" class="d-block my-3"></a>
        <a href="#top" class="top">
            <img src="{{asset('images/icons/circle-arrow.png')}}" alt="" width="40">
        </a>
    </p>
</footer>



<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="{{asset("js/app.js")}}"></script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>--}}
{{--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>--}}
<script src="{{asset("js/page/plugins.js")}}"></script>

<script>
    /*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
        f[z]=function(){
            (a.s=a.s||[]).push(arguments)};var a=f[z]._={
        },q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
            f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
            0:+new Date};a.P=function(u){
            a.p[u]=new Date-a.p[0]};function s(){
            a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
            hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
            return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
            b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
            b.contentWindow[g].open()}catch(w){
            c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
            var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
            b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
        loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
    /* custom configuration goes here (www.olark.com/documentation) */
    olark.identify('9694-370-10-7793');/*]]>*/
</script>
@stack('scripts')

</body>
</html>
