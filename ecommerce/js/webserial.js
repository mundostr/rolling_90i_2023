const PAYLOAD_SIZE = 11;

const connStatus = document.getElementById('status');
const teamsLaps = [
    document.getElementById('t1laps'),
    document.getElementById('t2laps'),
    document.getElementById('t3laps'),
]

const readSerial = async (port) => {
    let buffer = '';

    while (port.readable) {
        const reader = port.readable.getReader();

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const dataReceived = new TextDecoder().decode(value).trim();
                buffer += dataReceived;

                if (buffer.length >= PAYLOAD_SIZE) {
                    const fullData = buffer.split('|');
                    const command = fullData[0];
                    const data = fullData[1];

                    switch (command) {
                        case 'LAP':
                            const lapsData = data.split('-');
                            const team = +lapsData[0];
                            const currentLap = lapsData[1];
                            teamsLaps[team - 1].innerHTML = currentLap;
                            // console.log(lapsData);
                            break;
                        
                        default:
                    }
                    buffer = buffer.substring(PAYLOAD_SIZE);
                }
            }
        } catch (err) {
            console.error(err);
            connStatus.innerHTML = 'Error';
        } finally {
            reader.releaseLock();
        }
    }
};

const connectSerial = async () => {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    return port;
};

const startSerialCommunication = async() => {
    try {
        const port = await connectSerial();
        connStatus.innerHTML = 'Conectado';
        await readSerial(port);
    } catch (err) {
        console.error(err);
    }
}