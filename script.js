
function cevapKontrol(kullaniciCevabi) {

   
    const sonucAlani = document.getElementById("quick-result");


   
    if (kullaniciCevabi === false) {

        
        sonucAlani.innerHTML = `
            <div class="result correct">

                <strong>✓ Doğru!</strong>

                <p>
                    Sıfır Güven yaklaşımında bir kullanıcının
                    kurum ağı içerisinde bulunması tek başına
                    güven sebebi değildir.
                </p>

                <p>
                    Kullanıcının kimliği, cihaz durumu,
                    erişmek istediği kaynak ve güvenlik
                    politikaları değerlendirilmelidir.
                </p>

            </div>
        `;

    }

   
    else {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>✕ Yanlış</strong>

                <p>
                    Ağ konumu tek başına güven için yeterli değildir.
                </p>

                <p>
                    Doğru cevap:
                    <strong>Hayır</strong>
                </p>

            </div>
        `;

    }

}


/* LAB 01 - POLİTİKA MOTORU SİMÜLATÖRÜ */


function erisimiDegerlendir() {

    
    const kullaniciRolu =
        document.getElementById("user-role").value;


    const mfaDurumu =
        document.getElementById("mfa-status").value;


    const cihazDurumu =
        document.getElementById("device-status").value;


   
    const kaynak =
        document.getElementById("resource").value;


    const riskSeviyesi =
        document.getElementById("risk-level").value;


    

const mfaBasarili = mfaDurumu === "success";

const cihazGuvenli = cihazDurumu === "secure";

    const sonucAlani =
        document.getElementById("policy-result");




  
let kullaniciRoluMetni = "";



if (kullaniciRolu === "admin") {

    kullaniciRoluMetni = "Yönetici";

} else if (kullaniciRolu === "employee") {

    kullaniciRoluMetni = "Çalışan";

} else {

    kullaniciRoluMetni = "Harici Kullanıcı (Guest)";

}




let mfaMetni = "";

if (mfaDurumu === "success") {

    mfaMetni = "Başarılı";

} else {

    mfaMetni = "Başarısız";

}




let cihazMetni = "";

if (cihazDurumu === "secure") {

    cihazMetni = "Güvenli";

} else {

    cihazMetni = "Güvenli Değil";

}




let kaynakMetni = "";

if (kaynak === "intranet") {

    kaynakMetni = "Kurum İçi Portal";

} else if (kaynak === "file-server") {

    kaynakMetni = "Dosya Sunucusu";

} else {

    kaynakMetni = "Yönetim Paneli";

}





let riskMetni = "";

if (riskSeviyesi === "low") {

    riskMetni = "Düşük";

} else if (riskSeviyesi === "medium") {

    riskMetni = "Orta";

} else {

    riskMetni = "Yüksek";

}


 

    
    let hataMesaji = "";


   
    if (mfaBasarili === false) {

        hataMesaji += `
            <p>
                • Çok Faktörlü Kimlik Doğrulama (MFA)
                başarısız.
            </p>
        `;

    }


    
    
    if (cihazGuvenli === false) {

        hataMesaji += `
            <p>
                • Cihaz örnek kurum güvenlik
                politikasına uygun değil.
            </p>
        `;

    }


    


    if (riskSeviyesi === "high") {

        hataMesaji += `
            <p>
                • Erişim isteğinin risk seviyesi yüksek.
            </p>
        `;

    }


    


    if (
        kullaniciRolu === "guest" &&
        (
            kaynak === "file-server" ||
            kaynak === "admin-panel"
        )
    ) {

        hataMesaji += `
            <p>
                • Harici Kullanıcı (Guest) rolünün
                seçilen kaynağa erişim yetkisi bulunmuyor.
            </p>
        `;

    }


   



    if (
        kullaniciRolu === "employee" &&
        kaynak === "admin-panel"
    ) {

        hataMesaji += `
            <p>
                • Çalışan rolünün Yönetim Paneline
                erişim yetkisi bulunmuyor.
            </p>
        `;

    }


    



    if (hataMesaji !== "") {

    sonucAlani.innerHTML = `
        <div class="result wrong">

            <h3>
                POLİTİKA MOTORU KARARI
            </h3>

            <strong>
                ✕ DENY - Erişim Reddedildi
            </strong>


            <!-- Kullanıcının oluşturduğu erişim isteği -->
            <div class="decision-details">

                <p>
                    <strong>Kullanıcı Rolü:</strong>
                    ${kullaniciRoluMetni}
                </p>

                <p>
                    <strong>MFA:</strong>
                    ${mfaMetni}
                </p>

                <p>
                    <strong>Cihaz:</strong>
                    ${cihazMetni}
                </p>

                <p>
                    <strong>Kaynak:</strong>
                    ${kaynakMetni}
                </p>

                <p>
                    <strong>Risk Seviyesi:</strong>
                    ${riskMetni}
                </p>

            </div>


            <div class="decision-reason">

                <h4>
                    Reddetme Nedenleri
                </h4>

                ${hataMesaji}

            </div>

        </div>
    `;

}


   
    else {

    sonucAlani.innerHTML = `
        <div class="result correct">

            <h3>
                POLİTİKA MOTORU KARARI
            </h3>

            <strong>
                ✓ ALLOW - Erişime İzin Verildi
            </strong>


            <!-- Kullanıcının oluşturduğu erişim isteği -->
            <div class="decision-details">

                <p>
                    <strong>Kullanıcı Rolü:</strong>
                    ${kullaniciRoluMetni}
                </p>

                <p>
                    <strong>MFA:</strong>
                    ${mfaMetni}
                </p>

                <p>
                    <strong>Cihaz:</strong>
                    ${cihazMetni}
                </p>

                <p>
                    <strong>Kaynak:</strong>
                    ${kaynakMetni}
                </p>

                <p>
                    <strong>Risk Seviyesi:</strong>
                    ${riskMetni}
                </p>

            </div>


            <div class="decision-reason">

                <h4>
                    Karar Nedeni
                </h4>

                <p>
                    Gerekli erişim koşulları sağlandı.
                    Kullanıcının rolü seçilen kaynağa erişim
                    için örnek kurum politikasına uygundur.
                </p>

            </div>

        </div>
    `;

}

}

/* HAZIR SENARYO 1 - GÜVENLİ ÇALIŞAN */


function guvenliCalisanSenaryosu() {

    document.getElementById("user-role").value =
        "employee";

    document.getElementById("mfa-status").value =
        "success";

    document.getElementById("device-status").value =
        "secure";

    document.getElementById("resource").value =
        "file-server";

    document.getElementById("risk-level").value =
        "low";


    /*
        Önceki bir senaryodan kalan sonucunu temizleme */
    document.getElementById("policy-result").innerHTML = "";

}

/* HAZIR SENARYO 2 - YETKİSİZ YÖNETİM ERİŞİMİ */



function yetkisizYonetimSenaryosu() {

    document.getElementById("user-role").value =
        "employee";


    
    document.getElementById("mfa-status").value =
        "success";


   
    document.getElementById("device-status").value =
        "secure";


    
    document.getElementById("resource").value =
        "admin-panel";


    
    document.getElementById("risk-level").value =
        "low";

    
    document.getElementById("policy-result").innerHTML = "";



}


/*   HAZIR SENARYO 3 - RİSKLİ HARİCİ ERİŞİM */


function riskliHariciSenaryosu() {

    
    document.getElementById("user-role").value =
        "guest";


    
    document.getElementById("mfa-status").value =
        "failed";



    document.getElementById("device-status").value =
        "unsafe";


    
    document.getElementById("resource").value =
        "file-server";


    document.getElementById("risk-level").value =
        "high";

         document.getElementById("policy-result").innerHTML = "";

}





function formuSifirla() {

  
    document.getElementById("policy-form").reset();


    document.getElementById("policy-result").innerHTML = "";

}


/*  LAB 02 - POLİTİKA OLUŞTURUCU */


function politikaOlustur() {

    

const politikaAdi =
    document.getElementById("policy-name").value;

   

const kullaniciRolu =
    document.getElementById("builder-user-role").value;
  

const kaynak =
    document.getElementById("builder-resource").value;



const mfaGereksinimi =
    document.getElementById("builder-mfa").value;



const cihazGereksinimi =
    document.getElementById("builder-device").value;



const politikaKarari =
    document.getElementById("builder-decision").value;

    
const sonucAlani =
    document.getElementById("created-policy-result");

   


let kullaniciRoluMetni = "";


if (kullaniciRolu === "employee") {

    kullaniciRoluMetni = "Çalışan";

} else if (kullaniciRolu === "admin") {

    kullaniciRoluMetni = "Yönetici";

} else {

    kullaniciRoluMetni = "Harici Kullanıcı (Guest)";

}




let kaynakMetni = "";


if (kaynak === "intranet") {

    kaynakMetni = "Kurum İçi Portal";

} else if (kaynak === "file-server") {

    kaynakMetni = "Dosya Sunucusu";

} else {

    kaynakMetni = "Yönetim Paneli";

}




let mfaMetni = "";


if (mfaGereksinimi === "required") {

    mfaMetni = "MFA başarılı olmalı";

} else {

    mfaMetni = "MFA zorunlu değil";

}





let cihazMetni = "";


if (cihazGereksinimi === "required") {

    cihazMetni = "Cihaz güvenli olmalı";

} else {

    cihazMetni = "Cihaz güvenliği zorunlu değil";

}




let kararMetni = "";


if (politikaKarari === "allow") {

    kararMetni = "ALLOW - Erişime İzin Ver";

} else {

    kararMetni = "DENY - Erişimi Reddet";

}

    /* Politika adı boş bırakılmışsa politika oluşturmuyoruz.*/

    if (politikaAdi.trim() === "") {

        sonucAlani.innerHTML =
            "<p>Lütfen politika adını girin.</p>";

        return;
    }

    
    

sonucAlani.innerHTML = `

    <div class="created-policy-card">

        <p class="created-policy-label">
            OLUŞTURULAN POLİTİKA
        </p>

        <h3>
            ${politikaAdi}
        </h3>


        <div class="decision-details">

            <p>
                <strong>Rol:</strong>
                ${kullaniciRoluMetni}
            </p>

            <p>
                <strong>Kaynak:</strong>
                ${kaynakMetni}
            </p>

        </div>


        <div class="policy-conditions">

            <h4>
                Koşullar
            </h4>

            <p>
                ✓ ${mfaMetni}
            </p>

            <p>
                ✓ ${cihazMetni}
            </p>

        </div>


        <div class="policy-decision">

            <h4>
                Politika Kararı
            </h4>

            <strong>
                ${kararMetni}
            </strong>

        </div>

    </div>

`;

}

/*  LAB 02 - POLİTİKA FORMUNU SIFIRLAMA */

function politikaFormunuSifirla() {

    
    document.getElementById("policy-builder-form").reset();

    
    document.getElementById("created-policy-result").innerHTML = "";
}

/*
   
    LAB 03 - ERİŞİM SENARYOLARI
   
*/


function senaryoBirKontrol(kullaniciKarari) {


   
    const sonucAlani =
        document.getElementById("scenario-1-result");



    if (kullaniciKarari === "allow") {


        sonucAlani.innerHTML = `

            <div class="result correct">

                <strong>
                    ✓ Doğru Karar
                </strong>

                <p>
                    Bu erişim isteği için ALLOW kararı uygundur.
                </p>

                <p>
                    Kullanıcının Çok Faktörlü Kimlik Doğrulaması (MFA)
                    başarılıdır, cihaz güvenlidir, risk seviyesi düşüktür
                    ve çalışan rolünün Dosya Sunucusuna erişimine
                    izin verilebilir.
                </p>

            </div>

        `;

    }

    else {


        sonucAlani.innerHTML = `

            <div class="result wrong">

                <strong>
                    ✕ Yanlış Karar
                </strong>

                <p>
                    Bu senaryo için uygun karar ALLOW olmalıdır.
                </p>

                <p>
                    MFA başarılı, cihaz güvenli ve risk seviyesi düşüktür.
                    Ayrıca çalışan rolünün Dosya Sunucusuna erişmesine
                    engel olan örnek bir politika koşulu bulunmamaktadır.
                </p>

            </div>

        `;

    }

}





function senaryoIkiKontrol(kullaniciKarari) {


    /*
        Senaryo 02 için sonucu göstereceğimiz HTML alanını buluyoruz.
    */
    const sonucAlani =
        document.getElementById("scenario-2-result");


    /*
        Bu senaryoda doğru karar DENY.

        Kullanıcı DENY seçtiyse
        doğru karar vermiştir.
    */
    if (kullaniciKarari === "deny") {


        sonucAlani.innerHTML = `

            <div class="result correct">

                <strong>
                    ✓ Doğru Karar
                </strong>

                <p>
                    Bu erişim isteği için DENY kararı uygundur.
                </p>

                <p>
                    Çok Faktörlü Kimlik Doğrulama (MFA)
                    başarılı olsa da erişim isteyen cihaz
                    güvenlik gereksinimlerini karşılamamaktadır.
                </p>

                <p>
                    Sıfır Güven yaklaşımında kullanıcının kimliği
                    tek başına yeterli değildir. Cihaz durumu da
                    erişim kararının bir parçası olarak değerlendirilebilir.
                </p>

            </div>

        `;

    }


    
    else {


        sonucAlani.innerHTML = `

            <div class="result wrong">

                <strong>
                    ✕ Yanlış Karar
                </strong>

                <p>
                    Bu senaryo için uygun karar DENY olmalıdır.
                </p>

                <p>
                    Kullanıcının MFA işlemi başarılıdır ancak
                    erişim isteyen cihaz güvenli değildir.
                </p>

                <p>
                    Bu nedenle yalnızca başarılı kimlik doğrulamaya
                    bakarak erişime izin verilmemelidir.
                </p>

            </div>

        `;

    }

}




function senaryoUcKontrol(kullaniciKarari) {


    /*
        Senaryo 03 sonucunu göstereceğimiz HTML alanını buluyoruz.
    */
    const sonucAlani =
        document.getElementById("scenario-3-result");


    
    
    if (kullaniciKarari === "deny") {


        sonucAlani.innerHTML = `

            <div class="result correct">

                <strong>
                    ✓ Doğru Karar
                </strong>

                <p>
                    Bu erişim isteği için DENY kararı uygundur.
                </p>

                <p>
                    Kullanıcının MFA işlemi başarılı ve cihazı
                    güvenlidir. Ancak çalışan rolünün Yönetim
                    Paneline erişim yetkisi bulunmamaktadır.
                </p>

                <p>
                    Erişim kararı verilirken yalnızca kimlik
                    doğrulama ve cihaz güvenliği değil,
                    kullanıcının erişmek istediği kaynak için
                    sahip olduğu yetki de değerlendirilmelidir.
                </p>

            </div>

        `;

    }


   
    else {


        sonucAlani.innerHTML = `

            <div class="result wrong">

                <strong>
                    ✕ Yanlış Karar
                </strong>

                <p>
                    Bu senaryo için uygun karar DENY olmalıdır.
                </p>

                <p>
                    MFA başarılı ve cihaz güvenli olsa bile
                    çalışan rolünün Yönetim Paneline erişim
                    yetkisi bulunmamaktadır.
                </p>

                <p>
                    Güvenli bir erişim isteği olması,
                    kullanıcının her kaynağa erişebileceği
                    anlamına gelmez.
                </p>

            </div>

        `;

    }

}


function senaryoSonuclariniSifirla() {


    document.getElementById("scenario-1-result").innerHTML = "";


    document.getElementById("scenario-2-result").innerHTML = "";


    document.getElementById("scenario-3-result").innerHTML = "";

}



/* OYUN 01 - ZERO TRUST BİLGİ TESTİ */



let quizSkoru = 0;

let soruCevaplandiMi = false;


let mevcutSoru = 1;


let dogruCevap = 2;

function quizCevapKontrol(secilenCevap) {

    if (soruCevaplandiMi === true) {
        return;
    }


    const sonucAlani =
        document.getElementById("quiz-result");

    const skorAlani =
        document.getElementById("quiz-score");

    const sonrakiSoruButonu =
        document.getElementById("next-question-button");


    soruCevaplandiMi = true;

    sonrakiSoruButonu.classList.add("show");


    let cevapAciklamasi = "";


    if (mevcutSoru === 1) {

        cevapAciklamasi =
            "Sıfır Güven yaklaşımında her erişim isteği kullanıcı, cihaz, kaynak ve güvenlik koşullarına göre değerlendirilmelidir.";

    }

    else if (mevcutSoru === 2) {

        cevapAciklamasi =
            "Politika Motoru (Policy Engine - PE), erişim isteğini mevcut politikalar ve bilgiler doğrultusunda değerlendirerek erişim kararını verir.";

    }

     


else if (mevcutSoru === 3) {

    cevapAciklamasi =
        "Politika Uygulama Noktası (Policy Enforcement Point - PEP), verilen erişim kararını uygular. Erişimi açabilir, engelleyebilir veya sonlandırabilir.";


}



else if (mevcutSoru === 4) {

    cevapAciklamasi =
        "Çok Faktörlü Kimlik Doğrulama (Multi-Factor Authentication - MFA), kullanıcının kimliğini birden fazla doğrulama yöntemiyle kontrol ederek kimlik doğrulama sürecini güçlendirir.";

}



else if (mevcutSoru === 5) {

    cevapAciklamasi =
        "Sıfır Güven yaklaşımında cihazın güvenlik durumu erişim kararında değerlendirilebilir. Güvenlik gereksinimlerini karşılamayan bir cihazın erişimi reddedilebilir veya kısıtlanabilir.";

}


    if (secilenCevap === dogruCevap) {

        quizSkoru = quizSkoru + 1;

        skorAlani.textContent =
            "Skor: " + quizSkoru;


        sonucAlani.innerHTML = `
            <div class="result correct">

                <strong>
                    ✓ Doğru!
                </strong>

                <p>
                    ${cevapAciklamasi}
                </p>

            </div>
        `;

    }

    else {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>
                    ✕ Yanlış!
                </strong>

                <p>
                    ${cevapAciklamasi}
                </p>

            </div>
        `;

    }

}




