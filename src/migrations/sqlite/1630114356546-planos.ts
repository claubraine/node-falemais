import {MigrationInterface, QueryRunner} from "typeorm";

export class planos1630114356546 implements MigrationInterface {

    name = 'planos1630114356546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "planos" (
                "id" integer PRIMARY KEY NOT NULL, 
                "nome_plano" text NOT NULL, 
                "minutos" integer NOT NULL, 
                "status" boolean, 
                "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))                
                `
        )

        await queryRunner.query(`INSERT INTO "planos"( nome_plano, minutos, status) VALUES ( "FaleMais", 30, true)` )
        await queryRunner.query(`INSERT INTO "planos"( nome_plano, minutos, status) VALUES ( "FaleMais", 60, true)` )
        await queryRunner.query(`INSERT INTO "planos"( nome_plano, minutos, status) VALUES ( "FaleMais", 90, true)` )
        await queryRunner.query(`INSERT INTO "planos"( nome_plano, minutos, status) VALUES ( "FaleMais", 120, true)` )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "planos"`)
    }

}
