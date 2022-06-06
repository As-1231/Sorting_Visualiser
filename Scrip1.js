const option_size = document.querySelector('#array');
let step_count = document.querySelector('#step_count');
let par = document.querySelector('#par');
let size_of_array;
let is_ready = false;
let i = 0; let j = 0;
let left_to_click=0;
let last;
option_size.addEventListener('change', () => {
    is_ready=false;
    step_count.innerText = 0;
    const arr = par.children;
    let count_prev = par.childElementCount;
    document.getElementById("next").disabled = false;
    while (count_prev--) {
        par.removeChild(arr[0]);
    }
    size_of_array = parseInt(option_size.value);
    left_to_click=size_of_array;
    last=size_of_array;
    is_ready = !true;
    i = 0; j = 1;
    for (let i = 0; i < size_of_array; i++) {
        let box = document.createElement('div');
        let k2 = 100 / (size_of_array + 1);
        box.classList.add('elements');
        box.classList.add('box');
        box.style.width = (k2 + "%");
        box.innerText = "Click to add element";
        box.addEventListener('click',()=>{
            if(!is_ready)
            {
            let value=prompt("enter value");
            if(value!=null)
            {
                box.innerText=value;
            }
            else{
                return ;
            }
            left_to_click--;
            if(!left_to_click){is_ready=true;}
            }
        })
        par.appendChild(box);
    }
    alert("click the boxes to add values");
})
let nxt = document.querySelector('#next');
nxt.addEventListener('click', () => {
    if (!is_ready) {
        alert("put values to all the boxes");
    }
    else {
        let siz = size_of_array;
        let arr_2 = par.children;
        console.log("hello")
        arr_2[i].style.backgroundColor = "green";
        arr_2[j].style.backgroundColor = "yellow";
        setTimeout(() => {
            step_count.innerText=parseInt(step_count.innerText)+1;
            let p1 = arr_2[i].innerText;
            p1 = parseInt(p1);
            let p2 = arr_2[j].innerText;
            p2 = parseInt(p2);
            if (p1 > p2) {
                arr_2[i].innerText = p2;
                arr_2[j].innerText = p1;
                setTimeout(()=>{
                    step_count.innerText=parseInt(step_count.innerText)+1;
                },200)
            }
            arr_2[i].style.backgroundColor = "white";
            arr_2[j].style.backgroundColor = "white";
            i++; j++;
            if (j == last) {
                j = 1; i = 0;
                last--;
            }
            if(last==1)
            {
                document.getElementById("next").disabled = true;
            }
            setTimeout(()=>{
                if(last==1)
                alert("IT IS SORTED");
            },200)
        }, 1000)
    }
})
