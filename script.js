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


 

    if (mfaBasarili === false) {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>
                    ✕ DENY - Erişim Reddedildi
                </strong>

                <p>
                    Çok Faktörlü Kimlik Doğrulama (MFA)
                    başarısız olduğu için erişim reddedildi.
                </p>

            </div>
        `;


   
    
    } else if (cihazGuvenli === false) {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>
                    ✕ DENY - Erişim Reddedildi
                </strong>

                <p>
                    Cihaz kurumun örnek güvenlik politikasına
                    uygun olmadığı için erişim reddedildi.
                </p>

            </div>
        `;


    
    } else if (riskSeviyesi === "high") {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>
                    ✕ DENY - Erişim Reddedildi
                </strong>

                <p>
                    Erişim isteğinin risk seviyesi yüksek
                    olduğu için erişim reddedildi.
                </p>

            </div>
        `;


   
    
    } else if (
    kullaniciRolu === "guest" &&
    (
        kaynak === "file-server" ||
        kaynak === "admin-panel"
    )
) {

    sonucAlani.innerHTML = `
        <div class="result wrong">

            <strong>
                ✕ DENY - Erişim Reddedildi
            </strong>

            <p>
                Harici Kullanıcı (Guest) rolünün
                Dosya Sunucusu veya Yönetim Paneline
                erişmesine bu örnek kurum politikası
                izin vermemektedir.
            </p>

        </div>
    `;


   
    } else if (
        kullaniciRolu === "employee" &&
        kaynak === "admin-panel"
    ) {

        sonucAlani.innerHTML = `
            <div class="result wrong">

                <strong>
                    ✕ DENY - Erişim Reddedildi
                </strong>

                <p>
                    Yönetim Paneli yalnızca Yönetici
                    rolündeki kullanıcılar için tanımlandığı
                    için erişim reddedildi.
                </p>

            </div>
        `;


 
    } else {

        sonucAlani.innerHTML = `
            <div class="result correct">

                <strong>
                    ✓ ALLOW - Erişime İzin Verildi
                </strong>

                <p>
                    MFA başarılı, cihaz güvenli,
                    risk kabul edilebilir seviyede
                    ve kullanıcının rolü seçilen kaynak
                    için örnek kurum politikasına uygundur.
                </p>

            </div>
        `;
    }

}



