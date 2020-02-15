ALTER TABLE "docmanagement$login" ADD "myvar" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('65954c15-a669-4a04-9bcb-4cc88458bb47', 
'af5d2533-05c0-435f-88e5-feaaca7bc277', 
'myvar', 
'myvar', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200208 12:55:02';
