export default async function Template({
    children,

}: {
    children: React.ReactNode
}) {
    return (
        <div className="animate-appear">
            {children}   
        </div>
    )
}

/**
 * difference between template and layout is that layout render once during the first loading time
 * templace rerenders every time
 */