<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">

    <title>Machu Picchu | Pacotes de Viagem e Tour ao Peru</title>
    <meta name="description" content="Pacotes de Viagens para o Peru com um operador peruano autêntico, escritórios em Lima, Cusco, Arequipa e Puno. Em Machupicchu oferecemos saidas diarias">
    <meta name="keywords" content="pacotes de viagem Peru, Cusco passeios, pacotes de viagem para o Peru, férias em Peru, Passeios a peru, ofertas para Machu Picchu">

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="{{mix("css/app.css")}}">

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
        <div class="row">
            <div class="col-12 col-sm-8 mt-3">
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
                <div class="card text-white my-3">
                    <img class="card-img" src="{{asset('images/destinations/home/lima.jpg')}}" alt="Card image">
                    <div class="card-img-overlay card-overlay-rgba">
                        <h4 class="card-title">Lima</h4>
                        {{--<p class="card-text">This is a wider card with supporting...</p>--}}
                        <a href="{{route('destinations_show', 'lima')}}" class="btn btn-success btn-info btn-sm">Ver Pacotes</a>
                    </div>
                </div>
                <div class="card text-white">
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

<section class="py-5 d-none d-lg-block">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">FÉRIAS NO PERÚ <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
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
                                            @if($precio->precio > 0)
                                                <sup>$</sup> {{$precio->precio}} <small>USD</small>
                                            @else
                                                A Pedido
                                            @endif
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

<section class="py-5 bg-light">
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

<section class="py-5">
    <div class="container">

        <div class="row">
            <div class="col">
                <h3 class="text-secondary d-inline align-bottom h6">Andes Viagens <img src="{{asset('images/icons/subtitle.png')}}" alt="" class="img-fluid" width="100"></h3>
                <h2 class="h3 pt-1">DEPOIMENTOS</h2>

            </div>
        </div>

        <div class="row mt-5 d-flex">
            <div class="col-12 col-sm-6 text-justify">
                <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                <p>Estou planejando viajar com minha mulher e meus filhos ao Perú, procurando informacoes achei a GOTO PERU.ORG com a ANDES VIAGENS.COM no Brasil, até o momento o atendimento está sendo ótimo mais gostaria conhecer pessoas que já tenham viajado com eles e possam me dizer se o servico prestado foi de qualidade.</p>
                <small class="my-5 text-right font-montserrat text-secondary d-block">Eduardo N - São Paulo, SP</small>
            </div>
            <div class="col-12 col-sm-6 text-justify">
                <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                <p>Fizemos uma viagem ( 04 pessoas / 06 dias) Cusco/Vale perdido dos Incas/Aguas Calientes/Matchu Picchu com tudo organizado pela GotoPeru org/Andes Viagens e ficamos muito satisfeitos com o excelente atendimento e profissionalismo da equipe.</p>
                <small class="my-5 text-right font-montserrat text-secondary d-block">Henrique L - São Paulo, SP</small>
            </div>
        </div>

        <div class="row mt-5 d-flex">
            <div class="col-12 col-sm-6 text-justify">
                <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                <p>Foi uma experiencia incrível conhecer a cultura do Peru. Quero agradecer em especial a Magaly pelo excelente atendimento e eficiência em nos atender. A equipe GotoPeru é sem dúvidas de primeiríssimo nível. Aguardo sugestões de novos passeios.</p>
                <small class="my-5 text-right font-montserrat text-secondary d-block">bellini_rr - Boa Vista, RR</small>
            </div>
            <div class="col-12 col-sm-6 text-justify">
                <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
                <p>Já viajei e foi muito bom! O acompanhamento aos passeios, sugestões, restaurantes, translados foi tudo muito organizado e de excelente qualidade e assistência. A pessoa que nos recebeu, inclusive falava portugues, foi muito disponivel e simpatica e nos deu muitas dicas sobre a cidade e os passeios que fizemos. Parabéns a empresa e pode confiar. Vale a pena!</p>
                <small class="my-5 text-right font-montserrat text-secondary d-block">Denise B - Rio de Janeiro, RJ</small>
            </div>
        </div>

        <div class="row mb-5">
            <div class="col text-center">
                <a class="btn btn-lg btn-success" href="https://www.tripadvisor.com.br/ShowTopic-g294311-i818-k6665256-Alguem_ja_viajou_ao_Peru_com_a_ANDES_VIAGENS_COM-Peru.html" target="_blank">
                    <i class="fa fa-tripadvisor fa-lg"></i> Ver Tudo</a>
            </div>
        </div>

        <div class="row no-gutters d-flex">
            <div class="col-12 col-sm-4">
                <img src="{{asset("images/doriam.jpg")}}" alt="" class="img-fluid">
            </div>
            <div class="col-12 col-sm bg-light">
                <img src="{{asset("images/banner-moises.jpg")}}" alt="" class="img-fluid">
                <div class="p-2 text-center">
                    <h5 class="mt-3">Viajantes Recentes:</h5>
                    <p class="m-0"><i class="fa fa-check text-warning"></i> Guilherme Winter</p>
                    <p class="m-0"><i class="fa fa-check text-warning"></i> Sérgio Marone</p>
                </div>
            </div>
        </div>

    </div>
</section>

<div class="container-parallax d-none d-sm-inline">
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
                    <a href="https://m.me/ANDESVIAGENS/" target="_blank" class="btn btn-xs btn-primary"><img src="{{asset('images/icons/messenger.png')}}" alt="" width="30"> Fale com nós agora</a>
                </div>
            </div>
        </div>
    </section>

</div>


