import { useState } from "react"

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "axios",
          children: [
            {
              name: "fetch"
            }
          ]
        }
      ]
    },
    {
      name: "public"
    },
    {
      name: "package.json"
    }
  ]
}

type TEntry = {
  name: string
  children?: TEntry[]
}


function Entry({entry, depth}: {entry: TEntry, depth: number}) {
  const [isExpandable, setIsExpandable] = useState(false)


  return <li>
    <button onClick={()=> setIsExpandable(!isExpandable)}>
      {entry.name}
    </button>
    {entry.children && isExpandable && (
      <ul>
        <li>
          {entry.children?.map((entry => {
            return <Entry entry={entry} depth={depth + 1}></Entry>
          }))}
        </li>
      </ul>
    )}
  </li>

}


export default function FolderComponent() {

  return <ul>
    {files.children.map(entry => {
      return <Entry entry={entry} depth={1}></Entry>
    })}
  </ul>
}
