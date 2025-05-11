const imprimeArgumentos2 = ( edad, ...args ) => { // Parametro rest
    // console.log( args );
    console.log({ edad, args });
    return args;
}

imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');