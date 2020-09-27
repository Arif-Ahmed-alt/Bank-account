const btn_dep=document.querySelector(".btn-dep");
const btn_with=document.querySelector(".btn-with");
const input_dep=document.getElementById("depositInput");
const input_with=document.getElementById("withdrawInput");
const display_deposit=document.querySelector(".display_deposit");
const display_withdraw=document.querySelector(".display_withdraw");
const display_bal=document.querySelector(".display_bal");
const text_dep=document.querySelector(".text-dep");
const text_with=document.querySelector(".text-with");

let deposit=0,withdraw=0,balance=0;

btn_dep.addEventListener("click",function(){
    deposit=deposit+Number(input_dep.value);
    balance=balance+Number(input_dep.value);
    let x=Number(input_dep.value);
    display_deposit.textContent='$ '+deposit;
    display_bal.textContent='$ '+balance;
    text_dep.textContent="Last deposit $"+x;
    text_dep.style.visibility= "visible";
    input_dep.value=" "
});

btn_with.addEventListener("click",function(){
    withdraw=withdraw+Number(input_with.value);
    balance=balance-Number(input_with.value);
    let y=Number(input_with.value);
    if(balance<0){
        balance=balance+Number(input_with.value);
        alert("You have not sufficient balance.Your balance is "+balance);
        withdraw=withdraw-Number(input_with.value)
    }else{
        display_withdraw.textContent='$ '+withdraw;
        display_bal.textContent="$ "+balance;
        text_with.textContent="Last withdraw $ "+y;
        text_with.style.visibility="visible"
    }
  
    input_with.value=" "
   
})