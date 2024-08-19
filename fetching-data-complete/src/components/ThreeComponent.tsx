import { useState } from "react"


const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "joy",
          children: [
            {
              name: "fileY"
            },
            {
              name: "fileX",
              children: [
                {
                  name: "pedro"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "package.json"
    },
    {
      name: "index.html"
    }
  ]
}

type TEntry = {
  name: string
  children?: TEntry[]
}

function Entry({ entry, depth }: { entry: TEntry, depth: number }) {
  const [isExpandable, setIsExpandable] = useState(false)


  return (
    <div>
      <button onClick={() => { setIsExpandable(!isExpandable) }}>
        {entry.children && "+ "}
        {entry.name}
      </button>
      {isExpandable && (
        <div className="pl-3">
          {entry.children?.map((entry) => {
            return <Entry entry={entry} depth={depth + 1} />
          })}
        </div>

      )}
    </div>
  )
}



export default function ThreeComponent() {

  return (
    <div className="text-center">
      {files.children.map((entry) => {
        return <Entry entry={entry} depth={1} />
      })}
    </div>
  )
}
