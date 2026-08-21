/*
    cevapKontrol isimli bir fonksiyon oluşturuyoruz.

    Fonksiyon = belirli bir işi yapan kod bloğu.

    kullaniciCevabi parametresi:
    true  → kullanıcı "Evet" dedi.
    false → kullanıcı "Hayır" dedi.
*/
function cevapKontrol(kullaniciCevabi) {

    /*
        HTML içerisinde id="quick-result"
        olan alanı buluyoruz.

        Daha sonra sonucu bu alanın içine yazacağız.
    */
    const sonucAlani = document.getElementById("quick-result");


    /*
        Bu sorunun doğru cevabı "Hayır".

        Yani kullaniciCevabi false ise
        kullanıcı doğru cevap vermiştir.
    */
    if (kullaniciCevabi === false) {

        /*
            innerHTML ile HTML elementinin
            içerisine yeni içerik yazabiliyoruz.
        */
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

    /*
        Eğer kullanıcı "Evet" seçeneğine bastıysa
        yanlış cevap vermiş olur.
    */
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

/*
    =====================================================
    LAB 01 - POLİTİKA MOTORU SİMÜLATÖRÜ
    =====================================================

    Kullanıcı "Erişim İsteğini Değerlendir"
    butonuna bastığında bu fonksiyon çalışacak.
*/
function erisimiDegerlendir() {

    /*
        HTML'deki Kullanıcı Rolü seçim kutusunu buluyoruz.

        .value sayesinde kullanıcının seçtiği
        seçeneğin value değerini alıyoruz.
    */
    const kullaniciRolu =
        document.getElementById("user-role").value;


    /*
        Çok Faktörlü Kimlik Doğrulama (MFA)
        seçiminden seçilen değeri alıyoruz.
    */
    const mfaDurumu =
        document.getElementById("mfa-status").value;


    /*
        Cihaz güvenliği bilgisini alıyoruz.
    */
    const cihazDurumu =
        document.getElementById("device-status").value;


    /*
        Kullanıcının erişmek istediği kaynağı alıyoruz.
    */
    const kaynak =
        document.getElementById("resource").value;


    /*
        Risk seviyesini alıyoruz.
    */
    const riskSeviyesi =
        document.getElementById("risk-level").value;


    /*
        Sonucu göstereceğimiz HTML alanını buluyoruz.
    */

    

const mfaBasarili = mfaDurumu === "success";

const cihazGuvenli = cihazDurumu === "secure";

    const sonucAlani =
        document.getElementById("policy-result");

        /*
    =====================================================
    SONUÇ EKRANINDA GÖSTERİLECEK TÜRKÇE DEĞERLER
    =====================================================
*/


/*

    let kullanıyoruz çünkü aşağıdaki if yapısında
    bu değişkenin değerini değiştireceğiz.
*/
let kullaniciRoluMetni = "";


/*
    Seçilen role göre Türkçe karşılığı belirliyoruz.
*/
if (kullaniciRolu === "admin") {

    kullaniciRoluMetni = "Yönetici";

} else if (kullaniciRolu === "employee") {

    kullaniciRoluMetni = "Çalışan";

} else {

    kullaniciRoluMetni = "Harici Kullanıcı (Guest)";

}


/*
    MFA bilgisinin ekranda gösterilecek metni.
*/
let mfaMetni = "";

if (mfaDurumu === "success") {

    mfaMetni = "Başarılı";

} else {

    mfaMetni = "Başarısız";

}


/*
    Cihaz durumunun ekranda gösterilecek metni.
*/
let cihazMetni = "";

if (cihazDurumu === "secure") {

    cihazMetni = "Güvenli";

} else {

    cihazMetni = "Güvenli Değil";

}


/*
    Kaynağın ekranda gösterilecek metni.
*/
let kaynakMetni = "";

if (kaynak === "intranet") {

    kaynakMetni = "Kurum İçi Portal";

} else if (kaynak === "file-server") {

    kaynakMetni = "Dosya Sunucusu";

} else {

    kaynakMetni = "Yönetim Paneli";

}


/*
    Risk seviyesinin ekranda gösterilecek metni.
*/
let riskMetni = "";

if (riskSeviyesi === "low") {

    riskMetni = "Düşük";

} else if (riskSeviyesi === "medium") {

    riskMetni = "Orta";

} else {

    riskMetni = "Yüksek";

}


 

     /*
        hataMesaji başlangıçta boş.

        Bir erişim problemi buldukça
        bu metnin sonuna yeni açıklama ekleyeceğiz.
    */
    let hataMesaji = "";


    /*
        MFA başarısızsa hata mesajına ekle.
    */
    if (mfaBasarili === false) {

        hataMesaji += `
            <p>
                • Çok Faktörlü Kimlik Doğrulama (MFA)
                başarısız.
            </p>
        `;

    }


    /*
        Cihaz güvenli değilse
        ayrı olarak kontrol ediyoruz.
    */
    if (cihazGuvenli === false) {

        hataMesaji += `
            <p>
                • Cihaz örnek kurum güvenlik
                politikasına uygun değil.
            </p>
        `;

    }


    /*
        Risk yüksekse hata mesajına ekle.
    */
    if (riskSeviyesi === "high") {

        hataMesaji += `
            <p>
                • Erişim isteğinin risk seviyesi yüksek.
            </p>
        `;

    }


    /*
        Harici Kullanıcı (Guest),
        Dosya Sunucusu veya Yönetim Paneline erişemez.
    */
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


    /*
        Çalışan Yönetim Paneline erişemez.
    */
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


    /*
        hataMesaji boş değilse en az bir
        güvenlik problemi bulunmuş demektir.
    */
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


    /*
        Hiçbir problem bulunmadıysa
        erişime izin veriyoruz.
    */
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

/*
    =====================================================
    HAZIR SENARYO 1 - GÜVENLİ ÇALIŞAN
    =====================================================

    Form alanlarını normal ve izin verilebilir
    bir erişim isteğine göre otomatik doldurur.
*/
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
        Önceki bir senaryodan kalan
        ALLOW / DENY sonucunu temizliyoruz.
    */
    document.getElementById("policy-result").innerHTML = "";

}

/*
    =====================================================
    HAZIR SENARYO 2 - YETKİSİZ YÖNETİM ERİŞİMİ
    =====================================================

    Çalışan kullanıcının Yönetim Paneline
    erişmeye çalıştığı örnek senaryo.
*/
function yetkisizYonetimSenaryosu() {

    /*
        Kullanıcı rolü Çalışan.
    */
    document.getElementById("user-role").value =
        "employee";


    /*
        Kimlik doğrulama başarılı.
    */
    document.getElementById("mfa-status").value =
        "success";


    /*
        Cihaz güvenli.
    */
    document.getElementById("device-status").value =
        "secure";


    /*
        Ancak kullanıcı Yönetim Paneline
        erişmeye çalışıyor.
    */
    document.getElementById("resource").value =
        "admin-panel";


    /*
        Risk düşük.
    */
    document.getElementById("risk-level").value =
        "low";

         /*
        Eski değerlendirme sonucunu temizliyoruz.
    */
    document.getElementById("policy-result").innerHTML = "";



}


/*
    =====================================================
    HAZIR SENARYO 3 - RİSKLİ HARİCİ ERİŞİM
    =====================================================

    Birden fazla güvenlik probleminin
    aynı erişim isteğinde bulunabileceğini gösterir.
*/
function riskliHariciSenaryosu() {

    /*
        Harici Kullanıcı (Guest)
    */
    document.getElementById("user-role").value =
        "guest";


    /*
        MFA başarısız.
    */
    document.getElementById("mfa-status").value =
        "failed";


    /*
        Cihaz güvenli değil.
    */
    document.getElementById("device-status").value =
        "unsafe";


    /*
        Harici kullanıcının erişmesine izin vermediğimiz
        Dosya Sunucusunu seçiyoruz.
    */
    document.getElementById("resource").value =
        "file-server";


    /*
        Güvenlik sistemi tarafından belirlenmiş
        örnek risk seviyesi yüksek.
    */
    document.getElementById("risk-level").value =
        "high";

         document.getElementById("policy-result").innerHTML = "";

}

/*

    Kullanıcı "Formu Sıfırla" butonuna bastığında
    formu başlangıç değerlerine döndürür
    ve eski değerlendirme sonucunu temizler.
*/
function formuSifirla() {

  
    document.getElementById("policy-form").reset();


    /*
        Daha önce gösterilmiş bir
        ALLOW / DENY sonucu varsa siliyoruz.
    */
    document.getElementById("policy-result").innerHTML = "";

}


/*
    =====================================================
    LAB 02 - POLİTİKA OLUŞTURUCU
    =====================================================

    Kullanıcı "Politikayı Oluştur" butonuna bastığında
    bu fonksiyon çalışacak.
*/
function politikaOlustur() {

    /*
    Kullanıcının Politika Adı alanına yazdığı metni alıyoruz.
    .value: Form alanının mevcut değerini verir.
*/

const politikaAdi =
    document.getElementById("policy-name").value;

    /*
    Politikanın hangi kullanıcı rolü için tanımlandığını alıyoruz.
*/
const kullaniciRolu =
    document.getElementById("builder-user-role").value;
    
    /*
    Politikanın geçerli olacağı kaynağı alıyoruz.
*/
const kaynak =
    document.getElementById("builder-resource").value;


/*
    MFA gereksinimini alıyoruz.
*/
const mfaGereksinimi =
    document.getElementById("builder-mfa").value;


/*
    Cihaz güvenliği gereksinimini alıyoruz.
*/
const cihazGereksinimi =
    document.getElementById("builder-device").value;


/*
    Kullanıcının politika için belirlediği
    ALLOW / DENY kararını alıyoruz.
*/
const politikaKarari =
    document.getElementById("builder-decision").value;

    /*
    Oluşturulan politika kartını göstereceğimiz
    HTML alanını buluyoruz.
*/
const sonucAlani =
    document.getElementById("created-policy-result");

    /*
    =====================================================
    EKRANDA GÖSTERİLECEK TÜRKÇE DEĞERLER
    =====================================================
*/


/*
    Kullanıcı rolünün ekranda gösterilecek
    Türkçe karşılığını hazırlıyoruz.

    let kullanıyoruz çünkü aşağıdaki
    if yapılarında değer değişecek.
*/
let kullaniciRoluMetni = "";


if (kullaniciRolu === "employee") {

    kullaniciRoluMetni = "Çalışan";

} else if (kullaniciRolu === "admin") {

    kullaniciRoluMetni = "Yönetici";

} else {

    kullaniciRoluMetni = "Harici Kullanıcı (Guest)";

}

/*
    Kaynak değerini kullanıcıya gösterilecek
    metne çeviriyoruz.
*/
let kaynakMetni = "";


if (kaynak === "intranet") {

    kaynakMetni = "Kurum İçi Portal";

} else if (kaynak === "file-server") {

    kaynakMetni = "Dosya Sunucusu";

} else {

    kaynakMetni = "Yönetim Paneli";

}

/*
    MFA gereksiniminin ekranda
    gösterilecek açıklamasını belirliyoruz.
*/
let mfaMetni = "";


if (mfaGereksinimi === "required") {

    mfaMetni = "MFA başarılı olmalı";

} else {

    mfaMetni = "MFA zorunlu değil";

}

/*
    Cihaz güvenliği gereksiniminin
    ekranda gösterilecek açıklamasını belirliyoruz.
*/
let cihazMetni = "";


if (cihazGereksinimi === "required") {

    cihazMetni = "Cihaz güvenli olmalı";

} else {

    cihazMetni = "Cihaz güvenliği zorunlu değil";

}

/*
    Politika kararının kullanıcıya gösterilecek metnini hazırlıyoruz.
*/
let kararMetni = "";


if (politikaKarari === "allow") {

    kararMetni = "ALLOW - Erişime İzin Ver";

} else {

    kararMetni = "DENY - Erişimi Reddet";

}

    /*
        Politika adı boş bırakılmışsa politika oluşturmuyoruz.
    */
    if (politikaAdi.trim() === "") {

        sonucAlani.innerHTML =
            "<p>Lütfen politika adını girin.</p>";

        return;
    }

    
    
/*
    Hazırladığımız bütün bilgileri sonuç alanının içerisine HTML olarak yazıyoruz.
*/
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

/*
    =====================================================
    LAB 02 - POLİTİKA FORMUNU SIFIRLAMA
    =====================================================
*/
function politikaFormunuSifirla() {

    /*
        Formu ilk açıldığı durumuna döndürüyoruz.
        Metin alanı temizlenir ve select alanları
        başlangıç seçeneklerine geri döner.
    */
    document.getElementById("policy-builder-form").reset();

    /*
        Daha önce oluşturulmuş politika kartını
        sonuç alanından kaldırıyoruz.
    */
    document.getElementById("created-policy-result").innerHTML = "";
}