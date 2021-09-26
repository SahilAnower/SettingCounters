let datas=document.querySelectorAll(".data");

datas.forEach((data)=>{
    data.innerHTML=0;
    /*
    First setting the initial value of counter to zero for every element. Then getting the target value and setting increment value
    by 100, and accordingly calling setTimeout to call the same function again and again untill current value reaches the target.
    */
    let changeCount=()=>{
        let target=+data.getAttribute("data-target");
        let incr=target/100;
        let curr=+data.innerHTML;
        if(curr < target){
            data.innerHTML=`${curr+incr}`;
            setTimeout(() => {
                changeCount();
            }, 20);
        }else{
            data.innerHTML=`${target}`;
            let firsts=document.querySelectorAll(".first");
            firsts.forEach((first)=>{
                first.style.color="burlywood";
            })
        }
    }

    changeCount();
})