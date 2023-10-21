import { log } from 'console';
import * as fs from 'fs';
import Gameboy from 'serverboy';
import { WebSocketServer } from 'ws';

var file_path = "./roms/pokemon_emerald.gba";

const rom = fs.readFileSync(file_path);

const gb = new Gameboy();

gb.loadRom(rom);

const wss = new WebSocketServer({port: 6969});

wss.on('connection', async function connection(ws) {
    console.log("Someone logged in");

    setInterval(() => {
        gb.doFrame();
        ws.send(gb.getScreen());
    }, 1000/30);

    ws.on('message', (data)=>{
        console.log(data);
    })
});

wss.on('disconnect', async function disconnect() {
    console.log("Someone logged in");
});
