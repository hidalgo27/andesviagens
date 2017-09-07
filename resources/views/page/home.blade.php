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
    <link rel="stylesheet" href="{{mix("css/app.css")}}">

</head>

<body>

<header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            {{--<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>--}}
        </ol>
        <div class="carousel-inner" role="listbox">
            <!-- Slide One - Set the background image for this slide in the line below -->
            <div class="carousel-item active" style="background-image: url({{asset('images/sliders/slider-1.jpg')}})">
                <div class="carousel-caption d-none d-md-block">
                    <h3>First Slide</h3>
                    <p>This is a description for the first slide.</p>
                </div>
            </div>
            <!-- Slide Two - Set the background image for this slide in the line below -->
            <div class="carousel-item" style="background-image: url({{asset('images/sliders/slider-2.jpg')}})">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Second Slide</h3>
                    <p>This is a description for the second slide.</p>
                </div>
            </div>
            <!-- Slide Three - Set the background image for this slide in the line below -->
            {{--<div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">--}}
                {{--<div class="carousel-caption d-none d-md-block">--}}
                    {{--<h3>Third Slide</h3>--}}
                    {{--<p>This is a description for the third slide.</p>--}}
                {{--</div>--}}
            {{--</div>--}}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</header>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top nav-viagens">
    <div class="container">
        <a class="navbar-brand" href="#"><img src="{{asset('images/logos/logo-andes.png')}}" width="180" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pacotes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Destino</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">A empresa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Depoimentos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dicas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contato</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Page Content -->
<section class="py-5">
    <div class="container">
        <h1>Full Slider by Start Bootstrap</h1>
        <p>The background images for the slider are set directly in the HTML using inline CSS. The rest of the styles for this template are contained within the
            <code>full-slider.css</code>file.</p>
    </div>
</section>
<style>
    .bd-example-row-flex-cols .row {
        min-height: 10rem;
        background-color: rgba(255,0,0,.1);
    }
    .bd-example-row .row>.col, .bd-example-row .row>[class^=col-] {
        padding-top: .75rem;
        padding-bottom: .75rem;
        background-color: rgba(86,61,124,.15);
        border: 1px solid rgba(86,61,124,.2);
    }
    .bd-example-row .row+.row {
        margin-top: 1rem;
    }
</style>
<div class="container bd-example-row bd-example-row-flex-cols">

    <div class="row align-items-end">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque nobis, numquam? Accusamus, cupiditate expedita. Aperiam autem fugit id minus neque nihil quasi quos sunt, voluptas. Ea nisi nostrum similique voluptatibus?
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
        <div class="col">
            One of three columns
        </div>
    </div>
</div>

<div class="container" id="main">
    <h2>Hello Bootstrap 4.</h2>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-9">
            <p>3 wolf moon retro jean shorts chambray sustainable roof party. Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore
                PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore, Helvetica Williamsburg
                sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>
        </div>
        <div class="col-xs-6 col-md-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt codeply condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi.
                Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
            </p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt codeply condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi.
                Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.
            </p>
        </div>
    </div>
    <div class="row ">
        <div class="col-xs-6 col-sm-4">
            <div class="card card-outline-primary">
                <div class="card-block">
                    <h3 class="card-title">Card</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4">
            <div class="card card-outline-primary">
                <div class="card-block">
                    <h3 class="card-title">Card</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-4">
            <div class="card card-outline-primary">
                <div class="card-block">
                    <h3 class="card-title">Card</h3>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-outline-secondary">Outline</a>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Footer -->
<footer class="py-5 bg-dark">
    <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
    </div>
    <!-- /.container -->
</footer>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="{{asset("js/app.js")}}"></script>
<script src="{{asset("js/admin/plugins.js")}}"></script>
</body>
</html>
