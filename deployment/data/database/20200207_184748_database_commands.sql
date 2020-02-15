CREATE TABLE "docmanagement$registration_all" (
	"docmanagement$registrationid" BIGINT NOT NULL,
	"docmanagement$allid" BIGINT NOT NULL,
	PRIMARY KEY("docmanagement$registrationid","docmanagement$allid"),
	CONSTRAINT "uniq_docmanagement$registration_all_docmanagement$registrationid" UNIQUE ("docmanagement$registrationid"));
CREATE INDEX "idx_docmanagement$registration_all_docmanagement$all_docmanagement$registration" ON "docmanagement$registration_all" ("docmanagement$allid" ASC,"docmanagement$registrationid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('70deeed7-5652-45e1-9b1a-fec283b143c3', 
'DocManagement.Registration_All', 
'docmanagement$registration_all', 
'975e9db0-d5c3-4b8d-b2c3-76e59fcdd18b', 
'938b1bd6-27c9-4c65-acb8-70992182b819', 
'docmanagement$registrationid', 
'docmanagement$allid', 
'idx_docmanagement$registration_all_docmanagement$all_docmanagement$registration');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_docmanagement$registration_all_docmanagement$registrationid', 
'70deeed7-5652-45e1-9b1a-fec283b143c3', 
'4167f3e5-1d32-37ff-b1e0-27ddd25def02');
CREATE TABLE "docmanagement$all" (
	"id" BIGINT NOT NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"remote")
 VALUES ('938b1bd6-27c9-4c65-acb8-70992182b819', 
'DocManagement.All', 
'docmanagement$all', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200207 18:47:48';
