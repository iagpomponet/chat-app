import { MigrationInterface, QueryRunner } from "typeorm";

export class NewRelationTest1667609635336 implements MigrationInterface {
    name = 'NewRelationTest1667609635336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "messageGroup" RENAME COLUMN "groupId" TO "id"`);
        await queryRunner.query(`ALTER TABLE "messageGroup" RENAME CONSTRAINT "PK_8fc1da887f71f0862fb7d84df04" TO "PK_23d7c02e5bdb6868ced0cb928c0"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "profilePhoto" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "message" ("messageId" character varying NOT NULL, "fromEmail" character varying NOT NULL, "toEmail" character varying NOT NULL, "messageText" character varying NOT NULL, "sentDateTime" TIMESTAMP NOT NULL DEFAULT now(), "contactId" character varying, "groupId" character varying, CONSTRAINT "PK_b664c8ae63d634326ce5896cecc" PRIMARY KEY ("messageId"))`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_ad6fa99920430be584b450260bc" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "message" ADD CONSTRAINT "FK_a85a728f01be8f15f0e52019389" FOREIGN KEY ("groupId") REFERENCES "messageGroup"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_a85a728f01be8f15f0e52019389"`);
        await queryRunner.query(`ALTER TABLE "message" DROP CONSTRAINT "FK_ad6fa99920430be584b450260bc"`);
        await queryRunner.query(`DROP TABLE "message"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "messageGroup" RENAME CONSTRAINT "PK_23d7c02e5bdb6868ced0cb928c0" TO "PK_8fc1da887f71f0862fb7d84df04"`);
        await queryRunner.query(`ALTER TABLE "messageGroup" RENAME COLUMN "id" TO "groupId"`);
    }

}