function sonrakiSoru() {

   
    const soruNumarasiAlani =
        document.getElementById("question-number");


    
    const soruAlani =
        document.getElementById("quiz-question");


    const sonucAlani =
        document.getElementById("quiz-result");


    const sonrakiSoruButonu =
        document.getElementById("next-question-button");


    const cevapBir =
        document.getElementById("answer-1");

    const cevapIki =
        document.getElementById("answer-2");

    const cevapUc =
        document.getElementById("answer-3");

    const cevapDort =
        document.getElementById("answer-4");


    
    if (mevcutSoru === 1) {

       
        mevcutSoru = 2;


        dogruCevap = 2;


        soruNumarasiAlani.textContent =
            "Soru 2 / 5";


        
        soruAlani.textContent =
            "Politika Motorunun (Policy Engine - PE) temel görevi nedir?";


        
        cevapBir.textContent =
            "Ağ kablolarını yönetmek";

        cevapIki.textContent =
            "Erişim isteğini değerlendirerek erişim kararı vermek";

        cevapUc.textContent =
            "Kullanıcının cihazını fiziksel olarak kontrol etmek";

        cevapDort.textContent =
            "Yalnızca parola oluşturmak";

    }


   
    else if (mevcutSoru === 2) {

        mevcutSoru = 3;


        
        dogruCevap = 3;


        soruNumarasiAlani.textContent =
            "Soru 3 / 5";


        
        soruAlani.textContent =
            "Politika Uygulama Noktasının (Policy Enforcement Point - PEP) temel görevi nedir?";


        cevapBir.textContent =
            "Yeni kullanıcı hesapları oluşturmak";

        cevapIki.textContent =
            "Kurumun bütün güvenlik politikalarını yazmak";

        cevapUc.textContent =
            "Erişim kararını uygulamak ve erişimi açmak veya engellemek";

        cevapDort.textContent =
            "Sadece risk seviyesini hesaplamak";

    }

   
else if (mevcutSoru === 3) {

    
    mevcutSoru = 4;


    dogruCevap = 1;


    soruNumarasiAlani.textContent =
        "Soru 4 / 5";


   
    soruAlani.textContent =
        "Sıfır Güven yaklaşımında Çok Faktörlü Kimlik Doğrulama (MFA) neden kullanılır?";


    
    cevapBir.textContent =
        "Kullanıcının kimliğini doğrulama sürecini güçlendirmek";

    cevapIki.textContent =
        "Cihazın IP adresini değiştirmek";

    cevapUc.textContent =
        "Ağ kablosunu şifrelemek";

    cevapDort.textContent =
        "Dosya sunucusunu kapatmak";

}



else if (mevcutSoru === 4) {

    
    mevcutSoru = 5;


    dogruCevap = 3;


    soruNumarasiAlani.textContent =
        "Soru 5 / 5";


    soruAlani.textContent =
        "Sıfır Güven yaklaşımında bir cihaz güvenlik gereksinimlerini karşılamıyorsa ne yapılabilir?";


    
    cevapBir.textContent =
        "Cihaza otomatik olarak tam erişim verilir";

    cevapIki.textContent =
        "Güvenlik durumu dikkate alınmaz";

    cevapUc.textContent =
        "Erişim reddedilebilir veya kısıtlanabilir";

    cevapDort.textContent =
        "Kullanıcının parolası kaldırılır";
   

sonrakiSoruButonu.textContent =
    "Sonucu Gör";

}

  

else if (mevcutSoru === 5) {

    quizSonucunuGoster();

    
    return;

}

   
    sonucAlani.innerHTML = "";


    soruCevaplandiMi = false;


    sonrakiSoruButonu.classList.remove("show");

}




