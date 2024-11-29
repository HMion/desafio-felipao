console.log("Desafio Classificador de nível de Herói");

let heroi = "Conan";
let nivel = "";

for(let XP=0;XP<11001;XP=XP+1000){
    if (XP<=1000){
        nivel = "Ferro";
    }else if(XP>1000 && XP<2001){
        nivel = "Bronze";
    }else if(XP>2000 && XP<5001){
        nivel = "Prata";
    }else if(XP>5000 && XP<7001){
        nivel = "Ouro";
    }else if(XP>7000 && XP<8001){
        nivel = "Platina";
    }else if(XP>8000 && XP<9001){
        nivel = "Ascendente";
    }else if(XP>9000 && XP<10001){
        nivel = "Imortal";
    }else{
        nivel = "Radiante";
    }
    
    console.log("O Herói de nome "+heroi+" está no nível de "+nivel+", pois sua XP é de "+XP+"!");
}
