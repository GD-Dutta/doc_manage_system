CREATE SEQUENCE "docmanagement$registration_user_id_mxseq" AS BIGINT START WITH 1;
ALTER TABLE "docmanagement$registration" ADD "user_id" BIGINT NULL;
UPDATE "docmanagement$registration"
 SET "user_id" = NEXT VALUE FOR "docmanagement$registration_user_id_mxseq";
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('6ee8672b-b191-4de6-9b35-97bbfb023ff2', 
'975e9db0-d5c3-4b8d-b2c3-76e59fcdd18b', 
'User_Id', 
'user_id', 
0, 
0, 
'1', 
true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", 
"name", 
"start_value", 
"current_value")
 VALUES ('6ee8672b-b191-4de6-9b35-97bbfb023ff2', 
'docmanagement$registration_user_id_mxseq', 
1, 
8);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200208 12:04:27';
