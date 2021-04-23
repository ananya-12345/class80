var x=[];
function submit(){
    var d=[];
    for(var a=1; a<=4;a++){
        var b=document.getElementById("name_of_the_student_"+a).value; 
        console.log(b);
        x.push(b);
    }
    console.log(x);
    var l=x.length;
    console.log(l);
    for(var h=0; h<l;h++){
        d.push("<h4>name is  "+x[h]+"</h4>");
        console.log(d);
    }
    document.getElementById("display_name_with_commas").innerHTML= d;
    var g=d.join(" ");
    console.log(g);
    document.getElementById("display_name_without_commas").innerHTML=g;
    document.getElementById("sort_button").style.display="inline-block";
    document.getElementById("submit_button").style.display="none";
}
function sorting(){
    x.sort();
    console.log(x);
    var i=[];
    var l1=x.length;
    console.log(l1);
    for(var h1=0; h1<l1;h1++){
        i.push("<h4>name is  "+x[h1]+"</h4>");
        console.log(i);
    }
    var g1=i.join(" ");
    console.log(g1);
    document.getElementById("display_name_without_commas").innerHTML=g1;
}