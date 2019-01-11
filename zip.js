const fs = require('fs');
const sizeOf = require('image-size');

function generateZip(filename, i){  
    //ARQUIVOS DE IMAGENS

    var Notice = "true"
    var Texto = "Rio Ramos, parcialmente soterrado pelas obras Olímpicas, responsável pelo deságue na Baía da Guanabara de grande parte dos esgotos do Complexo do Alemão."
    var Username = "Hugo"
    var Veiculo = "Fonte: Colab"

    fs.copyFile('images/baia ('+i+').jpg', filename+'i.pt.jpg', (err) => {
        if (err) throw err;
        console.log('imagem: '+i+' copiada: PT');
    });

    fs.copyFile('images/baia ('+i+').jpg', filename+'i.en.jpg', (err) => {
        if (err) throw err;
        console.log('imagem: '+i+' copiada: EN');
    });

    fs.copyFile('images/baia ('+i+').jpg', filename+'i.es.jpg', (err) => {
        if (err) throw err;
        console.log('imagem: '+i+' copiada: ES');
    });
    
    var dimensions = sizeOf('images/baia ('+i+').jpg');

    var textJsonImage ={
        "description": "Baia"+i+"-image",
        "fieldType": "IMAGE",
        "restrictions":{
            "IMAGE_WIDTH":{
                "singleValue": dimensions.width
            },
            "IMAGE_HEIGHT":{
                "singleValue": dimensions.height
            }
        }
    }

    var jsonImage = fs.createWriteStream(filename+"i.json");
    jsonImage.once('open', function() {
        jsonImage.write(JSON.stringify(textJsonImage));
        jsonImage.end();
    })
    
    
    //ARQUIVOS DE TEXTO
    //notice
    var textJsonNotice ={
        "description": "Baia"+i+"-notice",
        "fieldType":"TEXT"
    }

    var jsonNotice = fs.createWriteStream(filename+"n.json");
    jsonNotice.once('open', function(fd) {
        jsonNotice.write(JSON.stringify(textJsonNotice));
        jsonNotice.end();
    })

    var textNoticePt = fs.createWriteStream(filename+"n.pt.txt");
    var textNoticeEn = fs.createWriteStream(filename+"n.en.txt");
    var textNoticeEs = fs.createWriteStream(filename+"n.es.txt");

    textNoticePt.once('open', function() {
        textNoticePt.write(Notice);
        textNoticePt.end();
    })

    textNoticeEn.once('open', function() {
        textNoticeEn.write(Notice);
        textNoticeEn.end();
    })

    textNoticeEs.once('open', function() {
        textNoticeEs.write(Notice);
        textNoticeEs.end();
    })

    //text
    var textJsonText ={
        "description":"Baia"+i+"-text",
        "fieldType":"TEXT"
    }

    var jsonText = fs.createWriteStream(filename+"t.json");
    jsonText.once('open', function() {
        jsonText.write(JSON.stringify(textJsonText));
        jsonText.end();
    })

    var textTextPt = fs.createWriteStream(filename+"t.pt.txt");
    var textTextEn = fs.createWriteStream(filename+"t.en.txt");
    var textTextEs = fs.createWriteStream(filename+"t.es.txt");
        
    textTextPt.once('open', function() {
        textTextPt.write(Texto);
        textTextPt.end();
    })

    textTextEn.once('open', function() {
        textTextEn.write(Texto);
        textTextEn.end();
    })

    textTextEs.once('open', function() {
        textTextEs.write(Texto);
        textTextEs.end();
    })

    //username
    var textJsonUsername ={
        "description":"Baia"+i+"-username",
        "fieldType":"TEXT"
    }

    var jsonUsername = fs.createWriteStream(filename+"u.json");
    jsonText.once('open', function(fd) {
        jsonUsername.write(JSON.stringify(textJsonUsername));
        jsonUsername.end();
    })

    var textUsernamePt = fs.createWriteStream(filename+"u.pt.txt");
    var textUsernameEn = fs.createWriteStream(filename+"u.en.txt");
    var textUsernameEs = fs.createWriteStream(filename+"u.es.txt");

    textUsernamePt.once('open', function() {
        textUsernamePt.write(Username);
        textUsernamePt.end();
    })

    textUsernameEn.once('open', function() {
        textUsernameEn.write(Username);
        textUsernameEn.end();
    })

    textUsernameEs.once('open', function() {
        textUsernameEs.write(Username);
        textUsernameEs.end();
    })

    //veiculo
    var textJsonVeiculo ={
        "description":"Baia"+i+"-veiculo",
        "fieldType":"TEXT"
    }

    var jsonVeiculo = fs.createWriteStream(filename+"v.json");
    jsonText.once('open', function(fd) {
        jsonVeiculo.write(JSON.stringify(textJsonVeiculo));
        jsonVeiculo.end();
    })

    var textVeiculoPt = fs.createWriteStream(filename+"v.pt.txt");
    var textVeiculoEn = fs.createWriteStream(filename+"v.en.txt");
    var textVeiculoEs = fs.createWriteStream(filename+"v.es.txt");

    textVeiculoPt.once('open', function() {
        textVeiculoPt.write(Veiculo);
        textVeiculoPt.end();
    })

    textVeiculoEn.once('open', function() {
        textVeiculoEn.write(Veiculo);
        textVeiculoEn.end();
    })

    textVeiculoEs.once('open', function() {
        textVeiculoEs.write(Veiculo);
        textVeiculoEs.end();
    })


}

var indice = new Padder(7);

function Padder(len, pad) {
    if (len === undefined) {
      len = 1;
    } else if (pad === undefined) {
      pad = '0';
    }
  
    var pads = '';
    while (pads.length < len) {
      pads += pad;
    }
  
    this.pad = function (what) {
      var s = what.toString();
      return pads.substring(0, pads.length - s.length) + s;
    };
  }


  //for (var v = 500; v < 616; v++) {
    var v = 620
    console.log("indice :: ", v)
    generateZip("testemosaico0000"+indice.pad(v), v)
  //}
  

