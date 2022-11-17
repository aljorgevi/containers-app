import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
	return this.toString();
};

export default async function handler(req, res) {
	if (req.method === 'POST') {
		return await addUser(req, res);
	} else if (req.method === 'GET') {
		return await readUsers(req, res);
	} else {
		return res
			.status(405)
			.json({ message: 'Method not allowed', success: false });
	}
}

async function readUsers(req, res) {
	try {
		const allUsers = await prisma.user.findMany();
		return res.status(200).json(allUsers, { success: true });
	} catch (error) {
		console.error('Request error', error);
		res.status(500).json({ error: 'Error with db', success: false });
	}
}

async function addUser(req, res) {
	const body = req.body;
	try {
		//TODO: user is the name of the model but lowerCase
		const newEntry = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email
			}
		});
		return res.status(200).json(newEntry, { success: true });
	} catch (error) {
		console.error('Request error', error);
		res.status(500).json({ error: 'Error creating question', success: false });
	}
}
