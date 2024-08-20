function recursiva(max) { // UMA FUNÇÃO QUE SE CHAMA DE VOLTA
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}
recursiva(0);


