import { PrismaClient } from '@prisma/client';
import { sendGrindApiKey } from '../../src/config/mail';
const mail = require('@sendgrid/mail');

mail.setApiKey(sendGrindApiKey);
const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
	return this.toString();
};

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const userResponse = await addUser(req, res);
		const mailResponse = await sendEmail(req, res);

		console.log('______RESPONSE_USER_AND_MAIL______ 🤡', {
			userResponse,
			mailResponse
		});

		if (userResponse?.ok && mailResponse?.ok) {
			return res.status(200).json({ ok: true });
		} else {
			return res.status(405).json({ ok: false });
		}
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

async function addUser(req, response) {
	try {
		const body = req.body;
		//TODO: user is the name of the model but lowerCase
		const res = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email
			}
		});
		console.log('db response 🧨', { res });
		// return response.status(200).json({ ok: true });
		return { ok: true };
	} catch (error) {
		// TODO: where this log go? vercel logs?
		console.log('db error 🧨', { error });
		return response
			.status(500)
			.json({ error: 'Error  adding user', ok: false });
	}
}

async function sendEmail(req, response) {
	try {
		const body = req.body;
		const { name, email, phone, message } = body;

		const payload = `
		Usuario: ${name}\r\n
		Email: ${email}\r\n
		Telefono: ${phone}\r\n
		Mensaje: ${message}\r\n
	`;

		// to: "contacto@lokicars.cl",
		// to: "jormencar@yahoo.com",
		const data = {
			to: 'jormencar@yahoo.com',
			from: 'contact@aljorgevi.com',
			subject: `nuevo mensaje desde containers.cl!`,
			text: payload,
			html: payload.replace(/\r\n/g, '<br>')
		};

		const res = await mail.send(data);
		console.log('email response 🚀', { res });

		// return response.status(200).json({ ok: true });
		return { ok: true };
	} catch (error) {
		console.log('email error 🚀', { error });
		return response.status(500).json({ ok: false });
	}
}
