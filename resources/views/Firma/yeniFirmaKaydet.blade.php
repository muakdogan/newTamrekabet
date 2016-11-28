@extends('layouts.app')

<?php use App\IletisimBilgi; 
use App\Il;?>

@section('content')
    <div class="container">
        <div class="col-lg-6">
            {!! Form::open(array('url'=>'yeniFirma/'.$kullanici_id->id ,'method' => 'POST','files'=>true))!!}
            <div class="form-group">
                <h1>Firma Bilgileri</h1>
                <div class="form-group">
                    {!! Form::label('Firma adı') !!}
                    {!! Form::text('adi', null, 
                    array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Firma adı')) !!}
                </div>
                <div class="form-group ">
                    {!! Form::label('Sektorler') !!}
                    
                        <select class="form-control" name="sektor_id" id="sektor_id" required>
                            <option selected disabled>Seçiniz</option>
                            @foreach($sektorler as $sektor)
                            <option  value="{{$sektor->id}}" >{{$sektor->adi}}</option>
                            @endforeach
                        </select>
                  
                </div>
                <div class="form-group">
                    {!! Form::label('Telefon') !!}
                    {!! Form::text('telefon', null, 
                    array('required', 
                    'class'=>'form-control', 
                    'placeholder'=>'Telefonunuz')) !!}
                </div>
                
                <label for="">Şehir</label>
                <select class="form-control input-sm" name="il_id" id="il_id" required>
                    <option selected disabled>Seçiniz</option>
                    @foreach($iller as $il)
                    <option value="{{$il->id}}">{{$il->adi}}</option>
                    @endforeach
                </select>
            </div>

            <div class="form-group">
                <label for="">İlçe</label>
                <select class="form-control input-sm" name="ilce_id" id="ilce_id" required>
                  <option selected disabled>Seçiniz</option>
                </select> 
            </div>
            <div class="form-group">
                <label for="">Semt</label>
                <select class="form-control input-sm" name="semt_id" id="semt_id" required>
                    <option selected disabled>Seçiniz</option>   
                </select>     
            </div>
            <br>
            
            
            <div class="form-group">
                {!! Form::submit('Kaydet!', 
                array('class'=>'btn btn-primary')) !!}
            </div>
      
            {!! Form::close() !!}
        </div>
    </div>

    <script>
$('#il_id').on('change', function (e) {
    console.log(e);

    var il_id = e.target.value;

    //ajax
    $.get('/tamrekabet/public/index.php/ajax-subcat?il_id=' + il_id, function (data) {
        //success data
        //console.log(data);
        $('#ilce_id').empty();
         $('#ilce_id').append('<option value=""> Seçiniz </option>');
        $.each(data, function (index, subcatObj) {
            $('#ilce_id').append('<option value="' + subcatObj.id + '">' + subcatObj.adi + '</option>');
        });
    });
});

$('#ilce_id').on('change', function (e) {
    console.log(e);

    var ilce_id = e.target.value;

    //ajax
    $.get('/tamrekabet/public/index.php/ajax-subcatt?ilce_id=' + ilce_id, function (data) {
        //success data
        //console.log(data);
        $('#semt_id').empty();
        $('#semt_id').append('<option value=" ">Seçiniz </option>');
        $.each(data, function (index, subcatObj) {
            $('#semt_id').append('<option value="' + subcatObj.id + '">' + subcatObj.adi + '</option>');
        });
    });
});
$('#semt_id').on('change', function (e) {
    console.log(e);

    var semt_id = e.target.value;

    //ajax
    $.get('/tamrekabet/public/index.php/ajax-subcattt?semt_id=' + semt_id, function (data) {
        //success data
        //console.log(data);
        $('#semt_id').empty();
        $.each(data, function (index, subcatObj) {
            $('#semt_id').append('<option value="' + subcatObj.id + '">' + subcatObj.adi + '</option>');
        });
    });
});




    </script>


@endsection