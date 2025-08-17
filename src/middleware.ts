import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
    async function middleware(request: NextRequest){
        //console.log(request)
    }, {
        isReturnToCurrentPage: true,

    }
)

export const config = {
    matcher: [
            /*
     * Match all request paths except for the ones starting
     * with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - auth
     * - favicon.ico (favicon file)
     * - robots.txt
     * - images
     * - login
     * - homepage (represented with $ after beginning /)
     */
    '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|login|$).*)',

    ]
}

/**
 * functie en optie staan in de paramterlijst
 * het is geen object based paramter, losse paramter met de komma
 */

/**
 * de matcher kijkt naar welke router protected zijn en excludeerd de login, de home en andere routes die voor het publick beschikbaar zijn
 */

/**(
  (?!                           # Negative lookahead: kijk vooruit en ga alleen verder als het GEEN van de volgende is…
      api                       # niet "api"
    | _next/static              # niet "_next/static"
    | _next/image               # niet "_next/image"
    | auth                      # niet "auth"
    | favicon\.ico              # niet "favicon.ico"
    | robots\.txt               # niet "robots.txt"
    | images                    # niet "images"
    | login                     # niet "login"
    | home                      # niet "home"
    | $                         # en ook niet het einde van de string
  )
  .*                            # als de lookahead geslaagd is, match dan de rest van de regel (alles)
)                               # einde capturing group

die laatste laat toe dat je naar je root kan navigeren dus je /

*/