<!-- Footer -->
<footer class="py-5 bg-dark">
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-8 col-sm-6 col-md-6 col-lg-3 my-2">
                <a href="https://www.tripadvisor.com.br/ShowTopic-g294311-i818-k6665256-Alguem_ja_viajou_ao_Peru_com_a_ANDES_VIAGENS_COM-Peru.html" target="_blank"><img src="{{asset('images/trip.png')}}" alt="" class="img-fluid"></a>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <p class="text-center text-white">GOTOPERU GROUP PROVIDES YOU WITH VACATIONS OF A LIFETIME SINCE 2009</p>
                <p class="m-0 text-center text-white">ANDES VIAGENS is part of GOTOPERU GROUP © Copyright 2017 | GOTOPERU.COM   ANDESVIAGENS.COM</p>
            </div>
        </div>
    </div>
    <!-- /.container -->
    <p class="totop">
        <a href="https://api.whatsapp.com/send?phone=51992051190" target="_blank"><img src="{{asset('images/icons/whatsapp-c.png')}}" alt="" width="40" class="d-block"></a>
        <a href="https://m.me/ANDESVIAGENS/" target="_blank"><img src="{{asset('images/icons/messenger-c.png')}}" alt="" width="40" class="d-block my-3"></a>
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
<script>
    //full destinatiuns
    (function($) {
        $.fn.shorten = function(settings) {
            "use strict";

            var config = {
                showChars: 100,
                minHideChars: 10,
                ellipsesText: "...",
                moreText: "<div class='row text-center my-4'><div class='col'><div class='btn btn-info btn-sm text-center'> Read More <i class='fa fa-chevron-down d-block'></i></div></div></div>",
                lessText: "<div class='row text-center my-4'><div class='col'><div class='btn btn-success btn-sm text-center'> <i class='fa fa-chevron-up d-block'></i> Less</div></div></div>",
                onLess: function() {},
                onMore: function() {},
                errMsg: null,
                force: false
            };

            if (settings) {
                $.extend(config, settings);
            }

            if ($(this).data('jquery.shorten') && !config.force) {
                return false;
            }
            $(this).data('jquery.shorten', true);

            $(document).off("click", '.morelink');

            $(document).on({
                click: function() {

                    var $this = $(this);
                    if ($this.hasClass('less')) {
                        $this.removeClass('less');
                        $this.html(config.moreText);
                        $this.parent().prev().animate({'height':'0'+'%'}, function () { $this.parent().prev().prev().show(); }).hide('fast', function() {
                            config.onLess();
                        });

                    } else {
                        $this.addClass('less');
                        $this.html(config.lessText);
                        $this.parent().prev().animate({'height':'100'+'%'}, function () { $this.parent().prev().prev().hide(); }).show('fast', function() {
                            config.onMore();
                        });
                    }
                    return false;
                }
            }, '.morelink');

            return this.each(function() {
                var $this = $(this);

                var content = $this.html();
                var contentlen = $this.text().length;
                if (contentlen > config.showChars + config.minHideChars) {
                    var c = content.substr(0, config.showChars);
                    if (c.indexOf('<') >= 0) // If there's HTML don't want to cut it
                    {
                        var inTag = false; // I'm in a tag?
                        var bag = ''; // Put the characters to be shown here
                        var countChars = 0; // Current bag size
                        var openTags = []; // Stack for opened tags, so I can close them later
                        var tagName = null;

                        for (var i = 0, r = 0; r <= config.showChars; i++) {
                            if (content[i] == '<' && !inTag) {
                                inTag = true;

                                // This could be "tag" or "/tag"
                                tagName = content.substring(i + 1, content.indexOf('>', i));

                                // If its a closing tag
                                if (tagName[0] == '/') {


                                    if (tagName != '/' + openTags[0]) {
                                        config.errMsg = 'ERROR en HTML: the top of the stack should be the tag that closes';
                                    } else {
                                        openTags.shift(); // Pops the last tag from the open tag stack (the tag is closed in the retult HTML!)
                                    }

                                } else {
                                    // There are some nasty tags that don't have a close tag like <br/>
                                    if (tagName.toLowerCase() != 'br') {
                                        openTags.unshift(tagName); // Add to start the name of the tag that opens
                                    }
                                }
                            }
                            if (inTag && content[i] == '>') {
                                inTag = false;
                            }

                            if (inTag) { bag += content.charAt(i); } // Add tag name chars to the result
                            else {
                                r++;
                                if (countChars <= config.showChars) {
                                    bag += content.charAt(i); // Fix to ie 7 not allowing you to reference string characters using the []
                                    countChars++;
                                } else // Now I have the characters needed
                                {
                                    if (openTags.length > 0) // I have unclosed tags
                                    {
                                        //console.log('They were open tags');
                                        //console.log(openTags);
                                        for (j = 0; j < openTags.length; j++) {
                                            //console.log('Cierro tag ' + openTags[j]);
                                            bag += '</' + openTags[j] + '>'; // Close all tags that were opened

                                            // You could shift the tag from the stack to check if you end with an empty stack, that means you have closed all open tags
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        c = $('<div/>').html(bag + '<span class="ellip">' + config.ellipsesText + '</span>').html();
                    }else{
                        c+=config.ellipsesText;
                    }

                    var html = '<div class="shortcontent">' + c +
                        '</div><div class="allcontent">' + content +
                        '</div><span><a href="javascript://nop/" class="morelink">' + config.moreText + '</a></span>';

                    $this.html(html);
                    $this.find(".allcontent").hide(); // Hide all text
                    $('.shortcontent p:last', $this).css('margin-bottom', 0); //Remove bottom margin on last paragraph as it's likely shortened
                }
            });

        };

    })(jQuery);

    $(document).ready(function() {

        $(".comment").shorten({showChars: 550});

        $(".comment-small").shorten({showChars: 50});

    });
</script>
@stack('scripts')

</body>
</html>
