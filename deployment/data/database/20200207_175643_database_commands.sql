ALTER TABLE "docmanagement$login_registration" ADD CONSTRAINT "uniq_docmanagement$login_registration_docmanagement$loginid" UNIQUE ("docmanagement$loginid");
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_docmanagement$login_registration_docmanagement$loginid', 
'77320ceb-e5e2-45ae-8e05-e995ef2e4306', 
'4f15bce5-f64f-394a-9279-7d78cdb20f82');
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200207 17:56:43';
