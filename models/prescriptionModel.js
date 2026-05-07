const db = require("../config/db");

const createPrescription = (
    doctor_id,
    patient_id,
    medicine_name,
    dosage,
    instructions,
    callback
) => {
    db.run(
        `INSERT INTO prescriptions
        (doctor_id,patient_id,medicine_name,dosage,instructions)
        VALUES(?,?,?,?,?)`,
        [doctor_id, patient_id, medicine_name, dosage, instructions],
        callback
    );
};

const updatePrescription = (
    id,
    medicine_name,
    dosage,
    instructions,
    callback
) => {
    db.run(
        `UPDATE prescriptions
         SET medicine_name=?,
             dosage=?,
             instructions=?
         WHERE id=?`,
        [medicine_name, dosage, instructions, id],
        callback
    );
};

const getDoctorPrescriptions = (doctor_id, callback) => {
    db.all(
        `SELECT * FROM prescriptions
         WHERE doctor_id=?`,
        [doctor_id],
        callback
    );
};

const getPatientPrescriptions = (patient_id, callback) => {
    db.all(
        `SELECT * FROM prescriptions
         WHERE patient_id=?`,
        [patient_id],
        callback
    );
};

module.exports = {
    createPrescription,
    updatePrescription,
    getDoctorPrescriptions,
    getPatientPrescriptions
};
