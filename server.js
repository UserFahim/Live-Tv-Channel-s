// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/switchChannel/:channel', (req, res) => {
    const channel = req.params.channel;

    let liveStreamUrl;

    switch (channel) {
        case 'channel1':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/somoy_tv_576/somoy_tv_576.m3u8?bitrate=1000000&channel=somoy_tv_576&gp_id=';
            break;
        case 'channel2':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/independent_576/independent_576.m3u8?bitrate=1000000&channel=independent_576&gp_id=';
            break;
        case 'channel3':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/nick_576/nick_576.m3u8?bitrate=1000000&channel=nick_576&gp_id=';
            break;
        case 'channel4':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/cartoon_network_sd_576/cartoon_network_sd_576.m3u8?bitrate=1000000&channel=cartoon_network_sd_576&gp_id=';
            break;
        case 'channel5':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_aath_576/sony_aath_576.m3u8?bitrate=1000000&channel=sony_aath_576&gp_id=';
            break;
        case 'channel6':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_max_576/sony_max_576.m3u8?bitrate=1000000&channel=sony_max_576&gp_id=';
            break;
        case 'channel7':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/quran_tv_576/quran_tv_576.m3u8?bitrate=1000000&channel=quran_tv_576&gp_id=';
            break;
        case 'channel8':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sunnah_tv_576/sunnah_tv_576.m3u8?bitrate=1000000&channel=sunnah_tv_576&gp_id=';
            break;
        case 'channel9':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/discovery_hd_576/discovery_hd_576.m3u8?bitrate=1000000&channel=discovery_hd_576&gp_id=';
            break;
        case 'channel10':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/zee_bangla_576/zee_bangla_576.m3u8?bitrate=1000000&channel=zee_bangla_576&gp_id=';
            break;
        case 'channel11':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/pogo_sd_576/pogo_sd_576.m3u8?bitrate=1000000&channel=pogo_sd_576&gp_id=';  // Replace with the actual URL for Channel 11
            break;
        case 'channel12':
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/sony_yay_576/sony_yay_576.m3u8?bitrate=1000000&channel=sony_yay_576&gp_id=';  // Replace with the actual URL for Channel 12
            break;
        default:
            liveStreamUrl = 'https://bldcmprod-cdn.toffeelive.com/cdn/live/slang/pogo_sd_576/pogo_sd_576.m3u8?bitrate=1000000&channel=pogo_sd_576&gp_id=';
    }

    res.json({ liveStreamUrl });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
