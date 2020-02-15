ALTER TABLE "docmanagement$all" RENAME TO "390359871d744fde9f418e0e20f66895";
ALTER TABLE "docmanagement$registration_all" DROP CONSTRAINT "uniq_docmanagement$registration_all_docmanagement$registrationid";
DROP INDEX "idx_docmanagement$registration_all_docmanagement$all_docmanagement$registration";
ALTER TABLE "docmanagement$registration_all" RENAME TO "6e1c979b33cf490aafb9b0dfd0ded5f2";
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = '938b1bd6-27c9-4c65-acb8-70992182b819';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = '938b1bd6-27c9-4c65-acb8-70992182b819';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = '938b1bd6-27c9-4c65-acb8-70992182b819');
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = '938b1bd6-27c9-4c65-acb8-70992182b819';
ALTER TABLE "docmanagement$manage_docs" DROP COLUMN "file_type";
ALTER TABLE "docmanagement$manage_docs" DROP COLUMN "create_date";
ALTER TABLE "docmanagement$manage_docs" ADD "file_format" VARCHAR_IGNORECASE(4) NULL;
DELETE FROM "mendixsystem$attribute" 
 WHERE "id" = 'b6da7f21-5527-49b9-95de-f47f19e92707';
DELETE FROM "mendixsystem$attribute" 
 WHERE "id" = 'f63474c2-8a29-4e14-b4fe-27d43e52b32c';
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('18fff668-b1f1-403b-bf4e-e9d9e5996dd3', 
'6f1049f0-b70a-4acf-b365-264237972861', 
'FIle_Format', 
'file_format', 
40, 
4, 
'', 
false);
DELETE FROM "mendixsystem$association" 
 WHERE "id" = '70deeed7-5652-45e1-9b1a-fec283b143c3';
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_docmanagement$registration_all_docmanagement$registrationid';
DROP TABLE "390359871d744fde9f418e0e20f66895";
DROP TABLE "6e1c979b33cf490aafb9b0dfd0ded5f2";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200208 18:25:14';
