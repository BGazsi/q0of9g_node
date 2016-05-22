/*
Kapott nevu templatet renderel ki a templateengine segitsegevel
*/

module.exports = function (objectrepository, viewName) {

    return function (req, res) {
        
        res.render(viewName, res.tpl);
    };

};