import Image from "next/image"

export const metadata = { 
    title: "Page Not Found"
}
 
export default function NotFound() {
  return (
    <div className="px-2 py-5 w-full">
      <div className="flex flex-col gap-y-4 items-center justify-center self-center">
        <h2 className="text-2xl">Page Not Found</h2>
          <Image
              className="m-0 rounded-xl"
              src="/images/not-found.png"
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, 300px"
              alt="Page Not Found"
              priority={true}
              title="Page Not Found"
          />
      </div>
    </div>
  )
}

/**
 * priority ze de afbeelding op hoge laad prioriteit zodat het snen laad
 * gebeurt via een preload prop in de head
 * sizes is een atrribuut voor verschillende schermbreedtes
 * bij kleine schermen 100 viewportt anders 300px
 */