<style>
.puanlama { 
    background: #dddddd;
    width: 30px;
    border-radius: 4px;
    position: absolute;
    margin: auto;
    text-align: center;
    color: white;
}
a{
    padding: 35px;
}
.davetEdil {
    border-style: 3px solid;
    background-color:#ddd;
    border-color: #ccc;
    border-radius:3px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0,0, 0.2), 0 6px 20px 0 rgba(0, 0, 0,0.19);       
}
.hover:hover {
    background-color:#eee;
}
</style>
    <h3>İlanlar</h3> 
    <hr class="hr">
    <?php 
        $count=$ilanlar->total();
        $firma_id = session()->get('firma_id');
        $firma_adi = session()->get('firma_adi');  
    ?>        
    <input type="hidden" name="totalCount" value='{{$ilanlar->total()}}'>
        
    @foreach($ilanlar as $ilan)
            <div class="ilanDetayPop "  name="{{$ilan->ilan_id}}">
                <div class="pop-up"  style="display: none;
                                                position: absolute;
                                                left: 200px;
                                                width: 300px;
                                                padding: 10px;
                                                background: #006c90;
                                                color: #fff;
                                                border: 1px solid #1a1a1a;
                                                font-size: 90%;
                                                border-radius: 5px;
                                                z-index: 1000;">
                                <p id="popIlanAdi"><img src="{{asset('images/ok.png')}}"><strong>İlan Adı :</strong> {{$ilan->ilanadi}}</p>
                                <p id="popIlanTuru"><img src="{{asset('images/ok.png')}}"><strong>İlan Türü :</strong> {{$ilan->getIlanTuru()}}</p>
                                <p id="popIlanUsulu"><img src="{{asset('images/ok.png')}}"><strong>Usulü : </strong>{{$ilan->getRekabet()}}</p>
                                <p id="popIlanSektoru"><img src="{{asset('images/ok.png')}}"><strong>İlan Sektörü :</strong>{{$ilan->getIlanSektorAdi($ilan->ilan_sektor)}}</p>
                                <p id="popIlanAciklama"><img src="{{asset('images/ok.png')}}"><strong>Açıklama : </strong>{{$ilan->aciklama}}</p>
                                <p id="popIlanIsinSuresi"><img src="{{asset('images/ok.png')}}"><strong>İşin Süresi:</strong> {{$ilan->isin_suresi}}</p>
                                <p id="popIlanSözlesmeTuru"><img src="{{asset('images/ok.png')}}"><strong>Sözleşme Türü : </strong>{{$ilan->getSozlesmeTuru()}}</p>                                
                </div>
                <div class="row hover">
                    <div class="col-sm-10">
                        <p style="font-size: 17px; color: #333"><b>İlan Adı: {{$ilan->ilanadi}}</b></p>
                        
                        @if(($ilan->puanlamaOrtalama($ilan->firmaid))> 0)
                        
                            <div class="puanlama">{{$ilan->puanlamaOrtalama($ilan->firmaid)}}</div>
                            <p style="font-size:15px; color:#666"><a href="{{url('firmaDetay/'.$ilan->firmaid)}}" >@if($ilan->goster == 0)
                                    Firma Adı Gizli
                                @else    
                                    Firma: {{$ilan->adi}}
                                @endif
                                </a></p>
                        @else
                            <p style="font-size:15px ; color:#666" ><a href="{{url('firmaDetay/'.$ilan->firmaid)}}" style="padding: 0px" >Firma: {{$ilan->adi}}</a></p>
                        @endif
                            <p>{{$ilan->iladi}}</p>
                            <p style="font-size: 13px;color: #999">{{date('d-m-Y', strtotime($ilan->yayin_tarihi))}}</p>
                     
                    </div>
                    <div class="col-sm-2">
                        @if(Auth::guest())
                        @else
                            @if(($ilan->usulu == 2 && $ilan->belirliIstekliControl($ilan->ilan_id,$firma_id) == 1) || $ilan->usulu == 1) <!-- Eğer bir firma davet edilmediyse o ilanda başvuru butonu çıkmaz-->
                                
                                  <a href="#"><button type="button" class="btn btn-primary" name="{{$ilan->firma_id}} {{$ilan->ilan_id}}" id="{{$ilan->ilan_id}}" style='float:right;margin-top:60px'>Başvur</button></a><br><br>
                               
                            @endif    
                        @endif
                    </div>
               
                </div>
                
                <hr class="hr">
               
            </div>
    @endforeach
{{$ilanlar->links()}}
<script>
    $('.ilanDetayPop').mouseenter(function(){
        $(this).children("div.pop-up").show();
    });
    $('.ilanDetayPop').mouseleave(function () {
        $('div.pop-up').hide();
    });
    
   var ilan_id;
   
   var name;
   var firma_id;
   var deneme;
   $(".btn-primary").click(function(){
       name=$(this).attr("name");
      
       deneme=name.split(" ");
       firma_id=deneme[0];
       ilan_id=deneme[1];
     
     
       funcIlanFirma();
       
    });
    function func(){          
           $.ajax({
            type:"GET",
            url:"{{asset('basvuruControl')}}",
            data:{ilan_id:ilan_id
            },
            cache: false,
            success: function(data){
                console.log(data);
                    if(data==0){ 
                        
                        window.location.href = "{{asset('teklifGor')}}" +"/" + firma_id+"/"+ilan_id;    
                    }
                    else{

                        alert("Bu İlana Daha Önce Teklif Verdiniz.Teklif Veremezsiniz.Ancak Teklifi Düzenleye Bilirsiniz.");
                    }
            }
        });
    }
    
    function funcIlanFirma(){          
        $.ajax({
        type:"GET",
        url:"{{asset('IlanFirmaControl')}}",
        data:{ilan_id:ilan_id},
        cache: false,
        success: function(data){
            console.log(data);
                if(data==0){ 
                        
                    func();    
                }
                else{

                   alert("Kendi Firmanızın İlanına Başvuru Yapamazsınız!");
                }
            }
        });
    }
    
    $(".puanlama").each(function(){
        var puan = $(this).text();
        if(puan > 0 && puan < 3){
            $(this).css("background", "#e65100");
        }
        else if (puan >= 3 && puan <= 5){
            $(this).css("background", "#e54100");
        }
        else if (puan > 5 && puan <= 6){
            $(this).css("background", "#f46f02");
        }
        else if (puan > 5 && puan <= 6){
            $(this).css("background", "#f46f02");
        }
        else if (puan > 6 && puan <= 7){
            $(this).css("background", "#ffba04");
        }
        else if (puan > 7 && puan <= 8){
            $(this).css("background", "#d6d036");
        }
        else if (puan > 8 && puan <= 9){
            $(this).css("background", "#a5c530");
        }
        else if (puan > 9 && puan <= 10){
            $(this).css("background", "#45c538");
        }
        
    });
    $('#ilanCount').children().html("<strong>Arama kriterlerinize uyan</strong><img src='{{asset('images/sol.png')}}'><strong style='font-size:36px'> {{$count}} </strong>ilan");

</script>
