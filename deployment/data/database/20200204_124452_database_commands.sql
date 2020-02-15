ALTER TABLE "docmanagement$login_registration" DROP CONSTRAINT "uniq_docmanagement$login_registration_docmanagement$loginid";
ALTER TABLE "docmanagement$login" ADD "login_password" VARCHAR_IGNORECASE(50) NULL;
ALTER TABLE "docmanagement$login" ADD "username" VARCHAR_IGNORECASE(50) NULL;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('edfb00d4-9e02-409a-9e02-a3bed78bc865', 
'af5d2533-05c0-435f-88e5-feaaca7bc277', 
'Username', 
'username', 
30, 
50, 
'', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('a6a83a19-c0cb-439a-8195-9f973b195c2d', 
'af5d2533-05c0-435f-88e5-feaaca7bc277', 
'Login_Password', 
'login_password', 
30, 
50, 
'', 
false);
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_docmanagement$login_registration_docmanagement$loginid';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200204 12:44:52';
