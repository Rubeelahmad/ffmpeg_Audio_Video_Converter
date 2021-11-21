const failure = require('../../../public/javascripts/failure');
const success = require('../../../public/javascripts/success');
// const { createJWT } = require("../../../utils/create-token");
const fileInfoValidation = require('./validation');
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath('C:/ffmpeg/bin/ffmpeg.exe');
ffmpeg.setFfprobePath('C:/ffmpeg/bin');
ffmpeg.setFlvtoolPath('c:/flvtool');
const fs = require('fs')
const models = require('../../../models');
const fileInfoModel = models.FileInfo;

exports.getAllFiles = async (req, res) => {
    try {
        const file_info_res = await fileInfoModel.findAll();
        console.log("File::::::::::::: ", file_info_res)
        const success_200 = success.success_range_200.success_200;
        success_200.items = [];
        return res.status(success_200.code).send(success_200)

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}

exports.fileUpload = async (req, res) => {
    try {
        const { originalname, mimetype } = req.file;
        const body = {
            name: originalname,
            file_type: mimetype
        }
        const fileInfoRes = await fileInfoModel.create(body);
        const success_200 = success.success_range_200.success_200;
        success_200.items = fileInfoRes;
        return res.status(success_200.code).send(success_200)

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}

exports.videoConverter = async (req, res) => {
    try {
        const { to } = req.query;
        const { id, name } = req.body;
        let fileNameWithoutExtension = name.substring(0, name.lastIndexOf('.'));
        var fileName = `${fileNameWithoutExtension}.${to}`
        ffmpeg(`public/images/${name}`)
            .withOutputFormat(to)
            .on("start", function (cmdLine) {
                console.log("Start.............", cmdLine);
            })
            .on("progress", function (progress) {
                console.log("Progresss:::::::: ", progress);
            })
            .on("end", function (stdout, stderr) {
                // if (stderr) {
                //     console.log("Error video converter end:::::::::", stderr);
                //     const failure_500 = failure.failure_range_500.failure_500;
                //     failure_500.items = stderr;
                //     return res.status(failure_500.code).send(failure_500);
                // }

                /* Create video link */

                // console.log("Finished error ", stderr);
                /* res.download(__dirname + fileName, function (err) {
                    if (err) throw err;

                    fs.unlink(__dirname + fileName, function (err) {
                        if (err) throw err;
                        console.log("File deleted");
                    });
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                /* Create a donwload file link */


                /* Update db */

                /* Return response */
                const success_200 = success.success_range_200.success_200;
                success_200.message = `Video converted successfully into ${to} format`;
                success_200.items = [];
                return res.status(success_200.code).send(success_200)
            }).on("error", function (err) {
                console.log("an error happened: " + err.message);
                /* fs.unlink(`public/images/1. Introduction.mp4`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                console.log("Error::::::::: ", err);
                const failure_500 = failure.failure_range_500.failure_500;
                failure_500.message = err.message;
                failure_500.items = err.message;
                return res.status(failure_500.code).send(failure_500);
            })
            .saveToFile(`public/images/${fileName}`);

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}

exports.audioConverter = async (req, res) => {
    try {
        const to = req.query.to || 'mp3';
        const { id, name } = req.body;
        var fileOriginalName = name;
        let fileNameWithoutExtension = name.substring(0, name.lastIndexOf('.'));
        var fileName = `${fileNameWithoutExtension}.${to}`
        ffmpeg(`public/images/${name}`)
            .withOutputFormat(to)
            .on("start", function (cmdLine) {
                console.log("Start.............", cmdLine);
            })
            .on("progress", function (progress) {
                console.log("Progresss:::::::: ", progress);
            })
            .on("end", function (stdout, stderr) {
                /* if (stderr) {
                    console.log("Error video converter end::::::::", stderr);
                    const failure_500 = failure.failure_range_500.failure_500;
                    failure_500.items = stderr;
                    return res.status(failure_500.code).send(failure_500);
                } */

                /* res.download(__dirname + fileName, function (err) {
                    if (err) throw err;

                    fs.unlink(__dirname + fileName, function (err) {
                        if (err) throw err;
                        console.log("File deleted");
                    });
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                /* Return response */
                const success_200 = success.success_range_200.success_200;
                success_200.message = `Video converted successfully into ${to} format`;
                success_200.items = [];
                return res.status(success_200.code).send(success_200)
            }).on("error", function (err) {
                console.log("an error happened: " + err.message);
                /* fs.unlink(`public/images/1. Introduction.mp4`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                console.log("Error::::::::: ", err);
                const failure_500 = failure.failure_range_500.failure_500;
                failure_500.message = err.message;
                failure_500.items = err.message;
                return res.status(failure_500.code).send(failure_500);
            })
            .saveToFile(`public/images/${fileName}`);

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}

exports.videoCompress = async (req, res) => {
    try {
        const { id, name, videoCodec, sizeInMB, compressionMethod, sizeInPercentage } = req.body;
        var fileName = `compressed-${name}`;
        console.log("bodya::::::::::::::::: ", videoCodec, sizeInMB, compressionMethod, sizeInPercentage, id, name)
        ffmpeg(`public/images/${name}`)
            .audioCodec(`copy`)
            .videoCodec(`libx${videoCodec}`)
            .withSize(`50%`)
            // .withSize(`${width}x${height}`)
            .withAspectRatio('16:9')
            .withFpsOutput(25)
            // .audioBitrate(`${audioBitrate}`)
            // .videoBitrate(`${videoBitRate}`)
            .addOptions(['-vprofile high', '-threads 0', '-movflags faststart'])
            // .noVideo()
            //     .withOutputFormat(to)
            // .noAudio()
            .on("start", function (cmdLine) {
                console.log("Start.............", cmdLine);
            })
            .on("progress", function (progress) {
                // console.log("Progresss:::::::: ", progress);
            })
            .on("end", function (stdout, stderr) {
                /* if (stderr) {
                    console.log("Error video converter end::::::::", stderr);
                    const failure_500 = failure.failure_range_500.failure_500;
                    failure_500.items = stderr;
                    return res.status(failure_500.code).send(failure_500);
                } */

                /* res.download(__dirname + fileName, function (err) {
                    if (err) throw err;

                    fs.unlink(__dirname + fileName, function (err) {
                        if (err) throw err;
                        console.log("File deleted");
                    });
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                /* Return response */
                const success_200 = success.success_range_200.success_200;
                success_200.message = `Video compressed successfully`;
                success_200.items = [];
                return res.status(success_200.code).send(success_200)
            }).on("error", function (err) {
                console.log("an error happened: " + err.message);
                /* fs.unlink(`public/images/1. Introduction.mp4`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                }); */
                fs.unlink(`public/images/${name}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                console.log("Error::::::::: ", err);
                const failure_500 = failure.failure_range_500.failure_500;
                failure_500.message = err.message;
                failure_500.items = err.message;
                return res.status(failure_500.code).send(failure_500);
            })
            .saveToFile(`public/images/${fileName}`);

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}

exports.mp4ToMp3 = async (req, res) => {
    try {
        let audioBitrate = req.body.audioBitrate || '128k';
        let audioCodec = req.body.audioCodec || 'libmp3lame';
        let to = 'mp3';
        var fileOriginalName = req.file.originalname;
        let fileNameWithoutExtension = fileOriginalName.substring(0, fileOriginalName.lastIndexOf('.'));
        var fileName = `${fileNameWithoutExtension}.${to}`
        ffmpeg(`public/images/${fileOriginalName}`)
            .audioCodec(`${audioCodec}`)
            .audioBitrate(`${audioBitrate}`)
            .withOutputFormat(to)
            .on("start", function (cmdLine) {
                console.log("Start.............", cmdLine);
            })
            .on("progress", function (progress) {
                console.log("Progresss:::::::: ", progress);
            })
            .on("end", function (stdout, stderr) {
                fs.unlink(`public/images/${fileOriginalName}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                /* Return response */
                const success_200 = success.success_range_200.success_200;
                success_200.message = `Video converted successfully into ${to} format`;
                success_200.items = [];
                return res.status(success_200.code).send(success_200)
            }).on("error", function (err) {
                console.log("an error happened: " + err.message);
                /* fs.unlink(`public/images/1. Introduction.mp4`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                }); */
                fs.unlink(`public/images/${fileOriginalName}`, function (err) {
                    if (err) throw err;
                    console.log("File deleted");
                });
                console.log("Error::::::::: ", err);
                const failure_500 = failure.failure_range_500.failure_500;
                failure_500.message = err.message;
                failure_500.items = err.message;
                return res.status(failure_500.code).send(failure_500);
            })
            .saveToFile(`public/images/${fileName}`);

    } catch (error) {
        console.log("Error::::::::: ", error);
        const failure_500 = failure.failure_range_500.failure_500;
        failure_500.items = error;
        return res.status(failure_500.code).send(failure_500);
    }
}
