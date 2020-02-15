ALTER TABLE "docmanagement$login" DROP COLUMN "login_password";
ALTER TABLE "docmanagement$login" DROP COLUMN "username";
DELETE FROM "mendixsystem$attribute" 
 WHERE "id" = '034ba294-bab7-41a7-85f2-7c110e0dddf1';
DELETE FROM "mendixsystem$attribute" 
 WHERE "id" = '7462ee44-27f6-42a7-b9eb-ecff3977b139';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200204 11:34:33';
