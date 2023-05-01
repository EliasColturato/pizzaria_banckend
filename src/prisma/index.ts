//forma de acessar o nosso banco de dados através do Prisma
import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export default prismaClient;
