import type { Knex } from "knex";

interface BaseRepository<T> {
  findAll(item: Partial<T>): Promise<T[]>;
  findById(id: string | Partial<T>): Promise<T>;
}

export abstract class DokiRepository<T> implements BaseRepository<T> {
  constructor(public readonly knex: Knex, public readonly tableName: string) {}

  public get qb(): Knex.QueryBuilder {
    return this.knex(this.tableName);
  }

  findAll(item: Partial<T>): Promise<T[]> {
    return this.qb.where(item).select();
  }

  findById(id: Partial<T>): Promise<T> {
    return this.qb.where(id).first();
  }

  async save(item: T): Promise<T> {
    const [output] = await this.qb.insert<T>(item).returning("*");

    return output;
  }
}
