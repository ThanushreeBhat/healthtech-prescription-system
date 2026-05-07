const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const role = require("../middleware/roleMiddleware");

const {
    createPrescription,
    updatePrescription,
    getDoctorPrescriptions,
    getPatientPrescriptions
} = require("../controllers/prescriptionController");

router.post(
    "/",
    auth,
    role("doctor"),
    createPrescription
);

router.put(
    "/:id",
    auth,
    role("doctor"),
    updatePrescription
);

router.get(
    "/doctor",
    auth,
    role("doctor"),
    getDoctorPrescriptions
);

router.get(
    "/patient",
    auth,
    role("patient"),
    getPatientPrescriptions
);

module.exports = router;