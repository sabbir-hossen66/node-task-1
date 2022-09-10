let users = require('../user.json');


module.exports.getRandomUser = (req, res) => {
    let randomUser = Math.floor((Math.random() * users.length) + 1);
    let getRandomUser = users.find(user => user.id == randomUser)
    res.send(getRandomUser)
}


module.exports.getAllUser = (req, res) => {
    const { limit } = req.query;
    console.log(limit);
    let user = users.slice(0, limit)
    res.status(200).send({
        success: true,
        message: "Success",
        users: user
    })
}

module.exports.userSaved = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.send(users)

}



module.exports.userUpdated = (req, res) => {
    const newData = req.body;
    const { id } = req.params;
    console.log(newData);
    // const { gender, name, contuct, address, photoUrl } = req.body
    const isExist = users.find(user => user.id == Number(id))
    isExist.gender = newData.gender || isExist.gender;
    isExist.name = newData?.name || isExist.name;
    isExist.contuct = newData?.contuct || isExist.contuct;
    isExist.address = newData.address || isExist.address;
    isExist.photoUrl = newData.photoUrl || isExist.photoUrl;

    res.send(isExist)

}

//user update function 

module.exports.userBulkUpdate = (req, res) => {
    const { id } = req.params
    const data = req.body;
    const filter = users.find(use => use.id === Number(id));
    filter.name = data.id || filter.id;
    filter.gender = data.gender || filter.gender;
    filter.name = data.name || filter.name;
    filter.contact = data.contact || filter.contact;
    filter.address = data.address || filter.address;
    filter.photoUrl = data.photoUrl || filter.photoUrl;
    res.send(filter)
}


module.exports.userDeleted = (req, res) => {
    const { id } = req.params;
    console.log(id);
    users = users.filter(user => user.id != Number(id))
    res.status(200).send({
        success: true,
        message: "Success",
        users: users
    })

}
