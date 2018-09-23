function задача1(){
   const u = $('#u').val();
   const d = $('#d').val();
   const e = $('#e').val();
   const e0 = 8.85 * Math.pow(10,-12);
   const w = e0*e*Math.pow(u,2)/(2*Math.pow(d,2));
   alert("Вiдповiдь: ω = " + w + " Дж/м3");
}

function задача2() {
    const c = $('#c').val();
    const u = $('#u2').val();
    const t = $('#t').val();
    const w = c*Math.pow(u,2)/2;
    const p = w/t;
    alert("Вiдповiдь: W = " + w + "Дж" +
        "\n P = " + Math.round(p) + "Вт");
}