import * as fs from 'fs';
import Gameboy from 'serverboy';
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 6969 });
const buttons = {
    "A": Gameboy.KEYMAP.A,
    "B": Gameboy.KEYMAP.B,
    "R": Gameboy.KEYMAP.RIGHT,
    "L": Gameboy.KEYMAP.LEFT,
    "U": Gameboy.KEYMAP.DOWN,
    "D": Gameboy.KEYMAP.UP,
    "SL": Gameboy.KEYMAP.SELECT,
    "ST": Gameboy.KEYMAP.START
};
const roms = [
    'pokemon_emerald.gba',
    'pokemon_crystal.gbc',
    'doom_2.gba'
];
function loadGame(gb, game, sav) {
    game = game < 0 ? 0 : (game >= roms.length ? roms.length - 1 : game);
    var file_path = `./roms/${roms[game]}`;
    const rom = fs.readFileSync(file_path);
    if (sav)
        gb.loadRom(rom, sav);
    else
        gb.loadRom(rom);
}
wss.on('connection', async function connection(ws) {
    const gb = new Gameboy();
    loadGame(gb, 2);
    var interval_id2 = setInterval(() => {
        gb.doFrame();
    }, 1000 / 120);
    var interval_id1 = setInterval(() => {
        // resolution = {w: 160, h: 144}
        var pix = gb.getScreen();
        var str = "scrn" + Buffer.from(pix, 'ascii');
        ws.send(str);
        process.exit();
    }, 1000 / 30);
    ws.on('message', (data) => {
        var dat = data.toString();
        if (dat.length < 4)
            gb.pressKey(buttons[dat]);
        else {
            switch (dat.substring(0, 3)) {
                case 'save':
                    var str = 'save' + gb.getSaveData();
                    ws.send(str);
                    break;
                case 'load':
                    var strs = dat.split('|');
                    gb.loadGame(Number.parseInt(strs[1]), strs[2]);
                    break;
            }
        }
    });
    ws.on('close', async function disconnect() {
        clearInterval(interval_id1);
        clearInterval(interval_id2);
    });
});
//# sourceMappingURL=index.js.map