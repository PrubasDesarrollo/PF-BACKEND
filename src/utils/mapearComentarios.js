const mapearComentarios = (arr) =>{

    if(!arr.length) return ["No hay comentarios aún"];

    const comments = arr.map((ar)=> {return ar.comment || ar.comentario})
    return comments;
}
