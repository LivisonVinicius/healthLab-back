import { client } from "../database";
import { IUserType } from "../types/userType";

export async function insert(user: IUserType) {
  const createdUser = await client.user.create({ data: user });
  return createdUser.id;
}

export async function findByEmail(email: string) {
  const user = await client.user.findFirst({ where: { email } });
  return user;
}

export async function findByCpf(cpf: string) {
  const user = await client.user.findFirst({ where: { cpf } });
  return user;
}

export async function findById(id: number) {
  const user = await client.user.findFirst({ where: { id } });
  return user;
}
