let arr = [];

function namegacha() {
    const gname = document.getElementsByClassName("Box1")[0].value;
    if (gname == "" ){
        alert("nhập gì đi chứ");
        return;
    } 
    arr.push(gname);
    const list = document.querySelector('#listname ul');    
    const myli = document.createElement('li');
        myli.innerHTML = gname;
        list.appendChild(myli);
}

function RandomName() {
    if (arr.length==0) alert("chưa nhập chi mà :<")
    else{
    var name = arr[Math.floor(Math.random()*arr.length)];
    alert(name);
    }
}
function checkNumber(){
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    if(isNaN(x)){
        alert("chỉ nhập số thôi bạn ei!!!!");
        document.getElementById('n1').style.borderColor = "red";
    }else{
        document.getElementById('n1').style.borderColor = "green";
    }
    if(isNaN(y)){
        alert("chỉ nhập số thôi bạn ei!!!!");
        document.getElementById('n2').style.borderColor = "red";
    }else{
        document.getElementById('n2').style.borderColor = "green";
    }
}
function RandomNum() {
    var x = document.getElementById('n1').value;
    var y = document.getElementById('n2').value;
    let arr = [];
    for ( var i = x ; i <= y ; i++ ){
        arr.push(i);
    }
    if (arr.length==0) alert("chưa nhập chi mà :<")
    else{
        var num = arr[Math.floor(Math.random()*arr.length)];
        alert(num);
    }
}