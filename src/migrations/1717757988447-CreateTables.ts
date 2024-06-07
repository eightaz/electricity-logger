import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1717757988447 implements MigrationInterface {
    name = 'CreateTables1717757988447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mac_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_a597392b2aaadc962887557ac81" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_3_kaitintuvas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_358f8b31dbf42c599de0298c371" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_1_kaitintuvas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_ecb035f0fb1275ff8111a6fe131" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_2_kaitintuvas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_60cf942c152b0e9b40b5b4fb1a3" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "surinkimas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_249424bf8dc03ae158721120bce" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_3_liejimas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_b1d659f6bc8bee21626e6c0cb6e" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_2_liejimas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_88915e115bd4d23cd179d123767" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_1_liejimas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_dc8176e1b96ec578429e95d5a43" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "kompresorine_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_ea84f27231b1e7ddbf025932228" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "surinkimas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_61dee9464ad616e71f8ebb92ecf" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "mac_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_b302547e76ed6a3be3be51d85ce" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_2_liejimas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_0ec24fcb6546fe07abc47b9fca7" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "liejimas_total_electricity" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "total" numeric(12,2) NOT NULL, CONSTRAINT "PK_ac88c3fb0d1b92197b911659841" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_2_kaitintuvas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_e3ffe32fa3b3027fc8126a6dc06" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_1_liejimas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_b92f8e029b2550e0573d6b6cd22" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_1_kaitintuvas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_fc94da67bd667a0818eba9f839b" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_3_kaitintuvas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_33bae588405190c3330e054dc04" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "liejimas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_b5f8814f7e4135c6af204aa5476" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "kompresorine_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_1f91aa8cc5b597fe36f2341a6e0" PRIMARY KEY ("time"))`);
        await queryRunner.query(`CREATE TABLE "linija_3_liejimas_moment_power" ("time" TIMESTAMP WITH TIME ZONE NOT NULL, "power" numeric(12,2) NOT NULL, CONSTRAINT "PK_01632b9014491526e85a5975101" PRIMARY KEY ("time"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "linija_3_liejimas_moment_power"`);
        await queryRunner.query(`DROP TABLE "kompresorine_moment_power"`);
        await queryRunner.query(`DROP TABLE "liejimas_moment_power"`);
        await queryRunner.query(`DROP TABLE "linija_3_kaitintuvas_moment_power"`);
        await queryRunner.query(`DROP TABLE "linija_1_kaitintuvas_moment_power"`);
        await queryRunner.query(`DROP TABLE "linija_1_liejimas_moment_power"`);
        await queryRunner.query(`DROP TABLE "linija_2_kaitintuvas_moment_power"`);
        await queryRunner.query(`DROP TABLE "liejimas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_2_liejimas_moment_power"`);
        await queryRunner.query(`DROP TABLE "mac_moment_power"`);
        await queryRunner.query(`DROP TABLE "surinkimas_moment_power"`);
        await queryRunner.query(`DROP TABLE "kompresorine_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_1_liejimas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_2_liejimas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_3_liejimas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "surinkimas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_2_kaitintuvas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_1_kaitintuvas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "linija_3_kaitintuvas_total_electricity"`);
        await queryRunner.query(`DROP TABLE "mac_total_electricity"`);
    }

}
