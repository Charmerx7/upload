import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express(); 
app.use(express.json());

app.post("/process-video", (req, res) => {
    // Get path of the input video file from the body 
    const inputFilePath = req.body.inputVideoPath;
    const outputFilePath = req.body.outputVideoPath;

    if (!inputFilePath || !outputFilePath) {
        res.status(400).send("Bad Request: Missing file path.");
    }

    ffmpeg(inputFilePath)
        .outputOptions("-vf", "scale=-1:360") // 360p
        .on("end", () => {
            console.log("Processing finished successfully");
            res.status(200).send("Processing finished successfully.");
        })
        .on("error", (err) => {
            console.log(`An error occurred: ${err.message}`);
            res.status(500).send(`Internal Server Error: ${err.message}`);
        })
        .save(outputFilePath);
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Video processing service listening at http://localhost:${port}`);
});