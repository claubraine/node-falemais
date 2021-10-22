import {MigrationInterface, QueryRunner} from "typeorm";

export class origemdestino1630114356547 implements MigrationInterface {

    name = 'origemdestino1630114356547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "origemdestino" (
                "id" integer PRIMARY KEY NOT NULL, 
                "origem" text NOT NULL, 
                "destino" text NOT NULL, 
                "custo_minutos_com_plano" double NOT NULL, 
                "custo_minutos_sem_plano" double NOT NULL, 
                "custo_excedente" double NOT NULL, 
                "status" boolean, 
                "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`
        )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "011", "016", 1.90, 1.90, 10.0 ,true)` )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "016", "011", 2.90, 1.90, 10.0 ,true)` )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "011", "017", 1.70, 1.90, 10.0 ,true)` )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "017", "011", 2.70, 1.90, 10.0 ,true)` )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "011", "018", 0.90, 1.90, 10.0 ,true)` )
        await queryRunner.query(`INSERT INTO "origemdestino"( origem, destino, custo_minutos_com_plano, custo_minutos_sem_plano, custo_excedente, status) VALUES ( "018", "011", 1.90, 1.90, 10.0 ,true)` )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "origemdestino"`)
    }

}
