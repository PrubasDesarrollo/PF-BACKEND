const modelateData = (data) =>{
    var info = []
    var currentPage = 0;
    var documentsPerPage = 4;

    for ( let i=1; i<=Math.ceil(data.length/documentsPerPage); i++){
        
        currentPage = i;
        
        var indexOfLastDocument = currentPage * documentsPerPage;
        var indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
        var indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
        var currentDocuments = data.slice(indexOfFirstDocument, indexOfLastDocument);
        
        info.push({
            page: currentPage,
            documents: currentDocuments
        })
    }

    return info;
}

module.exports = modelateData;