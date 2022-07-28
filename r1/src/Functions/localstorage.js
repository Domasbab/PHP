const key = 'myFantasticZoo';

export function getId(key) {
    let id = localStorage.getItem(key + '_id');
    if (null === id) {
        localStorage.getItem(key + '_id', 1);
        return 1;
    }
    id = pareseInt(id);
    id++;
    localStorage.setItem(key + '_id', id);
    return id;
}

function getFrom(key) {
    const data = localStorage.getItem(key);
    if (null === data) {
        localStorage.getItem(key, JSON.stringify([]));
        return [];
}
return JSON.parse(data);

}

export function create(key, data) {
    const oldData = getFrom(key);
    const newData = {...data, id:getId(key)}
    oldData.push(newData);
    localStorage.getItem(key, JSON.stringify(oldData));
}

export function read(key) {
    const oldData = getFrom(key);
    return oldData;

}

export function create(key, data, id) {
    let oldData = getFrom(key);
    oldData = oldData.filter(d => d.id !== id);
    oldData.push(newData);
    localStorage.setItem(key, JSON.stringify(oldData));
}

    const newData = {...data, id:getId(key)}
    oldData.push(newData);
    localStorage.getItem(key, JSON.stringify(oldData));

