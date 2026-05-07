const Prescription = require("../models/prescriptionModel");

exports.createPrescription = (req, res) => {
    const {
        patient_id,
        medicine_name,
        dosage,
        instructions
    } = req.body;

    Prescription.createPrescription(
        req.user.id,
        patient_id,
        medicine_name,
        dosage,
        instructions,
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Prescription Created"
            });
        }
    );
};

exports.updatePrescription = (req, res) => {
    const { id } = req.params;

    const {
        medicine_name,
        dosage,
        instructions
    } = req.body;

    Prescription.updatePrescription(
        id,
        medicine_name,
        dosage,
        instructions,
        (err) => {
            if (err) {
                return res.status(500).json({
                    message: err.message
                });
            }

            res.json({
                message: "Prescription Updated"
            });
        }
    );
};

exports.getDoctorPrescriptions = (req, res) => {
    Prescription.getDoctorPrescriptions(
        req.user.id,
        (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(rows);
        }
    );
};

exports.getPatientPrescriptions = (req, res) => {
    Prescription.getPatientPrescriptions(
        req.user.id,
        (err, rows) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json(rows);
        }
    );
};
