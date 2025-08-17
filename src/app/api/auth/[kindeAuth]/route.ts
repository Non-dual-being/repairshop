import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";

export const GET = handleAuth();

/**
 * je kindeauth is dynamsich
 * dus overal op de plek in de url van kinde auth krijg je eem reuest paramater zoals: logout
 */