import express from 'express';
import sharp from 'sharp';
import { MongoClient } from 'mongodb'

import { Cursor } from "@/core/exec";
import { exec } from "@/core/exec";
import { createSvg } from "@/core/svg";
import { DOMImplementation, XMLSerializer } from "xmldom";

const app = express();

app.use(express.json());

function scrapeAndExec(data): Cursor {
    const cursorCfg = {
        firstColor: data["first-color"] || "#000000",
        secondColor: data["second-color"] || "##FF0000,
        strokeSize: data["stroke-size"] || 1,
    };
    const argument = 1.0;
    const maxIteration = data["iterations"] || 1;
    return exec(argument, maxIteration, data["code"] || [], cursorCfg);
}

function async renderImage(cursor: Cursor): Buffer {
    const document =
        new DOMImplementation()
        .createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    const svg = createSvg(document, cursor);
    const content = new XMLSerializer().serializeToString(svg);
    const result = await sharp(Buffer.from(content)).png().toBuffer();
    return result;
}

function async storeArt(data, title: string, image: Buffer, dbCollection) {
    const result await dbCollection.insertOne({
        data,
        title,
        image: image.toString('base64');
    });
    return result;
}

app.post('/publish', async (req, res) => {
    const cursor = scrapeAndExec(req.body.data || {});
    const image = await renderImage(cursor);
    const record = await storeArt(data, title, image, req.app.config.client.db("").collection(""));

    res
        .json({
            publicId: ,
            privateId: record.insertedId,
        })
        .status(200)
        .end();
});

app.config.client = new MongoClient(process.env.MONGODB_URI);

app.listen(process.env.PORT);