function quizSonucunuGoster() {

    
    const soruNumarasiAlani =
        document.getElementById("question-number");

    const soruAlani =
        document.getElementById("quiz-question");

    const cevapAlani =
        document.querySelector(".quiz-answers");

    const sonucAlani =
        document.getElementById("quiz-result");

    const sonrakiSoruButonu =
        document.getElementById("next-question-button");


    
    let sonucMesaji = "";


   
    
    if (quizSkoru === 5) {

        sonucMesaji =
            "Mükemmel! Sıfır Güven Mimarisi'nin temel kavramlarını çok iyi anlamış görünüyorsun.";

    }


    
    else if (quizSkoru >= 3) {

        sonucMesaji =
            "İyi sonuç! Temel kavramları büyük ölçüde anlamışsın. Öğren bölümündeki ilgili konuları tekrar ederek bilgini daha da güçlendirebilirsin.";

    }


    
    else {

        sonucMesaji =
            "Bazı temel kavramları tekrar etmek faydalı olabilir. Öğren bölümündeki Zero Trust konularını gözden geçirip quiz'i yeniden deneyebilirsin.";

    }


    
    soruNumarasiAlani.textContent =
        "Quiz Tamamlandı";


    
    soruAlani.textContent =
        "Sonucun";



    cevapAlani.style.display =
        "none";


    
    sonrakiSoruButonu.classList.remove("show");


    sonucAlani.innerHTML = `
        <div class="quiz-final-result">

            <h2>
                ${quizSkoru} / 5
            </h2>

            <p>
                ${sonucMesaji}
            </p>

            <button
                type="button"
                onclick="quizTekrarBaslat()"
            >
                Quiz'i Tekrar Başlat
            </button>

        </div>
    `;

}




