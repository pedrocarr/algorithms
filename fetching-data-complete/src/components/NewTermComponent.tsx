import { useState, useEffect } from "react";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Term {
  /** Unique identifier */
  id: number;
  /** Term name */
  name: string;
  /** Flag indicating whether term has child terms */
  hasChildren: boolean;
  /** Id of a parent term. If there is no parent, no id is set */
  parentId?: number;
}

const terms: Term[] = [
  {
    id: 1,
    name: "Customer",
    hasChildren: false,
  },
  {
    id: 2,
    name: "Department",
    hasChildren: false,
  },
  {
    id: 3,
    name: "Manufacturing",
    hasChildren: true,
  },
  {
    id: 4,
    name: "Work Order",
    hasChildren: false,
    parentId: 3,
  },
  {
    id: 5,
    name: "Manufacturing Location",
    hasChildren: true,
    parentId: 3,
  },
  {
    id: 6,
    name: "Manufacturing Location Capacity",
    hasChildren: false,
    parentId: 5,
  },
  {
    id: 7,
    name: "Manufacturing Location Cost Rate",
    hasChildren: false,
    parentId: 5,
  },
];

/**
 * Returns array of terms filtered by parent
 * If no parentId is set, returns terms without parents (first level of hierarchy)
 * @param parentId
 */
async function fetchTerms(parentId?: number) {
  await delay(2000); // mocking slow backend response
  return terms.filter((term) => term.parentId === parentId);
}



export default function App() {
  const [terms, setTerms] = useState<Term[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTerms()
        setTerms(response)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()

  }, [])

  return <ul>
    {terms.map((term) => {
      return <Term key={term.id} term={term} />
    })}
  </ul>
}

function Term({ term }: { term: Term }) {
  const [childTerms, setChildTerms] = useState<Term[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isExpandable, setIsExpandable] = useState(false)


  useEffect(() => {

      const fetchData = async () => {
        setIsLoading(true)
        if (term.hasChildren) {
          try {
            const response = await fetchTerms(term.id)
            setChildTerms(response)
          } catch (error) {
            console.error(error)
          } finally { setIsLoading(false) }
        }
      }
      fetchData()


  }, [term])

  return <li>
    <button onClick={() => setIsExpandable(!isExpandable)}>
      {term.name}
    </button>
    {isExpandable && (
      <ul>
        <li>
          {childTerms.map(childTerms => {
            return <Term key={childTerms.id} term={childTerms} />
          })}
        </li>
      </ul>

    )}
  </li>
}
