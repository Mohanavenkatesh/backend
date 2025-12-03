
let patients = [];

let id = 1;

exports.getAllPatients = (req, res) => {
    res.json(patients);
};

// create
exports.createPatient = (req, res) => {
    const newPatient = { id: id++, ...req.body };
    patients.push(newPatient);
    res.json(newPatient)
};

// update 
exports.updatePatient = (req,res)=>{
    const patientId = Number(req.params.id)
    for(let i = 0 ; i < patients.length ; i++){
        if(patients[i].id=== patientId){
            patients[i].name= req.body.name;
            patients[i].age = req.body.age;
            return res.json(patients[i])
        }
    }
    res.json({message:"not found"})
}

// delete 
exports.deletePatient = (req,res) =>{
    const patientId = Number(req.params.id);
    patients= patients.filter(p =>p.id !== patientId);
    res.end();
}