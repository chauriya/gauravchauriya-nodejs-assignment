const path = require('path');
const action = require(path.resolve('src/action/api-action'));

module.exports = (routerobject) => {
	
	routerobject.get("/", function (req, res) {
        res.send('hello');
    });

    routerobject.get("/getuserdetails/:userId", action.getuserdetails);

    routerobject.get("/gettodoitem/:todoId", action.gettodoitem);

    routerobject.get("/getactiveusertodo", action.getactiveuserandtodo);

    routerobject.get("/getupcommingtodo/:userId", action.upcommingtodo);

	return routerobject;
};