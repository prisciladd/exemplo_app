function MeuComponente(props){
    // Criando eventos em seu próprio componente
    const clicou = ()=>{
        if(props.funcao !== undefined){
             props.funcao();
        }
    }
    return(
        <div>
            <h2>{props.titulo}</h2>
            {props.children}    
            <input type="button" value={props.texto} onClick={clicou}></input>
        </div>
    );
}

export default MeuComponente;