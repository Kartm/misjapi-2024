import { load } from 'ts-dotenv';

const env = load({
    APP_ID : String,
    APP_SECRET  : String,
    SYSTEM_USER_TOKEN  : String,
    PAGE_ID  : String,
});

console.log(env)