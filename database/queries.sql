-- join query to get doctor and patient names in prescriptions

SELECT
p.id,
d.name AS doctor_name,
pt.name AS patient_name,
p.medicine_name,
p.dosage,
p.instructions
FROM prescriptions p
JOIN users d
ON p.doctor_id = d.id
JOIN users pt
ON p.patient_id = pt.id;