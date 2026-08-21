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


