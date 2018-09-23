let btn = document.getElementById("btn");
btn.addEventListener("click",floating);
let input = document.getElementById("inputNumber");
let result = document.getElementById("result")
function floating() {
    let value = input.value;
    if (value > 2){
        let float2 = Math.round(value)
        result.innerText = "Result is: " + float2;
    } else{
        let float2 = randomFloat(value);
        result.innerText = "Result is: " + float2;
    }
}
function randomFloat(float3) {
    float3 = Math.random();
    return float3;
}