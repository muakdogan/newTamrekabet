var ScriptResourceManager = {
    resourceArray: [{"ResourceId":63,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.AdsRelevantToMe","ResourceValue":"BANA UYGUN İLANLAR","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":64,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.AdvancedSearch","ResourceValue":"DETAYLI ARA","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":65,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.CareerGuideTitle","ResourceValue":"Onlar Kariyerini Nasıl Çizdi?","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":66,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.City","ResourceValue":"Şehir","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":67,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.ClickForDetail","ResourceValue":"İNCELEMEK İÇİN TIKLA","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":68,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.FeaturedJobs","ResourceValue":"ÖNE ÇIKAN İŞ İLANLARI","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":69,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.FindJob","ResourceValue":"İŞ BUL","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":70,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.FirstPublished","ResourceValue":"İLK DEFA YAYINLANAN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":71,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.FoundTheJobKariyerNet","ResourceValue":"{0} işini Kariyer.net'ten buldu!","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":72,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.GototheKariyerRehberiForMore","ResourceValue":"Daha fazlası için Kariyer Rehberi'ne git","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":73,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.GototheSuccessStory","ResourceValue":"Daha fazlası için Başarı Hikayeleri'ne git","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":74,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Handicap","ResourceValue":"ENGELLİ","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":75,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.InternshipPartTime","ResourceValue":"STAJ İŞ İLANLARI","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":76,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Job","ResourceValue":"İLAN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":77,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.JobAdv","ResourceValue":"İŞ İLANI","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":78,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.JobAdvertisementsForJobSeekersEmployeerForEmployeeSeekers","ResourceValue":"İş arayanlar için iş ilanları, eleman arayanlar için eleman - Kariyer.net","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":79,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.JobsByAreas","ResourceValue":"Departmanlara Göre İş İlanları","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":80,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.JobsByCities","ResourceValue":"İllere Göre İş İlanları","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":81,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.JobsBySector","ResourceValue":"Sektöre Göre İş İlanları","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":82,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Keyword","ResourceValue":"Pozisyon, firma adı, sektör","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":83,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Manager","ResourceValue":"YÖNETİCİ","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":84,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.NewGraduate","ResourceValue":"YENİ MEZUN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":85,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.OnlyPublishedOnKariyerNet","ResourceValue":"SADECE KARİYER.NET'TE YAYINLANAN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":86,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.PublishedToday","ResourceValue":"BUGÜN YAYINLANAN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":87,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.ServiceEmployee","ResourceValue":"HİZMET<br>PERSONELİ","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":88,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.ShowAllCities","ResourceValue":"Tüm Şehirleri Göster","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":89,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.ShowAllJobAreas","ResourceValue":"Tüm Departmanları Göster","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":90,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.ShowAllSectors","ResourceValue":"Tüm Sektörleri Göster","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":91,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Specialist","ResourceValue":"UZMAN","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":92,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.TotalJobCount","ResourceValue":"Senin için burada {0:0,0} ilan var!","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":93,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.Worker","ResourceValue":"İŞÇİ","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":94,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.AdsRelevantToMe","ResourceValue":"ADS RELEVANT TO ME","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":95,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.AdvancedSearch","ResourceValue":"ADVANCED","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":96,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.CareerGuideTitle","ResourceValue":"How They Find Career Path","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":97,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.City","ResourceValue":"City","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":98,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.ClickForDetail","ResourceValue":"Click For Detail","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":99,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.FeaturedJobs","ResourceValue":"Featured Jobs","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":100,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.FindJob","ResourceValue":"FIND JOB","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":101,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.FirstPublished","ResourceValue":"First Published","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":102,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.FoundTheJobKariyerNet","ResourceValue":"{0} found the job Kariyer.net!","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":103,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.GototheKariyerRehberiForMore","ResourceValue":"Go to the Kariyer Rehberi for more","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":104,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.GototheSuccessStory","ResourceValue":"Go to the SuccessStory for more","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":105,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Handicap","ResourceValue":"HANDICAP","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":106,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.InternshipPartTime","ResourceValue":"INTERNSHIP AND PART-TIME","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":107,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Job","ResourceValue":"Job","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":108,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.JobAdv","ResourceValue":"Jobs","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":109,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.JobAdvertisementsForJobSeekersEmployeerForEmployeeSeekers","ResourceValue":"Kariyer.net – Job advertisements for job seekers, employees for employee seekers","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":110,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.JobsByAreas","ResourceValue":"Jobs By Areas","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":111,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.JobsByCities","ResourceValue":"Jobs By Cities","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":112,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.JobsBySector","ResourceValue":"Jobs By Sector","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":113,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Keyword","ResourceValue":"Position, firm name, sector","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":114,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Manager","ResourceValue":"MANAGER","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":115,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.NewGraduate","ResourceValue":"NEW <br> GRADUATE","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":116,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.OnlyPublishedOnKariyerNet","ResourceValue":"ONLY PUBLISHED ON KARIYER.NET","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":117,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.PublishedToday","ResourceValue":"PublishedToday","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":118,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.ServiceEmployee","ResourceValue":"SERVICE <br> EMPLOYEE","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":119,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.ShowAllCities","ResourceValue":"Show All Cities","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":120,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.ShowAllJobAreas","ResourceValue":"Show All Job Areas","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":121,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.ShowAllSectors","ResourceValue":"Show All Sectors","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":122,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Specialist","ResourceValue":"SPECIALIST","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":123,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.TotalJobCount","ResourceValue":"{0} jobs here for you!","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":124,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.Worker","ResourceValue":"WORKER","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":548,"ResourceLanguageId":1,"ResourceKey":"Resource.Home.StudentJob","ResourceValue":"PART - TIME İŞ İLANLARI","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":549,"ResourceLanguageId":2,"ResourceKey":"Resource.Home.StudentJob","ResourceValue":"STUDENT JOB","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6265,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageLevelAdvanced","ResourceValue":"İleri","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6266,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageLevelBasic","ResourceValue":"Temel","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6267,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageLevelBeginning","ResourceValue":"Başlangıç","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6268,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageLevelGood","ResourceValue":"İyi","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6269,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageLevelMedium","ResourceValue":"Orta","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6270,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageReading","ResourceValue":"Okuma","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6271,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageSpeaking","ResourceValue":"Konuşma","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6272,"ResourceLanguageId":1,"ResourceKey":"Resource.Common.LanguageWriting","ResourceValue":"Yazma","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6331,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageLevelAdvanced","ResourceValue":"Advanced","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6332,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageLevelGood","ResourceValue":"Good","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6333,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageReading","ResourceValue":"Reading","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6334,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageSpeaking","ResourceValue":"Speaking","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":6335,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageWriting","ResourceValue":"Writing","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":7841,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageLevelMedium","ResourceValue":"Medium","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":7842,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageLevelBasic","ResourceValue":"Basic","ResourceSiteId":0,"ResourceIsDeleted":false},{"ResourceId":7843,"ResourceLanguageId":2,"ResourceKey":"Resource.Common.LanguageLevelBeginning","ResourceValue":"Beginning","ResourceSiteId":0,"ResourceIsDeleted":false}],
    ReadLanguage: function() {
        var nameEQ = 'KNETLang=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    ReadSite: function() {
        var nameEQ = 'KNETSite=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    Get: function (key, languageId) {
        if (languageId == null)
        {
            languageId = ScriptResourceManager.ReadLanguage();
            if(languageId == null){
                alert('Unable to read KNETLang');
            }
        }

        var found = false;
        for (i = 0; i < ScriptResourceManager.resourceArray.length; i++) {
            if (ScriptResourceManager.resourceArray[i].ResourceLanguageId == languageId && ScriptResourceManager.resourceArray[i].ResourceKey == key) {
                found = true;
                return ScriptResourceManager.resourceArray[i].ResourceValue;
            }
        }

        if (found == false) {
            return  key;
            //// bu kısımda insert kısmı eklenecek
        }
    }
}