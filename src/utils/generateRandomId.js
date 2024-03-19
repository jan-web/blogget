import {v4 as uuidv4} from 'uuid';

// const generateRandomId = () => uuidv4();
// Math.random().toString(36).substring(2, 8) +
// Date.now().toString().substring(9);

export const assignId = obj => ({...obj, id: uuidv4()});

// export default generateRandomId;
