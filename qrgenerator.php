<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

    <div class="container">
        <div class="txtCenter">
            <h1>QR Generator</h1>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <label for="text">
                    Insert your text
                </label>                
                <input  id="text" type="text" value="" style="width:80%" placeholder="Generate QR code" /><br />
                <button class ="btn btn-warning" onclick="obj.getQR()">Generate</button>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div id="qrcode"></div>
            </div>
            <div class="col-md-4">
                <h4 id="desc">

                </h4>
            </div>
        </div>
    </div>

    
    <style>
        #qrcode img {
            width: 150px;
            height:150px;
            margin-top:15px;
        }
        .txtCenter h1{
            text-align: center;
        }

    </style>
<script src="//cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script>    
    class qrGen {
        constructor(params="") {
            console.log("start");
        }
        getQR = (p1="",p2="")=>{
            if(p1 == "" && p2 == ""){
                document.getElementById("qrcode").html = ""
                var text2 = document.getElementById("text").value;
                document.getElementById("desc").innerHTML ="";
                console.log(text2);
                this.generate(text2);
            }
            else{
                document.getElementById("desc").innerHTML =p2
                this.generate(p1);
            }
        }
        generate =(p1)=>{
            document.getElementById("qrcode").innerHTML = ""
            var qrcode = new QRCode("qrcode");            
            console.log(p1)
            qrcode.makeCode(p1);
        }
    };
    // var obj = new qrGen();
    // var queryString = window.location.search;
    // var urlParams = new URLSearchParams(queryString);
    // var code =urlParams.get('code');
    // var desc =urlParams.get('desc');
    // if(code !="" && desc!=""){
    //     obj.getQR(code,desc); 
    // }
    
</script>
<?php 
echo "<h1>".$_GET["item"]."</h1>";

?>

    
</body>
</html>