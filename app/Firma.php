<?php

namespace App;
Use DB;
use App\Puanlama;
use Barryvdh\Debugbar\Facade as Debugbar;

use Illuminate\Database\Eloquent\Model;

class Firma extends Model
{
    protected $table = 'firmalar';
    public $timestamps=false;
    public function sektorler()
    {
        return $this->belongsToMany('App\Sektor', 'firma_sektorler', 'firma_id', 'sektor_id');
    }
    public function faaliyetler()
    {
        return $this->belongsToMany('App\Faaliyet', 'firma_faaliyetler', 'firma_id', 'faaliyet_id');
    }
    public function departmanlar()
    {
        return $this->belongsToMany('App\Departman', 'firma_departmanlar', 'firma_id', 'departman_id');
    }
    public function firma_satilan_markalar()
    {
        return $this->hasMany('App\FirmaSatilanMarka', 'firma_satilan_markalar', 'firma_id', 'id');
    }
    public function kalite_belgeleri()
    {
        return $this->belongsToMany('App\KaliteBelgesi', 'firma_kalite_belgeleri', 'firma_id', 'belge_id')->withPivot('belge_no');
    }
    public function uretilen_markalar()
    {
        return $this->hasMany('App\UretilenMarka', 'firma_id', 'id');
    }
    public function firma_referanslar()
    {
        return $this->hasMany('App\FirmaReferans', 'firma_id', 'id');
    }
     public function belirli_istekliler()
    {
        return $this->hasMany('App\BelirliIstekli', 'firma_id', 'id');
    }
    public function firma_brosurler()
    {
        return $this->hasMany('App\FirmaBrosur', 'firma_id', 'id');
    }
    public function mali_bilgiler()
    {
        return $this->hasOne('App\MaliBilgi', 'firma_id', 'id');
    }
    public function ticari_bilgiler()
    {
        return $this->hasOne('App\TicariBilgi', 'firma_id', 'id');
    }
    public function iletisim_bilgileri()
    {
        return $this->hasOne('App\IletisimBilgisi', 'firma_id', 'id');
    }
    public function firma_calisma_bilgileri()
    {
        return $this->hasOne('App\FirmaCalismaBilgisi', 'firma_id', 'id');
    }
    public function adresler()
    {
        return $this->hasMany('App\Adres', 'firma_id', 'id');
    }
    public function sirket_turleri()
    {
        return $this->hasOne('App\SirketTuru', 'id', 'tur_id');
    }
    public function kullanicilar()
    {
        return $this->belongsToMany('App\Kullanici','firma_kullanicilar', 'firma_id','kullanici_id')->withPivot('rol_id', 'unvan');
    }
     public function ilanlar()
    {
        return $this->hasOne('App\Ilan', 'firma_id', 'id');
    }
    public function ilan_mallar()
    {
        return $this->hasManyThrough('App\IlanMal', 'App\Ilan','firma_id','ilan_id','id');
    }
     public function ilan_hizmetler()
    {
        return $this->hasManyThrough('App\IlanHizmet', 'App\Ilan','firma_id','ilan_id','id');
    }
     public function ilan_goturu_bedeller()
    {
        return $this->hasManyThrough('App\IlanGoturuBedel', 'App\Ilan','firma_id','ilan_id','id');
    }
    public function teklifler()
    {
        return $this->hasMany('App\Teklif', 'firma_id', 'id');
    }
    public function yorumlar()
    {
        return $this->hasMany('App\Yorum', 'firma_id', 'id');
    }
    public function yorumlarFirma()
    {
        return $this->hasMany('App\Yorum', 'yorum_yapan_firma_id', 'id');
    }
    public function puanlamalar()
    {
        return $this->hasMany('App\Puanlama', 'firma_id', 'id');
    }
    public function puanlamalarFirma()
    {
        return $this->hasMany('App\Puanlama', 'yorum_yapan_firma_id', 'id');
    }
    public function getUstSektor()
    {
      if($this->ticari_bilgiler->ust_sektor==1)
        return 'Sanayi';
      else if ($this->ticari_bilgiler->ust_sektor==2)
        return 'Tarım';
      else if ($this->ticari_bilgiler->ust_sektor==3)
        return 'Hizmet';
    }
    public function getCalisanProfil()
    {
      if($this->firma_calisma_bilgileri->calisan_profili==1)
        return 'Mavi Yaka';
      else if ($this->firma_calisma_bilgileri->calisan_profili==2)
        return 'Beyaz Yaka';
      else if ($this->firma_calisma_bilgileri->calisan_profili==3)
        return 'Mavi Yaka,Beyaz Yaka';
    }
    public function puanlamaOrtalama(){
              $puan = Puanlama::select( array(DB::raw("avg(kriter1+kriter2+kriter3+kriter4)/4 as ortalama")))
                                      ->where('firma_id',$this->id)
                                      ->get();
              $puan = $puan->toArray();
              return number_format($puan[0]['ortalama'],1);
    }
    /*public function getSehirAdi(){
              $adres = $this->adresler()->where('tur_id',1)->first();
              Debugbar::info($adres);
              return $adres->iller->adi;
    }*/
}
