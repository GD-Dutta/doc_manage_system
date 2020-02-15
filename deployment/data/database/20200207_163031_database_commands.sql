CREATE TABLE "system$scheduledeventinformation_xasinstance" (
	"system$scheduledeventinformationid" BIGINT NOT NULL,
	"system$xasinstanceid" BIGINT NOT NULL,
	PRIMARY KEY("system$scheduledeventinformationid","system$xasinstanceid"),
	CONSTRAINT "uniq_system$scheduledeventinformation_xasinstance_system$scheduledeventinformationid" UNIQUE ("system$scheduledeventinformationid"));
CREATE INDEX "idx_system$scheduledeventinformation_xasinstance_system$xasinstance_system$scheduledeventinformation" ON "system$scheduledeventinformation_xasinstance" ("system$xasinstanceid" ASC,"system$scheduledeventinformationid" ASC);
INSERT INTO "mendixsystem$association" ("id", 
"association_name", 
"table_name", 
"parent_entity_id", 
"child_entity_id", 
"parent_column_name", 
"child_column_name", 
"index_name")
 VALUES ('7b8a18de-fe6d-4735-9841-0d9d4760697e', 
'System.ScheduledEventInformation_XASInstance', 
'system$scheduledeventinformation_xasinstance', 
'685df5a6-1e02-49bb-a0b5-5a55c5e8313d', 
'd4154981-8dac-4150-aec5-efa3ef62a7a2', 
'system$scheduledeventinformationid', 
'system$xasinstanceid', 
'idx_system$scheduledeventinformation_xasinstance_system$xasinstance_system$scheduledeventinformation');
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_system$scheduledeventinformation_xasinstance_system$scheduledeventinformationid', 
'7b8a18de-fe6d-4735-9841-0d9d4760697e', 
'b1eb1dd4-9f4c-3dae-9cde-9a7df66af36c');
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200207 16:30:31';
