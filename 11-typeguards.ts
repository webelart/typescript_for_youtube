interface User {
    name: string;
}

interface Human extends User {
    speak(): void;
}

interface Cat extends User {
    meow(): void;
}

interface Dog extends User {
    bark(): void;
}

const serverData: User = {
    name: 'Mir',
    meow: () => {
        console.log('meow meow');
    }
}

function isCat(serverInfo: User): serverInfo is Cat {
    return typeof (serverInfo as Cat).meow === 'function';
}


if (isCat(serverData)) {
    serverData.meow();
}