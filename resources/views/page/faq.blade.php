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
                                <h1 class="display-3 text-light"><strong>PREGUNTAS FREQUENTES</strong></h1>
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
            <div class="carousel-item active" style="background-image: url({{asset('images/faq.jpg')}})">
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
                <p class="h2 text-secondary pt-3">PREGUNTAS FREQUENTES</p>
                {{--<p class="h4"></p>--}}
            </div>
        </div>
        <div class="row">
            <div class="col">
                <blockquote class="blockquote text-center alert-primary py-3">
                    <p class="mb-0">Guia de viagem para Peru. Aqui você encontrará todas as nossas dicas para planejar sua viagem ao Perú, dicas, roteiros, conselhos e tudo.</p>
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
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">1</span>
                <h3>Como prevenir o mal-star causado pela altitude?</h3>
                <p>R: Fato é que não tem como fugir das escadas e das subidas. Então cuide-se principalmente nos 2 primeiros dias! Não abuse dos cigarros e nem das bebidas alcoólicas. Não exagere na alimentação e faça tudo devagar mesmo</p>
            </div>
            <div class="col-4">
                <img src="{{asset('images/icons/faq/1-icon.png')}}" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row my-4">
            <div class="col-4">
                <img src="{{asset('images/icons/faq/2-icon.png')}}" alt="" class="img-fluid">
            </div>
            <div class="col">
                <span   class="display-1 font-montserrat text-info">2</span>
                <h3>O que fazer se eu estiver passando mal?</h3>
                <p>Como já sabemos pela cultura dos Incas, eles mascavam folhas de Coca (Planta Sagrada). Você pode mascá-la ou beber chá feito das folhas, chamado por ele de Mate de Coca. Você encontrará em bares e restaurantes já prontos. E se quiser fazer em casa, pode comprar as folhas nos Mercados e das senhoras que vendem na rua.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">3</span>
                <h3>como pegar um táxi?</h3>
                <p>O segredo é negociar sempre, até as corridas de táxi. Você poderá até se sentir desconfortável nas primeiras vezes, mas depois perceberá que está vivenciando parte da cultura andina, o ato da negociação, pois estão acostumados a receber turistas do mundo todo e os preços são ainda mais inflacionados.</p>
                <p>Segurança. O melhor e mais seguro, é ainda no Brasil, antes de viajar já estar combinado com um translado do Aeroporto ou da rodoviária para seu Hotel. Ao trocar dinheiro, seja discreto, evite que as pessoas na rua saibam onde você o guardou.Não descuide de sua carteira ou bolsa, principalmente em mercados e estação de trem. Não economize em pegar táxis (que são bem mais baratos que no Brasil.</p>
            </div>
            <div class="col-4">
                <img src="{{asset('images/icons/faq/3-icon.png')}}" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row my-4">
            <div class="col-4">
                <img src="{{asset('images/icons/faq/4-icon.png')}}" alt="" class="img-fluid">
            </div>
            <div class="col">
                <span   class="display-1 font-montserrat text-info">4</span>
                <h3>Levo dólares? Cartão? Reais?</h3>
                <p>Sim, leve um pouco de dólares e seu cartão! Felizmente, as maiores cidades no país estão preparadas em muitos requisitos para turistas, e facilmente encontrará casas de cambio. E se vier com reais, também poderá trocar por Nuevos Soles. Você utilizará seu cartão, praticamente, para sacar em dólares ou em Nuevos Soles (moeda Peruana). Não muito para fazer pagamentos, pois a cultura no Peru não é com a nossa, tudo se paga com cartão. Não esqueça de avisar seu gerente para ativar a função de saque internacional, porque se não, nada de sacar dinheiro aqui. Uma boa dica (que não me deram) na minha 1º viagem ao exterior: Quando for sacar dinheiro, a senha são apenas os 4 primeiros dígitos. Infelizmente o caixa eletrônico aceitava os 6 dígitos, e meu cartão foi bloqueado (viagem toda sem grana).</p>
                <p>Pagamentos de tours. É necessário pagar adiantado os tickets de trens e de entradas em Machu Picchu para serem reservados. E como saber se não está caindo em um golpe? Você pode conferir se a agência existe no site no governo peruano: HTTP://www.sunat.gob.pe</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">5</span>
                <h3>Quais cidades visitar?</h3>
                <p>Provavelmente terá vontade de ir para muitas, mas o importante na hora de dedicir é saber o foco: história, cultura, gastronomia, festas; facilitando na definição do seu roteiro. Vale a pena que por onde passe, seja sem pressa, para curtir cada detalhe. E concerteza o país merece mais de uma visita.</p>
            </div>
            <div class="col-4">
                <img src="{{asset('images/icons/faq/5-icon.png')}}" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row my-4">
            <div class="col-4">
                <img src="{{asset('images/icons/faq/6-icon.png')}}" alt="" class="img-fluid">
            </div>
            <div class="col">
                <span   class="display-1 font-montserrat text-info">6</span>
                <h3>Quando é a melhor época para visitar o país?</h3>
                <p>A temporada alta começa em Junho e vai até Agosto. O país está cheio de pessoas de todas as partes do mundo. Os preços de Hotéis não mudam por isso, mas sim para a Festa do Sol (Inti Raymi)no mês de Junho, para o Natal e Reveillon.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">7</span>
                <h3>O que é Machu Picchu?</h3>
                <p>É uma pequena e espetacular cidadezinha, construída a base de pedra encima das montanhas da Cordilheira dos Andes. Até 1911, se encontrava perdida pelos enevoados. Está a 2.400 m. acima do nível do mar, poderíamos dizer que está muito perto das nuvens, está mais alta que o Vale Sagrado, onde era a agricultura inca. Sendo sem dúvida o monumento mais conhecido dos Incas.</p>
                <p>A cada ano, milhares de viajeiros chegam a este enigmático lugar através de diversos meios, como por exemplo por trem ou caminhadas. Partindo de Cusco (a antiga capital inca), em alguns casos atravessando os picos das montanhas escarpadas e em outros casos o lindo vale e claro as ruínas de Ollantaytambo entre outros.</p>
            </div>
            <div class="col-4">
                <img src="{{asset('images/icons/faq/7-icon.png')}}" alt="" class="img-fluid">
            </div>
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">8</span>
                <h3>Qual é a melhor época para visitar MachuPicchu?</h3>
                <p>O clima na região andina está marcado por duas estações:</p>
                <ul>
                    <li>A Seca ( de abril à outubro)</li>
                </ul>
                <p>Apesar de estar na estação de chuvas, em um mesmo dia temos chuva, céu nublado e até sol. Hoje em dia, os turistas de todo o mundo chegam a visitar MachuPicchu os 365 dias do ano.</p>
                <p>Podemos destacar os meses de abril, maio, junho, julho, agosto e setembro como mês com mais turistas para Machu Picchu. Machu Picchu está localizada na borda da floresta assim o seu clima é quente e úmido, as temperaturas variam entre 8 ° e 20 ° C. É aconselhável levar roupas para o frio e calor.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">9</span>
                <h3>Como chegar a Machu Picchu?</h3>
                <p>Existem basicamente 2 diferentes formas de chegar a Machu Picchu:</p>
                <h5>VIA FÉRREA (Trem</h5>
                <ul>
                    <li>Se você quiser ir de trem para Machu Picchu considera que nenhum trem vai diretamente da cidade de Cusco. É por isso que antes de embarcar em seu trem deve pegar um ônibus ou carro para o ponto de partida que você escolher. Há duas estações de trem:</li>
                    <li>A Estação de Poroy que está aproximadamente a 30 minutos em carro de Cusco.</li>
                    <li>(Pode-se tomar um táxi em qualquer momento do dia, o custo médio de 20 soles).</li>
                    <li>A Estação de Ollantaytambo que está aproximadamente a 2 horas em ônibus da Cidade de Cusco. A cada 30 minutos saem ônibus para Ollantaytambo durantetodo o dia, o custo médio é de 15 a 20 soles).</li>
                    <li>Ao momento de escolher em que trem ir, terá que escolher entre duas empresas:</li>
                    <ul>
                        <li>
                            <b>PERU RAIL</b>
                            <p>Esta empresa conta com mais variedades de horários e oferece três tipos de serviços: Expedition, Vistadome y el Hiram Bingham. Que tem 02 pontos de partida e de chegada.</p>
                                <p><b>1)</b> Poroy – Machu Picchu à Machu Picchu – Poroy.</p>
                                <p><b>2)</b> Ollantaytambo – Machu Picchu à Machu Picchu – Ollantaytambo.</p>
                                <p>Recomendamos comprar o Boleto de Trem de ida e volta juntos, já que sairá um pouco mais econômico. No momento da compra considere que os preços variam de acordo com o serviço, do local de partida e do horário que escolher.</p>
                        </li>
                        <li>
                            <b>INCA RAIL</b>
                            <p>Esta empresa tem menos anos no mercado de turismo, oferece 4 serviços:</p>
                            <p>Serviço Turista, Serviço Executivo, Serviço Primeira Classe e Serviço Presidencial. Apenas um ponto de partida e de chegada: Ollantaytambo à Machu Picchu / Machu Picchu à Ollantaytambo.</p>
                            <p>Também pode combinar tipos de serviços na ida e na volta, ou seja, Serviço Primeira Classe de ida e Classe Turista na volta.</p>
                        </li>
                        <li>
                            <b>CAMINHADAS</b>
                            <p>Esta é uma boa opção para chegar a Cidadela de Machu Picchu. Existem várias alternativas como fazer a rota pela Tradicional Trilha Inca de 4dias, Salkantay de 5ias, Inca Jungle de 4dias, etc.</p>
                            <p>Em todas as caminhadas disfrutará de paisagens impressionantes, micro climas, povoados e acidentes geográficos; também encontra-se no caminho banhos termais. E no último dia será especialmente dedicado a recorrer todo o Santuário de Machu Picchu. O retorno é em trem e ônibus. Se desejar fazer a reserva de um desses tours contate-nos.</p>
                        </li>
                    </ul>
                </ul>
            </div>
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">--}}
            {{--</div>--}}
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">10</span>
                <h3>COMO IR DO POVOADO DE ÁGUAS CALIENTES À MACHU PICCHU?</h3>
                <p>Águas Calientes também conhecido como Machu Picchu Povoado, é o lugar que acolhe a cidade de Machu Picchu. Existem duas formas de chegar a Machu Picchu.</p>
                <p>Se você gosta de caminhar e desfrutar da natureza, existe uma rota com degraus apropriadamente sinalizadas. A caminhada em média leva 1hora, recomenda-se levar protetor solar, repelente, gorro, óculos de sol. Não se esqueça que estará na serra.</p>
                <p>Outra opção para ir de Águas Calientes até Machu Picchu é subir em van, será 30 minutos aproximadamente, você descerá na entrada de Machu Picchu. As vans sobem desde às 5:30 da manhã e os boletos são vendidos pela empresa CONSETTUR.</p>
                <p>Escritório em Cusco: Av. Infancia N° 433.</p>
                <p>Um quiosque em Águas Calientes: Av. Hermanos Ayar s/n.</p>
                <p>Lembre-se que os boletos são válidos somente por 3 dias, para uma única vez. A compra dos boletos é pessoal com apresentação do seu documento de identidade ou passaporte</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">11</span>
                <h3>O QUE FAZER COM MINHAS MALAS DURANTE O TOUR?</h3>
                <h5>Tour de 2 dias em Machu Picchu.</h5>
                <p>Para quem irá dormir em Águas Calientes, poderá deixar toda a sua bagagem no hotel que estiver hospedado em Cusco. Levando no máximo 5 quilos.</p>
                <h5>Tour de 1 dia em Machu Picchu</h5>
                <p>Para quem vai à Machu Picchu e volta no mesmo dia para Cusco, recomendamos levar uma pequena bolsa ou mochila com artigos necessários para o tour, como garrafas de água, biscoitos, protetor solar, óculos de sol, capa de chuva ou casacos impermeáveis .</p>
            </div>
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">--}}
            {{--</div>--}}
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">12</span>
                <h3>EXISTE UM LIMITE NA VENDA DE BOLETO À MACHU PICCHU, MONTANHA HUAYNAPICCHU E MONTANHA MACHUPICCHU?</h3>
                <ul>
                    <li>Faz alguns anos que o Governo Peruano estabeleceu algumas medidas que limitam o acesso a estes destinos turísticos, necessárias para sua preservação. Segue abaixo as informações:</li>
                    <li>Boleto só entrada a Machu Picchu: 2.500 pessoas por dia.</li>
                    <li>Boleto Machu Picchu com entrada a Huayna Picchu: 400 pessoas por dia, dividido em dois grupos.</li>
                    <li>Grupo 1 (7h00): 200 pessoas por dia.</li>
                    <li>Grupo 02 (10h00): 200 pessoas por dia.</li>
                    <li>Boleto Machu Picchu + Montanha Machu Picchu: 400 pessoas por dia.</li>
                    <li>Boleto Machu Picchu + Museu: 2500 pessoas por dia.</li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">13</span>
                <h3>QUEM ADMINISTRA A VENDA DOS BOLETOS A MACHU PICCHU?</h3>
                <p>O Governo Peruano e o Ministério da Cultura são os organismos encarregados da regulamentação do ingresso a Machu Picchu. Todas as agências de viagens estão sujeitas a estes regulamentos e disposições estabelecidas por esses orgãos.</p>
            </div>
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">--}}
            {{--</div>--}}
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">14</span>
                <h3>QUANDO DEVO FAZER A RESERVA DO BOLETO À MACHU PICCHU?</h3>
                <p>As reservas podem ser feitas a qualquer momento, tendo em conta a disponibilidade de espaços. Mas é recomendável fazer o quanto antes; principalmente se quiser comprar o Boleto para subir a montanha Huayna Picchu, já que se esgotam com maior facilidade e o recomendável é fazer com três a dois meses de anticipação.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">15</span>
                <h3>SE PODE VISITAR MACHU PICCHU E HUAYNA PICCHU NO MESMO DIA?</h3>
                <p>A visita de Machu Picchu e Huayna Picchu debe-se fazer no mesmo dia, devendo considerar os horários de trem e os dias que permanecerá em Águas Calientes antes de realizar a compra. O ingresso a Huayna Picchu do primeiro grupo é às 7:00 / 08:00 hrs e do segundo grupo às 10:00/11:00 hrs. Lembre-se que o ingresso a Huayna Picchu se encontra dentro da mesma cidade.</p>
            </div>
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">--}}
            {{--</div>--}}
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">16</span>
                <h3>DESDE QUE HORA SE PODE INGRESAR A MACHU PICCHU?</h3>
                <p>O ingresso a Cidade de Machu Picchu das 6:00 hrs às 17:00 hrs. As vans à Machu Picchu da empresa CONSETUR sobem desde às 5:30 da manhã.</p>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span   class="display-1 font-montserrat text-info">17</span>
                <h3>DEVO LEVAR DOCUMENTOS?</h3>
                <p>Sim, é indispensável levar os documentos com os quais foi feita a reserva, tanto para trens como para a entrada a Machu Picchu. Se não está com os documentos não poderá ingressar a Machu Picchu.</p>
            </div>
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/Clientes/01-new-standard.jpg" alt="">--}}
            {{--</div>--}}
        </div>
        <div class="row my-4">
            {{--<div class="col">--}}
                {{--<img src="http://www.travelcompositor.com/wp-content/uploads/2016/05/02-experience-1024x682.jpg" alt="" class="img-fluid">--}}
            {{--</div>--}}
            <div class="col">
                <span   class="display-1 font-montserrat text-info">18</span>
                <h3>ONDE SE ENCONTRA AS ÁGUAS TERMAIS DE MACHU PICCHU?</h3>
                <p>As Águas Termais de Machu Picchu se encontram localizadas na parte final da Avenida Pachacuteq a 20 minutos da Plaza de Armas de Machu Picchu Povoado.</p>
                <p>As fontes termais estão a uma distância de 800 metros a leste do Povoado de Machu Picchu, as águas brotão de entre as rochas a diferente temperatura. A temperatura média das águas estão entre os 35 º C e 43º C.</p>
                <p>Estas águas hoje em dia são aproveitadas para o uso turístico, com a construção de piscinas. Estas águas termais tem distintas propriedades curativas; tais como: tratamento para o reumatismo, terapia anti stress, elimina toxinas, evitam a pressão arterial e melhoram o metabolismo.</p>
            </div>
        </div>

    </div>
</section>

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
                <div class="card bg-dark text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card bg-dark text-white">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
                <div class="card bg-dark text-white mt-3">
                    <img class="card-img" src="{{asset('images/destinations/home/machupicchu.jpg')}}" alt="Card image">
                    <div class="card-img-overlay">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <a href="" class="btn btn-lg btn-primary">All Destinations</a>
            </div>
        </div>
    </div>
</section>

@stop