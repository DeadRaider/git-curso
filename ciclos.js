function ciclos(event){
    event.preventDefault();
    for(let i=0;i<5;i++){
        alert("numero" + i);
        console.log(i);
    } 
    
}

function ciclon(event){
    event.preventDefault();
    for (let i=5; i>=0; i--){
        alert("numero" + i);
        console.log(i);
    } 
    
}

function ciclox(event){
    event.preventDefault();
    let menu=0;
    let menu = prompt("Menu \n 1. suma \n 2. resta \n 3. salir");
    while (menu!=3){
        if (menu==1){
            alert("suma");
            break;
        }
        else if (menu==2){
            alert("resta");
            break;
        }
        else if (menu==3){
            alert("salir");
            break;
        }
    }
}

function clicodo(event){
    event.preventDefault();
    let i=1;
    do{
        
        let n=i*2;
        console.log(1+"x 2 ="+n)

    } while(i<=10);
    console
}    