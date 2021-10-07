function kamus() {
    var input = document.getElementById("kata").value;
    var w = document.getElementById("go").value;

    switch (input) {
        case "Baper":
            alert("Bawa Perasaan");
            break;
        case "Bucin":
            alert("Budak Cinta");
            break;
        case "Gabut":
            alert("Bosan dan tidak tahu harus berbuat apa");
            break;
        case "Gaje":
            alert("Gak Jelas");
            break;
        case "Gercep":
            alert("Gerak Cepat");
            break;
        case "Halu":
            alert("Halusinasi; menggambarkan seseorang dengan khayalan yang tinggi");
            break;
        case "Japri":
            alert("Jaringan Pribadi");
            break;
        case "Komuk":
            alert("Kondisi Muka");
            break;
        case "Mantul":
            alert("Mantap Betul");
            break;
        case "Pansos":
            alert("Panjat Sosial");
            break;
        case "AFK":
            alert("Away From Keyboard");
            break;
        case "ASAP":
            alert("As Soon As Possible");
            break;
        case "Nolep":
            alert("No Life");
            break;
        case "OOT":
            alert("Out of Topic");
            break;
        case "Kinap":
            alert("Panik");
            break;
        case "Rokum":
            alert("Rumah");
            break;
        default:
            alert("Mohon maaf kata yang dicari tidak tersedia");

    }
}