function quizTekrarBaslat() {

    
    quizSkoru = 0;

    mevcutSoru = 1;

    dogruCevap = 2;

    soruCevaplandiMi = false;


    const soruNumarasiAlani =
        document.getElementById("question-number");

    const skorAlani =
        document.getElementById("quiz-score");

    const soruAlani =
        document.getElementById("quiz-question");

    const cevapAlani =
        document.querySelector(".quiz-answers");

    const sonucAlani =
        document.getElementById("quiz-result");

    const sonrakiSoruButonu =
        document.getElementById("next-question-button");


    const cevapBir =
        document.getElementById("answer-1");

    const cevapIki =
        document.getElementById("answer-2");

    const cevapUc =
        document.getElementById("answer-3");

    const cevapDort =
        document.getElementById("answer-4");


    
    soruNumarasiAlani.textContent =
        "Soru 1 / 5";


    
    skorAlani.textContent =
        "Skor: 0";


   
    soruAlani.textContent =
        "Sıfır Güven yaklaşımında aşağıdakilerden hangisi doğrudur?";


    
    cevapBir.textContent =
        "Kullanıcı kurum ağındaysa otomatik olarak güvenilmelidir.";

    cevapIki.textContent =
        "Her erişim isteği güvenlik koşullarına göre değerlendirilmelidir.";

    cevapUc.textContent =
        "Sadece cihazın IP adresi kontrol edilmelidir.";

    cevapDort.textContent =
        "MFA kullanılıyorsa başka kontrol yapılmasına gerek yoktur.";


    
    cevapAlani.style.display = "flex";


    sonucAlani.innerHTML = "";


    sonrakiSoruButonu.textContent = "Sonraki Soru";


   
    sonrakiSoruButonu.classList.remove("show");

}

