import * as express from 'express';
import * as sharp from 'sharp';
import { MongoClient } from 'mongodb'

import { Cursor } from "@/core/cursor";
import { exec } from "@/core/exec";
import { createSvg } from "@/core/svg";
import { DOMImplementation, XMLSerializer } from "xmldom";

const app = express();
const appConfig = {
    mongoClient: new MongoClient(process.env.MONGODB_URI),
};

app.use(express.json());

function scrapeAndExec(data): Cursor {
    const cursorCfg = {
        firstColor: data["first-color"] || "#000000",
        secondColor: data["second-color"] || "#FF0000",
        strokeSize: data["stroke-size"] || 1,
    };
    const argument = 1.0;
    const maxIteration = data["iterations"] || 1;
    return exec(argument, maxIteration, data["code"] || [], cursorCfg);
}

async function renderImage(cursor: Cursor) {
    const document =
        new DOMImplementation()
        .createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svg = createSvg(document, cursor);
    const content = new XMLSerializer().serializeToString(svg);
    return Buffer.from(content);
    const result = await sharp(Buffer.from(content)).png().toBuffer();
    return result;
}

async function storeArt(data, title: string, image: Buffer, dbCollection) {
    const result = await dbCollection.insertOne({
        data,
        title,
        image: image.toString('base64'),
    });
    return result;
}

app.post('/publish', async (req, res) => {
    const data = req.body.data || {};
    const cursor = scrapeAndExec(data);
    const image = await renderImage(cursor);
    await appConfig.mongoClient.connect();
    const dbCollection = appConfig.mongoClient.db("fractalang").collection("arts");
    const record = await storeArt(data, data["title"], image, dbCollection);

    res
        .json({
            publicId: "0",
            privateId: record.insertedId,
        })
        .status(200)
        .end();
});

app.get('/latest', async (req, res) => {
    await appConfig.mongoClient.connect();
    const dbCollection = appConfig.mongoClient.db("fractalang").collection("arts");
    const cursor = dbCollection.find();
    res
        .json(await cursor.toArray())
        .status(200)
        .end();
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

async function run() {
    try {
        console.log("Connecting to mongodb...");
        await appConfig.mongoClient.connect();
        app.listen(process.env.WEBSERVER_PORT, () => console.log("Init server"));
    } finally {
        await appConfig.mongoClient.close();
    }
}

run().catch(console.dir);
