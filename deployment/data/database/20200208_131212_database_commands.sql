ALTER TABLE "docmanagement$login" DROP COLUMN "myvar";
DELETE FROM "mendixsystem$attribute" 
 WHERE "id" = '65954c15-a669-4a04-9bcb-4cc88458bb47';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200208 13:12:12';