/*  OYUN 02 - BİLEŞENLERİ EŞLEŞTİR */



let suruklenenBilesen = "";


let suruklenenKart = null;


let dogruEslesmeSayisi = 0;


let toplamEslesmeSayisi = 0;


function suruklemeyiBaslat(event, bilesen, kart) {

    suruklenenBilesen = bilesen;

 
suruklenenKart = kart;


   
    const suruklemeGoruntusu = document.createElement("div");


    if (bilesen === "pe") {

        suruklemeGoruntusu.innerText = "Politika Motoru - PE";

    } else if (bilesen === "pa") {

        suruklemeGoruntusu.innerText = "Politika Yöneticisi - PA";

    } else {

        suruklemeGoruntusu.innerText = "Politika Uygulama Noktası - PEP";

    }


    
    suruklemeGoruntusu.classList.add("custom-drag-image");


    
    document.body.appendChild(suruklemeGoruntusu);


    
    event.dataTransfer.setDragImage(
        suruklemeGoruntusu,
        90,
        25
    );


    setTimeout(function () {

        suruklemeGoruntusu.remove();

    }, 0);

}


function suruklemeyiBitir(kart) {

    kart.classList.remove("dragging");

}




function birakmayaIzinVer(event) {

    
    event.preventDefault();

}



