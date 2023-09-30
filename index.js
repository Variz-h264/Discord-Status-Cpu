require("dotenv").config();
const os = require('os');
const { Client } = require("discord.js-selfbot-v13");

const client = new Client({
    checkUpdate: false,
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    startTime = Date.now();

    getCPUUtilization((utilization) => {
        client.settings.setCustomStatus({
            text: `CPU Usage: ${utilization}%`,
            expires: null,
        });
    });
});

client.on("message", async (message) => {
    if (message.content === "!uptime") {
        const uptimeInSeconds = process.uptime();
        const hours = Math.floor(uptimeInSeconds / 3600);
        const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
        const seconds = Math.floor(uptimeInSeconds % 60);

        message.channel.send(`> ทำงานมาแล้ว: ${hours} ชั่วโมง ${minutes} นาที ${seconds} วินาที`);
    }
});

const getCPUUtilization = (callback) => {
    let prevIdleTime = 0;
    let prevTotalTime = 0;

    setInterval(() => {
        const cpus = os.cpus();
        const idleTime = cpus.reduce((acc, cpu) => acc + cpu.times.idle, 0);
        const totalTime = cpus.reduce((acc, cpu) => {
            Object.values(cpu.times).forEach(time => acc += time);
            return acc;
        }, 0);

        const idleDiff = idleTime - prevIdleTime;
        const totalDiff = totalTime - prevTotalTime;

        const utilization = ((totalDiff - idleDiff) / totalDiff) * 100;

        prevIdleTime = idleTime;
        prevTotalTime = totalTime;

        callback(utilization.toFixed(2));
    }, 1000);
}

client.login(process.env.TOKEN);
