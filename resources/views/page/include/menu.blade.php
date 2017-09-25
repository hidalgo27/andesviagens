<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-sm-none">
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
                    <a class="nav-link" href="{{route('package_show_path')}}">Pacotes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{route('destinations_show_path')}}">Destino</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{route('about_show_path')}}">A empresa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{route('faq_show_path')}}">Dicas</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<nav class="nav nav-pills nav-fill nav-viagens navbar-expand-lg d-none d-sm-flex @if(isset($menu)) @else sticky-top @endif">
    {{--<a class="nav-item nav-link active" href="#">Active</a>--}}
    <a class="nav-item nav-link text-light" href="{{route('package_show_path')}}">PACOTES</a>
    <a class="nav-item nav-link text-light" href="{{route('destinations_show_path')}}">DESTINO</a>
    <a class="nav-item nav-link text-light" href="{{route('about_show_path')}}">A EMPRESA</a>
    <a class="nav-item nav-link text-light" href="{{route('faq_show_path')}}">DICAS</a>
    <a class="nav-item nav-link text-light" href="/#contato">CONTATO</a>
    {{--<a class="nav-item nav-link disabled" href="#">Disabled</a>--}}
</nav>