function bileseniBirak(dogruBilesen, sonucAlaniId, gorevAlaniId) {

   
    const sonucAlani =
        document.getElementById(sonucAlaniId);


    
    const gorevAlani =
        document.getElementById(gorevAlaniId);


    gorevAlani.classList.remove("drag-over");


    if (gorevAlani.dataset.eslestirildi !== "true") {

        toplamEslesmeSayisi++;

       
        gorevAlani.dataset.eslestirildi = "true";
    }


    
    if (suruklenenBilesen === dogruBilesen) {

       
        gorevAlani.classList.remove("wrong-match");


        gorevAlani.classList.add("correct-match");

        gorevAlani.appendChild(suruklenenKart);


       
        suruklenenKart.draggable = false;


        dogruEslesmeSayisi++;


        sonucAlani.innerHTML = `
            <div class="result correct">

                <strong>✓ Doğru Eşleştirme!</strong>

                <p>
                    Bileşeni doğru görevle eşleştirdin.
                </p>

            </div>
        `;


        
        setTimeout(function () {

            if (dogruBilesen === "pe") {

                document
                    .getElementById("matching-zone-2")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            } else if (dogruBilesen === "pa") {

                document
                    .getElementById("matching-zone-3")
                    .scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

            }

        }, 150);

    }


    
    else {

       
        gorevAlani.classList.remove("correct-match");


        
        gorevAlani.classList.add("wrong-match");


      
        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>✕ Yanlış Eşleştirme</strong>

                <p>
                    Seçtiğin bileşen bu göreve ait değil.
                    Tekrar deneyebilirsin.
                </p>

            </div>
        `;

    }


    
    if (toplamEslesmeSayisi === 3) {

        const tekrarBaslatButonu =
            document.getElementById("matching-restart-button");

        tekrarBaslatButonu.style.display = "block";

    }

}






function eslestirmeOyununuTekrarBaslat() {

   
    const bilesenAlani =
        document.querySelector(".matching-components");


    const gorevBir =
        document.getElementById("matching-zone-1");

    const gorevIki =
        document.getElementById("matching-zone-2");

    const gorevUc =
        document.getElementById("matching-zone-3");


    const kartlar =
        document.querySelectorAll(".matching-card");


    
    kartlar.forEach(function (kart) {

        bilesenAlani.appendChild(kart);

        
        kart.draggable = true;

        
        kart.classList.remove("dragging");

    });


   
    gorevBir.classList.remove(
        "correct-match",
        "wrong-match",
        "drag-over"
    );

    gorevIki.classList.remove(
        "correct-match",
        "wrong-match",
        "drag-over"
    );

    gorevUc.classList.remove(
        "correct-match",
        "wrong-match",
        "drag-over"
    );


    
    delete gorevBir.dataset.eslestirildi;
    delete gorevIki.dataset.eslestirildi;
    delete gorevUc.dataset.eslestirildi;


    
    document.getElementById("matching-result-1").innerHTML = "";
    document.getElementById("matching-result-2").innerHTML = "";
    document.getElementById("matching-result-3").innerHTML = "";


    
    dogruEslesmeSayisi = 0;
    toplamEslesmeSayisi = 0;


    
    suruklenenBilesen = "";
    suruklenenKart = null;


    document.getElementById(
        "matching-restart-button"
    ).style.display = "none";

}







let suruklenenAkisKarti = null;
function akisKartiniSurukle(event, kart) {

    
    suruklenenAkisKarti = kart;

   
const tumAkisKartlari =
    document.querySelectorAll(".access-flow-card");

const sonucAlani =
    document.getElementById("access-flow-result");


if (sonucAlani !== null) {

    sonucAlani.innerHTML = "";

}

tumAkisKartlari.forEach(function (akisKarti) {

    akisKarti.classList.remove(
        "access-flow-correct",
        "access-flow-wrong"
    );

});


    event.dataTransfer.effectAllowed = "move";


    event.dataTransfer.setData(
        "text/plain",
        "access-flow-card"
    );


    
    kart.classList.add("access-flow-dragging");

}



function akisKartiniBirak(kart) {

   
    kart.classList.remove("access-flow-dragging");

    suruklenenAkisKarti = null;

}




/*
    Bir kart başka bir kartın üzerine geldiğinde bırakma işlemine izin verir.
*/
function akisKartininUzerineGel(event) {

    event.preventDefault();

    event.dataTransfer.dropEffect = "move";

}




function akisKartiniTasi(hedefKart) {

   
    if (suruklenenAkisKarti === hedefKart) {
        return;
    }


    const akisListesi =
        document.querySelector(".access-flow-list");


    const kartlar =
        Array.from(
            akisListesi.querySelectorAll(".access-flow-card")
        );


    const suruklenenIndex =
        kartlar.indexOf(suruklenenAkisKarti);


    
    const hedefIndex =
        kartlar.indexOf(hedefKart);


  
    if (suruklenenIndex < hedefIndex) {

        hedefKart.after(suruklenenAkisKarti);

    }

    
   
    else {

        akisListesi.insertBefore(
            suruklenenAkisKarti,
            hedefKart
        );

    }

}







function akisSiralamasiKontrolEt() {

    
    const kartlar =
        document.querySelectorAll(".access-flow-card");


   
    const sonucAlani =
        document.getElementById("access-flow-result");

    let siralamaDogru = true;


kartlar.forEach(function (kart, index) {

    
    kart.classList.remove(
        "access-flow-correct",
        "access-flow-wrong"
    );


   
    const dogruSira =
        Number(kart.dataset.order);


    const mevcutSira =
        index + 1;


    
    if (dogruSira === mevcutSira) {

        kart.classList.add("access-flow-correct");

    }


    
    else {

        kart.classList.add("access-flow-wrong");

       
        siralamaDogru = false;

    }

});

    

if (siralamaDogru === true) {

    sonucAlani.innerHTML = `
        <div class="result correct">

            <strong>
                ✓ Doğru Sıralama!
            </strong>

            <p>
                Sıfır Güven erişim akışındaki adımları
                doğru sıraya yerleştirdin.
            </p>

        </div>
    `;



        kartlar.forEach(function (kart) {

            kart.draggable = false;

        }); 

    
        document.getElementById(
            "access-flow-restart-button"
        ).style.display = "block";

}



else {

    sonucAlani.innerHTML = `
        <div class="result wrong">

            <strong>
                ✕ Sıralama Henüz Doğru Değil
            </strong>

            <p>
                Bazı erişim adımları yanlış konumda.
                Kartların yerini değiştirerek tekrar dene.
            </p>

        </div>
    `;

    document.getElementById(
    "access-flow-restart-button"
    ).style.display = "none";

}

}







function akisKartlariniKaristir() {

   
    const akisListesi =
        document.querySelector(".access-flow-list");


    
    const kartlar =
        Array.from(
            akisListesi.querySelectorAll(".access-flow-card")
        );


    kartlar.sort(function () {

        return Math.random() - 0.5;

    });


   
    kartlar.forEach(function (kart) {

        akisListesi.appendChild(kart);

    });

  

    kartlar.forEach(function (kart) {

        kart.draggable = true;

    });


    

    kartlar.forEach(function (kart) {

        kart.classList.remove(
            "access-flow-correct",
            "access-flow-wrong"
        );

    });


    

    const sonucAlani =
        document.getElementById("access-flow-result");


    sonucAlani.innerHTML = "";

    document.getElementById(
    "access-flow-restart-button").style.display = "none";

}





function akisOyununuTekrarBaslat() {

   
    akisKartlariniKaristir();


    document.getElementById(
        "access-flow-restart-button"
    ).style.display = "none";

}