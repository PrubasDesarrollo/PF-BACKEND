const modelateData = (query,data) =>{
    var info = []
    var currentPage = query;
    var documentsPerPage = 4;
        
    var indexOfLastDocument = currentPage * documentsPerPage;
    var indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    var currentDocuments = data.slice(indexOfFirstDocument, indexOfLastDocument);
        
    info.push({
        page: currentPage,
        documents: currentDocuments
    })
    

    return info;
}

module.exports = modelateData;