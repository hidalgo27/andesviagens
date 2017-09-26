<?php

namespace App\Http\Controllers;

use App\TDestino;
use App\TPaquete;
use App\TPaqueteDestino;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $paquetes = TPaquete::with('precio_paquetes')->where('estado', 1)->get();
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        return view('page.home',['paquetes'=>$paquetes, 'paquete_destinos'=>$paquete_destinos, 'paquetes_r'=>$paquetes_r]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function package()
    {
        $paquetes = TPaquete::with('precio_paquetes')->get();
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        return view('page.package',['paquetes'=>$paquetes, 'paquete_destinos'=>$paquete_destinos, 'paquetes_r'=>$paquetes_r]);
    }

    public function destinations()
    {
        $destinos = TDestino::get();
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        return view('page.destinations', ['destinos'=>$destinos, 'paquetes_r'=>$paquetes_r, 'paquete_destinos'=>$paquete_destinos]);
    }

    public function destinations_show($title)
    {
        $destinations = str_replace('-', ' ', ucwords(strtolower($title)));
        $destinos = TDestino::where('nombre', $destinations)->get();
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete = TPaquete::with('paquetes_destinos', 'precio_paquetes')->get();
        $paquetes_de = TPaqueteDestino::with(['destinos'=>function($query) use ($destinations) { $query->where('nombre', $destinations);}])->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        return view('page.destinations-show', ['paquete'=>$paquete, 'paquetes_de'=>$paquetes_de, 'paquete_destinos'=>$paquete_destinos, 'destinations'=>$destinations, 'destinos'=>$destinos, 'paquetes_r'=>$paquetes_r]);
    }

    public function about()
    {
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        return view('page.about', ['paquetes_r'=>$paquetes_r, 'paquete_destinos'=>$paquete_destinos]);
    }
    public function faq()
    {
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();
        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        return view('page.faq', ['paquetes_r'=>$paquetes_r, 'paquete_destinos'=>$paquete_destinos]);
    }


    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($titulo)
    {
        $title = str_replace('-', ' ', strtoupper($titulo));

        $menu = 'true';

        $paquetes_r = TPaquete::with('precio_paquetes')->get();
        $paquete = TPaquete::with('precio_paquetes')->where('titulo', $title)->get();
        $paquete_destinos = TPaqueteDestino::with('destinos')->get();

        return view('page.itinerary', ['paquete'=>$paquete, 'paquete_destinos'=>$paquete_destinos, 'paquetes_r'=>$paquetes_r, 'menu'=>$menu]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function contact()
    {
        $from = 'diana@andesviagens.com';
        $from2 = 'paul@gotoperu.com';

        $destinations = $_POST['txt_destinations'];
        $other = $_POST['txt_other'];

        $name = $_POST['txt_name'];
        $email = $_POST['txt_email'];
        $date = $_POST['txt_date'];
        $tel = $_POST['txt_tel'];
        $duration = $_POST['txt_duration'];
        $number = $_POST['txt_number'];
//        $comment = $_POST['txt_comment'];


        try {
            Mail::send(['html' => 'notifications.page.client-form-design'], ['name' => $name], function ($messaje) use ($email, $name) {
                $messaje->to($email, $name)
                    ->subject('Andes Viagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'Andes Viagens');
            });


            Mail::send(['html' => 'notifications.page.admin-form-design'], [
                'destinations' => $destinations,
                'other' => $other,
                'duration' => $duration,
                'number' => $number,
                'date' => $date,
                'name' => $name,
                'email' => $email,
                'tel' => $tel
//                'comment' => $comment
            ], function ($messaje) use ($from) {
                $messaje->to($from, 'Andes Viagens')
                    ->subject('AndesViagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'andesviagens.com');
            });


            Mail::send(['html' => 'notifications.page.admin-form-design'], [
                'destinations' => $destinations,
                'other' => $other,
                'duration' => $duration,
                'number' => $number,
                'date' => $date,
                'name' => $name,
                'email' => $email,
                'tel' => $tel
//                'comment' => $comment
            ], function ($messaje) use ($from2) {
                $messaje->to($from2, 'Andes Viagens')
                    ->subject('AndesViagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'andesviagens.com');
            });


            return 'Thank you.';

        }
        catch (Exception $e){
            return $e;
        }

//        return view('page.itinerary', ['paquete'=>$paquete, 'paquete_destinos'=>$paquete_destinos]);
    }

    public function inquire()
    {
        $from = 'diana@andesviagens.com';
        $from2 = 'paul@gotoperu.com';

        $accommodation = $_POST['txt_accommodation'];
        $number = $_POST['txt_number'];

        $date = $_POST['txt_date'];
        $tel = $_POST['txt_tel'];
        $name = $_POST['txt_name'];
        $email = $_POST['txt_email'];
        $package = $_POST['txt_package'];

        $comment = $_POST['txt_comment'];


        try {
            Mail::send(['html' => 'notifications.page.client-form-design'], ['name' => $name], function ($messaje) use ($email, $name) {
                $messaje->to($email, $name)
                    ->subject('Andes Viagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'Andes Viagens');
            });


            Mail::send(['html' => 'notifications.page.admin-form-inquire'], [
                'accommodation' => $accommodation,
                'number' => $number,

                'date' => $date,
                'tel' => $tel,
                'name' => $name,
                'email' => $email,
                'package' => $package,
                'comment' => $comment
            ], function ($messaje) use ($from) {
                $messaje->to($from, 'Andes Viagens')
                    ->subject('AndesViagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'Andes Viagens');
            });


            Mail::send(['html' => 'notifications.page.admin-form-inquire'], [
                'accommodation' => $accommodation,
                'number' => $number,

                'date' => $date,
                'tel' => $tel,
                'name' => $name,
                'email' => $email,
                'package' => $package,
                'comment' => $comment
            ], function ($messaje) use ($from2) {
                $messaje->to($from2, 'Andes Viagens')
                    ->subject('AndesViagens')
                    /*->attach('ruta')*/
                    ->from('diana@andesviagens.com', 'Andes Viagens');
            });


            return 'Thank you.';

        }
        catch (Exception $e){
            return $e;
        }

//        return view('page.itinerary', ['paquete'=>$paquete, 'paquete_destinos'=>$paquete_destinos]);
    }

}
