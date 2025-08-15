import { Header } from "@/components/Header"

export default async function RSLayout({
    children,

}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {   
                <Header />
            }
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    )
}

/**
 * dit is meteen deconstrueren van de children net zoals bij react
 * Dus ivp props: ( props: { children: React.Node})
 * React.ReactNode is alles wat react kan renderen
 * De notatie zoals het hier is equivalt aan is het type neerzetten zoals
 * type RSLayoutProps = {
 *      children: React.ReactNode;
 * } en dan props: RSLayoutProps en dan {children } = props
  */

/**
 * de @ is een verwijzing naar je src directory
 * De @ wordt ingesgteld in je tsconfig.json
 */