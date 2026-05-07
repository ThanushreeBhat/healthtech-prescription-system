INSERT INTO users(name,email,password,role)
VALUES

('Dr Rajesh Sharma',
'rajesh@health.com',
'$2b$10$fE0NfCcc67HUUpAnDFafkeSRyY3myx3uMXBzvHa1HL.k901uv5i76',
'doctor'),

('Dr Priya Nair',
'priya@health.com',
'$2b$10$.8v6gaSM2hqpHe/DHhLgcu7m1Z8EXS0IMkv/N2dNHz1wO/XsDhLZa',
'doctor'),

('Dr Arjun Reddy',
'arjun@health.com',
'$2b$10$8fcDvEZ1EYuPbg0KxuaiKewUHklkjTSPeo6zhljs5AhnujgLtGvGi',
'doctor'),

('Dr Sneha Kulkarni',
'sneha@health.com',
'$2b$10$YEQiqNd9VtvHW/A4nlo6.eOzM5YAmqbM1UdrqknxwLy3iwwFthOty',
'doctor'),

('Dr Vikram Joshi',
'vikram@health.com',
'$2b$10$7Ngw4qzX7iaCSNhTUna84ucDV1MIRslsCOMPeslD7tzq2HhILlvcy',
'doctor');

INSERT INTO users(name,email,password,role)
VALUES

('Rahul Verma',
'rahul@gmail.com',
'$2b$10$dIFdK07/3FIZww8O4d8Bc.64acgaPL4xKOK1MtU3qGkGAF1Xhl8Mm',
'patient'),

('Ananya Shetty',
'ananya@gmail.com',
'$2b$10$929QlCbnqQ4va/7/pXBWu.StMEunoNJUm1Q9B9WyiSwyW0p3RsXBK',
'patient'),

('Kiran Kumar',
'kiran@gmail.com',
'$2b$10$W0.sesWEE0yFpL/E3jEG5eAPQQXOKuEJGZ4KAO4CC54ZNiwvNFnqW',
'patient'),

('Meera Iyer',
'meera@gmail.com',
'$2b$10$7ggLS.ylMNEBy5UI2qCW8eBHtRhMut6urquOjaStzGnDAheEDN67K',
'patient'),

('Rohit Patil',
'rohit@gmail.com',
'$2b$10$QR.lDDAO6gNDbQVafhTJu.2Q7JNhSMQ78PUJ3p/FnuwmPx1NuU1yS',
'patient');
SELECT id,name,role FROM users;

INSERT INTO prescriptions
(doctor_id,patient_id,medicine_name,dosage,instructions)
VALUES

(1,6,
'Paracetamol',
'500mg',
'Take after breakfast and dinner'),

(1,7,
'Azithromycin',
'250mg',
'Once daily for 5 days'),

(2,8,
'Dolo 650',
'650mg',
'Take during fever'),

(2,9,
'Cetirizine',
'10mg',
'Take before sleep'),

(3,10,
'Vitamin D3',
'1 tablet weekly',
'Take with milk'),

(3,6,
'Amoxicillin',
'500mg',
'After food for 7 days'),

(4,7,
'Pantoprazole',
'40mg',
'Before breakfast'),

(4,8,
'Crocin',
'500mg',
'Twice daily'),

(5,9,
'ORS Solution',
'200ml',
'Drink after meals'),

(5,10,
'Ibuprofen',
'400mg',
'After lunch if pain persists');