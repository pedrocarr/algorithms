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


export default function ParentComponent() {
  const [terms, setTerms] = useState<Term[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    fetchTerms()
      .then(response => {
        setTerms(response)
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <div>Something went wrong. Try again!!!</div>
  }


  return (
    <>
      <ul>
        {isLoading && (
          <div>...is loading</div>
        )}
        {terms.map(term => {
          return <ChildComponent key={term.id} term={term} />
        })}
      </ul>
    </>
  )
}


function ChildComponent({ term }: { term: Term }) {
  const [childTerms, setChildTerms] = useState<Term[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { id, hasChildren } = term



  useEffect(() => {
    if (hasChildren) {
      setIsLoading(true)
      fetchTerms(id)
        .then(response => {
          setChildTerms(response)
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))

    }
  }, [id, hasChildren])


  return (
    <>
      <ul>
        {term.name}
        {isLoading && (<p>... is loading</p>)}
        <ul>
          {childTerms.map(childTerm => {
            return <ChildComponent key={childTerm.id} term={childTerm} />
          })}
        </ul>
      </ul>
    </>
  )
}
