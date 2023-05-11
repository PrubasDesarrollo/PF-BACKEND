const modelateData = (query,data) =>{
    var info = []
    var currentPage = query;
    var documentsPerPage = 4;
        
    var indexOfLastDocument = currentPage * documentsPerPage;
    var indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    var currentDocuments = data.slice(indexOfFirstDocument, indexOfLastDocument);
    var totalPages = Math.ceil( data.length/documentsPerPage ) 
    info.push({
        page: currentPage,
        totalPages: totalPages,
        documents: currentDocuments
    })
    

    return info;
}

module.exports = modelateData;