@extends('layouts.page.default')

@section('content')
<header>
    <div class="header-menu-d clearfix">
        <div class="col">
            <div class="row justify-content-between">
                <div class="col-2 header-packages bg-light-t">
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
                {{--<div class="col-3">--}}
                {{--<div class="row justify-content-center">--}}
                {{--<div class="mt-2">--}}
                {{--<img src="{{asset('images/logos/logo-andes-b.png')}}" alt="" class="img-fluid">--}}
                {{--</div>--}}
                {{--</div>--}}
                {{--</div>--}}
                <div class="col">
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
                                <h1 class="display-3 text-light"><strong>
                                        {{ucwords(strtolower($destinations))}}
                                    </strong></h1>
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
@include('page.include.menu');

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
                                <div class="col-4 d-flex mb-4">
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

@push('script')
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
@endpush